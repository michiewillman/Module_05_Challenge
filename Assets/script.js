$(function () {
  // Global variables
  var today = dayjs();
  var eachBlock = $('.time-block');

  // Displays current date in the header
  $('#todaysDate').text(today.format('dddd, MMM D YYYY'));

  // Renders any saved blocks from local storage
  function renderBlocks() {
    var storedBlocks = localStorage.getItem('savedBlocks');

    if (storedBlocks !== null) {
      storedBlocks = JSON.parse(storedBlocks);
      return storedBlocks;
    } else {
      return;
    }
  }
  renderBlocks();

  // Listen for save clicks on any block --> Save input to storage
  $('.save-button')('click', function(event) {
    event.preventDefault();
    var userInput = $(this).siblings(eachBlock).val();
    var time = $(this).parent().attr("id").split("-")[1];
    console.log(userInput);
    localStorage.setItem(time, userInput);
  });


  function addClasses() {
    // Get current time
    var blockTime = $(this).attr("id").split("-")[1];
    var currentHour = dayjs().hour();

    // Compare id of block to the current time
    if (blockTime.isBefore(currentHour)) {
      eachBlock.addClass('past');
    } else if (blockTime.isSame(urrentHour)) {
      eachBlock.addClass('present');
    } else {
      eachBlock.addClass('future');
    }
  }

  addClasses();


  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? 
  


});
