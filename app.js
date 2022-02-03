const dropdownClick = document.querySelectorAll(".faq-dropdown");

// console.log(dropdownClick);

dropdownClick.forEach((item) => {
  item.addEventListener("click", function () {
    item.childNodes[3].classList.toggle("change");
    item.childNodes[1].children[1].classList.toggle("fa-times");
  });
});
