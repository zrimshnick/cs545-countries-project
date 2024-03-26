const svgContainer = document.getElementById("qg-svg-container");
const pathElements = svgContainer.querySelectorAll("path");
let countryNames = [];

/////// function to get all names into array
pathElements.forEach((path) => {
  const name = path.getAttribute("name");
  countryNames.push(name);
});
console.log(countryNames);
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
      path.classList.contains("clickedCountryCorrect")
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
