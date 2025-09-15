import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'teacher' | 'student';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  setUserRole: (role: 'admin' | 'teacher' | 'student') => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo credentials
const demoCredentials = {
  'admin@nextingen.com': { password: 'admin123', role: 'admin' as const, name: 'Admin User' },
  'teacher@nextingen.com': { password: 'teacher123', role: 'teacher' as const, name: 'Teacher User' },
  'student@nextingen.com': { password: 'student123', role: 'student' as const, name: 'Student User' }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    const credential = demoCredentials[email as keyof typeof demoCredentials];
    
    if (credential && credential.password === password) {
      setUser({
        id: Math.random().toString(36),
        email,
        name: credential.name,
        role: credential.role
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const setUserRole = (role: 'admin' | 'teacher' | 'student') => {
    if (user) {
      setUser({ ...user, role });
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isAuthenticated: !!user,
      setUserRole
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}