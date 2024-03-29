import React, {useState } from "react";
import "./Login.scss";
import TopBar from "../../Components/TopBar/TopBar";
import ProfileUpload from "../../Components/ProfileUpload/ProfileUpload";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import EmailIcon from "../../Assets/images/emailicon.png";
import LockIcon from "../../Assets/images/lock.png";
import UseInnerWidth from "../../Hooks/useInnerWidth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleButtonClick = (e) => {
    e.preventDefault();
    const passwordRegExp = new RegExp(
      "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$"
    );
    const emailRegExp = new RegExp(
      "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}"
    );
    if (!emailRegExp.test(email) || email === "") {
      setEmailError("Please Enter a valid email!");
      return;
    }
    setError("");
    setEmailError("");
    if (!passwordRegExp.test(password)) {
      if (!/(?=.*[A-Z])/.test(password)) {
        setError("Password must contain at least one uppercase letter.");
      } else if (!/(?=.*[a-z])/.test(password)) {
        setError("Password must contain at least one lowercase letter.");
      } else if (!/(?=.*\d)/.test(password)) {
        setError("Password must contain at least one digit.");
      } else if (!/(?=.*[@$!%*#?& ])/.test(password)) {
        setError("Password must contain at least one special character.");
      } else if (password.length < 8) {
        setError("Password must be at least 8 characters long.");
      } else {
        setError("");
      }

      return;
    }
  };
  const InnerWidth = UseInnerWidth();
  return (
    <>
      <div className="login_Outer">
        <div className="Login_Topbar_container">
          <TopBar />
        </div>
        <div className="Login_Inner_Container">
          <div className="Login_Inner">
            <div className="Login_ProfileUpload">
              <ProfileUpload />
            </div>
            <div className="Login_Inner_content">
              <div className="Login_title">Login</div>
              <div className="Login_Subtitle">Enter your details to login.</div>
            </div>
            <div className="Login_inner_input">
              <form action="Post" className="Login_Form">
                <div className="Login_input_email">
                  <Input
                    type="email"
                    placeholder="test@test.com"
                    label="Email Address"
                    required={true}
                    disabled={false}
                    img={EmailIcon}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="Error">{emailError}</div>

                <div className="Login_input_password">
                  <Input
                    type="Password"
                    placeholder="Enter your password"
                    label="Password"
                    required={true}
                    disabled={false}
                    img={LockIcon}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="Error">{error}</div>
                <div className="Login_form_button">
                  <Button
                    type="submit"
                    text="Login"
                    bgColor="var(--green)"
                    disabled={false}
                    color="var(--black)"
                    fontfamily="Inter-SemiBold"
                    height="2.5rem"
                    border="none"
                    width="100%"
                    onClick={handleButtonClick}
                    padding={
                      InnerWidth > 1800 ? "2.5rem 2.5rem" : "0.5rem 0.5rem"
                    }
                  />
                </div>
              </form>
              <div className="Login_SignUp">
                Does not have an account? &nbsp;
                <a href="/" className="Login_Signup_link">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="Footer">© 2024 Demo login </div>
      </div>
    </>
  );
}

export default Login;
