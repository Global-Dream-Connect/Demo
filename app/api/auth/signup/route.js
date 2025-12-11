import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

export async function POST(request) {
  try {
    const { email, password, name } = await request.json();

    // Validation
    if (!email || !password || !name) {
      return Response.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const cleanEmail = email.toLowerCase().trim();
    const cleanName = name.trim();
    const cleanPassword = password.trim();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return Response.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (cleanName.length < 2) {
      return Response.json(
        { success: false, error: "Name must be at least 2 characters" },
        { status: 400 }
      );
    }

    if (cleanPassword.length < 8) {
      return Response.json(
        { success: false, error: "Password must be at least 8 characters" },
        { status: 400 }
      );
    }

    // Hash password
    const salt = process.env.PASSWORD_SALT || "your-secret-salt";
    const hashedPassword = crypto
      .createHash("sha256")
      .update(cleanPassword + salt)
      .digest("hex");

    // Load or create users
    const dataDir = path.join(process.cwd(), "database");
    const usersFile = path.join(dataDir, "users.json");

    await fs.mkdir(dataDir, { recursive: true });

    let users = [];
    try {
      const fileContent = await fs.readFile(usersFile, "utf8");
      users = JSON.parse(fileContent);
    } catch (error) {
      // Start fresh if no file exists
    }

    // Check for duplicate email
    const emailExists = users.some(
      (user) => user.email && user.email.toLowerCase() === cleanEmail
    );

    if (emailExists) {
      return Response.json(
        { success: false, error: "Email already registered" },
        { status: 409 }
      );
    }

    // Create new user
    const newUser = {
      id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: cleanName,
      email: cleanEmail,
      passwordHash: hashedPassword,
      createdAt: new Date().toISOString(),
      status: "active",
    };

    users.push(newUser);
    await fs.writeFile(usersFile, JSON.stringify(users, null, 2));

    return Response.json(
      {
        success: true,
        message: "Account created successfully!",
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: "Could not create account. Please try again.",
      },
      { status: 500 }
    );
  }
}
