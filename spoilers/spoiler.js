$(document).ready(function () {
  $(".card").show(500);
});
$(".gamburger").click(function () {
  $(".gamburger img").hide();
  $(".gamburger-menu").slideDown();
});
$(".gamburger-menu img").click(function () {
  $(".gamburger-menu").slideUp();
  $(".gamburger img").show();
});
