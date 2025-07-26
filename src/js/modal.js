import { codeContry } from "./selectCountry";
import markUpCards from "../template/modal.hbs";

const refs = {
  mobile: document.querySelector(".mobile"),
  window: document.querySelector(".mobile__window"),
  list: document.querySelector(".hero__list"),
  btn: document.querySelector(".mobile__btn"),
  cards: document.querySelector(".hero__list"),
};

const BASE_URL = "https://app.ticketmaster.com/discovery/v2/";
const API_KEY = "apikey=L5MVL2ixI21Ju9UXQGF2ATKeC7WJ1iTw";
refs.cards.addEventListener("click", onCardClick);
refs.btn.addEventListener("click", onCloseBtnClick);

export function onCardClick(event) {
  refs.mobile.classList.remove("is-hidden");
  fetch(
    `${BASE_URL}events.json?countryCode=${codeContry}&classificationName=music&${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      try {
        const array = data._embedded.events;
        const modalInfo = array.map((element) => {
          const imgObj = element.images.find(
            (img) => img.width == 100 && img.height == 56
          );
          return {
            logo: imgObj.url,
            data: element.dates.start.localDate,
            datatime: element.dates.start.localTime,
            address: element.dates.start.timezone,
            nameBand: element.name,
          };
        });
        const card = event.target.closest(".hero__list-item");
        const infoMap = modalInfo.forEach((element) => {
          console.log(card);
          console.log(element);
          const modalHtml = markUpCards(card);
          refs.window.innerHTML = modalHtml;
        });
      } catch (error) {
        console.log(error);
      }
    });
}

function onCloseBtnClick() {
  refs.mobile.classList.add("is-hidden");
}
