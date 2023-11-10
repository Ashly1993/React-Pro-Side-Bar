import React, { useState } from "react";
import "./Main.scss";
import SideBar from "../SideBar/SideBar";
import { FaBars } from "react-icons/fa";

function Main() {

  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleImageChange = (checked: any) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value: any) => {
    setToggled(value);
  };

  return (
    <div className={`app ${toggled ? 'toggled' : ''}`}>
      <SideBar />
      <div className="mainPageComponents">
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
            <FaBars />
          </div>
        main content
      </div>
    </div>
  );
}

export default Main;
