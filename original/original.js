var dzlocation = 'Houston';

//obfuscate with http://closure-compiler.appspot.com/home
// ==ClosureCompiler==
// @output_file_name default.js
// @compilation_level SIMPLE_OPTIMIZATIONS
// ==/ClosureCompiler==


function colorizeWindString(windvalue, yellowval, redval, divid) {
    if (windvalue > redval) {
        var div = document.getElementById(divid);
        div.setAttribute("style", "background-color:rgba(255, 0, 0, 0.5); color:#ffffff");

    }
    else if (windvalue > yellowval) {
        var div = document.getElementById(divid);
        div.setAttribute("style", "background-color:rgba(255, 255, 0, 0.5); color:#000000");

    }
    else {
        var div = document.getElementById(divid);
        div.setAttribute("style", "background-color:#222222; color:#fefefe");

    }

}

function NocolorizeWindString(windvalue, yellowval, redval, divid) {
        var div = document.getElementById(divid);
        div.setAttribute("style", "background-color:#222222; color:#fefefe");
}

function GetSkydiveClockData() {
    $.ajax({
        type: "POST",
        url: "clock5.aspx/getTimerInfo",
        data: '{param: "data", db: "' + dzlocation + '" }',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: OnSuccess,
        failure: function (response) {
            alert(response.d);
        }
    });
};

var skydiveclockticks = 1000;

function startSkydiveClockTimer() {
    var x = 1;
    var interval = setInterval(
		function () {
		    GetSkydiveClockData();
		}, skydiveclockticks);
}

