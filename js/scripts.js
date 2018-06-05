// business end
var resultArray = ["1", "2", "3"]
var resultNumber = resultArray[Math.floor(Math.random() * resultArray.length)];

function randomResult () {
  $("#result" + resultNumber).show();
  $('#result'+ resultNumber).scrollView();
  }


  $.fn.scrollView = function() {
  return this.each(function() {
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
  var sum = parseInt(question1) + parseInt(question2) + parseInt(question3) + parseInt(question5);


  if (sum < 5) {
    $("#result1").show();
  } else if (sum > 6 && sum < 10) {
    $("#result2").show();
  } else {
    $("#result3").show();
  }
  $("#result").show();
  $('#result').scrollView();
  $("#addName").prepend(name);
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


function clearForm() {
  $("#name").val("");
  $("input[name=question1]").prop("checked", false);
  $("input[name=question2]").prop("checked", false);
  $("#question3").prop("selectedIndex", 0);
  $("#question4").val("");
  $("input[name=question5]").prop("checked", false);
  checkForm();
  $("#result").hide();
  $("#result1").hide();
  $("#result2").hide();
  $("#result3").hide();
  $("#addName").empty();
  disableAllBtns();

}

// user end
$(document).ready(function() {
  disableAllBtns();

  $("#name, input[name=question1], input[name=question2], #question3, #question4, input[name=question5]").keyup(function() {
    inputHasValues() ? enableAllBtns() : disableAllBtns();
  });

  $("#submit").click(function(e) {
    e.preventDefault();

    checkForm();
    disableAllBtns();

  });

  $("#reset").click(function(e) {
    e.preventDefault();

    clearForm();
  });


});
