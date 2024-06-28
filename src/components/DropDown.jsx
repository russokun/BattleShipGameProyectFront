import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, User } from "@nextui-org/react";

const DropDown = () => {
  return (
    <div className="fixed top-4 right-4 z-50 hidden md:block"> {/* Ocultar en dispositivos móviles */}
      <Dropdown
        showArrow
        radius="sm"
        classNames={{
          base: "before:bg-blue-900", // Cambiar fondo de la flecha
          content: "p-0 border-small border-divider border-black bg-blue-900 bg-opacity-50",
        }}
        dropdownStyle={{ minWidth: '100%' }} // Asegura que el Dropdown ocupe todo el ancho en móvil
      >
        <DropdownTrigger>
          <Button
            variant="ghost"
            color="text-white"
            className="text-white bg-[#071952] hover:bg-[#0D2E5E] rounded-full w-28 px-4 py-2 border border-black" // Botón redondo con borde negro
            disableRipple
          >
            Menú
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Custom item styles"
          disabledKeys={["profile"]}
          className="p-3"
          itemClasses={{
            base: [
              "rounded-md",
              "text-[#071952]",
              "transition-opacity",
              "data-[hover=true]:text-foreground",
              "data-[hover=true]:bg-[#5A72A0]",
              "dark:data-[hover=true]:bg-[#5A72A0]",
              "data-[selectable=true]:focus:bg-[#5A72A0]",
              "data-[pressed=true]:",
              "data-[focus-visible=true]:ring-2",
            ],
          }}
        >
          <DropdownItem isReadOnly key="profile" className="h-14 gap-2">
            <User
              name="Joaquin Neulist"
              description="Joaquin@gmail.com"
              classNames={{
                name: "text-[#]", // Texto más claro con opacidad
                description: "text-[#]", // Texto más claro con opacidad
              }}
              avatarProps={{
                size: "lg",
                src: "avatar.jpg",
              }}
            />
          </DropdownItem>
          <DropdownItem key="ranking">Ranking</DropdownItem>
          <DropdownItem key="account">Profile</DropdownItem>
          <DropdownItem key="logout">Log Out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropDown;
