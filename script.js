function work() {
    console.log("working");
}
var input, dif, pos;

function myFunction() {
    var input = document.getElementById("in").value;
    var dif = document.getElementById("dif").value;
    
    if (document.getElementById("buttonOne").checked == true) {
        var pos = input.search(dif);
        var first = input.slice(0, pos);
        var second = input.slice(pos);
    } 
        else {
            var pos = input.search(dif);
            var difLength = dif.length;
            var first = input.slice(0, pos+difLength);
            var second = input.slice(pos+difLength);
        }
    document.getElementById("vorderTeil").innerHTML = first;
    document.getElementById("hinterTeil").innerHTML = second;
}
