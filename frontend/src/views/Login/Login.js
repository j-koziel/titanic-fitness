import "./Login.css";
import LoginForm from "../../forms/LoginForm/LoginForm";
import RegisterForm from "../../forms/RegisterForm/RegisterForm";
import { useState } from "react";

function Login() {
  const [formState, setFormState] = useState("login");

  function changeForm() {
    if (formState === "register") {
      setFormState("login");
    } else {
      setFormState("register");
    }
  }

  return (
    <div className="login-page-container">
      {formState === "login" ? (
        <LoginForm formChange={changeForm} />
      ) : (
        <RegisterForm formChange={changeForm} />
      )}
    </div>
  );
}

export default Login;
