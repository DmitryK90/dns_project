import style from "./CenterSection.module.css";

const CenterSection = () => {
  return (
    <div className={style.centerSectionContainer}>
      <h4>Работаем из дома</h4>
      <div className={style.card}>
        <img src="" alt="" />
        <div>
          <p>Ноутбуки</p>
          <p>Мониторы</p>
          <p>Персональные компьютеры</p>
          <p>Моноблоки</p>
        </div>
      </div>
    </div>
  );
};

export default CenterSection;
