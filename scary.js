let booleanVar = false;
function boo() {
    if (booleanVar === false) {
        document.getElementById("yayks").style.display = "block";
        document.getElementById("aww").style.display = "none";
        booleanVar = true;
    } else {
        document.getElementById("yayks").style.display = "none";
        document.getElementById("aww").style.display = "block";
        booleanVar = false;
    }
}