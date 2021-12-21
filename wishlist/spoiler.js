arr.push("fsdfdsf");
localStorage.setItem("wishlist", JSON.stringify(arr));
console.log(JSON.parse(localStorage.getItem("wishlist") || "[]"));

let arr = [];

$(".card-bottom-flex img").click(function (e) {
  let card = e.target;
  arr.push("dsfsdff");
  localStorage.setItem("wishlist", JSON.stringify(arr));

  console.log(JSON.parse(localStorage.getItem("wishlist") || "[]"));
});
