import style from "./UserProfile.module.css";

const UserProfile = () => {
  return (
    <div className={style.userProfile}>
      <h4>Личный кабинет</h4>
      <p>Получайте бонусы, отслеживайте заказы и делитесь мнением</p>
      <div className={style.buttons}>
        <button className={style.btnLogIn}>Войти</button>
        <button className={style.myOrders}>Мои заказы</button>
      </div>
    </div>
  );
};

export default UserProfile;
