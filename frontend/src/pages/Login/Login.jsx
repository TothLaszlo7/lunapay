import "./Login.css";
import logo from "../../assets/images/logo/lunapay-logo-no-bg.png";

export default function Login() {
  return (
    <div className="login-container">
      <img src={logo} alt="LunaPay logo" className="login-logo" />

      <button className="login-button">Sign in with e-mail</button>
      <button className="login-button">Sign in with Apple</button>
      <button className="login-button">Sign in with Google</button>
      <button className="login-button">Sign up</button>
    </div>
  );
}
