document.getElementById("submit").onclick = function(){
    alert("Submitted Succesfully");
    document.getElementById("para").innerHTML = "Hello, "+document.getElementById("name").value;
}

document.getElementById("cancel").onclick = function(){
    location.reload();
}