$(function () {
  // Displays current date in the header
  var today = dayjs();
  $('#todaysDate').text(today.format('dddd, MMM D YYYY'));

  // Listen for save clicks on any block --> Save input to storage
  $('.save-button').on('click', function(event) {
    event.preventDefault();

    var time = $(this).parent().attr('id');
    var task = $(this).siblings('.details').val();

    localStorage.setItem(time, task);
  });

  $('.clear-button').on("click", function(event) {
    event.preventDefault();

    var task = $(this).siblings('.details');

    task.val("Add Task");
    localStorage.clear(task.val());

  });

  // Get current time
  var timeBlock = $('.time-block');
  var currentHour = dayjs().hour();

  // Compare id of block to the current time
  timeBlock.each(function () {
    var chosenTime = parseInt($(this).attr("id").split("hour-")[1]);

    if (chosenTime < currentHour) {
      timeBlock.addClass('past');
    } else if (chosenTime === currentHour) {
      timeBlock.addClass('present');
    } else {
      timeBlock.addClass('future');
    }

  });


  // Get item from local storage if any
  $("#hour-8 .details").val(localStorage.getItem("hour-8"));
  $("#hour-9 .details").val(localStorage.getItem("hour-9"));
  $("#hour-10 .details").val(localStorage.getItem("hour-10"));
  $("#hour-11 .details").val(localStorage.getItem("hour-11"));
  $("#hour-12 .details").val(localStorage.getItem("hour-12"));
  $("#hour-13 .details").val(localStorage.getItem("hour-13"));
  $("#hour-14 .details").val(localStorage.getItem("hour-14"));
  $("#hour-15 .details").val(localStorage.getItem("hour-15"));
  $("#hour-16 .details").val(localStorage.getItem("hour-16"));
  $("#hour-17 .details").val(localStorage.getItem("hour-17"));


});