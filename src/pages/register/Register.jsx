import '../login/login.css';

export default function Register() {
  return (
    <div className="register">
      <div className="containers">
        <form>
          <h1>Sign Up</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button className="registerButton">Sign Up</button>
          <span>
            New to D2YMOVIE? <b> Sign in now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
