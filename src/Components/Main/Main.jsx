import Footer from "../Footer/Footer";
import style from "./Main.module.css";
import MainSection from "./MainSection/MainSection";
import SideBar from "./SideBar/SideBar";

const Main = () => {
  return (
    <main className={style.main}>
      <SideBar />
      <MainSection />
      {/* <FooterSection /> */}
    </main>
  );
};

export default Main;
