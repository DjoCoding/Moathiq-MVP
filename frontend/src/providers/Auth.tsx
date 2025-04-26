import React, { createContext, useContext, useState } from "react";

interface AuthContextT {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const authContext = createContext<AuthContextT>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(authContext);

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthLayoutProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <authContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
