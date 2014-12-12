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
    $('#button').click(Task.addTask);

    //button.addEventListener('click', Task.addTask, false);
    //dayBegin.addEventListener('onfocus', ClearData(this), false);
}

//
function ClearData(obj) {
    obj.value = ' ';

}
var Task = (function () {
    var div;
    return {
        addTask: function () {
            div = document.createElement('div');
            var root = document.getElementById('taskboard');
            var begin = parseInt(document.getElementById('dayBegin').value);
            var end = parseInt(document.getElementById('dayEnd').value);
            var id;

            div.className = 'task';

            //div.innerHTML = 'Task: ' + taskDescr.value;
            taskHeader(div);
            // closeBut.
            for (var i = begin; i <= end; i++) {
                id = document.getElementById('day' + i);
                id.style.backgroundColor = '#CFB04C';
            }
            root.appendChild(div);
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
    var closeBut, categoryContainer, categories;
    var headDiv;
    headDiv = document.createElement('div');


    categoryContainer = document.createElement('div');
    categoryContainer.className = 'taskHeader';
    categories = document.createElement('select');
    categories.id = 'categorySelector';

    categories.onchange = Task.selectCategory;
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
    closeBut = document.createElement('img');
    closeBut.src = 'images\\Close_delete_remove_exit_cross_x_button_error.png';
    closeBut.alt = 'closeB';
    closeBut.className = 'closeButton';
    headDiv.appendChild(closeBut);
    parent.appendChild(headDiv);
}

function taskBody(parent) {

}

