let index = 0;

function showImage(i) {
  index += i;
  const images = $(".image");
  const dots = $(".dots span");
  images.eq(index).fadeOut(200)
  images.hide();
  dots.removeClass("active");
  if (index > images.length - 1) {
    index = 0;
  }
  if (index < 0) {
    index = images.length - 1;
  }
  images.eq(index).fadeIn(200)

  images.eq(index).show();
  dots.eq(index).addClass("active");
}

$(document).ready(function () {
  showImage(index); // Call showImage function when the document is ready
});