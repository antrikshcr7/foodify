const initslider = () => {
  const imagelist = document.querySelector(".slider-wrapper .image-list");
  const slidebuttons = document.querySelectorAll(
    ".slider-wrapper .slide-button"
  );
  const maxscrollLeft = imagelist.scrollWidth - imagelist.clientWidth;
  //slide image according to slide button clicks
  slidebuttons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imagelist.clientWidth * direction;
      imagelist.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });
  const handlesliderbutton = () => {
    slidebuttons[0].style.display =
      imagelist.scrollLeft <= 0 ? "none" : "block";
    slidebuttons[1].style.display =
      imagelist.scrollLeft >= maxscrollLeft ? "none" : "block";
  };
  imagelist.addEventListener("scroll", () => {
    handlesliderbutton();
  });
};

window.addEventListener("load", initslider);

// restuarant slider
document.addEventListener("DOMContentLoaded", function () {
  const restaurantContainer = document.querySelector(".card-slider");
  const leftRButton = document.querySelector(".restaurant-arrow-left");
  const rightRButton = document.querySelector(".restaurant-arrow-right");

  function updateButtonState() {
    leftRButton.disabled = restaurantContainer.scrollLeft <= 0;
    rightRButton.disabled =
      restaurantContainer.scrollLeft + restaurantContainer.offsetWidth >=
      restaurantContainer.scrollWidth;
  }

  leftRButton.onclick = function () {
    restaurantContainer.scrollBy({
      left: -restaurantContainer.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  rightRButton.onclick = function () {
    restaurantContainer.scrollBy({
      left: restaurantContainer.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  restaurantContainer.addEventListener("scroll", updateButtonState);
  updateButtonState();
});

// ads slider
