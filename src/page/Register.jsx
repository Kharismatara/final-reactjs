// RegisterPage.js
import React from "react";
import RegisterForm from "../component/FormRegister";
import { AuthProvider } from "../contex/AuthContext";
import { Stack } from "react-bootstrap";

const RegisterPage = () => {
  return (
    <div>
      <Stack>
        <AuthProvider>
          <RegisterForm />
        </AuthProvider>
      </Stack>
    </div>
  );
};

export default RegisterPage;
