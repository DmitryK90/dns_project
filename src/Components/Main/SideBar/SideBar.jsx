import { connect } from "react-redux";
import { useState } from "react";
import style from "./SideBar.module.css";
import MenuOpenHousehold from "./MenuOpen/MenuOpenHousehold";
import MenuOpenBeautyAndHealth from "./MenuOpen/MenuOpenBeautyAndHealth";

const SideBar = ({ sideBarElements }) => {
  const [hovered, setHovered] = useState(null); // открытие меню при наведении. В hovered передаём id наведённого элемента.
  return (
    <nav className={style.navLeftChapter}>
      {sideBarElements.map((item) => (
        <div
          onMouseEnter={() => setHovered(item.id)}
          className={style.navItem}
          key={item.id}
        >
          <img src={item.icon} className={style.icon}></img>
          <div>{item.title}</div>
        </div>
      ))}
      {hovered === 1 && <MenuOpenHousehold setHovered={setHovered} />}
      {hovered === 2 && <MenuOpenBeautyAndHealth setHovered={setHovered} />}
    </nav>
  );
};

let mapStateToProps = (state) => {
  return {
    sideBarElements: state.navReducer.sideBarElements,
  };
};

export default connect(mapStateToProps)(SideBar);
