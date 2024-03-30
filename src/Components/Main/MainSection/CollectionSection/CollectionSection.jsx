import style from "./CollectionSection.module.css";
import LeftSection from "./LeftSection/LeftSection";
import CenterSection from "./CenterSection/CenterSection";
import RightSection from "./RightSection/RightSection";

const CollectionSection = () => {
  return (
    <div className={style.secondarySection}>
      <LeftSection />
      <CenterSection />
      <RightSection />
    </div>
  );
};

export default CollectionSection;
