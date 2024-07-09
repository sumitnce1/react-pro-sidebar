import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

// Import Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faTasks,
  faTrophy,
  faUser,
  faSignOutAlt,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const MyProSidebar = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    setMenuCollapse(!menuCollapse);
  };

  return (
    <div id="header">
      <ProSidebar collapsed={menuCollapse}>
        <SidebarHeader>
          <div className="logotext">
            <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
          </div>
          <div className="closemenu" onClick={menuIconClick}>
            {menuCollapse ? (
              <FontAwesomeIcon icon={faArrowRight} />
            ) : (
              <FontAwesomeIcon icon={faArrowLeft} />
            )}
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem icon={<FontAwesomeIcon icon={faHome} />}>
              <Link to="/">Dashboard</Link>
            </MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faUsers} />}>
              <Link to="/team">Team</Link>
            </MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faTasks} />}>
              <Link to="/tasks">Tasks</Link>
            </MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faTrophy} />}>
              <Link to="/tournaments">Tournaments</Link>
            </MenuItem>
            <MenuItem icon={<FontAwesomeIcon icon={faUser} />}>
              <Link to="/profile">Profile</Link>
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Menu iconShape="square">
            <MenuItem icon={<FontAwesomeIcon icon={faSignOutAlt} />}>
              Logout
            </MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default MyProSidebar;
