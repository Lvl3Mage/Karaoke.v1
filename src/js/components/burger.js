$(".burger").addClass("unToggled");
$(".burger").onClick(function () {
  $(this).toggleClass("toggled");
  $(this).toggleClass("unToggled");
  // also open menu here...
});