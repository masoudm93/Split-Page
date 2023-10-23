$(document).ready(function () {
  var right = $(".right");
  var left = $(".left");
  left.mouseenter(function () {
    $(".container").addClass("left-is-hover");
  });
  left.mouseleave(function () {
    $(".container").removeClass("left-is-hover");
  });

  right.mouseenter(function () {
    $(".container").addClass("right-is-hover");
  });
  right.mouseleave(function () {
    $(".container").removeClass("right-is-hover");
  });
});
