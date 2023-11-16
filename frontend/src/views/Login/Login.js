import "./Login.css";
import LoginForm from "../../forms/LoginForm/LoginForm";
import RegisterForm from "../../forms/RegisterForm/RegisterForm";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../components/AuthContext";
import { useNavigate, useSearchParams } from "react-router-dom";

function Login() {
  const [formState, setFormState] = useState("login");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const paramFormState = searchParams.get("formState");

    // Only update the formState if it's different from the current state
    if (paramFormState && paramFormState !== formState) {
      setFormState(paramFormState);
    }

    window.scrollTo(0, 0);

    if (user) {
      navigate("/profile");
    }
  }, [searchParams, formState, navigate, user]);

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
