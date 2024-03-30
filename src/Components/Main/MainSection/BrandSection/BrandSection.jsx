import BrandItem from "./BrandItem/BrandItem";
import style from "./BrandSection.module.css";

const BrandSection = () => {
  return (
    <div className={style.brandSectionContainer}>
      <BrandItem />
      <BrandItem />
      <BrandItem />
    </div>
  );
};

export default BrandSection;
