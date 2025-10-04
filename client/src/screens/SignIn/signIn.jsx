import { useState } from "react";
import Button from "../../components/button/ButtonCustom";
import TextField from "../../components/textField/textField";
import { useNavigate } from "react-router-dom";

import "./signIn.css";

/*function SignIn() {
  const navigate = useNavigate();
}*/
const SignIn = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = () => {
    setData();
  };

  const handleSubmit = async () => {
    console.log("button pressed");
  };

  return (
    <div className="signin_container">
      <div className="signin_form_container">
        <div className="left">
          <h1>Create Account</h1>
          <Button type="submit" className="white_btn" onClick={() => navigate("/Signup")}>
            Sign Up
          </Button>

          {/* <button type="button" className='white_btn'>
							Sign in
						</button> */}
        </div>
        <div className="right">
          <form className="form_container" onSubmit={handleSubmit}>
            <h1 className="headerBlack">Welcome Back</h1>
            
			
        
            <TextField
              type="email"
              placeholder="Enter your Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              className="input"
            />
            <TextField
              type="password"
              placeholder="Enter your Password"
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