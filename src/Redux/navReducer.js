import icon_01 from "../assets/1.png";
import icon_02 from "../assets/2.png";
import icon_03 from "../assets/3.png";
import icon_04 from "../assets/4.png";
import icon_05 from "../assets/5.png";
import icon_06 from "../assets/6.png";
import icon_07 from "../assets/7.png";
import icon_08 from "../assets/8.png";
import icon_09 from "../assets/9.png";
import icon_10 from "../assets/10.png";
import icon_11 from "../assets/11.png";
import icon_12 from "../assets/12.png";
import icon_13 from "../assets/13.png";
import icon_14 from "../assets/14.png";
import icon_15 from "../assets/15.png";

const initialState = {
  sideBarElements: [
    {
      id: 1,
      title: "Бытовая техника",
      icon: icon_01,
    },
    {
      id: 2,
      title: "Красота и здоровье",
      icon: icon_02,
    },
    {
      id: 3,
      title: "Смартфоны и фототехника",
      icon: icon_03,
    },
    {
      id: 4,
      title: "ТВ, консоли и аудио",
      icon: icon_04,
    },
    {
      id: 5,
      title: "ПК, ноутбуки, переферия",
      icon: icon_05,
    },
    {
      id: 6,
      title: "Комплектующие для ПК",
      icon: icon_06,
    },
    {
      id: 7,
      title: "Офис и мебель",
      icon: icon_07,
    },
    {
      id: 8,
      title: "Сетевое оборудование",
      icon: icon_08,
    },
    {
      id: 9,
      title: "Отдых и развлечения",
      icon: icon_09,
    },
    {
      id: 10,
      title: "Инструмент и стройка",
      icon: icon_10,
    },
    {
      id: 11,
      title: "Садовая техника",
      icon: icon_11,
    },
    {
      id: 12,
      title: "Дом, декор и посуда",
      icon: icon_12,
    },
    {
      id: 13,
      title: "Автотовары",
      icon: icon_13,
    },
    {
      id: 14,
      title: "Аксессуары и услуги",
      icon: icon_14,
    },
    {
      id: 15,
      title: "Распродажа",
      icon: icon_15,
    },
    {
      id: 16,
      title: "Уцененные товары",
      icon: icon_15,
    },
  ],
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default navReducer;
