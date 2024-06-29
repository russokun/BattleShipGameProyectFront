import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, User } from "@nextui-org/react";
import { logout } from '../Redux/actions/AuthActions';

const DropDown = ({ user }) => {
  const dispatch = useDispatch();
  const info = useSelector(state => state.AuthReducer);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const isOnRankingPage = location.pathname === '/ranking';

  return (
    <div className="fixed top-4 right-4 z-50 hidden md:block">
      <Dropdown
        showArrow
        radius="sm"
        classNames={{
          base: "before:bg-white",
          content: "p-0 border-small border-divider border-black bg-white bg-opacity-100",
        }}
        dropdownStyle={{ minWidth: '100%' }}
      >
        <DropdownTrigger>
          <Button
            variant="ghost"
            color="text-white"
            className="text-white bg-[#071952] hover:bg-[#0D2E5E] rounded-full w-28 px-4 py-2 border border-black"
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
              "data-[hover=true]:bg-[#ffffff]",
              "dark:data-[hover=true]:bg-[#ffffff]",
              "data-[selectable=true]:focus:bg-[#5A72A0]",
              "data-[pressed=true]:",
              "data-[focus-visible=true]:ring-2",
            ],
          }}
        >
          <DropdownItem isReadOnly key="profile" className="h-14 gap-2">
            <User
              name={info.user.username}
              description={info.user.email}
              classNames={{
                name: "text-[#0D275E]",
                description: "text-[#0D275E]", 
              }}
              avatarProps={{
                size: "lg",
                src: "avatar.jpg",
              }}
            />
          </DropdownItem>
          <DropdownItem key="ranking" onClick={() => navigate(isOnRankingPage ? '/mm' : '/ranking')}>
            {isOnRankingPage ? 'Matchmaking' : 'Ranking'}
          </DropdownItem>
          <DropdownItem key="logout" onClick={handleLogout}>Log Out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropDown;
