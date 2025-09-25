import { useState } from "react";
import "./signUp.css";

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});

	const handleChange = () => {
		setData()
	};

	const handleSubmit = async () => {
		
	};

	return (
		<div className="signup_container">
			<div className='signup_form_container'>
				<div className='left'>
					<h1>Welcome Back</h1>
					
						<button type="button" className='white_btn'>
							Sign in
						</button>
					
				</div>
				<div className='right'>
					<form className='form_container' onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className='input'
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className='input'
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className='input'
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className='input'
						/>
						<button type="submit" className='green_btn'>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;