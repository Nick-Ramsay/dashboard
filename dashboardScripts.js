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
    //Daylight Savings Time North automation start...
    var dst_date = new Date();
    var dst_month = dst_date.getMonth();
    var dst_dom = dst_date.getDate(); //Day of Month
    var dst_dow = dst_date.getDay()+1; //Day of Week, one added to make even with var dom

    var dst_full_months = (dst_month > 3 && dst_month < 9) ? "true":"false"; //Full months of April through September are always DST
    var first_week = dst_dom <= 7 ? "true":"false"; //True means it's still first week of month
    var first_sunday = (first_week == "true" && dst_dow < dst_dom) ? "true":"false"; //First Sunday of first week of month has passed
    var second_week = (dst_dom > 7 && dst_dom < 15) ? "true":"false"; //True means it's the second week of month
    var second_sunday = (second_week == "true" && dst_dow < (dst_dom-7)) ? "true":"false"; //Second Sunday of month has passed
    var second_sunday_march = (dst_month == 2 && second_sunday == "true") ? "true":"false"; //Month is March and second Sunday has passed
    var first_sunday_october = (dst_month == 9 && first_sunday == "true") ? "true":"false"; //Month is October and first Sunday has passed

    var dst = (dst_full_months == "true") || ((second_sunday_march == "true") && (first_sunday_october == "false")) ? 1:0; //If months are May through September OR it is after first Sunday of April and before first Sunday of October
    //Daylight Savings Time North automation end...

    var today = new Date();
    var mh = today.getUTCHours();
    var utc_diff = 7;
    var h = today.getUTCHours()+utc_diff+dst;
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
    //Daylight Savings Time South automation start...
    var dst_date = new Date();
    var dst_month = dst_date.getMonth();
    var dst_dom = dst_date.getDate(); //Day of Month
    var dst_dow = dst_date.getDay()+1; //Day of Week, one added to make even with var dom

    var dst_full_months = (dst_month > 9 && dst_month < 3) ? "true":"false"; //Full months of November through March are always DST
    var first_week = dst_dom <= 7 ? "true":"false"; //True means it's still first week of month
    var first_sunday = (first_week == "true" && dst_dow < dst_dom) ? "true":"false"; //First Sunday of first week of month has passed
    var first_sunday_april = (dst_month == 3 && first_sunday == "true") ? "true":"false"; //Month is April and first Sunday has passed
    var first_sunday_october = (dst_month == 9 && first_sunday == "true") ? "true":"false"; //Month is October and first Sunday has passed

    var dst = (dst_full_months == "true") || ((first_sunday_april == "false") && (first_sunday_october == "true")) ? 1:0; //If months are November through March OR it is before first Sunday of April and after first Sunday of October
    //Daylight Savings Time South automation end...

    var today = new Date();
    var mh = today.getUTCHours();
    var utc_diff = 10;
    var h = today.getUTCHours()+utc_diff+dst;
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

function aboutModal() {
    //Gets the modal
    var modal = document.getElementById("aboutModal");
    //Gets the button that opens the modal
    var btn = document.getElementById("aboutBtn");
    //Get the <span> element that closes modal
    var span = document.getElementsByClassName("modalClose")[0];
    //When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}
