/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//main.addEventListener("load",setScreenParam, false);
//window.onresize=setScreenParam(); 
//$(window).load(SetScreenParam);

$(document).ready(function () {
    var width = document.body.clientWidth;
    var today = new Date();
    hed.style.width = width;
    //calendarBtn.onclick=
    calendar.CreateTableBody(today.getMonth(), today.getFullYear());
    taskboard.style.width = (width - 310) + 'px';
    date.innerText = 'Today, ' + today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
    $('#designPicker').change(changeView);
    $('#taskboard').append("<div id = 'button'> Add </div>");
    $('#button').click(taskEventHandlers.addTask);
    $('#main').resize(function () {
        var width = document.body.clientWidth;
        taskboard.style.width = (width - 310) + 'px';
    });
}

    );


//
var taskEventHandlers = (function () {
    var div;
    var width;
    var index = 0;
    return {
        addTask: function () {
            div = document.createElement('div');
            //var begin = parseInt($('#dayBegin').val());
            //var begin = parseInt(document.getElementById('dayBegin').value);
            //var end = parseInt(document.getElementById('dayEnd').value);
            //var id;    

            width = (document.body.clientWidth - 400) + 'px';
            console.log(width);
            div.className = 'task';
            div.id = 'taskId';
            div.style.width = width;

            $('#button').before(div);
            $('#button').css('width', width);
            //$('.task').css('width', width);
            // $('#taskId').append("<div class='taskHeader' id='taskHed'></div>");
            //$('#taskHed').append("<div id='selectCat'  class='catContainer'></div>");


            task.taskHeader(div);
            task.taskBody(div);
            task.taskFooter(div);
            $('#button').css('display', 'none');
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
                case 1:
                    $('.headContainer').css('background-color','#8A2BE2');
                    break;
                case 2:
                     $('.headContainer').css('background-color','#66CD00');
                    break;
                case 3:
                     $('.headContainer').css('background-color', '#FFD700');
                    break;

            }

        }



    }
}());



var task = (function () {
    var index = 0;
    return{
        taskHeader: function (parent) {
            var categoryContainer, categories;
            var headDiv;
            headDiv = document.createElement('div');
            headDiv.className = 'headContainer';
            headDiv.style.width = $('#taskId').width;

            categoryContainer = document.createElement('div');
            categoryContainer.className = 'catContainer';
            categories = document.createElement('select');
            categories.id = 'categorySelector';

            categories.onchange = taskEventHandlers.selectCategory;
            var none = document.createElement('option');
            none.innerHTML = 'Select category';
            categories.appendChild(none);
            var cat1 = document.createElement('option');
            cat1.innerHTML = 'Coding';
            cat1.id = 'catOne';
            categories.appendChild(cat1);
            var cat2 = document.createElement('option');
            cat2.innerHTML = 'Homework';
            cat2.id = 'catTwo';
            categories.appendChild(cat2);
            var cat3 = document.createElement('option');
            cat3.innerHTML = 'Other';
            cat3.id = 'catThree';
            categories.appendChild(cat3);

            categoryContainer.appendChild(categories);
            headDiv.appendChild(categoryContainer);


            parent.appendChild(headDiv);
        },
        taskBody: function (parent) {

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
            begin.id = 'dateIn';
            begin.className = 'dateSection';
            insertBeginDataFields(begin);

            dates.appendChild(begin);
            var end = document.createElement('div');
            end.className = 'dateSection';
            dates.appendChild(end);
            insertEndDataFields(end);
            taskDescr.appendChild(dates);
            var descrText = document.createElement('textarea');
            descrText.rows = 30;
            descrText.cols = 190;

            text.appendChild(descrText);
            parent.appendChild(taskDescr);
        },
        taskFooter: function (parent) {
            var closeBut = document.createElement('input');
            closeBut.className = 'acceptCloseButt';
            closeBut.type = 'submit';
            closeBut.value = 'Cancel';
            
            var acceptButton = document.createElement('input');
            acceptButton.className = 'acceptCloseButt';
            acceptButton.type = 'submit';
            acceptButton.onclick = 
            acceptButton.value = 'Accept';
            parent.appendChild(acceptButton);
            parent.appendChild(closeBut);

        }
    }
}());

function insertBeginDataFields(parent) {

    var beginDay, beginMonth, beginYear;
    var border = document.createElement('div');
    border.className = 'border';
    parent.appendChild(border);
    var span = document.createElement('span');
    span.textContent = 'Task begins: ';
    parent.appendChild(span);
    beginDay = document.createElement('input');
    beginDay.type = 'text';
    beginDay.id = 'dayBegin';
    beginDay.size = '2';
    beginDay.value = 'day';
   beginDay.onclick = function(){beginDay.value = ' ';};
    parent.appendChild(beginDay);
    beginMonth = document.createElement('input');
    beginMonth.type = 'text';
    beginMonth.id = 'monthBegin';
    beginMonth.size = '2';
    beginMonth.value = 'month';
    beginMonth.onclick = function(){beginMonth.value = ' ';};
    parent.appendChild(beginMonth);
    beginYear = document.createElement('input');
    beginYear.type = 'text';
    beginYear.id = 'yearBegin';
    beginYear.size = '2';
    beginYear.value = 'year';
    beginYear.onclick = function(){beginYear.value = ' ';};
    parent.appendChild(beginYear);



}

function insertEndDataFields(parent) {
    var endDay, endMonth, endYear;
    var border = document.createElement('div');
    border.className = 'border';
    parent.appendChild(border);
    var span = document.createElement('span');
    span.textContent = 'Task ends: ';
    parent.appendChild(span);
    endDay = document.createElement('input');
    endDay.type = 'text';
    endDay.id = 'dayEnd';
    endDay.size = '2';
    endDay.value = 'day';
    endDay.onclick = function(){endDay.value = ' ';};
    parent.appendChild(endDay);
    endMonth = document.createElement('input');
    endMonth.type = 'text';
    endMonth.id = 'monthEnd';
    endMonth.size = '2';
    endMonth.value = 'month';
    endMonth.onclick = function(){endMonth.value = ' ';};
    parent.appendChild(endMonth);
    endYear = document.createElement('input');
    endYear.type = 'text';
    endYear.id = 'yearEnd';
    endYear.size = '2';
    endYear.value = 'year';
    endYear.onclick = function(){endYear.value = ' ';};
    parent.appendChild(endYear);
}

function changeView(){
    var index = $('#designPicker option:selected').index();
    console.log(index);
    switch(index){
        case 1:
            $('#main').css('background-image','none');
            $('#hed').css('background-color','#EFDFAE');
            $('#calendarContainer').css('background-color','transparent')
            break;
        case 2: 
            $('#main').css('background-image','url(images/58985-30987.jpg)');
            $('#hed').css('background-color','transparent');
            $('#calendarContainer').css('background-color','#EFDFAE');
            break;
    }
}

function acceptClick() {

}
