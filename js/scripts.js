//Back-end
function pingParse(input) {
  if (input % 3 === 0 && input % 5 === 0) {
    return "ping-pong";
  } else if (input % 3 === 0) {
    return "ping";
  } else if (input % 5 === 0) {
    return "pong";
  } else {
    return input;
  }
}

function pingPong(input) {
  var array = [];
  if (!parseInt(input)) {
    array.push("Please enter a number.");
  } else {
    for (var i = 1; i <= input; i++) {
      array.push(pingParse(i));
    }
  }
  return array;
}


//Front-end
$(function() {

  var appends = 0;

  function displayInput(nums) {
    function append() {
      if (appends > 0) {
        var num = nums.length - appends;
        $("#result").append("<li>" + nums[num] + "</li>");
        if (nums[num] !== "Please enter a number.") {
          $("#bigPong").text(nums[num]);
        }
        appends--;
      } else {
        clearInterval(id);
        $("#bigPong").text("");
      }
    }
    var id = setInterval(append, 500);
  }

  $("#inputForm").submit(function(event) {
    event.preventDefault();

    var input = $("#input").val();
    $("#input").val("");
    $("#result").children().remove();
    var pingPongArray = pingPong(input);
    appends = pingPongArray.length;

    displayInput(pingPongArray);
  });
});
