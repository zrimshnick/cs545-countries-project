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
const popupOuter = document.getElementById("country-info-outer-container");

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
    let countryData = await fetchCountryData(clickedPath.getAttribute("name"));
    countryData = countryData[0];
    console.log(countryData);

    const commonName = document.getElementById("country-info-name");
    const officialName = document.getElementById("country-info-official-name");
    const flag = document.getElementById("country-info-flag");
    const capital = document.getElementById("country-info-capital");
    const population = document.getElementById("country-info-population");
    const currency = document.getElementById("country-info-currency");
    commonName.textContent = `${countryData.name.common}`;
    officialName.textContent = `Official Name: ${countryData.name.official}`;
    flag.textContent = `${countryData.flag}`;
    capital.textContent = `Capital: ${countryData.capital[0]}`;
    population.textContent = `Population: ${countryData.population.toString()}`;
    const currencyName = Object.keys(countryData.currencies)[0].toString();
    currency.textContent = `Currency: ${countryData.currencies[currencyName].name} (${currencyName} | ${countryData.currencies[currencyName].symbol})`;

    //
    if (popupOuter.classList.contains("hidden")) {
      popupOuter.classList.remove("hidden");
    }
    return countryData;
  }
};
svgPath.addEventListener("click", getDataOnClick);

/*      
<div class="hidden" id="country-info-outer-container">
        <div id="country-info-dimmer"></div>
        <div id="country-info-inner-container">
          <div id="country-info-name">Country Name</div>
          <div id="country-info-official-name">Country Name</div>
          <div id="country-info-flag">FLAG</div>
          <div id="country-info-capital">Capital here</div>
          <div id="country-info-population">Population here</div>
          <div id="country-info-currency">Currency here</div>
        </div> */

//// popup
const dimmer = document.getElementById("country-info-dimmer");
dimmer.addEventListener("click", function () {
  popupOuter.classList.add("hidden");
});
