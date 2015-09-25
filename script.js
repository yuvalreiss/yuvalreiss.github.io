
function buttonPressed() {
    var message = document.getElementById("message").value;
    
    if (message) {
        var background = document.getElementById("background");
        background.style.background = message;
        
        alert(message);
    }
    else {
        alert("No Message");
    }
}