import React, { useState } from "react";
import "./Login.scss";
import Input from "../../Components/Input/Input";
import Email from "../../Assets/images/emailicon.png";
import lock from "../../Assets/images/lock.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="Input_outer">
      <div className="Input_inner">
        <div className="Input_inner_content">
          <Input
            type="email"
            placeholder="test@test.com"
            required={true}
            value={email}
            id="email-input"
            onChange={(e) => setEmail(e.target.value)}
            img={Email}
            label="Email Address"
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Enter your password"
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            img={lock}
            label="Password"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
