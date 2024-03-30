import style from "./SearchBlock.module.css";

const SearchBlockClose = ({ setOpen }) => {
  const hadnleFocus = () => {
    setOpen(true);
  }; // не работает при клике на иконку, хз почему.
  return (
    // <div>
    <div className={style.searchBlock}>
      <input
        const
        className={style.search}
        placeholder="Поиск по сайту"
        type="search"
        autoComplete="off"
        onFocus={hadnleFocus}
      ></input>
      <div className={style.loupeIcon} onClick={hadnleFocus}>
        <svg width="20" height="20" onClick={hadnleFocus}>
          <path
            d="M10.828 4.75a6.078 6.078 0 100 12.156 6.078 6.078 0 000-12.156zM3.25 10.828a7.578 7.578 0 1113.441 4.801l4.161 4.162a.75.75 0 11-1.06 1.06l-4.162-4.16a7.578 7.578 0 01-12.38-5.862z"
            fill="#AFAFAF"
          ></path>
        </svg>
      </div>
    </div>
    // </div>
  );
};

export default SearchBlockClose;
