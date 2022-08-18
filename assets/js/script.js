// saves the time/text input upon clicking the .saveBtn which then persists in loca storage
$(document).ready(function() {
    $(".saveBtn").on('click', function() {
        var textInput = $(this).siblings('.description').val();
        var timeStamp = $(this).parent().attr('id');
        localStorage.setItem(timeStamp, textInput);

        // Give user feedback upon saving their entry
        $(this).html("Saved!")
        setTimeout(function() {
            $(".saveBtn").html("Save");
        }, 1500);
    });

    // check time and update colors accordingly
    var updateTime = function() {
        var currentHour = moment().hours();

        // converts the numbered hour into a number then confirms if the specificed time has passed and if so it changes the class of the item.
        $('.time-block').each(function() {
            var scheduleHour = parseInt($(this).attr("id"));
            if (scheduleHour < currentHour) {
                $(this).addClass("past");
            } else if (scheduleHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            };
        });
    };

    // Local Storage Check & Load
    $('#9 .description').val(localStorage.getItem("9"));
    $('#10 .description').val(localStorage.getItem("10"));
    $('#11 .description').val(localStorage.getItem("11"));
    $('#12 .description').val(localStorage.getItem("12"));
    $('#13 .description').val(localStorage.getItem("13"));
    $('#14 .description').val(localStorage.getItem("14"));
    $('#15 .description').val(localStorage.getItem("15"));
    $('#16 .description').val(localStorage.getItem("16"));
    $('#17 .description').val(localStorage.getItem("17"));
  

    //Call's Update Time Upon Loading and Updates the time every 10 seconds.
    updateTime();
    var checkTime = setInterval(updateTime, 10000);

    $('#currentDay').text(moment().format("dddd, MMMM Do, YYYY, h:mm:ss a"));
});

