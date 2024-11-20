import React from "react";
import { Menu } from "@mantine/core";
import { StyledToolElement } from "./styles";

export const AccountMenu = () => {
  return (
    <Menu shadow="md" trigger="click" closeOnItemClick={false} withArrow>
      <Menu.Target>
        <StyledToolElement></StyledToolElement>
      </Menu.Target>
      <Menu.Dropdown></Menu.Dropdown>
    </Menu>
  );
};
