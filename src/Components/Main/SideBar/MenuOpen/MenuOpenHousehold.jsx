import style from "./MenuOpenHousehold.module.css";

const MenuOpenHousehold = ({ setHovered }) => {
  return (
    <div onMouseLeave={() => setHovered(null)} className={style.container}>
      MenuOpenHousehold
    </div>
  );
};

export default MenuOpenHousehold;
