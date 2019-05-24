function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

function startLocalTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12;
    m = checkLocalTime(m);
    s = checkLocalTime(s);
    document.getElementById('currentLocalTime').innerHTML =
    h + ":" + m +" "+ampm/* + ":" + s*/;
    var t = setTimeout(startLocalTime, );
}
function checkLocalTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function startBostonTime() {
    var today = new Date();
    var h = today.getUTCHours()-4;
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12;
    m = checkBostonTime(m);
    s = checkBostonTime(s);
    document.getElementById('currentBostonTime').innerHTML =
    h + ":" + m+" "+ampm/* + ":" + s*/;
    var t = setTimeout(startBostonTime, 1830);
}
function checkBostonTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function startSydneyTime() {
    var today = new Date();
    var h = today.getUTCHours()+10;
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12;
    m = checkSydneyTime(m);
    s = checkSydneyTime(s);
    document.getElementById('currentSydneyTime').innerHTML =
    h + ":" + m+" "+ampm/* + ":" + s*/;
    var t = setTimeout(startSydneyTime, 500);
}
function checkSydneyTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');