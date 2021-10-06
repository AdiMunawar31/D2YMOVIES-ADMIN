import { useContext, useState } from 'react';
import { login } from '../../context/authContext/ApiCall';
import { AuthContext } from '../../context/authContext/AuthContext';
import './login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <div className="login">
      <div className="containers">
        <form className="form-login">
          <h1>Sign In</h1>
          <input className="login-input" type="email" placeholder="Email or phone number" onChange={(e) => setEmail(e.target.value)} />
          <input className="login-input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button className="loginButton" onClick={handleLogin} disabled={isFetching}>
            Sign In
          </button>
          <span className="text">
            New to D2YMOVIES? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
