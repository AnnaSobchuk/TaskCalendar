/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var months = ['january', 'february', ''];
var days = ['su', 'mo','tu','we','th','fr','sa','su' ];
 var table;
function CreateTableHeader(){
    var date=new Date();
    var root= document.getElementById('calendar');
   table = document.createElement('table');
    var td;
    var tr;
    var Currentmonth = date.getMonth();
    var year=date.getFullYear();
    table.border='2';
    root.appendChild(table);
    tr = document.createElement('tr');
    table.appendChild(tr);
    td= document.createElement('td');
    td.innerHTML='<<'
    tr.appendChild(td);
    td=document.createElement('td');
    td.colspan='4';
    td.innerHTML= months[Currentmonth+1]+''+year;
    tr.appendChild(td);
    td=document.createElement('td');
    tr.appendChild(td);
    td.innerHTML='>>';
    tr = document.createElement('tr');
    table.appendChild(tr);
    for (var i=0;i< days.length;i++){
        td = document.createElement('td');
        td.innerHTML=days[i];
        tr.appendChild(td);    
    }
    
}

function CreateTableBody(){
  CreateTableHeader();
    var tr;
    var td;
    var col=6;
    var row=6;
    for (var i=0; i<col; i++){
        tr = document.createElement('tr');
        table.appendChild(tr);
       //for (var j=0; j<col; col++){
           td = document.createElement('td');
           td.innerHTML=i;
           tr.appendChild(td);
       //}
    }
}
   
