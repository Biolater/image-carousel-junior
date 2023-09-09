let counter = 0;
const counterText = $(".counter-text");
const increase = $(".increase");
const decrease = $(".decrease");

counterText.text(`${counter}`)


increase.click(function () {
  counter++;
  counterText.text(`${counter}`)
});

decrease.click(function () {
  counter--;
  counterText.text(`${counter}`)
})