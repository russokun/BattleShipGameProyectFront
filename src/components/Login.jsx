import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../Redux/actions/AuthActions";

const LoginComponent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessages, setErrorMessages] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Iniciando sesión con:", formData);
    const user = {
      email: formData.email,
      password: formData.password,
    };
    if (!user.email) {
      setErrorMessages({ email: "Email is required." });
      return;
    }
    if (!user.password) {
      setErrorMessages({ password: "Password is required." });
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        user
      );
      let token = response.data;
      console.log(response);
      const responseCurrent = await axios.get(
        "http://localhost:8080/api/auth/current",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      let account = responseCurrent.data;
      account.token = token;
      alert("Session logged in successfully!");
      dispatch(login(account));
      navigate("/mm");
    } catch (error) {
      console.log(error.response.data)
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center self-center min-h-screen"
      style={{
        backgroundImage: "url('../world-warships.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-center items-center self-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 border-2 p-4 lg:p-8 m-4 md:m-8 lg:m-12 w-full max-w-md md:max-w-lg lg:max-w-xl"
          style={{ backdropFilter: "blur(8px)" }}
        >
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              maxLength={50}
              placeholder="Enter your email"
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {errorMessages.email && (
            <p className="text-red-500">{errorMessages.email}</p>
          )}
          <div className="flex flex-col relative">
            <label htmlFor="password" className="text-white">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={formData.password}
              onChange={handleChange}
              maxLength={50}
              placeholder="Enter your password"
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            />
            <img
              src={showPassword ? "/ojoAbierto.png" : "/ojoCerrado.png"}
              alt="Toggle Password Visibility"
              className="absolute right-1 top-6 w-[40px] h-[40px] cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          </div>
          {errorMessages.password && (
            <p className="text-red-500">{errorMessages.password}</p>
          )}
          <div className="flex justify-center">
            <Button
              auto
              flat
              className="hover:bg-gray-300 hover:text-black bg-blue-500 text-white"
              type="submit"
            >
              Login
            </Button>
          </div>
          <p
            className="text-center text-white mt-4 hover:underline hover:text-blue-500 cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Don't have an account yet?
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
