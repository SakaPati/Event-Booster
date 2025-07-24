import { codeContry } from "./selectCountry";
import markUp from "../template/template.hbs";

const refs = {
  inputEvent: document.querySelector("#event-searching"),
  countrySearch: document.querySelector(".choose__input"),
  list: document.querySelector(".hero__list"),
  error: document.querySelector("#hero__error"),
};

const BASE_URL = "https://app.ticketmaster.com/discovery/v2/";
const API_KEY = "apikey=L5MVL2ixI21Ju9UXQGF2ATKeC7WJ1iTw";

refs.inputEvent.addEventListener("input", inputSearching);

export function inputSearching() {
  fetch(
    `${BASE_URL}events.json?countryCode=${codeContry}&classificationName=music&${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      try {
        const array = data._embedded.events;
        const infoList = array.map((element) => {
          const imgObj = element.images.find(
            (img) => img.width == 305 && img.height == 225
          );

          return {
            img: imgObj ? imgObj.url : "",
            name: element.name,
            time: element.dates.start.localDate,
            address: element._embedded?.venues?.[0]?.city?.name || "",
          };
        });
        const html = markUp({ info__list: infoList });
        refs.list.innerHTML = html;
      } catch {
        refs.error.classList.remove("hidden");
        refs.error.classList.add("active");
        refs.list.innerHTML = "";
      }
    });
}
