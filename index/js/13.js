$("html").on("click", function() {
    $(this).toggleClass("on");
  });
  setTimeout(function() {
    $("html").addClass("on");
  }, 1000);