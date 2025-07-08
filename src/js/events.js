const refs = {
  inputEvent: document.querySelector("#event-searching"),
  countrySearch: document.querySelector(".choose__input"),
};

const API_KEY = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&apikey=L5MVL2ixI21Ju9UXQGF2ATKeC7WJ1iTw&countyCode=US&size=10&page=1`;

refs.inputEvent.addEventListener("input", inputSearching);

export function inputSearching() {
  fetch(API_KEY)
    .then((response) => response.json())
    .then((data) => {
      const array = data._embedded.events;
      array.forEach((element) => {
        console.log("Name: " + element.name);
        const name = element.name;
        console.log("Placee: " + element.dates.timezone);
        const placement = element.dates.timezone;
      });
    });
}
