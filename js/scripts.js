$(document).ready(function() {
  $("form#tickets").submit(function(event) {
    event.preventDefault();
    debugger
    var movie = $("select#movie").val();
    var showing = $("select#showing").val();
    var age = $("select#age").val();
  });
});
