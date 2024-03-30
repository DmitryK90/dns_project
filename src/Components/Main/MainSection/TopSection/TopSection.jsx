import style from "./TopSection.module.css";
import UserProfile from "./UserProfile/UserProfile";
import AnotherCarousel from "./AnotherCarousel/AnotherCarousel";

const TopSection = () => {
  return (
    <div className={style.topSection}>
      <UserProfile />
      <AnotherCarousel />
    </div>
  );
};

export default TopSection;
