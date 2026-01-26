"use client";

/**
 * MOCK AUTHENTICATION CONTEXT
 * This implementation simulates a real JWT authentication flow to future proof the frontend.
 * 1. Async Login: Returns a Promise to simulate network requests.
 * 2. Artificial Delay: Uses setTimeout to mimic server latency.
 * 3. Token Storage: Simulates JWT storage in localStorage.
 * 4. Error Handling: Simulates credential validation failures.
 * When the backend is ready, replace the setTimeout block in `login` with a real `fetch` call.
 */

import React, { createContext, useContext, useState, useEffect } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("gdc_token");
    const storedUser = localStorage.getItem("gdc_user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (password === "fail") {
          setError("Invalid credentials (simulated)");
          setIsLoading(false);
          reject(new Error("Invalid credentials"));
          return;
        }

        const mockUser = {
          id: "user_123",
          name: "Oluwabukunmi",
          email,
        };
        const mockToken = "mock-jwt-token-xyz-123";

        setUser(mockUser);
        setToken(mockToken);

        localStorage.setItem("gdc_user", JSON.stringify(mockUser));
        localStorage.setItem("gdc_token", mockToken);

        setIsLoading(false);
        resolve();
      }, 1500);
    });
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("gdc_user");
    localStorage.removeItem("gdc_token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isAuthenticated: !!token,
        isLoading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
