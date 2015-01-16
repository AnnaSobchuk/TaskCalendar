$(document).ready(function () {
    var imgWidth = 210;
    console.log
    var width = ($(window).width() - imgWidth) + 'px';
    $('#top').css('width', width);
    $('.page-header').css('margin', '20px 0 20px');
    var today = new Date();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    $('#data').text('The ' + today.getDate() + 'th of ' + months[today.getMonth()] + ' ' + today.getFullYear());
   
    $('#tasks').css('width', ($(window).width() - 50) + 'px');
    //$('#tasks').css('height', ($(window).height() - 300) + 'px');
   
    var flag = false;
    $('#navButt').click(function () {
       
        if (flag === false) {
            flag = true;
            
            $('#taskForm').switchClass('formHidden', 'formShow', 1000);
          
            $('#floatCalendar').css('height', '300');

            //$('#tasks').css('width', $('#tasks').width() - 250 + 'px');
        }
        else {
            flag = false;
            $('#taskForm').switchClass('formShow', 'formHidden', 1000);
        
            $('#floatCalendar').css('height', '50');

           // $('#tasks').css('width', $('#tasks').width() + 250 + 'px');
        }
    });
    $('#dateFrom').datepicker({
        showOtherMonths: true,
        selectOtherMonths: true
    });
   
    $.getJSON('/api/tasks', function (tasksJsonPayLoad) {
        var tskID = new Array();
        var i = 0;
        var today = new Date();
       
        $(tasksJsonPayLoad).each(function (i, item) {
          
           
                $('#accordion').append("<h3>" + item.taskName + ': ' + item.categoryID + "<img  class = 'delButton' src = '../Images/basic1-174_ok_success_check-128.png' alt = 'accept'/> <img id = '" + item.taskID + "' class = 'delButton' src = '../Images/basic1-173_close_remove_exit-128.png' onclick = 'deleteTsk(id)' alt = 'del' /></h3");

                $('#accordion').append('<div><p>' + item.taskTime + '</p></div>');
                tskID.push(item.taskID);
            
        });
        $('#accordion').accordion();
        console.log(tskID);    
       
        //$('#accordion h3').append("<img  class = 'delButton' src = '../Images/basic1-174_ok_success_check-128.png' alt = 'accept' />");
    
  
       
 
    });

    $('#addB').click(function () {
        $.ajax({
            url: 'http://localhost:52550/api/tasks',
            data: JSON.stringify({
                TaskName: $('#tName').val(),
                TaskID: $('#tID').val(),
                CategoryID: '1',
                TaskTime: $('#dateFrom').val(),
                
             }),
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                console.log(data);
                $('#accordion').append("<h3>" + data.taskName + ': ' + data.categoryID + "<img id = '" + data.taskID + "' class = 'delButton' src = '../Images/basic1-173_close_remove_exit-128.png' onclick = 'deleteTsk(id)' alt = 'del' /></h3");
                $('#accordion').append('<div><p> ' + data.taskTime + '</p></div>');
                $('#accordion').accordion('refresh');
            },
            error: function () {
                console.log('error');
            }

        });
      
    });
    $('#tabs').tabs();
    
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