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

/////////
const fetchCountryData = async (country) => {
  let countryName = country;
  const countryNameURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

  try {
    const res = await fetch(countryNameURL);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    // countryData here
    const countryData = await res.json();
    return countryData;
  } catch (e) {
    console.log("Error fetching data", e);
    alert("Failed to fetch country info");
  }

  return countryData;
};

const getDataOnClick = async (event) => {
  const clickedPath = event.target;
  const allPaths = svgPath.querySelectorAll("path");

  if (clickedPath.classList.contains("clickedCountry")) {
    const countryData = await fetchCountryData(
      clickedPath.getAttribute("name")
    );
    console.log(countryData);
    return countryData;
  }
};
svgPath.addEventListener("click", getDataOnClick);

//// popup
const dimmer = document.getElementById("country-info-dimmer");
const popupOuter = document.getElementById("country-info-outer-container");
const popupInner = document.getElementById("country-info-inner-container");

dimmer.addEventListener("click", function () {
  popupOuter.classList.add("hidden");
  dimmer.classList.add("hidden");
  popupInner.classList.add("hidden");
});
