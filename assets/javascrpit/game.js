$(document).ready(function() {
  var random = Math.floor(Math.random() * 101 + 19); //number selected from between 19-120
  $("#randomNumber").text(random);
  //Random numbers for each jewel, from between 1-12
  var num1 = Math.floor(Math.random() * 11 + 1);
  var num2 = Math.floor(Math.random() * 11 + 1);
  var num3 = Math.floor(Math.random() * 11 + 1);
  var num4 = Math.floor(Math.random() * 11 + 1);
  //variables
  var userTotal = 0;
  var wins = 0;
  var losses = 0;

  $("#numberWins").text(wins);
  $("numberLosses").text(losses);
  function reset() {
    random = Math.floor(Math.random() * 101 + 19);
    console.log(random);
    $("#randomNumber").text(random);
    num1 = Math.floor(Math.random() * 11 + 1);
    num2 = Math.floor(Math.random() * 11 + 1);
    num3 = Math.floor(Math.random() * 11 + 1);
    num4 = Math.floor(Math.random() * 11 + 1);
    userTotal = 0;
    $("#finalTotal").text(userTotal);
  }
  //userTotal wins
  function won() {
    alert("You won!");
    wins++;
    $("#numberWins").text(wins);
    reset();
  }
  //userTotal losses
  function loss() {
    alert("You lose!");
    losses++;
    $("#numberLosses").text(losses);
    reset();
  }
  //crystal clicks
  $("#Blue").on("click", function() {
    userTotal = userTotal + num1;
    console.log("New userTotal=" + userTotal);
    $("#finalTotal").text(userTotal);
    //wins or losses
    if (userTotal === random) {
      won();
    } else if (userTotal > random) {
      loss();
    }
  });
  $("#Green").on("click", function() {
    userTotal = userTotal + num2;
    console.log("New userTotal=" + userTotal);
    $("#finalTotal").text(userTotal);
    if (userTotal === random) {
      won();
    } else if (userTotal > random) {
      loss();
    }
  });
  $("#Red").on("click", function() {
    userTotal = userTotal + num3;
    console.log("New userTotal=" + userTotal);
    $("#finalTotal").text(userTotal);
    if (userTotal === random) {
      won();
    } else if (userTotal > random) {
      loss();
    }
  });
  $("#Yellow").on("click", function() {
    userTotal = userTotal + num4;
    console.log("New userTotal=" + userTotal);
    $("#finalTotal").text(userTotal);
    if (userTotal === random) {
      won();
    } else if (userTotal > random) {
      loss();
    }
  });
});
