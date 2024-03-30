import { useRef, useState } from "react";
import style from "./SearchBlock.module.css";

const SearchBlockOpen = ({ setOpen }) => {
  const ref = useRef();
  useState(() => {
    const handleCloseClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleCloseClick);
    return () => {
      document.removeEventListener("click", handleCloseClick);
    };
  }, [ref]);
  return (
    <div className={style.searchBlock} ref={ref}>
      <input
        className={style.search}
        placeholder="Поиск по сайту"
        type="search"
        autoComplete="off"
        autoFocus
      ></input>
      <div className={style.loupeIcon}>
        <svg width="20" height="20">
          <path
            d="M10.828 4.75a6.078 6.078 0 100 12.156 6.078 6.078 0 000-12.156zM3.25 10.828a7.578 7.578 0 1113.441 4.801l4.161 4.162a.75.75 0 11-1.06 1.06l-4.162-4.16a7.578 7.578 0 01-12.38-5.862z"
            fill="#AFAFAF"
          ></path>
        </svg>
      </div>
      <div className={style.inFocus}>
        <div className={style.searchOpen}>
          <div>История поиска</div>
          <div>Очистить историю</div>
        </div>
        <div className={style.historySearch}>
          {/* {historyUserSearch.map(item => item)} */}
          <a href="">Процессор</a>
          <a href="">Видеокарта</a>
          <a href="">Оперативная память</a>
          <a href="">Корпус</a>
        </div>
      </div>
    </div>
  );
};

export default SearchBlockOpen;
