import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, User } from "@nextui-org/react";

export const Menu = () => {
  return (
    <Dropdown
      showArrow
      radius="sm"
      classNames={{
        base: "before:bg-default-200", // cambiar fondo de la flecha
        content: "p-0 border-small border-divider bg-background",
      }}
    >
      <DropdownTrigger>
        <Button variant="ghost" disableRipple>Open Menu</Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Custom item styles"
        disabledKeys={["profile"]}
        className="p-3"
        itemClasses={{
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-default-100",
            "dark:data-[hover=true]:bg-default-50",
            "data-[selectable=true]:focus:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        }}
      >
        <DropdownItem
          isReadOnly
          key="profile"
          className="h-14 gap-2"
        >
          <User
            name="Joaquin Neulist"
            description="Joaquin@gmail.com"
            classNames={{
              name: "text-default-600",
              description: "text-default-500",
            }}
            avatarProps={{
              size: "lg",
              src: "avatar.jpg",
            }}
          />
        </DropdownItem>
        <DropdownItem key="ranking">Ranking</DropdownItem>
        <DropdownItem key="account">Profile</DropdownItem> {/* Nuevo botón de perfil */}
        <DropdownItem key="logout">Log Out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Menu;
