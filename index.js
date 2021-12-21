let slide1 = $(".slider111");
let back = $(".slider1-back");
let slide2 = $(".slider222");
let slide3 = $(".slide33");
let slide4 = $(".slide44");
let left = $(".slider-left");
let right = $(".slider-right");
let counter = 1;
right.click(function () {
  if (counter == 1) {
    slide1.hide(300);
    slide2.show(300);

    counter = 2;
  } else if (counter == 2) {
    slide2.hide(300);
    slide1.show(300);
    counter = 1;
  }
});
left.click(function () {
  if (counter == 1) {
    slide1.hide(300);
    slide2.show(300);

    counter = 2;
  } else if (counter == 2) {
    slide2.hide(300);
    slide1.show(300);
    counter = 1;
  }
});
$(".modal-btn").click(function () {
  $(".modal-close").show();
});
$(".modal-close-btn").click(function () {
  $(".modal-close").hide();
});
$(".gamburger").click(function () {
  $(".gamburger-menu").slideDown();
});
$(".gamburger-menu img").click(function () {
  $(".gamburger-menu").slideUp();
});
let win = $(window);

$(window).on("scroll", function () {
  let window1 = win.scrollTop();
  console.log(window1);
  let needWin = 800;
  if (window1 > needWin) {
    $(".scroll-img").show(400);
  } else {
    $(".scroll-img").hide(400);
  }
});
$(window).on("scroll", function () {
  let window1 = win.scrollTop();
  let needSlide = 2000;
  if (window1 > needSlide) {
    $(".ncard1").slideDown(1000);
    setTimeout(function () {
      $(".ncard2").slideDown(1000);
    }, 500);
    setTimeout(function () {
      $(".ncard3").slideDown(1000);
    }, 1000);
  } else {
    $(".news-card").hide();
  }
});
$(".btn-submit").click(function () {
  $(".btn-submit").addClass("none");
  $(".input-submit").addClass("none");
  $(".email-block").show();
});
