import style from "./MainSection.module.css";
import TopSection from "./TopSection/TopSection";
import CollectionSection from "./CollectionSection/CollectionSection";
import BrandSection from "./BrandSection/BrandSection";

const MainSection = () => {
  return (
    <section className={style.container}>
      <TopSection />
      <CollectionSection />
      <BrandSection />
    </section>
  );
};

export default MainSection;
