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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("register with:", formData);
    const user = {
      fName: formData.firstName,
      lName: formData.lastName,
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };
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
      console.log(error);
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
              <label htmlFor="firstName" className="text-white">First Name</label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                maxLength={50}
                placeholder="Enter your first name"
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-white">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                maxLength={50}
                placeholder="Enter your last name"
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="username" className="text-white">Username</label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              maxLength={50}
              placeholder="Enter your username"
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white">Email</label>
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
          <div className="flex flex-col relative">
            <label htmlFor="password" className="text-white">Password</label>
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
