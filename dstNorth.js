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

document.write(dst)