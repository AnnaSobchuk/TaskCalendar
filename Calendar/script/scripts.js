/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//main.addEventListener("load",setScreenParam, false);
//window.onresize=setScreenParam();
function setScreenParam(){
  var width= document.body.clientWidth;
//console.log("i'm working!");
 hed.style.width = width; 
taskboard.style.width=(width-305)+"px";;
 // 
}

       //onload="setScreenParam()"