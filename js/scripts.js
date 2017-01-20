//Back-end
function pingParse(input) {
  if (input % 3 === 0 && input % 5 === 0) {
    return "ping pong";
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
  var pings = 0;
  var pongs = 0;

  function updateBigs(input) {
    $("#bigPong").text(input);
    $("#pings").text(pings);
    $("#pongs").text(pongs);
  }

  function updatePingsPongs(input) {
    if (input === "ping") {
      pings++;
    } else if (input === "pong") {
      pongs++;
    } 
  }

  function displayInput(nums) {
    function append() {
      if (appends > 0) {
        var num = nums.length - appends;
        $("#result").append("<li>" + nums[num] + "</li>");
        if (nums[num] !== "Please enter a number.") {
          updatePingsPongs(nums[num]);
          updateBigs(nums[num]);
        }
        appends--;
      } else {
        clearInterval(id);
        $("#bigPong").text("");
      }
      $("#result").scroll();
    }
    var id = setInterval(append, 400);
  }

  $("#result").scroll(function() {
    var clientHeight = $("#result")[0].clientHeight;
    var scrollHeight = $("#result")[0].scrollHeight;
    var scrollTop =  $("#result")[0].scrollTop;
    var isScrolledToBottom = scrollHeight - clientHeight <= scrollTop;
    if (!isScrolledToBottom) {
       $("#result")[0].scrollTop = scrollHeight - clientHeight;
    }
  });

  $("#inputForm").submit(function(event) {
    event.preventDefault();

    var input = $("#input").val();
    $("#input").val("");
    pings = 0;
    pongs = 0;
    $("#result").children().remove();
    var pingPongArray = pingPong(input);
    appends = pingPongArray.length;

    displayInput(pingPongArray);
  });
});
