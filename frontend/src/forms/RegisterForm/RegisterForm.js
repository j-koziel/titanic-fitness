import "./RegisterForm.css";

function RegisterForm({ formChange }) {
  return (
    <div className="auth-container register">
      <form className="login-form">
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
          />
        </div>
        <div className="input">
          <label htmlFor="first-name-input">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            id="first-name-input"
            required
            autoFocus
          />
        </div>
        <div className="input">
          <label htmlFor="surname-input">Surname</label>
          <input
            type="text"
            placeholder="Surname"
            id="surname-input"
            required
            autoFocus
          />
        </div>
        <div className="input">
          <label htmlFor="age-input">Age</label>
          <input
            type="number"
            placeholder="Age"
            id="Age-input"
            required
            autoFocus
          />
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
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
