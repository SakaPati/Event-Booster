import Handlebars from "handlebars";
import { makingTemplate } from "../templates/template.hbs";

const refs = {
  inputEvent: document.querySelector("#event-searching"),
  countrySearch: document.querySelector(".choose__input"),
  list: document.querySelector(".hero-list"),
};

const API_KEY = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&apikey=L5MVL2ixI21Ju9UXQGF2ATKeC7WJ1iTw&countyCode=US&size=10&page=1`;

refs.inputEvent.addEventListener("input", inputSearching);

export function inputSearching() {
  const inputValue = refs.inputEvent.value;

  fetch(API_KEY)
    .then((response) => response.json())
    .then((data) => {
      // Массив в котором получаю данные по ивентам(название, локация)
      const array = data._embedded.events;

      let name;

      let placement;

      let img;

      array.forEach((element) => {
        // Присваивание имени и локации
        name = element.name;
        placement = element.dates.timezone;

        // Поиск ивентов по названию
        if (name.toLowerCase().includes(inputValue.toLowerCase())) {
          console.log(name);
        } else {
          return false;
        }

        // получения массива фото(ссылки)
        const elImg = element.images;

        // Перебираю массив и получию линки на фото
        elImg.forEach((element) => {
          // поиск нужного линка по ширине и высоте
          if (element.width == 305 && element.height == 225) {
            img = element.url;
            console.log(element.url);
          }
        });

        // даты
        const dateTime = element.dates.start.localDate;
      });

      const items = {
        photo: img,
        title: name,
        time: placement,
      };

      const layout = makingTemplate(items);
      console.log(layout);
    });
}
