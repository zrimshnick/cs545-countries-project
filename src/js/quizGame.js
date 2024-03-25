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
  if (
    clickedPath.classList.contains("clickedCountryWrong") ||
    clickedPath.classList.contains("clickedCountryCorrect")
  ) {
    //clickedPath.classList.remove("clickedCountry");
  } else {
    clickedPath.classList.add("clickedCountryCorrect");
  }
}

// Add event listener to the SVG container
svgContainer.addEventListener("click", changeColorOnClick);
