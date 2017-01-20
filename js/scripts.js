//Back-end
function pingPong(input) {
  if (!parseInt(input)) {
    return ["Please enter a number."];
  }
}


//Front-end
$(function() {
  function displayInput(nums) {
    nums.forEach(function(num) {
      $("#result").append("<li>" + num + "</li>");
    });
  }

  $("#inputForm").submit(function(event) {
    event.preventDefault();

    var input = $("#input").val();
    console.log(input);
    var pingPongArray = pingPong(input);

    displayInput(pingPongArray);
  });
});
