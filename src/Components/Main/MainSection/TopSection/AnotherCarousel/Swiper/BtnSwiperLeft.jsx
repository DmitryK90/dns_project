import style from "./BtnSwiperLeft.module.css";

const BtnSwiperLeft = ({ isVisible, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className={`${style.btnSwiperLeft} ${isVisible ? style.visible : ""}`}
    ></div>
  );
};

export default BtnSwiperLeft;
