import "../styles/Login.css";
import Kialogos from "../assets/img/Logo.png";
import { Link } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";

function Login() {
  return (
    <div className="login">
      <div className="login-content">
        <div className="left">
          <div className="return">
            <Link to="/" className="home">
              <IoArrowBackCircleOutline /> Return
            </Link>
          </div>
          <div className="text">
            <h3>Login</h3>
          </div>
          <div className="form">
            <form action="">
              <input type="text" name="" id="" placeholder="Email " />
              <br />
              <input type="password" name="" id="" placeholder="Password " />
              <br />
              <Link to="/recoverypassword" className="forgot">
                Forgot the password?
              </Link>
              <br />
              <input type="submit" className="submit" value="Login" />
            </form>
          </div>
          <div className="create-account">
            <Link to="/createaccount" className="singuplink">
              <span className="singuptext">{"Don't have an account?"}</span>{" "}
              Sing Up
            </Link>
          </div>
        </div>

        <div className="right">
          <div className="brand">
            <img src={Kialogos} alt="image kia logo" />
            <p>Kia Moovment that Inspires</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
