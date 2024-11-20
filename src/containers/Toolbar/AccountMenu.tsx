import React from "react";
import { Menu, Avatar, Text } from "@mantine/core";
import { FaRegCircleUser } from "react-icons/fa6";
import { VscSignIn } from "react-icons/vsc";
import { StyledToolElement } from "./styles";

export const AccountMenu = () => {
  return (
    <Menu shadow="md" trigger="click" closeOnItemClick={false} withArrow>
      <Menu.Target>
        <StyledToolElement>
          
        </StyledToolElement>
      </Menu.Target>
      <Menu.Dropdown>
        
      </Menu.Dropdown>
    </Menu>
  );
};
