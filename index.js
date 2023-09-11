const attrs = ["https://miguelznunez.github.io/ImageCarousel/Lam0.jpg", "https://miguelznunez.github.io/ImageCarousel/Lam1.jpg", "https://miguelznunez.github.io/ImageCarousel/Lam2.jpg", "https://miguelznunez.github.io/ImageCarousel/Lam3.jpg", "https://miguelznunez.github.io/ImageCarousel/Lam4.jpg", "https://miguelznunez.github.io/ImageCarousel/Lam5.jpg", "https://miguelznunez.github.io/ImageCarousel/Lam6.jpg", "https://miguelznunez.github.io/ImageCarousel/Lam7.jpg"];
const prev = $("#prev");
const next = $("#next");
let counter = 0;
const dots = $(".dots span")
let image = $("img");
image.attr("src", attrs[counter]);

prev.click(function () {
  dots.removeClass("active");
  counter--;
  if (counter < 0) {
    counter = attrs.length - 1;
  }
  dots.eq(counter).addClass("active")
  image.fadeOut(100, function () {
    image.attr("src", attrs[counter]);
    image.fadeIn(100);
  });
});

next.click(function () {
  dots.removeClass("active");
  counter++;
  if (counter >= attrs.length) {
    counter = 0;
  }
  dots.eq(counter).addClass("active")

  image.fadeOut(100, function () {
    image.attr("src", attrs[counter]);
    image.fadeIn(100);
  });
});