﻿$(document).ready(function () {
    var imgWidth = 370;
    console.log
    var width = ($(window).width() - imgWidth) + 'px';
    $('#top').css('width', width);

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
          
            $('#floatCalendar').css('width', '300');

            $('#tasks').css('width', $('#tasks').width() - 250 + 'px');
        }
        else {
            flag = false;
            $('#taskForm').switchClass('formShow', 'formHidden', 1000);
        
            $('#floatCalendar').css('width', '50');

            $('#tasks').css('width', $('#tasks').width() + 250 + 'px');
        }
    });
    $('#dateFrom').datepicker({
        showOtherMonths: true,
        selectOtherMonths: true
    });
    $('#dateTo').datepicker({
        showOtherMonths: true,
        selectOtherMonths: true
    });
    $.getJSON('/api/tasks', function (tasksJsonPayLoad) {
        var tskID = new Array();
        var i = 0;
        $(tasksJsonPayLoad).each(function (i, item) {

            $('#accordion').append("<h3>" + item.taskName + ': ' + item.categoryID + "<img id = 'del" + item.taskID + "' class = 'delButton' src = '../Images/basic1-173_close_remove_exit-128.png' alt = 'del' onclick = 'deleteTsk(id)' /></h3");
            
            $('#accordion').append('<div><p> Begin:' + item.taskBegin + 'End: ' + item.taskEnd + '</p></div>');
            tskID.push(item.taskID);
            
        });
        console.log(tskID);
        //$('#accordion h3').append("<img id = 'del" + item.taskID + "' class = 'delButton' src = '../Images/basic1-173_close_remove_exit-128.png' alt = 'del' onclick = 'deleteTsk(id)' />");
        $('#accordion h3').append("<img  class = 'delButton' src = '../Images/basic1-174_ok_success_check-128.png' alt = 'accept' />");
        //$('#accordion h3').append("");
  
        $('#accordion').accordion();
    });

   

});
function deleteTsk(id) {
    console.log(id);
}