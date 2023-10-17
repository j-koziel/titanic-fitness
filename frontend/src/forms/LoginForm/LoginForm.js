import "./LoginForm.css";

function LoginForm({ formChange }) {
  return (
    <div className="auth-container">
      <form className="login-form">
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
          />
        </div>
        <div className="input">
          <label htmlFor="password-input">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password-input"
            required
          />
        </div>

        <button className="submit-button" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
