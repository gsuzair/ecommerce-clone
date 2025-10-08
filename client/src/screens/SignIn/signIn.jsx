import { useState } from "react";
import Button from "../../components/button/button";
import TextField from "../../components/textField/textField";

import "./SignIn.css";

const SignIn = () => {
  const [data, setData] = useState({
   
    email: "",
    password: "",
  });

  const handleChange = () => {
    setData();
  };

  const handleSubmit = async () => {
    console.log("button pressed");
  };

  return (
    <div className="SignIn_container">
      <div className="SignIn_form_container">
        <div className="left">
          <h1>Welcome Back</h1>
          <Button type="submit" className="white_btn" onClick={handleSubmit}>
            Sign In
          </Button>

          {/* <button type="button" className='white_btn'>
							Sign in
						</button> */}
        </div>
        <div className="right">
          <form className="form_container" onSubmit={handleSubmit}>
            <h1 className="headerBlack">Create Account</h1>
            
          
			
        
            <TextField
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              className="input"
            />
            <TextField
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              className="input"
            />
            <Button type="submit" className="green_btn">
              Sign In
            </Button>
            {/* <button type="submit" className='green_btn'>
							Sign Up
						</button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
