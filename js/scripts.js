//business logic
function Place(location, landmark, timeYear, note) {
  this.locationName = location;
  this.landmarksName = landmark;
  this.notesName = note;
  this.timeYearName = timeYear;
}

Place.prototype.fetures = function() {
  return this.locationName + " " + this.landmark + " " + this.notesName + " " + this.timeYear;
}



$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var locationInput = $("input#location").val();
    var landmarkInput = $("input#landmark").val();
    var notesInput = $("input#notes").val();
    var yearInput = $("input#year").val();

    var finalPlace = new Place(locationInput, landmarkInput, notesInput, yearInput);

    $("ul#places").append("<li><span class='place'>" + finalPlace.locationName + "</span></li>");

    $(".place").last().click(function() {
      $("#show-places").show();
      $("#show-places h2").text(finalPlace.locationName);
      $(".location").text(finalPlace.locationName);
      $(".land").text(finalPlace.landmarksName);
      $(".note").text(finalPlace.notesName);
      $(".time").text(finalPlace.timeYearName);
});


  });
});
