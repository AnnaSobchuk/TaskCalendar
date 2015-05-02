$(function () {
    var lMenuWidth = 250;
    var showDay = 1;//for one day view
    var showThree = 3; //for three day view
    var showWeek = 7; //for week view
    var today = new Date();
    var rowCount = 5;
    var colCount = 3
    var width = ($(window).width() - lMenuWidth) + 'px';
     $('#taskcontainer').css('width', width);
     daySlotCreator(today, showThree);
    //initialize dialog for adiing tasks
    var dialog = $('#dialog-form').dialog({
         autoOpen: false,
         height: 400,
         width: 300,
         modal: true,
         buttons: {
             'Add Task': addTask,
             Cancel: function () {
                 dialog.dialog('close');
             }
         },
         close: function () {
             
         }
    });
   
    //GET
    $.getJSON('/api/tasks', function (tasksJsonPayLoad) {

        $(tasksJsonPayLoad).each(function (i, item) {
            buildTask(item);
           
        });
     
    });

    var rowCount = 5;
    var colCount = 2;
    for (var row = 0; row < rowCount; row++) {
        for (var col = 0; col < colCount; col++) {
            $('.slot' + row + '-' + col).on('click', showModal);
            $('.slot' + row + '-' + col).droppable({
                accept: "",
                activeClass: "",
                drop: function (event, ui) {
                   
                }
            });
        }
    }

    //$('.taskItem').parent().off('click');
    //console.log($('.taskItem').parent());
    $('.taskItem').draggable({
        revert: 'invalid',
        containment: 'document',
        helper: 'clone',
        cursor: 'move'
    });
   
});