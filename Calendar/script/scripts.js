/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//main.addEventListener("load",setScreenParam, false);
//window.onresize=setScreenParam();
function setScreenParam() {

    var width = document.body.clientWidth;
    var today = new Date();
    hed.style.width = width;
    //calendarBtn.onclick=
    CreateTableBody(today.getMonth(), today.getFullYear());
    taskboard.style.width = (width - 310) + 'px';
    date.innerText = 'Today, ' + today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();

}

function AddTask(text) {
    var root = document.getElementById('taskboard');
    var div = document.createElement('div');

    root.appendChild(div);
    div.className = 'task';
    div.innerHTML = text;
    //console.log(idDay);
    //idDay.style.border='2px solid #CFB04C';

}
function addTestTask(day) {
    var id;
    for (var i = 20; i < day; i++) {
        id = 'day' + i;
        AddTask(id, "�� ��������� �� ����!!!");

    }
}