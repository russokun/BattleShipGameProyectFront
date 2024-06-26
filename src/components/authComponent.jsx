import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react"; // Asegúrate de que las rutas de importación sean correctas

export default function AuthComponent() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      // Lógica de inicio de sesión
      console.log("Iniciando sesión con:", formData);
    } else {
      // Lógica de registro
      console.log("Registrando con:", formData);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center self-center" >
      <form onSubmit={handleSubmit} className="space-y-4 border-2 p-3" style={{ backdropFilter: "blur(8px)" }}>
        {!isLogin && (
          <>
            <div className="grid grid-cols-2 gap-3">
              <Input
                clearable
                bordered
                label="First Name"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                maxLength={50}
              />
              <Input
                clearable
                bordered
                label="Last Name"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                maxLength={50}
              />
            </div>
            <Input
              clearable
              bordered
              label="Username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              maxLength={50}
            />
            <Input
              clearable
              bordered
              label="Email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              maxLength={50}
            />
            <Input
              clearable
              bordered
              label="Password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              maxLength={50}
            />
          </>
        )}
        {isLogin && (
          <>
            <Input
              clearable
              bordered
              label="Username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              maxLength={50}
            />
            <Input
              clearable
              bordered
              label="Password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              maxLength={50}
            />
          </>
        )}
        <div className="flex justify-center">
          <Button auto flat type="submit">
            {isLogin ? "Login" : "Register"}
          </Button>
        </div>
        <div className="flex justify-center mt-4">
        <Button auto onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Need an account? Register" : "Have an account? Login"}
        </Button>
      </div>
      </form>
      
    </div>
  );
}