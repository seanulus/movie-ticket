function Tickets (movie, showing, age) {
  this.movie = movie;
  this.showing = showing;
  this.age = age;
};

function ticketPriceMaker(showing, age) {
  debugger;
  var ticketPrice = 150;
  if ((showing !== "6:00pm" || "9:00pm") && (age !== "Adult")) {
      ticketPrice -= 7;
    } else {
      ticketPrice += 0
    } return ticketPrice
  }
// else {
//       ticketPrice -= 2;
//     }
//   } else if (showing === "6:00pm" || "9:00pm") {
//     if (age === "Youth" || "Senior") {
//       ticketPrice -= 5;
//     } else {
//       return ticketPrice
//     }
//   } else {
//     return ticketPrice
//   }
// }


//     ticketPrice -= 5;
//   } else if (age === "Youth" || "Senior") {
//     ticketPrice -= 2;
//   } else {
//     ticketPrice = ticketPrice + 0;
//   // } else if (age === "Adult") {
//   //   ticketPrice = ticketPrice + 0;
//   } return ticketPrice;
// }


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
    var ticketPrice = ticketPriceMaker(showing, age)

    $("#movie-name").text(tickets.movie);
    $("#movie-showing").text(tickets.showing);
    $("#movie-price").text(ticketPrice);

    $("#user-result").show();

    resetValues();
  });
});
