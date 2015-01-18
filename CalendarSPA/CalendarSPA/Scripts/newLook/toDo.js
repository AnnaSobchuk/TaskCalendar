$(document).ready(function () {
    var todayParced = $.datepicker.formatDate('mm/dd/yy', new Date());
    $('#tabs').css('width', ($(window).width() - 600) + 'px');
    $('#tabs').tabs();
    $('#solve').tabs();
    $('#datepicker').datepicker();
    $('#datePicker').datepicker({
        onSelect: (function (dateText, inst) {
            console.log(dateText);
            $.getJSON('/api/tasks', function (tasksJsonPayLoad) {

                $(tasksJsonPayLoad).each(function (i, item) {
                    if (item.taskDate === dateText) {
                        $('#homework').empty();
                        $('#accordion').empty();
                        $('#education').empty();
                        getSuccess(item);
                    }
                });
                $('#homework').accordion();
                $('#accordion').accordion();
                $('#education').accordion();
            });
        })
});
   $.getJSON('/api/tasks', function (tasksJsonPayLoad) {

        $(tasksJsonPayLoad).each(function (i, item) {
           
            //if (item.taskDate === todayParced) {
                
                getSuccess(item);
           // }
        });
        $('#homework').accordion();
        $('#accordion').accordion();
        $('#education').accordion();
    });
    $('#addB').click(function () {
        $.ajax({
            url: 'http://localhost:52550/api/tasks',
            data: JSON.stringify({
                TaskName: $('#tName').val(),
                TaskID: $('#tID').val(),
                CategoryID: $('#categories')[0].selectedIndex,
                Done: 'false',
                TaskDescription: $('#descr').val(),
                TaskDate: $('#datepicker').val()

            }),
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                if (data.taskDate === todayParced) {
                    bildPlannedTask(data);

                }

            },
            error: function () {
                console.log('error');
            }

        });

    });
    $('#planned').css('background-color', '#ffffff');
    $('#planned').click(function () {
        $('#solved').css('background-color', '');
        $('#planned').css('background-color', '#ffffff');
        $('#solvedContainer').switchClass('partShow', 'partHide', 100);
        $('#plannedContainer').switchClass('partHide', 'partShow', 100);
    });
    $('#solved').click(function () {
        $('#planned').css('background-color', '');
        $('#solved').css('background-color', '#ffffff');
        $('#plannedContainer').switchClass('partShow', 'partHide', 100);
        $('#solvedContainer').switchClass('partHide', 'partShow', 100);

    });


});
function deleteTsk(id) {
    console.log(id);
    $.ajax({
        url: 'http://localhost:52550/api/tasks/' + id,
        dataType: 'json',
        type: 'DELETE',
        success: function (data) {
            console.log('deleted');
            $('#' + id).parent().next().empty();
            $('#' + id).parent().next().remove();
            $('#' + id).parent().remove();
            $('#' + id).parent().empty();

        },
        error: function () {
            console.log('error');
        }

    });



}

function setSolved(id) {
    var strID = id.substring(4);
    $.ajax({
        url: 'http://localhost:52550/api/tasks/' + strID,
        type: 'PUT',
        dataType: 'json',
       success: function (data, textStatus, xhr) {
            $('#' + strID).parent().next().empty();
            $('#' + strID).parent().next().remove();
            $('#' + strID).parent().remove();
            $('#' + strID).parent().empty();
            switch (data.categoryID) {
                case 1:
                    $('#programmingDone').append("<div><h5 class = 'title'>" + data.taskName + "<button id='undo" + data.taskID + "'class = 'btn btn-info delButton' type='button' onclick = 'notYetDone(id)'>Not jet done?</button></h5><p>" + data.taskDescription + "</p></div>");
                    break;
                case 2:
                    $('#homeworkDone').append("<div><h5 class = 'title'>" + data.taskName + "<button id='undo" + data.taskID + "'class = 'btn btn-info delButton' type='button' onclick = 'notYetDone(id)'>Not jet done?</button></h5><p>" + data.taskDescription + "</p></div>");
                    break;
                case 3:
                    $('#educationDone').append("<div><h5 class = 'title'>" + data.taskName + "<button id='undo" + data.taskID + "'class = 'btn btn-info delButton' type='button' onclick = 'notYetDone(id)'>Not jet done?</button></h5><p>" + data.taskDescription + "</p></div>");
                    break;
            }
          },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation');
        }


    });

}

