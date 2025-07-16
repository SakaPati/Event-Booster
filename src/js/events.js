document.addEventListener("DOMContentLoaded", () => {
  const refs = {
    inputEvent: document.querySelector("#event-searching"),
    countrySearch: document.querySelector(".choose__input"),
    list: document.querySelector(".hero__list"),
  };

  const API_KEY = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&apikey=L5MVL2ixI21Ju9UXQGF2ATKeC7WJ1iTw&countyCode=US&size=10&page=1`;

  // Get template from HTML
  const templateSource = document.getElementById("my-template").innerHTML;
  const itemTemplate = Handlebars.compile(templateSource);

  refs.inputEvent.addEventListener("input", inputSearching);

  function inputSearching() {
    fetch(API_KEY)
      .then((response) => response.json())
      .then((data) => {
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
      });
  }
});
