//creates dayblock for tasks
//*************************
//date: date of first day for 3 or 7 day view or 
//'today' date for one day view
//daysCount: how manu days are showing in the taskboard
function daySlotCreator(date, daysCount) {
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var blockTemplate;//day block skeleton
    var day = date.getDay();
    //if 3 or 7 days mode is chosen
    if (daysCount > 1) {
        for (var i = date.getDate() ; i < date.getDate() + daysCount; i++) {
            blockTemplate = "<div id = '" + i + "-" + date.getMonth() + "-" + date.getFullYear() + "' class='dayBlock'>" +
                "<h4>" + i + " " + month[date.getMonth()] + ", " + dayName[day] + "</h4></div>";
            $('#taskcontainer').append(blockTemplate);

            day++;
            if (day === 7) {
                day = 0;
            }
        }
    }
        //for one day mode
    else {
        blockTemplate = "<div class='dayBlock'><h4>" + daysCount + " " + month[date.getMonth()] + "</h4></div>";
        $('#taskcontainer').append(blockTemplate);
    }
    //container for tasks 
    var tab = "<table class='table table-bordered'>";
    var rowCount = 5;
    var colCount = 2;
    for (var row = 0; row < rowCount; row++) {
        tab += '<tr>'
        for (var col = 0; col < colCount; col++) {
            tab += "<td class='slot" + row + "-" + col + "' > </td>";

        }
        tab += '</tr>'
    }
    tab += '</table>';
    $('.dayBlock').append(tab);

}
var date;
var coinNum;
//shows modal window
//*************************
//obj: td cell where appears onClick event
function showModal() {
    var obj = $(event.target);
    date = $(obj).parent().parent().parent().parent().attr('id');
    console.log(obj);
    coinNum = $(obj).attr('class');
    $('#dialog-form').dialog('open');
}
//adds new task to the board
//POST
//*************************
function addTask() {
    $.ajax({
        url: '/api/tasks',
        data: JSON.stringify({
            TaskName: $('#name').val(),
            CategoryID: $('#category')[0].selectedIndex,
            Done: 'false',
            TaskDescription: $('#description').val(),
            TaskDate: date,
            CellPos: coinNum

        }),
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
            buildTask(data);

            $("#dialog-form").dialog('close');

        },
        error: function () {
            console.log('error');
        }

    });
}
//builds visual presentation of task from db
//*************************
//data: data about current task from db
function buildTask(data) {
    
  
    var task = "<div class = 'taskItem'> <div>" + data.taskName +
        "<span id = 'acp" + data.taskId + "'  class = 'glyphicon glyphicon-ok-sign navbtns'></span>" +
        "<span id = 'del" + data.taskId + "' class = 'glyphicon glyphicon-remove-sign navbtns'></span>" +
        "</div><span>" + data.taskDescription +"</span></div>";
    $('#' + data.taskDate + ' .' + data.cellPos).append(task);
    switch (data.categoryID) {
        case 1: $('#' + data.taskDate + ' .' + data.cellPos).css('background-color', '#1b9209'); break;
        case 2: $('#' + data.taskDate + ' .' + data.cellPos).css('background-color', '#ff6a00'); break;
        case 3: $('#' + data.taskDate + ' .' + data.cellPos).css('background-color', '#ffd800'); break;
    }
    $('#' + data.taskDate + ' .' + data.cellPos).off('click');
 

}

function showTaskInfo(){

}