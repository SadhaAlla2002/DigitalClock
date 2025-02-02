 function digitalclock() {
            var date = new Date();
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dd = date.getDate();
            var mo = date.getMonth();
            var yy = date.getFullYear();
            var dy = date.getDay();

            var am_pm = "AM";
            if (hh >= 12) {
                am_pm = "PM";
                if (hh > 12) {
                    hh -= 12;
                }
            }
            if (hh == 0) {
                am_pm = "AM";
                hh = 12;
            }

            var time = (hh < 10 ? "0" : "") + hh + ":" + (mm < 10 ? "0" : "") + mm + ":" + (ss < 10 ? "0" : "") + ss + " " + am_pm;
            document.getElementById("time").innerHTML = time;

            if (mo == 0) mo = "Jan";
            else if (mo == 1) mo = "Feb";
            else if (mo == 2) mo = "Mar";
            else if (mo == 3) mo = "Apr";
            else if (mo == 4) mo = "May";
            else if (mo == 5) mo = "Jun";
            else if (mo == 6) mo = "Jul";
            else if (mo == 7) mo = "Aug";
            else if (mo == 8) mo = "Sep";
            else if (mo == 9) mo = "Oct";
            else if (mo == 10) mo = "Nov";
            else if (mo == 11) mo = "Dec";

            var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var dyName = dayNames[dy];

            document.getElementById("date").innerHTML = dd + "/" + mo + "/" + yy;
            document.getElementById("day").innerHTML = dyName;
            document.getElementById("sec").innerHTML = ss;

            var updatethetime = setTimeout(function() { digitalclock() }, 1000);
        }