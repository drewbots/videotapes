/**
 * Please change brush color in above css box.
 */













// Paint on hover.
var chbx = $(".paintbox").find(".btn");
chbx.hover(function() {
  $this = $(this);
  $this.attr("checked", "true");
});

// Reset things.
var reset = $(".reset");
reset.click(function() {
  chbx.removeAttr("checked");
});