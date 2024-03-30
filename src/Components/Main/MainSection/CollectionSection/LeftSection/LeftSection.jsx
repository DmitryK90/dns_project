import style from "./LeftSection.module.css";

const LeftSection = () => {
  return (
    <div className={style.leftSectionContainer}>
      <h4>Генеральная уборка</h4>
      <div className={style.card}>
        <img src="" alt="" />
        <div>
          <p>Роботы пылесосы</p>
          <p>Напольные пылесосы</p>
          <p>Стиральные Машины</p>
          <p>Сушильные машины</p>
          <p>Стеклоочистители</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
