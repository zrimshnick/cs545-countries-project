/* document.addEventListener("DOMContentLoaded", function () {
  const landingPageContainer = document.querySelector("#landingPage-container");
  const clone = landingPageContainer.cloneNode(true);
  landingPageContainer.parentNode.appendChild(clone);

  let animation = null;

  function startAnimation() {
    if (animation) return;

    animation = setInterval(() => {
      const currentBackgroundPosition = parseInt(
        getComputedStyle(landingPageContainer)
          .getPropertyValue("background-position")
          .split(" ")[0]
      );
      const newBackgroundPosition = currentBackgroundPosition - 1;
      landingPageContainer.style.backgroundPosition = `${newBackgroundPosition}% 0`;

      if (newBackgroundPosition <= -100) {
        landingPageContainer.style.backgroundPosition = "0% 0";
      }
    }, 20);
  }

  function stopAnimation() {
    clearInterval(animation);
    animation = null;
  }

  startAnimation();
});
 */
