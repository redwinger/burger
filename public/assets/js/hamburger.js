$(function() {
  $(".eat").on("click", function(event) {
    var id = $(this).data("id");
    var eaten = $(this).data("eaten");

    var eatenState = {
      devoured: eaten
    };
    $.ajax("/burger/" + id, {
      type: "PUT",
      data: eatenState
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: 0
    };

    $.ajax("/burger/", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});
