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
  // Get template from HTML
  const templateSource = document.getElementById("my-template").innerHTML;
  const itemTemplate = Handlebars.compile(templateSource);

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
        try {
          const array = data._embedded.events;
          const itemsArray = array.map((element) => {
            const imgObj = element.images.find(
              (img) => img.width == 305 && img.height == 225
            );
            return {
              img: imgObj ? imgObj.url : "",
              name: element.name,
              time: element.dates.timezone,
              address: element._embedded?.venues?.[0]?.city?.name || "",
            };
          });
          const html = itemTemplate({ info__list: itemsArray });
          refs.list.innerHTML = html;
        } catch {
          refs.error.classList.remove("hidden");
          refs.error.classList.add("active");
          refs.list.innerHTML = "";
        }
      });
  }
});
