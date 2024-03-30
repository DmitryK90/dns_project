import style from "./BtnSwiperRight.module.css";

const BtnSwiperRight = ({ isVisible, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className={`${style.btnSwiperRight} ${isVisible ? style.visible : ""}`}
    ></div>
  );
};

export default BtnSwiperRight;
