import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterComponent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("register with:", formData);

    const validateEmail = (email) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    const validatePassword = (password) => {
      const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return re.test(password);
    }

    const user = {
      fName: formData.firstName,
      lName: formData.lastName,
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    const newErrors = {};

    if (!user.fName) {
      newErrors.fName = "First name is required.";
    }

    if (!user.lName) {
      newErrors.lName = "Last name is required.";
    }

    if (!user.username) {
      newErrors.username = "Username is required.";
    }

    if (!user.email) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(user.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!user.password) {
      newErrors.password = "Password is required.";
    } else if (!validatePassword(user.password)) {
      newErrors.password = "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrorMessages(newErrors);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        user
      );
      if (response.status === 201) {
        console.log("Usuario registrado exitosamente.");
        navigate("/login");
      }
    } catch (error) {
      setErrorMessages(error.response.data);
      console.log(error.response.data);
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
          className="space-y-4 border-2 p-4 md:p-8 lg:p-12 m-4 md:m-8 lg:m-12 w-full max-w-md md:max-w-lg lg:max-w-xl"
          style={{ backdropFilter: "blur(8px)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-white">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                maxLength={50}
                placeholder="Enter your first name"
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errorMessages.fName && (
                <p className="text-red-500">{errorMessages.fName}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-white">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                maxLength={50}
                placeholder="Enter your last name"
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errorMessages.lName && (
                <p className="text-red-500">{errorMessages.lName}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="username" className="text-white">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              maxLength={50}
              placeholder="Enter your username"
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errorMessages.username && (
              <p className="text-red-500">{errorMessages.username}</p>
            )}
          </div>
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
            {errorMessages.email && (
              <p className="text-red-500">{errorMessages.email}</p>
            )}
          </div>
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
            {errorMessages.password && (
              <p className="text-red-500">{errorMessages.password}</p>
            )}
          </div>
          <div className="flex justify-center">
            <Button
              auto
              flat
              type="submit"
              className="hover:bg-gray-300 hover:text-black bg-blue-500 text-white"
            >
              Register
            </Button>
          </div>
          <p
            className="text-center mt-4 text-white hover:underline hover:text-blue-500 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Already have an account?
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;
