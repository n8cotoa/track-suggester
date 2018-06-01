function checkForm (){

}

$(document).ready(function() {
  var question1 = $("input:radio[name=question1]:checked").val();
  var question2 = $("input:radio[name=question2]:checked").val();
  var question3 = $("#question3").val();
  var question4 = $("#question4").val();
  var question5 = $("input:radio[name=question5]:checked").val();

  $("submit").click(function (e) {
    e.preventDefault();

    checkForm();
  });
});
