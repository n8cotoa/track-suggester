// business end
function checkForm() {
  var question1 = $("input:radio[name=question1]:checked").val();
  var question2 = $("input:radio[name=question2]:checked").val();
  var question3 = $("#question3").val();
  var question4 = $("#question4").val();
  var question5 = $("input:radio[name=question5]:checked").val();

  if (question1 === "a" && question2 === "b" && question3 === "3" && (question4.length > 5) && question5 === "c") {
    $("#result1").show();
  // } else if {
  //
  // } else {

  }
}

function clearForm() {
  $("#name").val("");
  $("input[name=question1]").prop("checked", false);
  $("input[name=question2]").prop("checked", false);
  $("#question3").prop("selectedIndex", 0);
  $("#question4").val("");
  $("input[name=question5]").prop("checked", false);
}
// user end
$(document).ready(function() {
  // var question1 = $("input:radio[name=question1]:checked").val();
  // var question2 = $("input:radio[name=question2]:checked").val();
  // var question3 = $("#question3").val();
  // var question4 = $("#question4").val();
  // var question5 = $("input:radio[name=question5]:checked").val();

  $("#submit").click(function(e) {
    e.preventDefault();

    checkForm();
  });

  $("#reset").click(function(e) {
    e.preventDefault();

    clearForm();
  });
});
