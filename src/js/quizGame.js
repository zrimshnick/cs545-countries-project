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
let currCountry = countryNames[0];
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
// function to click country
function clickOnCountry(event) {
  const clickedPath = event.target;
  const pathName = event.target.getAttribute("name");
  // Add permanentColor class to the clicked path
  if (pathName === currCountry) {
    clickedPath.classList.add("clickedCountryCorrect");
    currScore = currScore + 1;
    currScoreElement.textContent = currScore;
    currTotal = currTotal + 1;
    currTotalElement.textContent = currTotal;
  } else {
    clickedPath.classList.add("clickedCountryWrong");
    currTotal = currTotal + 1;
    currTotalElement.textContent = currTotal;
  }
}
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
      } else {
        console.log(`Clicked: ${this.getAttribute("name")} WRONG`);
        path.classList.add("clickedCountryWrong");
      }
    }
  });
});
