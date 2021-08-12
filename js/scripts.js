$(document).ready(function() {
  $("#answer").submit(function(event) {
    event.preventDefault();
    const starSign = parseInt($("input:radio[name=sign]:checked").val());
    // const color = parseInt($("#faveColor").val());
    // const age = parseInt($("#ageInput").val());
    if (starSign === 1) {
      $("#elon1").show();
    } else if (starSign === 2) {
      $("#elon2").show();
    } else if (starSign === 3) {
      $("#elon3").show();
    } else 
      $("#elon4").show();
    }
  );
});