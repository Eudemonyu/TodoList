$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});
$("ul").on("click", "span", function() {
  $(this).parent().fadeOut(1000, function() {
    $(this).remove();
  });
  event.stopPropagation()
});
$("input").keyup(function(event) { if (event.which === 13) {
  var newList = $(this).val();
  $(this).val("");
  $("ul").append("<li><span><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span> " + newList + "</li>")
}
});

$(".fa-plus").click(function() {
  $("input").fadeToggle();
});
