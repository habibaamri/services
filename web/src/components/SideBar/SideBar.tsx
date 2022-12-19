import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";

import {
  FaBars,
  FaAngellist,
  FaUsers,
  FaRegQuestionCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SideBar.scss";
import { Box, Button } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";

const MenuItems = [
  {
    title: "Catalogue des Services",
    icon: <span className="icon-esd-catalog"></span>,
  },
  {
    title: "Documentation",
    icon: <span className="SidebarIcon icon-esd-documentation"></span>,
  },
  {
    title: "Actualités",
    icon: <span className="SidebarIcon icon-esd-news"></span>,
  },
  {
    title: "Challenges",
    icon: <span className="SidebarIcon icon-esd-challenge"></span>,
  },
  {
    title: "Qui sommes-nous ?",
    icon: <span className="SidebarIcon icon-esd-who-are-we"></span>,
  },
  { title: "FAQ", icon: <span className="SidebarIcon icon-esd-help"></span> },
  {
    title: "Performances",
    icon: <span className="SidebarIcon icon-esd-stats"></span>,
  },
  {
    title: "Contact",
    icon: <span className="SidebarIcon icon-esd-contact"></span>,
  },
];
const SidebarHeader = () => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();

  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuClick = () => {
    collapseSidebar();
    setMenuCollapse(!menuCollapse);
  };
  const MenuLink = (item: {
    icon: React.ReactElement<any, string>;
    title: string;
  }) => (
    <MenuItem
      onClick={() => {
        // collapseSidebar();
      }}
      icon={item?.icon}
    >
      {item?.title}
      <Link to={"/"} />
    </MenuItem>
  );

  return (
    <div className="SidebarContainer">
      <Box className="HeaderContainer">
        <Box className="Header">
          <Button colorScheme="teal" onClick={() => menuClick()}>
            <FaBars style={{ marginRight: 20 }} />
            Menu
          </Button>

          {menuCollapse && (
            <div className="innerSideBar">
              <Button onClick={() => menuClick()} className="menuCta">
                <AiOutlineClose style={{ marginRight: 20 }} />
                Fermer
              </Button>
              <Sidebar className="sideBarItems">
                <Menu>
                  {MenuItems.map((item, index) => (
                    <MenuLink {...item} key={index} />
                  ))}
                </Menu>
              </Sidebar>
            </div>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default SidebarHeader;
