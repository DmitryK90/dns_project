import style from "./AnotherCarousel.module.css";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import BtnSwiperLeft from "./Swiper/BtnSwiperLeft";
import BtnSwiperRight from "./Swiper/BtnSwiperRight";

const AnotherCarousel = ({ anotherCarousel }) => {
  const [swiper, setSwiper] = useState(false); // для прокнутки.
  const [pages, setPages] = useState([]); // кол-во item-ов в прокрутке.
  const [offset, setOffset] = useState(0); // позиция прокрутки.

  const itemOffset = 169; // ширина сдвига item-ов.
  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      // currentOffset - текущий оффсет.
      let newOffset = currentOffset + itemOffset; // 120 - шаг прокрутки.
      return Math.min(newOffset, 0); // если значение меньше 0, то останавливаемся на 0.
    });
  };
  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      // currentOffset - текущий оффсет.
      const newOffset = currentOffset - itemOffset;
      const maxOffset = -(itemOffset * (pages.length - 1)); // чтобы не убегало дальше последнего элемента.
      return Math.max(newOffset, maxOffset); // максимальное среди этих двух значений.
    });
  };

  useEffect(() => {
    setPages(anotherCarousel);
  }, []); // в pages разворачиваем кол-во элементов item-ов из массива.
  return (
    <div
      className={style.itemContainer}
      onMouseEnter={() => setSwiper(true)}
      onMouseLeave={() => setSwiper(false)}
    >
      <div
        className={style.anotherCarousel}
        style={{ transform: `translateX(${offset}px)` }}
      >
        {anotherCarousel.map((item) => (
          <div className={style.carouselItem} key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <BtnSwiperLeft isVisible={swiper} handleClick={handleLeftArrowClick} />
      <BtnSwiperRight isVisible={swiper} handleClick={handleRightArrowClick} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    anotherCarousel: state.mainReducer.anotherCarousel,
  };
};

export default connect(mapStateToProps)(AnotherCarousel);
