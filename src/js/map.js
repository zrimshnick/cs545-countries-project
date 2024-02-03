// JavaScript file
document.addEventListener("DOMContentLoaded", function () {
  // Set up map container dimensions
  const width = document.getElementById("map-container").offsetWidth;
  const height = 500;

  // Create SVG element
  const svg = d3
    .select("#world-map")
    .attr("width", width)
    .attr("height", height);

  // Load GeoJSON data
  d3.json(
    "C:UserszrimsOneDriveDesktopcs545-countries-projectsrcmapcustom.geo.json"
  ).then(function (geojson) {
    // Draw map using GeoJSON data
    svg
      .selectAll("path")
      .data(geojson.features)
      .enter()
      .append("path")
      .attr("d", d3.geoPath())
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);
  });

  // Function to handle mouseover event
  function handleMouseOver(event, d) {
    // Display information about the country
    console.log(d.properties.name); // Replace with your own logic
  }

  // Function to handle mouseout event
  function handleMouseOut() {
    // Remove information display or update as needed
  }
});