function notYetDone(id) {
    var strID = id.substring(4);
    $.ajax({
        url: 'http://localhost:52550/api/tasks/' + strID,
        type: 'PUT',
        dataType: 'json',
        success: function (data, textStatus, xhr) {
            $('#' + id).parent().next().empty();
            $('#' + id).parent().next().remove();
            $('#' + id).parent().remove();
            $('#' + id).parent().empty();
            bildPlannedTask(data);
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation');
        }


    });
}

function bildPlannedTask (data ){
    switch (data.categoryID) {
        case 1:
            $('#accordion').append("<h3>" + data.taskName + " <img id = '" + data.taskID + "' class = 'delButton' src = '../Images/basic1-173_close_remove_exit-128.png' onclick = 'deleteTsk(id)' alt = 'del' /><img id='nydn" + data.taskID + "' class = 'delButton' src = '../Images/basic1-174_ok_success_check-128.png' alt = 'accept' onclick = 'setSolved(id)'/></h3");
            $('#accordion').append('<div><p>' + data.taskDescription + '</p></div>');
            $('#accordion').accordion('refresh'); break;
        case 2:
            $('#homework').append("<h3>" + data.taskName + "<img id = '" + data.taskID + "' class = 'delButton' src = '../Images/basic1-173_close_remove_exit-128.png' onclick = 'deleteTsk(id)' alt = 'del' /><img id='nydn" + data.taskID + "' class = 'delButton' src = '../Images/basic1-174_ok_success_check-128.png' alt = 'accept' onclick = 'setSolved(id)'/></h3");
            $('#homework').append('<div><p>' + data.taskDescription + '</p></div>');
            $('#homework').accordion('refresh'); break;
        case 3:
            $('#education').append("<h3>" + data.taskName + "<img id = '" + data.taskID + "' class = 'delButton' src = '../Images/basic1-173_close_remove_exit-128.png' onclick = 'deleteTsk(id)' alt = 'del' /><img id='nydn" + data.taskID + "' class = 'delButton' src = '../Images/basic1-174_ok_success_check-128.png' alt = 'accept' onclick = 'setSolved(id)'/></h3");
            $('#education').append('<div><p> ' + data.taskDescription + '</p></div>');
            $('#education').accordion('refresh'); break;
    }
}

function getSuccess(item) {
    if (item.done === false) {

        switch (item.categoryID) {
            case 1:
                $('#accordion').append("<h3>" + item.taskName + "<img id = '" + item.taskID + "'class = 'delButton' src = '../Images/basic1-173_close_remove_exit-128.png' onclick = 'deleteTsk(id)' alt = 'del' /> <img id='acpt" + item.taskID + "' class = 'delButton' src = '../Images/basic1-174_ok_success_check-128.png' alt = 'accept' onclick = 'setSolved(id)'/></h3");
                $('#accordion').append('<div><p>' + item.taskDescription + '</p></div>');

                break;
            case 2:
                $('#homework').append("<h3>" + item.taskName + "<img id = '" + item.taskID + "' class = 'delButton' src = '../Images/basic1-173_close_remove_exit-128.png' onclick = 'deleteTsk(id)' alt = 'del' /><img id='acpt" + item.taskID + "' class = 'delButton' src = '../Images/basic1-174_ok_success_check-128.png' alt = 'accept' onclick = 'setSolved(id)'/></h3");
                $('#homework').append('<div><p>' + item.taskDescription + '</p></div>');
                break;
            case 3:
                $('#education').append("<h3>" + item.taskName + "<img id = '" + item.taskID + "' class = 'delButton' src = '../Images/basic1-173_close_remove_exit-128.png' onclick = 'deleteTsk(id)' alt = 'del' /><img id='acpt" + item.taskID + "' class = 'delButton' src = '../Images/basic1-174_ok_success_check-128.png' alt = 'accept' onclick = 'setSolved(id)'/></h3");
                $('#education').append('<div><p>' + item.taskDescription + '</p></div>');
                break;
        }
    } else {
        switch (item.categoryID) {
            case 1:
                $('#programmingDone').append("<div><h5 class = 'title'>" + item.taskName + "<button id='nydo" + item.taskID + "'class = 'btn btn-info delButton' type='button' onclick = 'notYetDone(id)'>Not jet done?</button></h5><p>" + item.taskDescription + "</p></div>");
                break;
            case 2:
                $('#homeworkDone').append("<div><h5 class = 'title'>" + item.taskName + "</h5><p>" + item.taskDescription + "</p></div>");
                break;
            case 3:
                $('#educationDone').append("<div><h5 class = 'title'>" + item.taskName + "</p><div>" + item.taskDescription + "</p></div>");
                break;
        }
    }
}