function OnSuccess(response) {
    var a = response.d;
    var tm1_enabled = a[0];
    var tm1_load = a[1];
    var tm1_timer = a[2];
    var tm1_backgroundColor = a[3];
    var tm1_foregroundColor = a[4];

    var tm2_enabled = a[5];
    var tm2_load = a[6];
    var tm2_timer = a[7];
    var tm2_backgroundColor = a[8];
    var tm2_foregroundColor = a[9];

    var tm3_enabled = a[10];
    var tm3_load = a[11];
    var tm3_timer = a[12];
    var tm3_backgroundColor = a[13];
    var tm3_foregroundColor = a[14];

    var tm4_enabled = a[15];
    var tm4_load = a[16];
    var tm4_timer = a[17];
    var tm4_backgroundColor = a[18];
    var tm4_foregroundColor = a[19];

    var lastloadname = a[20];
    var lastloadtime = a[21];

    var winddir = a[22];
    var currentwind = a[23];
    var g1 = a[24];
    var g5 = a[25];
    var g10 = a[26];
    var g20 = a[27];
    var h5 = a[28];
    var h10 = a[29];
    var h20 = a[30];
    var h1 = a[31];
    var lastupdatew = a[32];
    var temp = a[33];
    var humidity = a[34];
    var heatindex = a[35];
    var raininches = a[36];
    var winddirString = a[37];

    var tm1_slots = a[38];
    var tm2_slots = a[39];
    var tm3_slots = a[40];
    var tm4_slots = a[41];


    a = null;
    response = null;

    if (winddir == "") { winddir = 0; }

    if (0 < winddir && winddir < 11.25) { winddirString = "N (" + winddir + "°)"; }
    else if (winddir > 360) { winddirString = "ERR (" + winddir + "°)"; }
    else if (11.25 <= winddir && winddir < 33.75) { winddirString = "NNE (" + winddir + "°)"; }
    else if (33.75 <= winddir && winddir < 56.25) { winddirString = "NE (" + winddir + "°)"; }
    else if (56.25 <= winddir && winddir < 78.75) { winddirString = "ENE (" + winddir + "°)"; }
    else if (78.75 <= winddir && winddir < 101.25) { winddirString = "E (" + winddir + "°)"; }
    else if (101.25 <= winddir && winddir < 123.75) { winddirString = "ESE (" + winddir + "°)"; }
    else if (123.75 <= winddir && winddir < 146.25) { winddirString = "SE (" + winddir + "°)"; }
    else if (146.25 <= winddir && winddir < 168.75) { winddirString = "SSE (" + winddir + "°)"; }
    else if (168.75 <= winddir && winddir < 191.25) { winddirString = "S (" + winddir + "°)"; }
    else if (191.25 <= winddir && winddir < 213.75) { winddirString = "SSW (" + winddir + "°)"; }
    else if (213.75 <= winddir && winddir < 236.25) { winddirString = "SW (" + winddir + "°)"; }
    else if (236.25 <= winddir && winddir < 258.75) { winddirString = "WSW (" + winddir + "°)"; }
    else if (258.75 <= winddir && winddir < 281.25) { winddirString = "W (" + winddir + "°)"; }
    else if (281.25 <= winddir && winddir < 303.75) { winddirString = "WNW (" + winddir + "°)"; }
    else if (303.75 <= winddir && winddir < 326.25) { winddirString = "NW (" + winddir + "°)"; }
    else if (326.25 <= winddir && winddir < 348.75) { winddirString = "NNW (" + winddir + "°)"; }
    else if (winddir >= 348.75) { winddirString = "N (" + winddir + "°)"; }
    else if (winddir == 0) { winddirString = "ERR (" + winddir + "°)"; }


    var runningclocks = 0;
    if (tm1_enabled == 'True') { runningclocks += 1; }
    if (tm2_enabled == 'True') { runningclocks += 1; }
    if (tm3_enabled == 'True') { runningclocks += 1; }
    if (tm4_enabled == 'True') { runningclocks += 1; }


    if (runningclocks > 0) {
        document.getElementById("tm0").innerHTML = "";
        var orientation = "";
        if (window.innerWidth / window.innerHeight < 0.7) {
            orientation = "p";
        }
        else {
            orientation = "l";
        }

        if (tm1_enabled == 'True') {

            var tm1 = document.getElementById("tm1");
            tm1.style.backgroundColor = tm1_backgroundColor;
            tm1.style.color = tm1_foregroundColor;
            tm1.innerHTML = "<div id=\"tm1_title\" class=\"timerTitle" + runningclocks + orientation + "\">" + tm1_load + "</div>";
            tm1.innerHTML += "<div id=\"tm1_text\" class=\"timerText" + runningclocks + orientation + "\">" + tm1_timer + "</div>";
            tm1.innerHTML += "<div id=\"tm1_slots\" class=\"timerSlots" + runningclocks + orientation + "\">Slots Remaining: " + tm1_slots + "</div>";
            // tm1.setAttribute("class", "timer watermark");

        } else {
            var tm1 = document.getElementById("tm1");
            tm1.innerHTML = "";
        }



        if (tm2_enabled == 'True') {
            var tm2 = document.getElementById("tm2");
            tm2.style.backgroundColor = tm2_backgroundColor;
            tm2.style.color = tm2_foregroundColor;
            tm2.innerHTML = "<div id=\"tm2_title\" class=\"timerTitle" + runningclocks + orientation + "\">" + tm2_load + "</div>";
            tm2.innerHTML += "<div id=\"tm2_text\" class=\"timerText" + runningclocks + orientation + "\">" + tm2_timer + "</div>";
            tm2.innerHTML += "<div id=\"tm2_slots\" class=\"timerSlots" + runningclocks + orientation + "\">Slots Remaining: " + tm2_slots + "</div>";


        } else {
            var tm2 = document.getElementById("tm2");
            tm2.innerHTML = "";
        }

        if (tm3_enabled == 'True') {
            var tm3 = document.getElementById("tm3");
            tm3.style.backgroundColor = tm3_backgroundColor;
            tm3.style.color = tm3_foregroundColor;
            tm3.innerHTML = "<div id=\"tm3_title\" class=\"timerTitle" + runningclocks + orientation + "\">" + tm3_load + "</div>";
            tm3.innerHTML += "<div id=\"tm3_text\" class=\"timerText" + runningclocks + orientation + "\">" + tm3_timer + "</div>";
            tm3.innerHTML += "<div id=\"tm3_slots\" class=\"timerSlots" + runningclocks + orientation + "\">Slots Remaining: " + tm3_slots + "</div>";

        } else {
            var tm3 = document.getElementById("tm3");
            tm3.innerHTML = "";
        }

        if (tm4_enabled == 'True') {
            var tm4 = document.getElementById("tm4");
            tm4.style.backgroundColor = tm4_backgroundColor;
            tm4.style.color = tm4_foregroundColor;
            tm4.innerHTML = "<div id=\"tm4_title\" class=\"timerTitle" + runningclocks + orientation + "\">" + tm4_load + "</div>";
            tm4.innerHTML += "<div id=\"tm4_text\" class=\"timerText" + runningclocks + orientation + "\">" + tm4_timer + "</div>";
            tm4.innerHTML += "<div id=\"tm4_slots\" class=\"timerSlots" + runningclocks + orientation + "\">Slots Remaining: " + tm4_slots + "</div>";

        } else {
            var tm4 = document.getElementById("tm4");
            tm4.innerHTML = "";
        }
    }
    else {
        //cleanup, no clocks enabled


        document.getElementById("tm1").innerHTML = "";
        document.getElementById("tm2").innerHTML = "";
        document.getElementById("tm3").innerHTML = "";
        document.getElementById("tm4").innerHTML = "";

        //hack to enable logo
        var tm0 = document.getElementById("tm0");
        tm0.innerHTML = "<div id=\"tm1_title\" class=\"timerTitle1p\"></div>";
        tm0.innerHTML += "<div id=\"tm1_text\" class=\"timerText1p\"></div>";

    }

    if (currentwind > 30) {
        document.getElementById("svg_cwindbg").attributes.getNamedItem("fill").value = "Red";
        document.getElementById("svg_cwind").attributes.getNamedItem("fill").value = "White";

    } //
    else if (currentwind > 22) {
        document.getElementById("svg_cwindbg").attributes.getNamedItem("fill").value = "Yellow";
        document.getElementById("svg_cwind").attributes.getNamedItem("fill").value = "Black";

    }
    else {
        document.getElementById("svg_cwindbg").attributes.getNamedItem("fill").value = "Black";
        document.getElementById("svg_cwind").attributes.getNamedItem("fill").value = "White";

    }
    var svgcwind = document.getElementById("svg_cwind");

    svgcwind.firstChild.nodeValue = currentwind;


    document.getElementById("summaryWeather").innerHTML = temp + "°F";
    if (temp > 90) {
        document.getElementById("summaryWeather").innerHTML += "(" + heatindex + "°F Heat Index)";
    }

    document.getElementById("summary5").innerHTML = "5m High: " + h5 + " mph";
    document.getElementById("summary10").innerHTML = "10m High: " + h10 + " mph";
    document.getElementById("summary20").innerHTML = "20m High: " + h20 + " mph";

    if (lastloadtime == "bad")
    { lastloadtimelocal = ""; }
    else {
        var dtlastloadtime = new Date(lastloadtime);
        lastloadtimelocal = dtlastloadtime.format("mm/dd/yy h:MM TT");
    }
    document.getElementById("summaryLastLoad").innerHTML = "Loads flown today: " + lastloadname;
    var dt = new Date();
    var cdt = new Date();


    var dstring = cdt.format("yyyymmddhhMMss");

    var lastdt = new Date(lastupdatew);
    var stringutc = dt.toUTCString();
    dt = new Date(stringutc);

    var diff = dt - lastdt;

    if (diff < 30000) {
        document.getElementById("summaryTime").setAttribute("style", "background-color:#222222; color:#fefefe");

    }
    else if (diff < 120000) {
        document.getElementById("summaryTime").setAttribute("style", "background-color:rgba(255, 255, 0, 0.5); color:#000000");

    }
    else {
        document.getElementById("summaryTime").setAttribute("style", "background-color:rgba(255, 0, 0, 0.5); color:#ffffff");
    }

    var lastupdatelocal = lastdt.format("mm/dd/yy h:MM:ss TT");

    document.getElementById("summaryTime").innerHTML = "Updated " + lastupdatelocal;

    colorizeWindString(h5, 22, 30, "summary5");
    colorizeWindString(h10, 22, 30, "summary10");
    colorizeWindString(h20, 22, 30, "summary20");


    var comtext = document.getElementById("compassText");
    comtext.innerHTML = winddirString;

    var arrownode = document.createElementNS("http://www.w3.org/2000/svg", "path");
    arrownode.setAttribute("d", "m64.49988,34.63094l4.9576,-32.42097l4.95763,32.42097l-2.47869,0l0,32.57588l-4.95763,0l0,-32.57588l-2.4789,0l-0.00002,0l0.00001,0z");
    arrownode.setAttribute("fill", "#00ff00");
    arrownode.setAttribute("transform", "rotate(" + winddir + ",67,67)");
    arrownode.setAttribute("fill-opacity", "1.0");
    arrownode.setAttribute("stroke-width", "1.0");
    arrownode.setAttribute("stroke", "#88ff00");
    arrownode.setAttribute("id", "dir" + dstring);



    var compass = document.getElementById("g_dir");


    var loopmod = 1;
    var elementcount = compass.childNodes.length;

    if (elementcount > 1) {
        for (var p = 1; p < elementcount; p++) {
            var currentfill = compass.childNodes[p].getAttribute("fill-opacity");
            var newfill = currentfill;
            if (currentfill > .06) { newfill = currentfill * 0.93; }
            compass.childNodes[p].setAttribute("fill-opacity", newfill);
            compass.childNodes[p].setAttribute("fill", "#bb3300");
            compass.childNodes[p].setAttribute("stroke-width", "0");
            compass.childNodes[p].setAttribute("stroke", "#000");
        }
    }




    if (elementcount > 121) {
        //added to correct a memoryleak. Perhaps attributes are sticking around even though the node is removed...
        //compass.firstChild.outerHTML = null;
        //

        compass.removeChild(compass.firstChild);
        loopmod = 2;
    }


    compass.appendChild(arrownode);


    //var sumText = document.getElementById("sumText");
    //sumText.innerHTML = lastupdatew + "<br>";

}

