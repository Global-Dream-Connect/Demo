// app/api/auth/login/route.js
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Validation
    if (!email || !password) {
      return Response.json(
        { success: false, error: "Email and password are required" },
        { status: 400 }
      );
    }

    const cleanEmail = email.toLowerCase().trim();
    const cleanPassword = password.trim();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return Response.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Load users
    const dataDir = path.join(process.cwd(), "database");
    const usersFile = path.join(dataDir, "users.json");

    let users = [];
    try {
      const fileContent = await fs.readFile(usersFile, "utf8");
      users = JSON.parse(fileContent);
    } catch (error) {
      return Response.json(
        { success: false, error: "No users found. Please sign up first." },
        { status: 404 }
      );
    }

    // Find user
    const user = users.find(
      (user) => user.email && user.email.toLowerCase() === cleanEmail
    );

    if (!user) {
      return Response.json(
        { success: false, error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Verify password
    const salt = process.env.PASSWORD_SALT || "your-secret-salt";
    const hashedPassword = crypto
      .createHash("sha256")
      .update(cleanPassword + salt)
      .digest("hex");

    if (user.passwordHash !== hashedPassword) {
      return Response.json(
        { success: false, error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Update last login
    user.lastLogin = new Date().toISOString();
    await fs.writeFile(usersFile, JSON.stringify(users, null, 2));

    // Create response
    const safeUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      lastLogin: user.lastLogin,
    };

    const response = new Response(null, {
      status: 302,
      headers: {
        Location: "/",
        "Set-Cookie": `auth_token=mock_token_${Date.now()}_${
          user.id
        }; Path=/; HttpOnly; Max-Age=86400`,
      },
    });

    return response;
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: "Login failed. Please try again.",
      },
      { status: 500 }
    );
  }
}
