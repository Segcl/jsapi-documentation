var softgames = new Softgames();
softgames.ready(function() {
  $("#ready").html("Ready.");

  $("#getCurrentUser").click(function() {
    softgames.getCurrentUser({include_friends: true}, printResult);
  });
  $("#getUsers").click(function() {
    userIds = prompt("Enter the ids of the users you want to request. E.g. 1,2,3").split(",");
    softgames.getUsers(userIds, {include_friends: true}, printResult);
  });
  $("#startInvite").click(function() {
    // Stop your game
    softgames.startInvite({title: "Play!", message: "Play example game with me."}, function() {
      printResult("Invite closed.");
      // Continue the game
    });
  });
  $("#startPayment").click(function() {
    // Stop your game
    softgames.startPayment();
  });
});

printResult = function(result) {
  $("#result").html(JSON.stringify(result));
};