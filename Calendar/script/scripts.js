/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//main.addEventListener("load",setScreenParam, false);
//window.onresize=setScreenParam();
function SetScreenParam() {

    var width = document.body.clientWidth;
    var today = new Date();
    hed.style.width = width;
    //calendarBtn.onclick=
    CreateTableBody(today.getMonth(), today.getFullYear());
    taskboard.style.width = (width - 310) + 'px';
    date.innerText = 'Today, ' + today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
    button.addEventListener('click', AddTask, false);
    //dayBegin.addEventListener('onfocus', ClearData(this), false);
}

//
function ClearData(obj) {
  obj.value = ' ';

}

function AddTask() {
    var root = document.getElementById('taskboard');
    var begin = parseInt(document.getElementById('dayBegin').value);
    var end = parseInt(document.getElementById('dayEnd').value);
    var id;
    var closeBut;
    var div = document.createElement('div');
    div.className = 'task';
    div.innerHTML = 'Task: ' + taskDescr.value;
    closeBut = document.createElement('div');
   // closeBut.
    for (var i=begin; i<=end;i++){
        id = document.getElementById('day' + i);
       id.style.backgroundColor='#CFB04C';
    }
    root.appendChild(div);
}

