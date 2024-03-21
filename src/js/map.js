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

const svgPaths = document.querySelectorAll("#svg-container path");
const tooltip = document.getElementById("tooltip");
svgPaths.forEach((path) => {
  path.addEventListener("mouseover", handleMouseOver);
  path.addEventListener("mouseout", handleMouseOut);
});

function handleMouseOver(event) {
  const pathName = event.target.getAttribute("name");
  const pathNamecl = event.target.getAttribute("class");
  updateTooltipContent(pathName, pathNamecl, event.pageX, event.pageY);
}

function handleMouseOut() {
  tooltip.style.display = "none";
}

function updateTooltipContent(pathName, pathNamecl, mouseX, mouseY) {
  if (pathName) {
    tooltip.textContent = pathName;
    tooltip.style.display = "block";
    tooltip.style.left = mouseX + "px";
    tooltip.style.top = mouseY + "px";
  } else if (pathNamecl) {
    tooltip.textContent = pathNamecl;
    tooltip.style.display = "block";
    tooltip.style.left = mouseX + "px";
    tooltip.style.top = mouseY + "px";
  }
}
