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
    var mh = today.getHours();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = mh >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12;
    m = checkLocalTime(m);
    s = checkLocalTime(s);
    document.getElementById('currentLocalTime').innerHTML =
    h + ":" + m +" "+ampm/* + ":" + s*/;
    var t = setTimeout(startLocalTime, 1830);
}
function checkLocalTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function startPortlandTime() {
    var today = new Date();
    var mh = today.getUTCHours();
    var h = today.getUTCHours()+8;
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = h < 12 || h >= 24 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12;
    m = checkPortlandTime(m);
    s = checkPortlandTime(s);
    document.getElementById('currentPortlandTime').innerHTML =
    h + ":" + m+" "+ampm/* + ":" + s*/;
    var t = setTimeout(startPortlandTime, 1830);
}
function checkPortlandTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function startSydneyTime() {
    var today = new Date();
    var mh = today.getUTCHours();
    var h = today.getUTCHours()+10;
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = h > 11 && h < 24 || h >= 36 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12;
    m = checkPortlandTime(m);
    s = checkPortlandTime(s);
    document.getElementById('currentSydneyTime').innerHTML =
    h + ":" + m+" "+ampm/* + ":" + s*/;
    var t = setTimeout(startSydneyTime, 1830);
}
function checkSydneyTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
