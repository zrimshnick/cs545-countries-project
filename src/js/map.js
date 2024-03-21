const svgPath = document.getElementById("svg-container");
// Function to change color on click
function changeColorOnClick(event) {
  const clickedPath = event.target;
  const allPaths = svgPath.querySelectorAll("path");

  /*   // Remove permanentColor class from all paths
  allPaths.forEach((path) => {
    path.classList.remove("clickedCountry");
  }); */

  // Add permanentColor class to the clicked path
  if (clickedPath.classList.contains("clickedCountry")) {
    clickedPath.classList.remove("clickedCountry");
  } else {
    clickedPath.classList.add("clickedCountry");
  }
}

// Add event listener to the SVG container
svgPath.addEventListener("click", changeColorOnClick);
