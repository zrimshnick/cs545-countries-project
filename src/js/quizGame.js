const svgContainer = document.getElementById("qg-svg-container");
const pathElements = svgContainer.querySelectorAll("path");
let countryNames = ["Click right arrow to begin!"];
let africaCountries = [
  "Algeria",
  "Angola",
  "Benin",
  "Botswana",
  "Burkina Faso",
  "Burundi",
  "Cape Verde",
  "Cameroon",
  "Central African Republic",
  "Chad",
  "Comoros",
  "Republic of Congo",
  "Democratic Republic of the Congo",
  "Djibouti",
  "Egypt",
  "Equatorial Guinea",
  "Eritrea",
  "Ethiopia",
  "Eswatini",
  "Gabon",
  "The Gambia",
  "Ghana",
  "Guinea",
  "Guinea-Bissau",
  "Côte d'Ivoire",
  "Kenya",
  "Lesotho",
  "Liberia",
  "Libya",
  "Madagascar",
  "Malawi",
  "Mali",
  "Mauritania",
  "Mauritius",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Niger",
  "Nigeria",
  "Rwanda",
  "São Tomé and Principe",
  "Senegal",
  "Seychelles",
  "Sierra Leone",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Sudan",
  "Tanzania",
  "Togo",
  "Tunisia",
  "Uganda",
  "Zambia",
  "Zimbabwe",
  "Western Sahara",
];
let asiaCountries = [
  "Afghanistan",
  "Armenia",
  "Azerbaijan",
  "Bahrain",
  "Bangladesh",
  "Bhutan",
  "Brunei",
  "Cambodia",
  "China",
  "Georgia",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Israel",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Lebanon",
  "Malaysia",
  "Maldives",
  "Mongolia",
  "Myanmar",
  "Nepal",
  "North Korea",
  "Oman",
  "Pakistan",
  "Palestine",
  "Philippines",
  "Qatar",
  "Russia",
  "Saudi Arabia",
  "South Korea",
  "Sri Lanka",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Thailand",
  "Timor-Leste",
  "Turkey",
  "Turkmenistan",
  "United Arab Emirates",
  "Uzbekistan",
  "Vietnam",
  "Yemen",
];
let europeCountries = [
  "Albania",
  "Austria",
  "Belarus",
  "Belgium",
  "Bosnia and Herzegovina",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Georgia",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "Ireland",
  "Italy",
  "Latvia",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Moldova",
  "Montenegro",
  "Netherlands",
  "Macedonia",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "Russia",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Turkey",
  "Ukraine",
  "United Kingdom",
  "Kosovo",
  "Netherlands",
];
let northAmericaCountries = [
  "Antigua and Barbuda",
  "Bahamas",
  "Barbados",
  "Belize",
  "Canada",
  "Costa Rica",
  "Cuba",
  "Dominica",
  "Dominican Republic",
  "El Salvador",
  "Grenada",
  "Guatemala",
  "Haiti",
  "Honduras",
  "Jamaica",
  "Mexico",
  "Nicaragua",
  "Panama",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Trinidad and Tobago",
  "United States",
];
let northAmericaTerritories = [
  "Anguilla",
  "Greenland",
  "Aruba",
  "Bermuda",
  "British Virgin Islands",
  "Cayman Islands",
  "Curaçao",
  "Guadeloupe",
  "Martinique",
  "Montserrat",
  "Puerto Rico",
  "Saba (Netherlands)",
  "Saint-Barthélemy",
  "Saint-Martin",
  "St. Eustatius (Netherlands)",
  "Sint Maarten",
  "Turks and Caicos Islands",
  "United States Virgin Islands",
];

let oceaniaCountries = [
  "Australia",
  "Fiji",
  "Marshall Islands",
  "Federated States of Micronesia",
  "Nauru",
  "New Zealand",
  "Palau",
  "Papua New Guinea",
  "Samoa",
  "Solomon Islands",
  "Tonga",
  "Tuvalu",
  "Vanuatu",
];
let oceaniaTerritories = [
  "American Samoa",
  "French Polynesia",
  "Guam",
  "New Caledonia",
  "Northern Mariana Islands",
];
let southAmericaCountries = [
  "Argentina",
  "Bolivia",
  "Brazil",
  "Chile",
  "Colombia",
  "Ecuador",
  "Guyana",
  "French Guiana",
  "Paraguay",
  "Peru",
  "Suriname",
  "Uruguay",
  "Venezuela",
];

//"Mayotte",
//"Reunion",
//"Canary Islands (Spain)",
//"Faeroe Islands",
//"Falkland Islands",
//

/////// function to get all names into array

// function to shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

shuffleArray(countryNames);
console.log(countryNames);
//////// Function to change color on click
function changeColorOnClick(event) {
  const clickedPath = event.target;
  const allPaths = svgContainer.querySelectorAll("path");

  // Add permanentColor class to the clicked path
}

