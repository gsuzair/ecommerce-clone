import { useState } from "react";
import Button from "../../components/button/button";
import TextField from "../../components/textField/textField";

import "./signUp.css";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
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
    <div className="signup_container">
      <div className="signup_form_container">
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
            <h1>Faizan Chutiya ha</h1>
            <TextField
              type="text"
              placeholder="First Name"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
              className="input"
            />
            {/* <input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className='input'
						/> */}
			<TextField
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
              className="input"
            />
        
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
              Sign Up
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

export default Signup;
