function age(){
    var d1 = document.getElementById("day").value;
    var m1 = document.getElementById("month").value;
    var y1 = document.getElementById("year").value;

    var day = new Date();
    var d2 = day.getDay();
    console.log(d2)

    var m2 = 1 + day.getMonth();
    var y2 = day.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (d1>d2)
    {
        d2 = d2 + month[m2-1];
        m2 = m2 - 1;
    }
    if (m1>m2)
    {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    var d = d2 -d1;
    var m = m2 - m1;
    var y = y2 - y1;
    document.getElementById("age").innerHTML=
    "Your age is " + y + " Years " + m + " Months " + d + " Days. ";
}