///
const dropdownSelector = document.getElementById("qg-game-control-dropdown");
const startButton = document.getElementById("qg-game-control-start-button");
dropdownSelector.addEventListener("change", function () {
  const selectedOption =
    dropdownSelector.options[dropdownSelector.selectedIndex].value;
  startButton.addEventListener("click", function () {
    //// selected option
    console.log("selected option: ", selectedOption);
    if (selectedOption === "NA") {
      countryNames = northAmericaCountries;
    }
    if (selectedOption === "SA") {
      countryNames = southAmericaCountries;
    }
    if (selectedOption === "EU") {
      countryNames = europeCountries;
    }
    if (selectedOption === "AF") {
      countryNames = africaCountries;
    }
    if (selectedOption === "AS") {
      countryNames = asiaCountries;
    }
    if (selectedOption === "OC") {
      countryNames = oceaniaCountries;
    }
    if (selectedOption === "ALL") {
      pathElements.forEach((path) => {
        const name = path.getAttribute("name");
        countryNames.push(name);
      });
      console.log(countryNames);
    }
    console.log(countryNames);
    document
      .getElementById("qg-game-control-container")
      .classList.remove("flex");
    document
      .getElementById("qg-game-control-container")
      .classList.add("hidden");
    document.getElementById("qg-game-container").classList.remove("hidden");
    document.getElementById("qg-game-container").classList.add("flex");
  });
});

const restartButton = document.getElementById("qg-game-restart-button");
restartButton.addEventListener("click", function () {
  location.reload();
});
// Add event listener to the SVG container
svgContainer.addEventListener("click", changeColorOnClick);

//// score container at bottom
let countryIndex = 0;
let currCountry = countryNames[countryIndex];
let currScore = 0;
let currTotal = 0;
const currCountryElement = document.getElementById(
  "qg-game-header-curr-country"
);
const currScoreElement = document.getElementById("qg-game-score-correct-num");
const currTotalElement = document.getElementById("qg-game-score-total-num");

// Change the text content
currCountryElement.textContent = currCountry;
currScoreElement.textContent = currScore;
currTotalElement.textContent = currTotal;
const gameAlert = document.getElementById("qg-game-alert");

pathElements.forEach((path) => {
  path.addEventListener("click", function () {
    if (
      path.classList.contains("clickedCountryWrong") ||
      path.classList.contains("clickedCountryCorrect") ||
      currCountry === "Click right arrow to begin!"
    ) {
      console.log("already clicked on this one");
    } else {
      if (this.getAttribute("name") === currCountry) {
        console.log(`Clicked: ${this.getAttribute("name")} CORRECT`);
        path.classList.add("clickedCountryCorrect");

        gameAlert.textContent = "CORRECT";
        gameAlert.classList.remove("hidden");
        gameAlert.classList.add("greened");
        setTimeout(function () {
          gameAlert.classList.remove("greened");
        }, 1000);
        gameAlert.classList.add("hidden");
        currScore = currScore + 1;
        currScoreElement.textContent = currScore;
        currTotal = currTotal + 1;
        currTotalElement.textContent = currTotal;
        countryNames.splice(countryIndex, 1);
        if (countryNames.length === 0) {
          window.alert("All done with game");
        } else {
          if (countryIndex === countryNames.length - 1) {
            countryIndex === 0;
            currCountry = countryNames[countryIndex];
            currCountryElement.textContent = currCountry;
          } else {
            currCountry = countryNames[countryIndex];
            currCountryElement.textContent = currCountry;
          }
        }
      } else {
        console.log(`Clicked: ${this.getAttribute("name")} WRONG`);
        path.classList.add("clickedCountryWrong");
        currTotal = currTotal + 1;
        currTotalElement.textContent = currTotal;
        setTimeout(function () {
          path.classList.remove("clickedCountryWrong");
        }, 1000);

        gameAlert.textContent = "WRONG";
        gameAlert.classList.remove("hidden");
        gameAlert.classList.add("redded");
        setTimeout(function () {
          gameAlert.classList.remove("redded");
        }, 1000);
        gameAlert.classList.add("hidden");

        pathElements.forEach((path) => {
          if (path.getAttribute("name") === currCountry) {
            path.classList.add("clickedCountryCorrect");
            const flashingInterval = setInterval(() => {
              path.classList.toggle("clickedCountryCorrect");
            }, 500);
            setTimeout(() => {
              clearInterval(flashingInterval);
              path.classList.remove("clickedCountryCorrect");
            }, 5000);
          }
        });

        countryNames.splice(countryIndex, 1);
        //countryIndex = countryIndex + 1;
        currCountry = countryNames[countryIndex];
        currCountryElement.textContent = currCountry;
      }
    }
  });
});

const leftArrowButton = document.getElementById("qg-game-header-left-arrow");
leftArrowButton.addEventListener("click", function () {
  if (countryIndex === 0) {
  } else {
    countryIndex = countryIndex - 1;
    currCountry = countryNames[countryIndex];
    currCountryElement.textContent = currCountry;
  }
});
const rightArrowButton = document.getElementById("qg-game-header-right-arrow");
rightArrowButton.addEventListener("click", function () {
  if (countryIndex === countryNames.length - 1) {
  } else {
    countryIndex = countryIndex + 1;
    currCountry = countryNames[countryIndex];
    currCountryElement.textContent = currCountry;
    const gameAlert = document.getElementById("qg-game-alert");
    gameAlert.textContent = "SKIPPED";
    gameAlert.classList.add("skip");
    setTimeout(function () {
      gameAlert.classList.remove("skip");
    }, 1000);
  }
});
