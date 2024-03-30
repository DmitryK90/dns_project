import style from "./AdditionalNav.module.css";
import DnsMainBanner from "../DnsMainBanner/DnsMainBanner";
import SearchBlock from "../SearchBlock/SearchBlock";
import UserBlock from "../UserBlock/UserBlock";

const AdditionalNav = () => {
  return (
    <nav className={style.nav_additional}>
      <DnsMainBanner />
      <SearchBlock />
      <UserBlock />
    </nav>
  );
};

export default AdditionalNav;
