import "./Login.css";
import LoginForm from "../../forms/LoginForm/LoginForm";
import RegisterForm from "../../forms/RegisterForm/RegisterForm";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function Login() {
  const [formState, setFormState] = useState("login");
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(setSearchParams);

  useEffect(() => {
    const paramFormState = searchParams.get("formState");

    // Only update the formState if it's different from the current state
    if (paramFormState && paramFormState !== formState) {
      setFormState(paramFormState);
    }

    window.scrollTo(0, 0);
  }, [searchParams, formState]);

  function changeForm() {
    const paramFormState = searchParams.get("formState");

    if (paramFormState === "register") {
      searchParams.set("formState", "login");
      setFormState(searchParams.get("formState"));
    } else {
      searchParams.set("formState", "register");
      setFormState(searchParams.get("formState"));
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
