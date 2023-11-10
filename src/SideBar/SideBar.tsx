import { NavLink } from "react-router-dom";
import "./SideBar.scss";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaUserAlt,
  FaSearch,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

import { BsFillGrid1X2Fill } from "react-icons/bs";
import { IoMdCamera } from "react-icons/io";
import { BsPersonVcard } from "react-icons/bs";
import { RxDotsHorizontal } from "react-icons/rx";
import { useState } from "react";

const SideBar = ({
  image,
  collapsed,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange,
}: any) => {
  const [activeMenuItem, setActiveMenuItem] = useState("");
  const [activeInnerMenuItem, setActiveInnerMenuItem] = useState("");

  const handleMenuItemClick = (menuItem: any) => {
    setActiveMenuItem(menuItem);
  };

  const handleInnerMenuItemClick = (menuItem: any) => {
    setActiveInnerMenuItem(menuItem);
  };

  return (
    <div className="CodePenSideBar">
      <ProSidebar
        collapsed={collapsed}
        toggled={toggled}
        onToggle={handleToggleSidebar}
        breakPoint="md"
      >
        <SidebarHeader>
          <Menu iconShape="circle">
            {collapsed ? (
              <MenuItem
                icon={<FaAngleDoubleRight />}
                onClick={handleCollapsedChange}
              ></MenuItem>
            ) : (
              <MenuItem
                suffix={<FaAngleDoubleLeft />}
                onClick={handleCollapsedChange}
              >
                <div
                  style={{
                    padding: "9px",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 15,
                    letterSpacing: "1px",
                  }}
                ></div>
              </MenuItem>
            )}
          </Menu>
        </SidebarHeader>
        {/* Content */}
        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem
              icon={<BsFillGrid1X2Fill />}
              className={activeMenuItem === "home" ? "activeMenuItem" : ""}
            >
              Home{" "}
            </MenuItem>

            <SubMenu
              title={"User"}
              icon={<FaUserAlt />}
              onClick={() => handleMenuItemClick("User")}
              className={activeMenuItem === "User" ? "activeMenuItem" : ""}
            >
              <MenuItem onClick={() => {}}>
                <RxDotsHorizontal /> <span>User List</span>
              </MenuItem>
              <MenuItem onClick={() => {}}>
                <RxDotsHorizontal /> <span>Add User</span>
              </MenuItem>
            </SubMenu>

            <MenuItem
              icon={<IoMdCamera />}
              className={activeMenuItem === "camera" ? "activeMenuItem" : ""}
              onClick={() => {}}
            >
              Camera
            </MenuItem>

            <SubMenu
              title={"Person  Watch List"}
              icon={<BsPersonVcard />}
              onClick={() => handleMenuItemClick("Person Watch List")}
              className={
                activeMenuItem === "Person  Watch List" ? "activeMenuItem" : ""
              }
            >
              <MenuItem onClick={() => {}}>
                <RxDotsHorizontal /> <span>Person in Watch List</span>
              </MenuItem>
              <MenuItem onClick={() => {}}>
                <RxDotsHorizontal /> <span>Add Person</span>
              </MenuItem>
            </SubMenu>

            <SubMenu
              title={"Moi Search"}
              icon={<FaSearch />}
              onClick={() => handleMenuItemClick("Moi Search")}
              className={
                activeMenuItem === "Moi Search" ? "activeMenuItem" : ""
              }
            >
              <MenuItem onClick={() => {}}>
                <RxDotsHorizontal /> <span>Face Match</span>
              </MenuItem>
              <MenuItem onClick={() => {}}>
                <RxDotsHorizontal /> <span>Compare</span>
              </MenuItem>

              <MenuItem onClick={() => {}}>
                <RxDotsHorizontal /> <span>Trade License</span>
              </MenuItem>
              <MenuItem onClick={() => {}}>
                <RxDotsHorizontal /> <span>Traffic Department</span>
              </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};

export default SideBar;
