"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface AdminAuthContextType {
  adminSecret: string;
  isAuthenticated: boolean;
  isChecking: boolean;
  error: string | null;
  login: (secret: string) => Promise<boolean>;
  logout: () => void;
}

export const AdminAuthContext = createContext<AdminAuthContextType>({
  adminSecret: "",
  isAuthenticated: false,
  isChecking: true,
  error: null,
  login: async () => false,
  logout: () => {},
});

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [adminSecret, setAdminSecret] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("scaleerp_admin_secret");
    if (saved) {
      setAdminSecret(saved);
      // Validate secret with backend
      fetch("/api/v1/admin/keys", {
        headers: { "x-admin-secret": saved },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setIsAuthenticated(true);
          } else {
            sessionStorage.removeItem("scaleerp_admin_secret");
            setIsAuthenticated(false);
            setError(data.message || "Session expired. Please log in again.");
          }
        })
        .catch(() => {
          // If offline or network issue, trust valid session cache
          setIsAuthenticated(true);
        })
        .finally(() => {
          setIsChecking(false);
        });
    } else {
      setIsChecking(false);
    }
  }, []);

  const login = async (secret: string): Promise<boolean> => {
    setError(null);
    try {
      const res = await fetch("/api/v1/admin/keys", {
        headers: { "x-admin-secret": secret },
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setAdminSecret(secret);
        setIsAuthenticated(true);
        sessionStorage.setItem("scaleerp_admin_secret", secret);
        return true;
      } else {
        setError(data.message || "Invalid administrator secret key.");
        setIsAuthenticated(false);
        sessionStorage.removeItem("scaleerp_admin_secret");
        return false;
      }
    } catch {
      setError("Network error validating administrator secret.");
      setIsAuthenticated(false);
      return false;
    }
  };

  const logout = () => {
    sessionStorage.removeItem("scaleerp_admin_secret");
    setAdminSecret("");
    setIsAuthenticated(false);
    setError(null);
  };

  return (
    <AdminAuthContext.Provider
      value={{
        adminSecret,
        isAuthenticated,
        isChecking,
        error,
        login,
        logout,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export const useAdminAuth = () => useContext(AdminAuthContext);
