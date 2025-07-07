function btn(value) {
    var display = document.getElementById('display');
    display.value += value;
}

function cleard() {
    var display = document.getElementById('display');
    display.value = "";
}

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
function cube() {
    var display = document.getElementById('display');
    display.value = (+display.value) **3;
}

function square() {
    var display = document.getElementById('display');
    display.value = (+display.value) ** 2;
}

function sum() {
    var display = document.getElementById('display');
    try {
        display.value = new Function("return " + display.value)();
    } catch (error) {
        display.value = "Error";
    }
}
var mywindow;
function confirmClose() {
  if (confirm("Are you sure you want to close this page?")) 
  {
    window.close();
    
  }
}
