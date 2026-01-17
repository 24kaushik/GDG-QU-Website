import React from "react";
import LoginComponent from "../Components/auth/LoginComponent";
import { useGoogleLogin } from "@react-oauth/google";

const Login = () => {
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/google`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: codeResponse.code }),
          credentials: "include",
        }
      );
      const data = await response.json();
      console.log("Server Response:", data);
    },
    flow: "auth-code",
  });

  const handleGithubLogin = () => {};

  return (
    <div>
      <LoginComponent
        handleGoogleLogin={handleGoogleLogin}
        handleGithubLogin={handleGithubLogin}
      />
    </div>
  );
};

export default Login;
