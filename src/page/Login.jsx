// LoginPage.js
import React from "react";
import { useContext } from "react";
import LoginForm from "../component/FormLogin";
import { AuthProvider } from "../contex/AuthContext";
import { AuthContext } from "../contex/AuthContext";
import { Navigate } from "react-router-dom";
import { Stack } from "react-bootstrap";

const LoginPage = () => {
  return (
    <div>
      <Stack gap={3}>
        <AuthProvider>
          <LoginForm />
        </AuthProvider>
      </Stack>
    </div>
  );
};

export default LoginPage;
