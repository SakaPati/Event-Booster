export const countries = [
  { value: "AD", label: "Andorra" },
  { value: "AI", label: "Anguilla" },
  { value: "AR", label: "Argentina" },
  { value: "AU", label: "Australia" },
  { value: "AT", label: "Austria" },
  { value: "AZ", label: "Azerbaijan" },
  { value: "BS", label: "Bahamas" },
  { value: "BH", label: "Bahrain" },
  { value: "BB", label: "Barbados" },
  { value: "BE", label: "Belgium" },
  { value: "BM", label: "Bermuda" },
  { value: "BR", label: "Brazil" },
  { value: "BG", label: "Bulgaria" },
  { value: "CA", label: "Canada" },
  { value: "CL", label: "Chile" },
  { value: "CN", label: "China" },
  { value: "CO", label: "Colombia" },
  { value: "CR", label: "Costa Rica" },
  { value: "HR", label: "Croatia" },
  { value: "CY", label: "Cyprus" },
  { value: "CZ", label: "Czech Republic" },
  { value: "DK", label: "Denmark" },
  { value: "DO", label: "Dominican Republic" },
  { value: "EC", label: "Ecuador" },
  { value: "EE", label: "Estonia" },
  { value: "FO", label: "Faroe Islands" },
  { value: "FI", label: "Finland" },
  { value: "FR", label: "France" },
  { value: "GE", label: "Georgia" },
  { value: "DE", label: "Germany" },
  { value: "GH", label: "Ghana" },
  { value: "GI", label: "Gibraltar" },
  { value: "GB", label: "Great Britain" },
  { value: "GR", label: "Greece" },
  { value: "HK", label: "Hong Kong" },
  { value: "HU", label: "Hungary" },
  { value: "IS", label: "Iceland" },
  { value: "IN", label: "India" },
  { value: "IE", label: "Ireland" },
  { value: "IL", label: "Israel" },
  { value: "IT", label: "Italy" },
  { value: "JM", label: "Jamaica" },
  { value: "JP", label: "Japan" },
  { value: "KR", label: "Korea, Republic of" },
  { value: "LV", label: "Latvia" },
  { value: "LB", label: "Lebanon" },
  { value: "LT", label: "Lithuania" },
  { value: "LU", label: "Luxembourg" },
  { value: "MY", label: "Malaysia" },
  { value: "MT", label: "Malta" },
  { value: "MX", label: "Mexico" },
  { value: "MC", label: "Monaco" },
  { value: "ME", label: "Montenegro" },
  { value: "MA", label: "Morocco" },
  { value: "NL", label: "Netherlands" },
  { value: "AN", label: "Netherlands Antilles" },
  { value: "NZ", label: "New Zealand" },
  { value: "ND", label: "Northern Ireland" },
  { value: "NO", label: "Norway" },
  { value: "PE", label: "Peru" },
  { value: "PL", label: "Poland" },
  { value: "PT", label: "Portugal" },
  { value: "RO", label: "Romania" },
  { value: "RU", label: "Russian Federation" },
  { value: "LC", label: "Saint Lucia" },
  { value: "SA", label: "Saudi Arabia" },
  { value: "RS", label: "Serbia" },
  { value: "SG", label: "Singapore" },
  { value: "SK", label: "Slovakia" },
  { value: "SI", label: "Slovenia" },
  { value: "ZA", label: "South Africa" },
  { value: "ES", label: "Spain" },
  { value: "SE", label: "Sweden" },
  { value: "CH", label: "Switzerland" },
  { value: "TW", label: "Taiwan" },
  { value: "TH", label: "Thailand" },
  { value: "TT", label: "Trinidad and Tobago" },
  { value: "TR", label: "Turkey" },
  { value: "UA", label: "Ukraine" },
  { value: "AE", label: "United Arab Emirates" },
  { value: "US", label: "United States" },
  { value: "UY", label: "Uruguay" },
  { value: "VE", label: "Venezuela" },
];

const BASE_URL = "https://app.ticketmaster.com/discovery/v2/";
const API_KEY = "apikey=L5MVL2ixI21Ju9UXQGF2ATKeC7WJ1iTw";

const btnContry = document.querySelector(".choose__btn");
const contryList = document.querySelector(".select__contry");
const icon = document.querySelectorAll(".container__input-icon");

btnContry.addEventListener("click", openSelectContry);
contryList.addEventListener("click", selectContry);
// Функция для открытия списка страны
function openSelectContry() {
  icon[1].classList.toggle("rotate");
  contryList.toggleAttribute("hidden");
}
// Функция для получения данных
function selectContry(event) {
  const codeContry = event.target.dataset.value;
  const nameContry = event.target.textContent
  fetch(
    `${BASE_URL}events.json?countryCode=${codeContry}&classificationName=music&${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => data);

  btnContry.textContent = nameContry
  openSelectContry();
}
// Функция для отрисовки страны
function renderSelectCountry() {
  const listContry = document.querySelector(".select__contry");

  countries.forEach((contry) => {
    const createContry = document.createElement("li");
    createContry.textContent = contry.label;
    createContry.dataset.value = contry.value;
    listContry.appendChild(createContry);
  });
}
renderSelectCountry();
