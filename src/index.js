import "./styles.scss";
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slide = document.querySelector(".slide");
const imgs = [...document.querySelectorAll(".slideImg")];
const dots = document.querySelector(".bottom");

let sliderCount = 1;
let imgLenght = imgs.length;

// =========DOTS========
for (let i = 0; i < imgLenght; i++) {
  const div = document.createElement("div");
  div.className = "btn";
  dots.append(div);
}

const buttons = document.querySelectorAll(".btn");
buttons[0].style.backgroundColor = "white";

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    resetButton();
    slide.style.transform = `translateX(-${index * 800}px)`;
    sliderCount = index + 1;
    btn.style.backgroundColor = "white";
  });
});

// =========FUNCTIONs========
function nextSlide() {
  slide.style.transform = `translateX( -${sliderCount * 800}px)`;
  sliderCount++;
}

function prevSlide() {
  slide.style.transform = `translateX( -${(sliderCount - 2) * 800}px)`;
  sliderCount--;
}

function getTheFirstSlide() {
  slide.style.transform = `translateX(0px)`;
  sliderCount = 1;
}
function getTheLastSlide() {
  slide.style.transform = `translateX(${(imgLenght - 1) * 800})`;
  sliderCount = imgLenght;
}

function resetButton() {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
}

function changeButtonColor() {
  resetButton();
  buttons[sliderCount - 1].style.backgroundColor = "white";
}

// =========ADD EVENTS RIGHT SIDE========
right.addEventListener("click", () => {
  sliderCount < imgLenght ? nextSlide() : getTheFirstSlide();
  changeButtonColor();

  // 800 = 800 * 1
  // 800 = 1600 * 2
  // 800 = 24000 * 3
  // 800 = 3200 * 4
});

// =========ADD EVENTS RIGHT SIDE========
left.addEventListener("click", () => {
  sliderCount > 1 ? prevSlide() : getTheLastSlide();
  changeButtonColor();

  // 800 = 800 * 1
  // 800 = 1600 * 2
  // 800 = 24000 * 3
  // 800 = 3200 * 4
});
