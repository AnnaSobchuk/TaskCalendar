/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var days = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
var table;
//month name + weekdays names
function CreateTableHeader() {
    var date = new Date();
    var root = document.getElementById('calendar');
    table = document.createElement('table');
    var td;
    var tr;
    var Currentmonth = date.getMonth();
    var year = date.getFullYear();
    table.border = '2';
    root.appendChild(table);
    tr = document.createElement('tr');
    table.appendChild(tr);
    td = document.createElement('td');
    td.innerHTML = '<<';
    tr.appendChild(td);
    td = document.createElement('td');
    td.colSpan = '5';
    td.innerHTML = months[Currentmonth] + ' ' + year;
    tr.appendChild(td);
    td = document.createElement('td');
    tr.appendChild(td);
    td.innerHTML = '>>';
    tr = document.createElement('tr');
    table.appendChild(tr);
    for (var i = 0; i < days.length; i++) {
        td = document.createElement('td');
        td.innerHTML = days[i];
        tr.appendChild(td);
    }

}
//days numbers
function CreateTableBody() {
    CreateTableHeader();
    var tr;
    var td;
    var col = 7;//table columns
    for (var i = 0; i < days.length; i++) {
        tr = document.createElement('tr');
        table.appendChild(tr);
        for (var j = 0; j < col; j++) {
            td = document.createElement('td');
            td.innerHTML = i;
            tr.appendChild(td);
        }
    }
}
   
