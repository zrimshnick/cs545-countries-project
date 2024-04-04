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

/////// function to do timer
let seconds = 0;
let minutes = 0;
let timerInterval;
function startTimer() {
  timerInterval = setInterval(function () {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }
    const formattedTime =
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds);
    timer.innerText = formattedTime;
  }, 1000);
}
function stopTimer() {
  clearInterval(timerInterval);
}

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
const timer = document.getElementById("qg-timer-container");
startButton.addEventListener("click", function () {
  if (!timerInterval) {
    startTimer();
  }
});

let originalTotal = 0;
dropdownSelector.addEventListener("click", function () {
  const selectedOption =
    dropdownSelector.options[dropdownSelector.selectedIndex].value;
  startButton.addEventListener("click", function () {
    //// selected option
    timer.classList.remove("hidden");
    timer.classList.add("flex");

    console.log("selected option: ", selectedOption);
    if (selectedOption === "NA") {
      countryNames = shuffleArray(northAmericaCountries);
      originalTotal = northAmericaCountries.length;
    }
    if (selectedOption === "SA") {
      countryNames = shuffleArray(southAmericaCountries);
      originalTotal = southAmericaCountries.length;
    }
    if (selectedOption === "EU") {
      countryNames = shuffleArray(europeCountries);
      originalTotal = europeCountries.length;
    }
    if (selectedOption === "AF") {
      countryNames = shuffleArray(africaCountries);
      originalTotal = africaCountries.length;
    }
    if (selectedOption === "AS") {
      countryNames = shuffleArray(asiaCountries);
      originalTotal = asiaCountries.length;
    }
    if (selectedOption === "OC") {
      countryNames = shuffleArray(oceaniaCountries);
      originalTotal = oceaniaCountries.length;
    }
    if (selectedOption === "ALL") {
      pathElements.forEach((path) => {
        const name = path.getAttribute("name");
        countryNames.push(name);
      });
      originalTotal = countryNames.length;
      console.log(countryNames);
    }
    console.log(originalTotal);
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

let wrongCountries = [];
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
        console.log(countryNames);
        if (countryNames.length === 0) {
          console.log(wrongCountries);
          wrongCountries.forEach((country) => {
            const path = document.querySelector(`path[name="${country}"]`);
            if (path) {
              path.classList.add("clickedCountryWrong");
            }
          });
          //window.alert(`All done with game\nScore: ${currScore}/${currTotal}`);
          currCountryElement.textContent = "Completed!";
          stopTimer();
          timer.classList.add("transparent");
          const flashingInterval = setInterval(() => {
            timer.classList.toggle("transparent");
          }, 200);
          setTimeout(() => {
            clearInterval(flashingInterval);
            timer.classList.remove("transparent");
          }, 5000);
          console.log(`DONE: ${countryNames}`);
        } else {
          if (countryIndex === countryNames.length - 1) {
            countryIndex = 0;
            currCountry = countryNames[countryIndex];
            currCountryElement.textContent = currCountry;
          } else {
            currCountry = countryNames[countryIndex];
            currCountryElement.textContent = currCountry;
          }
        }
      } else {
        wrongCountries.push(currCountry);
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
        /////////////////
        //currTotal = currTotal + 1;
        //currTotalElement.textContent = currTotal;
        countryNames.splice(countryIndex, 1);
        console.log(countryNames);
        if (countryNames.length === 0) {
          console.log(`wrong: ${wrongCountries}`);
          wrongCountries.forEach((country) => {
            const path = document.querySelector(`path[name="${country}"]`);
            if (path) {
              path.classList.add("clickedCountryWrong");
            }
          });
          //window.alert(`All done with game\nScore: ${currScore}/${currTotal}`);
          currCountryElement.textContent = "Completed!";
          console.log(`DONE: ${countryNames}`);
        } else {
          if (countryIndex === countryNames.length - 1) {
            countryIndex = 0;
            currCountry = countryNames[countryIndex];
            currCountryElement.textContent = currCountry;
          } else {
            currCountry = countryNames[countryIndex];
            currCountryElement.textContent = currCountry;
          }
        }

        console.log(`wrong: ${wrongCountries}`);
        wrongCountries.forEach((country) => {
          const path = document.querySelector(`path[name="${country}"]`);
          if (path) {
            path.classList.add("clickedCountryWrong");
          }
        });
      }
    }
  });
});

const leftArrowButton = document.getElementById("qg-game-header-left-arrow");
leftArrowButton.addEventListener("click", function () {
  if (
    countryIndex === 0 ||
    countryNames.length === 1 ||
    countryNames.length === 0
  ) {
  } else {
    countryIndex = countryIndex - 1;
    currCountry = countryNames[countryIndex];
    currCountryElement.textContent = currCountry;
  }
});
const rightArrowButton = document.getElementById("qg-game-header-right-arrow");
rightArrowButton.addEventListener("click", function () {
  if (
    countryIndex === countryNames.length - 1 ||
    countryNames.length === 1 ||
    countryNames.length === 0
  ) {
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
