var visible=document.getElementById("visible");
var invisible=document.getElementById("invisible");
var Input=document.getElementById("input_invisible");

function hideShowPsw() {
    if (Input.type == "password") {
        Input.type = "text";
        invisible.style.display = "none";
        visible.style.display = ""; }
    else {
        Input.type = "password";
        invisible.style.display = ""
        visible.style.display = "none"; } }