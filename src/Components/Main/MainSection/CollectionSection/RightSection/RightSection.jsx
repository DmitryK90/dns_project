import style from "./RightSection.module.css";

const RightSection = () => {
  return (
    <div className={style.rightSectionContainer}>
      <h4>Путешествие на автомобиле</h4>
      <div className={style.card}>
        <img src="" alt="" />
        <div>
          <p>GPS навигаторы</p>
          <p>Видеорегистраторы</p>
          <p>Компрессоры для шин</p>
          <p>Радар-детекторы</p>
          <p>Автомагнитолы 2DIN</p>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
