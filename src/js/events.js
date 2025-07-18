import { countries } from "./selectCountry";
import { selectContry } from "./selectCountry";
import { codeContry } from "./selectCountry";
document.addEventListener("DOMContentLoaded", () => {
  const refs = {
    inputEvent: document.querySelector("#event-searching"),
    countrySearch: document.querySelector(".choose__input"),
    list: document.querySelector(".hero__list"),
    error: document.querySelector("#hero__error"),
  };

  const BASE_URL = "https://app.ticketmaster.com/discovery/v2/";
  const API_KEY = "apikey=L5MVL2ixI21Ju9UXQGF2ATKeC7WJ1iTw";

  refs.inputEvent.addEventListener("input", inputSearching);

  function inputSearching() {
    const eventCountry = codeContry;
    console.log(eventCountry);
    fetch(
      `${BASE_URL}events.json?countryCode=${codeContry}&classificationName=music&${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const array = data._embedded.events;
        let dataInfo;
        const itemsArray = array.map((element) => {
          const imgObj = element.images.find(
            (img) => img.width == 305 && img.height == 225
          );
          dataInfo = {
            img: imgObj ? imgObj.url : "",
            name: element.name,
            time: element.dates.timezone,
            address: element._embedded?.venues?.[0]?.city?.name || "",
          };
          for (let i = 1; i <= data.page.size; i++) {
            refs.list.innerHTML = `
              <ul class="hero__list other">
              <li class="hero__list-item">
              <img
                  src=${dataInfo.img}
                  class="list__item-img"
                />
                <div class="list__item-border"></div>
              <h3 class="list__item-title eurovision">${dataInfo.name}</h3>
              <time datetime="2021-05-13" class="list__item-time">${dataInfo.time}</time>
              <address class="list__item-address">
                <svg width="6" height="9">
                  <use href="./icons/symbol-defs.svg#icon-location"></use>
                </svg>
                ${dataInfo.address}
              </address>
              </li>
              </ul>
              `;
            console.log("hi");
          }
        });
      });
  }
});