var dateFormat = function () {
    var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
		timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		timezoneClip = /[^-+\dA-Z]/g,
		pad = function (val, len) {
		    val = String(val);
		    len = len || 2;
		    while (val.length < len) val = "0" + val;
		    return val;
		};

    // Regexes and supporting functions are cached through closure
    return function (date, mask, utc) {
        var dF = dateFormat;

        // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
        if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
            mask = date;
            date = undefined;
        }

        // Passing date through Date applies Date.parse, if necessary
        date = date ? new Date(date) : new Date;
        if (isNaN(date)) throw SyntaxError("invalid date");

        mask = String(dF.masks[mask] || mask || dF.masks["default"]);

        // Allow setting the utc argument via the mask
        if (mask.slice(0, 4) == "UTC:") {
            mask = mask.slice(4);
            utc = true;
        }

        var _ = utc ? "getUTC" : "get",
			d = date[_ + "Date"](),
			D = date[_ + "Day"](),
			m = date[_ + "Month"](),
			y = date[_ + "FullYear"](),
			H = date[_ + "Hours"](),
			M = date[_ + "Minutes"](),
			s = date[_ + "Seconds"](),
			L = date[_ + "Milliseconds"](),
			o = utc ? 0 : date.getTimezoneOffset(),
			flags = {
			    d: d,
			    dd: pad(d),
			    ddd: dF.i18n.dayNames[D],
			    dddd: dF.i18n.dayNames[D + 7],
			    m: m + 1,
			    mm: pad(m + 1),
			    mmm: dF.i18n.monthNames[m],
			    mmmm: dF.i18n.monthNames[m + 12],
			    yy: String(y).slice(2),
			    yyyy: y,
			    h: H % 12 || 12,
			    hh: pad(H % 12 || 12),
			    H: H,
			    HH: pad(H),
			    M: M,
			    MM: pad(M),
			    s: s,
			    ss: pad(s),
			    l: pad(L, 3),
			    L: pad(L > 99 ? Math.round(L / 10) : L),
			    t: H < 12 ? "a" : "p",
			    tt: H < 12 ? "am" : "pm",
			    T: H < 12 ? "A" : "P",
			    TT: H < 12 ? "AM" : "PM",
			    Z: utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
			    o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
			    S: ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
			};

        return mask.replace(token, function ($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });
    };
} ();

// Some common format strings
dateFormat.masks = {
    "default": "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
    dayNames: [
		"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	],
    monthNames: [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
		"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	]
};

// For convenience...
Date.prototype.format = function (mask, utc) {
    return dateFormat(this, mask, utc);
};
