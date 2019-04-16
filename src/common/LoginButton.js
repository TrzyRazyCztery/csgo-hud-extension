import React from "react";
import "./LoginButton.scss";

const LoginButton = () => (
  <a href={`http://localhost:3037/auth/steam`} className="login-button">
    LOGIN WITH STEAM
  </a>
);

export default LoginButton;
