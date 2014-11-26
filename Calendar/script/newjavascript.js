/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var days = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
var table;
var div;
//add month name + weekdays names
function CreateTableHeader(month, year) {
    var root = document.getElementById('calendarContainer');
    if (root.firstElementChild === table) {
        root.removeChild(table);
    }
    table = document.createElement('table');
    var td;
    var tr;
    var opt;
    var sel;
    // table.border = '2';
    table.className = 'calendar';
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
        if (month === i) {
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

//add monthDay numbers
function CreateTableBody(month, year) {
    var today = new Date();
    var date = new Date();
    var tmpDay;
    var tr;
    var td;
    date.setMonth(month, 1);
    date.setFullYear(year);
    var day = date.getDay();
    var daysInMonth = 32 - new Date(year, month, 32).getDate();
    console.log('day: ' + day);
    console.log('month: ' + month);
    console.log('days in month: ' + daysInMonth);
    CreateTableHeader(month, year);
    tr = document.createElement('tr');
    table.appendChild(tr);
    var i = 0;
    var j = 1;
    while (j <= daysInMonth) {
        if (i === 47) {
            break;
        }
        if (i >= day) {
            td = document.createElement('td');
            tmpDay = new Date(year, month, j).getDay();
            if (tmpDay === 6 || tmpDay === 0) {
                td.style.color = '#29A2AE';
            }
            if (j === today.getDate()) {
                td.style.color = '#868880';
                td.style.border = '2px solid #868880';
                //td.style.borderColor = '';
            }

            td.id = 'day' + j;
            td.className = 'mDay';
            td.innerHTML = j;
            tr.appendChild(td);
            if (i % 7 === 6) {

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

function SelectionChange() {
    var selIndex = monthsSel.selectedIndex;
    console.log('selected index: ' + selIndex);
    CreateTableBody(selIndex, 2014);
}

