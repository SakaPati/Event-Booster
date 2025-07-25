import { codeContry } from "./selectCountry";
import markUpCards from "../template/modal.hbs";
const refs = {
  btn: document.querySelector(".mobile__btn"),
  mobile: document.querySelector(".mobile"),
  window: document.querySelector(".mobile__window"),
};
const BASE_URL = "https://app.ticketmaster.com/discovery/v2/";
const API_KEY = "apikey=L5MVL2ixI21Ju9UXQGF2ATKeC7WJ1iTw";
refs.btn.addEventListener("click", onCloseClick);

document.querySelector(".hero__list").addEventListener("click", function (e) {
  if (e.target.closest(".hero__list-item")) {
    refs.mobile.style.display = "block";
  }
  fetch(
    `${BASE_URL}events.json?countryCode=${codeContry}&classificationName=music&${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      const array = data._embedded.events;
      const modalInfo = array.forEach((element) => {
        const imgObj = element.images.find(
          (img) => img.width == 100 && img.height == 56
        );
        return {
          logo: imgObj ? imgObj.url : "",
          info: element.info,
          data: element.dates.start.localDate,
          datatime: element.dates.start.localTime,
          address: element.dates.start.timezone,
          nameBand: element.name,
        };
      });
      const markupCards = markUpCards({ modal__info: modalInfo });
      refs.window.innerHTML = markupCards;
    });
});

function onCloseClick() {
  refs.mobile.style.display = "none";
}
