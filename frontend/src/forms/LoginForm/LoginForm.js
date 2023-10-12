import "./LoginForm.css";

function LoginForm() {
  return (
    <div className="auth-container">
      <form className="login-form">
        <div className="form-header">
          <h2>Login</h2>
          <p>Don't have an account? Register</p>
        </div>
        <div className="input">
          <label htmlFor="username-input">Username</label>
          <input
            type="text"
            placeholder="Username"
            id="username-input"
            required
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

        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default LoginForm;
