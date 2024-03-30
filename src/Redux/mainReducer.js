// import img_01 from "../assets/topSection_item/topSection_item_01.png";
// import img_02 from "../assets/topSection_item/topSection_item_02.png";
// import img_03 from "../assets/topSection_item/topSection_item_03.png";
// import img_04 from "../assets/topSection_item/topSection_item_04.png";

const initialState = {
  anotherCarousel: [
    {
      id: 1,
      title: "Акции",
      description: "Скидки, рассрочки, выгодные комплекты",
      // background: img_01,
    },
    {
      id: 2,
      title: "Собрать ПК",
      description: "Без проблем с совместимостью",
      // background: img_02,
    },
    {
      id: 3,
      title: "Подарочные карты",
      description: "Дарим любимым",
      // background: img_03,
    },
    {
      id: 4,
      title: "Готовые сборки",
      description: "Горячие сборки ПК от пользователей",
      // background: img_04,
    },
    {
      id: 5,
      title: "Тест",
      description: "Тест",
      // background: img_01,
    },
    {
      id: 5,
      title: "Тест",
      description: "Тест",
      // background: img_01,
    },
    {
      id: 5,
      title: "Тест",
      description: "Тест",
      // background: img_01,
    },
  ],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default mainReducer;
