////////////////////////////////////////////////////////////
//Back-end
////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////
//Front-end
////////////////////////////////////////////////////////////

$(function() {

  var appends = 0;
  var pings = 0;
  var pongs = 0;

// A home-made loop that allows for delay between appending each li
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
      scrollDown($("#result"));
    }
    var id = setInterval(append, 600);
  }

// Updates bigPong and the pings and pongs score fields
  function updateBigs(input) {
    $("#bigPong").text(input);
    $("#pings").text(pings);
    $("#pongs").text(pongs);
  }

// Tallies total pings and pongs
  function updatePingsPongs(input) {
    if (input === "ping") {
      pings++;
    } else if (input === "pong") {
      pongs++;
    } else if (input === "ping pong") {
      pings++;
      pongs++;
    }
  }

//Automatically scrolls the ul down when a new element is added
  function scrollDown(input) {
    var clientHeight = input[0].clientHeight;
    var scrollHeight = input[0].scrollHeight;
    var scrollTop =  input[0].scrollTop;
    var isScrolledToBottom = scrollHeight - clientHeight <= scrollTop;
    if (!isScrolledToBottom) {
      input[0].scrollTop = scrollHeight - clientHeight;
    }
  };


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
