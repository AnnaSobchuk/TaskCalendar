$(document).ready(function () {

    //('.page-header').css('margin', '20px 0 20px');

    $('#tasks').css('width', ($(window).width() - 50) + 'px');
    //$('#tasks').css('height', ($(window).height() - 300) + 'px');


    $.getJSON('/api/tasks', function (tasksJsonPayLoad) {

        $(tasksJsonPayLoad).each(function (i, item) {
            //if (item.done === false) {
                $('#accordion').append("<h3>" + item.taskName + "<img  class = 'delButton' src = '../Images/basic1-174_ok_success_check-128.png' alt = 'accept'/> <img id = '" + item.taskID + "' class = 'delButton' src = '../Images/basic1-173_close_remove_exit-128.png' onclick = 'deleteTsk(id)' alt = 'del' /></h3");
                $('#accordion').append('<div><p>do something important</p></div>');
            //}
        });
        $('#accordion').accordion();
    });

    $('#addB').click(function () {
        $.ajax({
            url: 'http://localhost:52550/api/tasks',
            data: JSON.stringify({
                TaskName: $('#tName').val(),
                TaskID: $('#tID').val(),
                CategoryID: '1',
                Done: 'false'

            }),
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                console.log(data);
                $('#accordion').append("<h3>" + data.taskName + "<img id = '" + data.taskID + "' class = 'delButton' src = '../Images/basic1-173_close_remove_exit-128.png' onclick = 'deleteTsk(id)' alt = 'del' /></h3");
                $('#accordion').append('<div><p> do something important </p></div>');
                $('#accordion').accordion('refresh');
            },
            error: function () {
                console.log('error');
            }

        });

    });
    $('#tabs').tabs();
    $('#planned').css('background-color', '#EAEDDB');
    $('#planned').click(function () {
        $('#solved').css('background-color', '');
        $('#planned').css('background-color', '#EAEDDB');
        $('#solvedContainer').switchClass('partShow','partHide' , 100);
        $('#plannedContainer').switchClass('partHide', 'partShow', 100);
    });
    $('#solved').click(function () {
        $('#planned').css('background-color', '');
        $('#solved').css('background-color', '#EAEDDB');
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