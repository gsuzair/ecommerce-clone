import { useState } from "react";
import Button from "../../components/button/ButtonCustom";
import TextField from "../../components/textField/textField";
import { Link } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("button pressed");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex w-[900px] h-[500px] rounded-2xl shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center bg-gray-800 w-1/2 text-white p-6">
          <h1 className="text-3xl font-semibold mb-6 text-center">
            Welcome Back
          </h1>
          <Link to="/signin">
            <Button
              type="button"
              className="bg-white text-gray-900 font-medium rounded-full px-6 py-2 text-sm hover:bg-gray-200 transition"
            >
              Sign In
            </Button>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center justify-center bg-white w-1/2 p-6">
          <form
            className="flex flex-col items-center w-full max-w-md"
            onSubmit={handleSubmit}
          >
            <h1 className="text-4xl font-semibold text-gray-900 mb-8 text-center">
              Create Account
            </h1>

            <TextField
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              className="w-full p-3 mb-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700"
            />
            <TextField
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              className="w-full p-3 mb-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700"
            />
            <TextField
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              className="w-full p-3 mb-4 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700"
            />
            <TextField
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              className="w-full p-3 mb-6 bg-gray-100 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700"
            />

            <Button
              type="submit"
              className="bg-gray-800 text-white w-full py-2.5 mt-3 rounded-lg font-medium hover:bg-gray-700 transition"
            >
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

