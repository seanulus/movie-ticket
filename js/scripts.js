function Tickets (movie, showing, age) {
  //debugger
  this.movie = movie;
  this.showing = showing;
  this.age = age;
};

// if (this.showing === "12:00pm" || "3:00pm") {
//    var matPrice = 5
function resetValues() {
  $("select#movie").val("");
  $("select#showing").val("");
  $("select#age").val("")
}

$(document).ready(function() {
  resetValues();
  $("form#tickets").submit(function(event) {
    event.preventDefault();
    //debugger
    var movie = $("select#movie").val();
    var showing = $("select#showing").val();
    var age = $("select#age").val();

    var tickets = new Tickets(movie, showing, age);

    $("#user-result").show();

    resetValues();
  });
});
