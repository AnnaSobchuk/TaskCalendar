/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//main.addEventListener("load",setScreenParam, false);
//window.onresize=setScreenParam();
function setScreenParam(){
    

  var width= document.body.clientWidth;
  var today = new Date();
 
//console.log("i'm working!");
 hed.style.width = width; 
taskboard.style.width=(width-305)+"px";
date.innerText ="Today, "+today.getDate()+"."+(today.getMonth()+1)+"."+today.getFullYear();
 // 
}

       //onload="setScreenParam()"
       
       function AddTask(){
           var root=document.getElementById("taskboard");
           var div=document.createElement('div');
           root.appendChild(div);
           div.className="task";
           
       }