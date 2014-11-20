/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var months = ['january', 'february', ''];
var days = ['su', 'mo','tu','we','th','fr','sa','su' ];

function CreateTableHeader(){
    var date=new Date();
    var root= document.getElementById('calendar');
    var table = document.createElement('table');
    var td;
    var tr;
    var Currentmonth = date.getMonth();
    var year=date.getFullYear();
    table.border='2';
    root.appendChild(table);
    tr = document.createElement('tr');
    table.appendChild(tr);
    td= document.createElement('td');
    tr.appendChild(td);
    td=document.createElement('td');
    td.colspan='3';
    td.innerHTML= months[Currentmonth+1]+year;
    tr.appendChild(td);
    td=document.createElement('td');
    tr.appendChild(td);
    tr = document.createElement('tr');
    table.appendChild(tr);
    for (var i=0;i< days.length;i++){
        td = document.createElement('td');
        td.innerHTML=days[i];
        tr.appendChild(td);    
    }
    
}


        //CORES 356
