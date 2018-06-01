// business end
var resultArray = ["1", "2", "3"]
var resultNumber = resultArray[Math.floor(Math.random() * resultArray.length)];

function randomResult () {
  $("#result" + resultNumber).show();
  $('#result'+ resultNumber).scrollView();
  }

  $.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
}

function checkForm() {
  var name = $("#name").val();
  var question1 = $("input:radio[name=question1]:checked").val();
  var question2 = $("input:radio[name=question2]:checked").val();
  var question3 = $("#question3").val();
  var question4 = $("#question4").val();
  var question5 = $("input:radio[name=question5]:checked").val();

  if (question1 === "a" && question2 === "b" && question3 === "3" && (question4.length < 10) && question5 === "c") {
    $("#result1").show();
    $('#result1').scrollView();

  } else if (question1 === "b" && question2 ==="c" && question3 === "2" && (question4.length > 20) && question5 === "b") {
    $("#reseult2").show();
    $('#result2').scrollView();
  } else if (question1 === "c" && question2 === "a" && question3 === "1" && question5 === "a") {
    $("#result3").show();
    $('#result3').scrollView();
  } else {
    randomResult();
    $("div#addName").prepend("<h4>Hey! " + name + ", you should try:</h4>");
  }
}

function inputHasValues() {
  if ( $("#name").val() && $("input:radio[name=question1]").val() && $("input:radio[name=question2]").val() && $("#question3").val() && $("#question4").val() && $("input:radio[name=question5]").val() ) {
    return true;
  } else {
    return false;
  }
}

function disableAllBtns() {
  $("#submit").prop('disabled', 'true');
}

function enableAllBtns() {
  $("#submit").removeAttr("disabled");
}


// function clearForm() {
//   $("#name").val("");
//   $("input[name=question1]").prop("checked", false);
//   $("input[name=question2]").prop("checked", false);
//   $("#question3").prop("selectedIndex", 0);
//   $("#question4").val("");
//   $("input[name=question5]").prop("checked", false);
//
//   $("#result" + resultNumber).hide();
//   $("h4#addName").hide();
// }

// user end
$(document).ready(function() {
  // var question1 = $("input:radio[name=question1]:checked").val();
  // var question2 = $("input:radio[name=question2]:checked").val();
  // var question3 = $("#question3").val();
  // var question4 = $("#question4").val();
  // var question5 = $("input:radio[name=question5]:checked").val();
  disableAllBtns();

  $("#name, input[name=question1], input[name=question2], #question3, #question4, input[name=question5]").keyup(function() {
    inputHasValues() ? enableAllBtns() : disableAllBtns();
  });

  $("#submit").click(function(e) {
    e.preventDefault();

    checkForm();

  });

  $("#reset").click(function(e) {
    e.preventDefault();
    location.reload();
    // clearForm();
  });


});
