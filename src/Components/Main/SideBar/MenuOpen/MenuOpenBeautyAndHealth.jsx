import style from "./MenuOpenBeautyAndHealth.module.css";

const MenuOpenBeautyAndHealth = ({ setHovered }) => {
  return (
    <div onMouseLeave={() => setHovered(null)} className={style.container}>
      MenuOpenBeautyAndHealth
    </div>
  );
};

export default MenuOpenBeautyAndHealth;
