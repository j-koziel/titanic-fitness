import "./RegisterForm.css";
import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../../components/AuthContext";
import { useNavigate } from "react-router-dom";
import Error from "../../components/Error/Error";

function RegisterForm({ formChange }) {
  const [error, setError] = useState(null);
  const [newUser, setNewUser] = useState({});
  const navigate = useNavigate();

  const { setUser } = useContext(AuthContext);

  const register = (e) => {
    e.preventDefault();
    const postData = newUser;

    axios
      .post("http://10.50.40.206:8000/api/v1/users", postData)
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
    <div className="auth-container register">
      <form className="login-form" onSubmit={(e) => register(e)}>
        <div className="form-header">
          <h2>Register</h2>
          <p>
            Already have an account? <span onClick={formChange}>Log in</span>
          </p>
        </div>
        <div className="input">
          <label htmlFor="email-input">Email</label>
          <input
            type="text"
            placeholder="Email"
            id="email-input"
            required
            autoFocus
            onChange={(e) => {
              setNewUser({ ...newUser, email: e.target.value });
            }}
          />
        </div>
        <div className="input">
          <label htmlFor="first-name-input">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            id="first-name-input"
            required
            onChange={(e) => {
              setNewUser({ ...newUser, firstName: e.target.value });
            }}
          />
        </div>
        <div className="input">
          <label htmlFor="surname-input">Surname</label>
          <input
            type="text"
            placeholder="Surname"
            id="surname-input"
            required
            onChange={(e) => {
              setNewUser({ ...newUser, lastName: e.target.value });
            }}
          />
        </div>
        <div className="input">
          <label htmlFor="dob-input">Date Of Birth</label>
          <input
            type="date"
            id="dob-input"
            required
            onChange={(e) => {
              setNewUser({ ...newUser, dob: e.target.value });
            }}
          />
        </div>
        <div className="input">
          <label htmlFor="username-input">Username</label>
          <input
            type="text"
            placeholder="Username"
            id="username-input"
            required
            onChange={(e) => {
              setNewUser({ ...newUser, username: e.target.value });
            }}
          />
        </div>
        <div className="input">
          <label htmlFor="password-input">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password-input"
            required
            onChange={(e) => {
              setNewUser({ ...newUser, password: e.target.value });
            }}
          />
        </div>

        <button className="submit-button" type="submit">
          Register
        </button>
      </form>
      {error ? <Error message={error.message} /> : null}
    </div>
  );
}

export default RegisterForm;
