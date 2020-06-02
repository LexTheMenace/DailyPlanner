var date = document.getElementById("currentDay");

var container = document.getElementById("container")

function workDay(){
  var i;
    for (i = 8; i < 17; i++){
        var d = new Date();
        var n = d.getHours();

        var newDiv = document.createElement("div")
        var newRow = document.createElement("span"); 
        var textBox = document.createElement("textarea")
        var button = document.createElement("button"); 
        img = document.createElement("img");
      newDiv;
      newDiv.setAttribute("class", "timeBlock")
        newRow.setAttribute("class", "time")
        textBox.setAttribute("type", "text");
        newRow.setAttribute("id", [i])
        
        if (i > 12){
             newRow.textContent = ([i] - 12 + " PM");
         }
         else if (i < 12){
             newRow.textContent = [i] + " AM";   
         }
         else if (i = 12){
             newRow.textContent = "12 PM";
        }
        button.setAttribute("class", "saveBtn")
        img.setAttribute("src", "Assets/floppy.svg")
        button.appendChild(img);
// DELETE?               textBox.setAttribute("id", [i])
        container.appendChild(newDiv);
        newDiv.appendChild(newRow); 
        newDiv.appendChild(textBox);
        newDiv.appendChild(button); 

       // Set Color Scheme based on Time
        if (i < n) {
            textBox.setAttribute("class", "past");         
        } else if (i > n) {
            textBox.setAttribute("class", "future");
        } else {
            textBox.setAttribute("class", "present");
        }
    
}}

var textBoxx = document.getElementsByTagName("textarea")
function saveItem(){
console.log(textBoxx)
    localStorage.setItem("content", textBoxx[0].value)
    localStorage.setItem("content1", textBoxx[1].value)
    localStorage.setItem("content2", textBoxx[2].value)
    localStorage.setItem("content3", textBoxx[3].value)
    localStorage.setItem("content4", textBoxx[4].value)
    localStorage.setItem("content5", textBoxx[5].value)
    localStorage.setItem("content6", textBoxx[6].value)
    localStorage.setItem("content7", textBoxx[7].value)
    localStorage.setItem("content8", textBoxx[8].value)
};

// Keeps date current
function dateTime(){
date.textContent = new Date();    
}

// Start date clock
setInterval(dateTime, 1000)
//Retrieves text info from local storage
document.body.onload = function(){
    textBoxx[0].textContent = localStorage.getItem("content")
    textBoxx[1].textContent = localStorage.getItem("content1")
    textBoxx[2].textContent = localStorage.getItem("content2")
    textBoxx[3].textContent = localStorage.getItem("content3")
    textBoxx[4].textContent = localStorage.getItem("content4")
    textBoxx[5].textContent = localStorage.getItem("content5")
    textBoxx[6].textContent = localStorage.getItem("content6")
    textBoxx[7].textContent = localStorage.getItem("content7")
    textBoxx[8].textContent = localStorage.getItem("content8")
};

workDay();

var save = document.getElementsByClassName("saveBtn");

for (i = 0; i < save.length; i++){
save[i].addEventListener("click", saveItem);

} 

document.addEventListener('click', function(e){
    if(e.target.tagName === "button"){
     alert('BUTTON CLICKED');
    }
  })

  // add onload function for getiing info from local storage