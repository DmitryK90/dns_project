import style from "./Header.module.css";
import PromoBanner from "./PromoBanner/PromoBanner";
import MainNav from "./MainNav/MainNav";
import AdditionalNav from "./AdditionalNav/AdditionalNav";

const Header = () => {
  return (
    <div className={style.header}>
      <PromoBanner />
      <MainNav />
      <AdditionalNav />
    </div>
  );
};

export default Header;
