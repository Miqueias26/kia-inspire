import "../styles/createaccount.css";
import Kialogos from "../assets/img/Logo.png";
import { Link } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";

function Account() {
  return (
    <div>
      <div className="account">
        <div className="account-content">
          <div className="left">
            <div className="return">
              <Link to="/" className="home">
                <IoArrowBackCircleOutline /> Return
              </Link>
            </div>
            <div className="text">
              <h3>Create account</h3>
            </div>
            <div className="form">
              <form action="">
                <input type="text" name="" id="" placeholder="Name" />
                <input type="email" name="" id="" placeholder="Email " />

                <br />
                <input type="password" name="" id="" placeholder="Password " />
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Confirm password "
                />
                <br />

                <input type="submit" className="submit" value="Register" />
              </form>
            </div>
            <div className="loginlink">
              <Link to="/login" className="singinlink">
                <span className="singintext">{"Already have an account?"}</span>{" "}
                Login
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
    </div>
  );
}

export default Account;
