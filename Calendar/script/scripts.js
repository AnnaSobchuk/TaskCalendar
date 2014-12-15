/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//main.addEventListener("load",setScreenParam, false);
//window.onresize=setScreenParam(); 
//$(window).load(SetScreenParam);
function SetScreenParam() {

    var width = document.body.clientWidth;
    var today = new Date();
    hed.style.width = width;
    //calendarBtn.onclick=
    CreateTableBody(today.getMonth(), today.getFullYear());
    taskboard.style.width = (width - 310) + 'px';
    date.innerText = 'Today, ' + today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
   
    $('#taskboard').append("<div id = 'button'> Add </div>"); 
    $('#button').click(Task.addTask);
    //button.addEventListener('click', Task.addTask, false);
    //dayBegin.addEventListener('onfocus', ClearData(this), false);
}

//
function ClearData(obj) {
    obj.value = ' ';

}
var Task = (function () {
    var width;
    
    return {
        addTask: function () {
            //div = document.createElement('div');
            //var root = document.getElementById('taskboard');
            var begin = parseInt($('#dayBegin').val());
            //var begin = parseInt(document.getElementById('dayBegin').value);
            //var end = parseInt(document.getElementById('dayEnd').value);
            //var id;
             width = (document.body.clientWidth-400)+'px';
            console.log(width);
            //div.className = 'task';
            //div.id = 'taskId';
            $('#button').before("<div id='taskId' class='task'></div> ");
            $('.task').css('width', width);
            $('.task').append("<div class='taskHeader'></div>");
            $('.taskHeader').append("<div class='catContainer'></div>");
           
            
          
            //taskBody(div);
            //taskFooter(div);
            // closeBut.
//            for (var i = begin; i <= end; i++) {
//                id = document.getElementById('day' + i);
//                id.style.backgroundColor = '#CFB04C';
//            }
            //root.appendChild(div);
        },
        selectCategory: function () {
            var selected = categorySelector.selectedIndex;

            console.log(selected);
            switch (selected) {
                case 1: div.style.backgroundColor = '#8A2BE2'; break;
                case 2: div.style.backgroundColor = '#66CD00'; break;
                case 3: div.style.backgroundColor = '#FFD700'; break;

            }

        }
        


    }
}());




function taskHeader(parent) {
//    var closeBut, categoryContainer, categories;
//    var headDiv;
//    headDiv = document.createElement('div');
//    headDiv.style.height = '40px';
//    headDiv.style.backgroundColor = '#D1654A';
//    headDiv.style.border = '2px solid black';
//    headDiv.style.width = $('#taskId').width;
//
//    categoryContainer = document.createElement('div');
//    categoryContainer.className = 'taskheader';
//    categories = document.createElement('select');
//    categories.id = 'categorySelector';
//
//    categories.onchange = Task.selectCategory;
//    var none = document.createElement('option');
//    none.innerHTML = 'Select category';
//    categories.appendChild(none);
//    var cat1 = document.createElement('option');
//    cat1.innerHTML = 'Coding';
//    cat1.id = 'catOne';
//    categories.appendChild(cat1);
//    var cat2 = document.createElement('option');
//    cat2.innerHTML = 'Homework';
//    cat2.id = 'catTwo';
//    categories.appendChild(cat2);
//    var cat3 = document.createElement('option');
//    cat3.innerHTML = 'Other';
//    cat3.id = 'catThree';
//    categories.appendChild(cat3);
//
//    categoryContainer.appendChild(categories);
//    headDiv.appendChild(categoryContainer);
//    closeBut = document.createElement('img');
//    closeBut.src = 'images\\close_delete_remove_exit_cross_x_button_error.png';
//    closeBut.alt = 'closeB';
//    closeBut.className = 'closeButton';
//    headDiv.appendChild(closeBut);
//    parent.appendChild(headDiv);
}


function taskBody(parent) {

    var taskDescr = document.createElement('div');
    taskDescr.id = 'taskBody';
    var clientWidth = (document.body.clientWidth - 310);
    var text = document.createElement('div');
    text.id = 'taskText';
    text.style.width = (clientWidth - 465) + 'px';
    console.log(clientWidth);
    taskDescr.appendChild(text);
    var dates = document.createElement('div');
    dates.id = 'taskDates';
    var begin = document.createElement('div');
    begin.id = 'dateIn'
    begin.className = 'dateSection';
    insertBeginDataFields(begin);
    dates.appendChild(begin);
    var end = document.createElement('div');
    end.className = 'dateSection';
    dates.appendChild(end);
    taskDescr.appendChild(dates);
    var descrText = document.createElement('textarea');
    descrText.rows = 30;
    descrText.cols = 150;

    text.appendChild(descrText);
    parent.appendChild(taskDescr);
}

function taskFooter(parent) {
    var acceptButton = document.createElement('div');
    acceptButton.id = 'acceptButt';
    parent.appendChild(acceptButton);

}

function insertBeginDataFields(parent) {
    var beginDay, beginMonth, beginYear;
    var span = document.createElement('span');
    span.textContent = 'Task begins: ';
    parent.appendChild(span);
    //$('<span>Task begins: </span>').insertAfter('dateIn');
    //$('#')
    beginDay = document.createElement('input');
    beginDay.type = 'text';
    beginDay.id = 'dayBegin';
    beginDay.size = '2';
    parent.appendChild(beginDay);
    
    
}
