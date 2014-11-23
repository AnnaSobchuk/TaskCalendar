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
    root = document.getElementById('calendar');
    table = document.createElement('table');
    var td;
    var tr;
    var opt;
    var sel;
    var Currentmonth = date.getMonth();
    var year = date.getFullYear();
    table.border = '2';
    root.appendChild(table);
    tr = document.createElement('tr');
    table.appendChild(tr);
    td = document.createElement('td');
    td.colSpan = '4';
    sel = document.createElement('select');
    sel.id = 'monthsSel';
    sel.onchange = SelectionChange;
    td.appendChild(sel);
    for (var i = 0; i < months.length; i++) {
        opt = document.createElement('option');
        opt.innerHTML = months[i];
        if (Currentmonth == i) {
            opt.selected = 'selected';
        }
        sel.appendChild(opt);
    }

    tr.appendChild(td);
    td = document.createElement('td');
    td.colSpan = '3';
    td.innerHTML = year;
    tr.appendChild(td);

    tr = document.createElement('tr');
    table.appendChild(tr);
    for (var i = 0; i < days.length; i++) {
        td = document.createElement('td');
        td.innerHTML = days[i];
        tr.appendChild(td);
    }

}

function CreateTableBody() {
    CreateTableHeader();
    var d = new Date();
    var date = new Date(d.getMonth(), d.getFullYear(), 0);
    var tr;
    var td;

    var day = date.getDay();
    if (day === 0)
        day = 7;
    tr = document.createElement('tr');
    table.appendChild(tr);
    var i = 1;
    var j = 1;
    while (i > 0) {

        if (i === 47) {
            break;
        }
        if (i >= day) {
            if (j === date.getDate()){
                break;
            }
            td = document.createElement('td');
            td.innerHTML = j;
            tr.appendChild(td);

            if (i % 7 === 0) {
                tr = document.createElement('tr');
                table.appendChild(tr);
            }
            j++;
        }
        else {
            td = document.createElement('td');
            td.innerHTML = '';
            tr.appendChild(td);
        }
        i++;

    }

}

function SelectionChange(){
    var selIndex=monthsSel.selectedIndex;
    console.log('selected index N'+selIndex);
    
}

