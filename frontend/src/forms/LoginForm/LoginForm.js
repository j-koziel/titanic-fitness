import "./LoginForm.css";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../components/AuthContext";
import Error from "../../components/Error/Error";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm({ formChange }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const login = (e) => {
    e.preventDefault();
    const postData = { username, password };

    axios
      .post("http://localhost:8000/api/v1/users", postData)
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/profile");
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <div className="auth-container">
      <form className="login-form" onSubmit={login}>
        <div className="form-header">
          <h2>Login</h2>
          <p>
            Don't have an account? <span onClick={formChange}>Register</span>
          </p>
        </div>
        <div className="input">
          <label htmlFor="username-input">Username</label>
          <input
            type="text"
            placeholder="Username"
            id="username-input"
            required
            autoFocus
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="input">
          <label htmlFor="password-input">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password-input"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </div>

        <button className="submit-button" type="submit">
          Log in
        </button>
      </form>
      {error ? <Error message={error.message} /> : null}
    </div>
  );
}

export default LoginForm;
