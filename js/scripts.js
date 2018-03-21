function Tickets (movie, showing, age) {
  //debugger
  this.movie = movie;
  this.showing = showing;
  this.age = age;
};


$(document).ready(function() {
  resetValues();
  $("form#tickets").submit(function(event) {
    event.preventDefault();
    //debugger
    var movie = $("select#movie").val();
    var showing = $("select#showing").val();
    var age = $("select#age").val();

    var tickets = new Tickets(movie, showing, age);

    resetValues();
  });
  function resetValues() {
    $("select#movie").val("");
    $("select#showing").val("");
    $("select#age").val("")
  }
});
