import React, { useState, useContext, createContext } from "react";
import { loginAuth } from "./apigw";

const authContext: React.Context<any> = createContext({});

export interface IAuthorization {
  ["Content-Type"]: string;
  Authorization: string;
}

// Hook for child components to get the auth object ...
export const useAuth = () => {
  return useContext(authContext);
};

export function ProvideAuth({ children }: { children: React.ReactElement }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function useAuthSignout() {
  const auth = useProvideAuth();
  return auth.signout;
}

export function useAuthUserInfo() {
  const auth = useAuth();
  return auth;
}

export function useAuthToken() {
  const auth = useAuth();
  const token = auth.user ? auth.user.body.token : "";
  return { token: "Bearer " + token };
}
export function useAuthorizedHeader(): Record<string, string> {
  const auth = useAuth();
  const token = auth.user ? auth.user.body.token : "";
  return {
    "Content-Type": "application/json;charset=utf-8",
    Authorization: "Bearer " + token,
  };
}

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = async (email: string, password: string) => {
    const data = await loginAuth(email, password);
    setUser(data);
    return data;
  };

  const signout = () => {
    return setUser(null);
  };

  // Return the user object and auth methods
  return {
    user,
    signin,
    signout,
  };
}
