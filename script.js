// const hiddenH3s = document.querySelectorAll('.d-none');
const skillBoxes = document.querySelectorAll('.skill-box');

skillBoxes.forEach(box =>
  box.addEventListener("mouseenter", () => box.firstElementChild.classList.remove('d-none'))
);

skillBoxes.forEach(box =>
  box.addEventListener("mouseleave", () => box.firstElementChild.classList.add('d-none'))
);



