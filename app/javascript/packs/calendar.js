$( "body[data-page='QuestionsRechner']" ).ready(function() {

    let date = new Date();
    let calendar_nextbutton;
    let calendar_show_next_month;
    const weekdays = ["montag", "dienstag", "mittwoch", "donnerstag", "freitag", "samstag", "sonntag"];
    const weekdays_short = ["mo", "die", "mi", "do", "fr", "sa", "so"];

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const months_short = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    function day_of_week(wday) {
        // console.log("Day of Week in Number: " + wday.getDay())
        if (wday.getDay() == 0) {
            return 6
        } else {
            return (wday.getDay()-1)
        }
    }

    function last_day_of_month(input_date) {
        return new Date(input_date.getFullYear(), input_date.getMonth()+1,0).getDate();
    }

    function last_date_of_month(input_date) {
        // let output = new Date(input_date);
        // output = new Date(output.setMonth(input_date.getMonth() + 1));
        // output = new Date(output.setDate(input_date.getDate(0)));
        // return output;
        return new Date(input_date.getFullYear(), input_date.getMonth() +1,0);
    }

    let firstweekday;

    function first_monday_of_month(input_date) {
        return new Date(startdate.setDate(first_day_of_month(input_date).getDate() - first_wday_of_month(input_date) ) )
    }

    function first_wday_of_month(input_date) {
        firstweekday = new Date(input_date.getFullYear(), input_date.getMonth(), 1, 12)
        firstweekday = firstweekday.getDay();
        if (firstweekday == 0) {
            firstweekday = 6
        } else {
            firstweekday--
        }
        return firstweekday
    }
    let firstdayofmonth;
    function first_day_of_month(input_date) {
        firstdayofmonth = new Date(input_date.getFullYear(), input_date.getMonth(), 1, input_date.getHours(), input_date.getMinutes(), input_date.getSeconds(), input_date.getMilliseconds(), input_date.getTimezoneOffset())
        return firstdayofmonth
    }

    function weeks_in_a_month(input_date) {
        let d1 = new Date(input_date.getFullYear(), input_date.getMonth(), 1, input_date.getHours(), input_date.getMinutes(), input_date.getSeconds(), input_date.getMilliseconds(), input_date.getTimezoneOffset());
        d1 = day_of_week(d1)
        let d2 = last_day_of_month(input_date);
        // console.log("Weeks in a month - d1: " + d1 + "--- d2: " + d2)
        number_of_weeks =  Math.ceil((d1 + d2) / 7);
        return number_of_weeks;
    }

    let d1;
    let output;
    function first_calendar_week_of_month(input_date) {
        d1 = new Date(input_date.getFullYear(), input_date.getMonth(), 1, input_date.getHours(), input_date.getMinutes(), input_date.getSeconds(), input_date.getMilliseconds(), input_date.getTimezoneOffset());
        output = calendar_week(d1);
        return output
    }


    function calendar_week(input_date) {
        // Copy date so don't modify original
        input_date = new Date(Date.UTC(input_date.getFullYear(), input_date.getMonth(), input_date.getDate()));
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        input_date.setUTCDate(input_date.getUTCDate() + 4 - (input_date.getUTCDay()||7));
        // Get first day of year
        var yearStart = new Date(Date.UTC(input_date.getUTCFullYear(),0,1));
        // Calculate full weeks to nearest Thursday
        var weekNo = Math.ceil(( ( (input_date - yearStart) / 86400000) + 1)/7);
        // Return array of year and week number
        return weekNo;
    }

    capitalize = function(str1) {
        return str1.charAt(0).toUpperCase() + str1.slice(1);
    }

    format_two_digit = function(str) {
        let output = "0" + (str)
        return output.slice(-2)
    }

    function indexOfMax(arr) {
        if (arr.length === 0) {
            return -1;
        }
        var max = arr[0];
        var maxIndex = 0;
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
        }
        return maxIndex;
    }

    function indexOfMin(arr) {
        if (arr.length === 0) {
            return -1;
        }
        var min = arr[0];
        var minIndex = 0;
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                minIndex = i;
                min = arr[i];
            }
        }
        return minIndex;
    }

    let cal_booking = false
    let cal_booking_active = []
    function calendar_ev_hover(input) {
        if (cal_booking == true) {
            // input.setAttribute("class", input.getAttribute("class") + " active_booking")
            cal_booking_active[1] = input

            if (new Date(cal_booking_active[0].getAttribute("date")) > new Date(cal_booking_active[1].getAttribute("date"))) {
                [ cal_booking_active[0], cal_booking_active[1] ] = [ cal_booking_active[1], cal_booking_active[0] ]
            }
            calendar_find_dates_in_between(cal_booking_active[0],cal_booking_active[1])

            // if(typeof(cal_booking_active.find( element => element == input ))=="undefined") {
            //     console.log("ITS ADDED NOW: " + cal_booking_active.length);
            //     cal_booking_active.push(input)
            //     cal_booking_start = cal_booking_active[indexOfMin(cal_booking_active.map(function(element) { return new Date(element.getAttribute("date")) }))]
            //     cal_booking_active[1] = cal_booking_active[indexOfMax(cal_booking_active.map(function(element) { return new Date(element.getAttribute("date")) }))]
            //     calendar_find_dates_in_between(cal_booking_start, cal_booking_active[1])

            // } else {
            //     console.log("ITS ALREADY INCLUDED")
            // }
            // console.log("LAST DATE: " + new Date(Math.max(..._dateList)))

        }
    }

    function calendar_ev_mouseenter(input) {
        input.setAttribute("class", input.getAttribute("class") + " mouseactive")
    }

    function calendar_ev_mouseleave(input) {
        input.setAttribute("class", input.getAttribute("class").replace(" mouseactive", ""))
    }

    // let cal_booking_start

    function calendar_ev_mousedown(input) {
        console.log("MOUSEODNW")
        document.querySelectorAll(".active_booking").forEach( ele => ele.setAttribute("class", ele.getAttribute("class").replace(" active_booking", "")))
        cal_booking = true
        input.setAttribute("class", input.getAttribute("class") + " active_booking")
        // cal_booking_start = input
        // input.setAttribute("class", input.getAttribute("class") + " mouseactive")
        cal_booking_active.push(input)
    }

    function calendar_ev_mouseup(input) {
        console.log("MOUSEUP")
        cal_booking = false
        console.log("THIS WAS " + cal_booking_active.length + " now deleted!")
        // cal_booking_active.forEach(ele => console.log(ele))
        // cal_booking_active.forEach(element => element.setAttribute("class", element.getAttribute("class").replace(" active_booking", "")))
        cal_booking_active = []
        // cal_booking_start = nil
    }

    function calendar_convert_attribute_to_date(input) {
        let output = input.getAttribute("date")
        output = [output.slice(0,4), (parseInt(output.slice(5,7))-1),output.slice(8,10)]
        output = new Date(output[0], output[1], output[2], date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds(), date.getTimezoneOffset())
        return output
    }

    function calendar_convert_date_to_attribute(input) {
        let output = input.getFullYear() + "-" + format_two_digit(input.getMonth()+1) + "-" +  format_two_digit(input.getDate())
        return output
    }

    function calendar_pick_date(input) {
        document.querySelector(".active_day").setAttribute("class", document.querySelector(".active_day").getAttribute("class").replace(" active_day", ""))
        input.setAttribute("class", input.getAttribute("class") + " active_day")
        date = calendar_convert_attribute_to_date(input)
    }

    function calendar_find_dates_in_between(start_input, end_input) {
        console.log("#################################################")
        let _startdate = calendar_convert_attribute_to_date(start_input)
        console.log("###-startda-: " + _startdate)
        console.log("###-enddate-: " + calendar_convert_attribute_to_date(end_input))
        let ele
        // let _startdate = new Date(start_input.getAttribute("date"));
        // let end_input = new Date(end_input.getAttribute("date"))
        document.querySelectorAll(".active_booking").forEach( ele => ele.setAttribute("class", ele.getAttribute("class").replace(" active_booking", "")))

        if ((_startdate - calendar_convert_attribute_to_date(end_input)) == 0) {
            console.log("This is a single day event")
        } else {
            console.log("This is a single day event")

            while ((_startdate - calendar_convert_attribute_to_date(end_input)) != 0) {
                ele = document.querySelector('[date="' + calendar_convert_date_to_attribute(_startdate) + '"]')
                ele = ele.setAttribute("class", ele.getAttribute("class") + " active_booking")
                // console.log("THIS IS ELE: " + ele)
            //     // if (ele.getAttribute("class").indexOf(" active_booking") == -1) {
            //     //     ele.setAttribute("class", ele.getAttribute("class") + " active_booking")
            //     // }
            //     console.log("")
                _startdate = new Date(_startdate.setDate(_startdate.getDate() + 1))
            }
            ele = document.querySelector('[date="' + calendar_convert_date_to_attribute(_startdate) + '"]')
            ele = ele.setAttribute("class", ele.getAttribute("class") + " active_booking")
            // ele = document.querySelector('[date="' + calendar_convert_date_to_attribute(_startdate) + '"]')
            // ele = ele.setAttribute("class", ele.getAttribute("class") + " active_booking")
        }
    }


    function calendar_switch_month(option, input_date) {
        if (option == "next") {
            // date = new Date(input_date.getFullYear(), input_date.getMonth()+1,input_date.getDate(),12);
            date.setMonth(input_date.getMonth() +1)
        } else if (option == "prev") {
            // date = new Date(input_date.getFullYear(), input_date.getMonth()-1,input_date.getDate(),12);
            date = new Date(date.setMonth(input_date.getMonth() -1));
        }
        calendar_master = document.querySelector(".calendar");
        calendar_master.removeChild(document.querySelector(".month"));
        show_calendar(date);
    }

    function show_next_month() {    calendar_switch_month("next", date); console.log("FUNCTION OUTCOME (NEXT): " + date)    };

    function show_prev_month() {    calendar_switch_month("prev", date); console.log("FUNCTION OUTCOME (PREV): " + date)    };

    let startdate;
    function show_calendar(input_date) {
        // console.log("START " + input_date)
        let calstart = false;
        if (startdate==undefined) {
            startdate = new Date()
        } else { startdate = new Date(date)
        }
        startdate = first_monday_of_month(input_date);
        // console.log("STARTDATE: " + startdate)
        // console.log("DATE: " + date)
        // console.log("INP_DATE: " + input_date)

        let cal_week = calendar_week(startdate);
        let act_cal_week = calendar_week(input_date);
        let set_weekday_view = "number"; // or "weekday"
        const node_calendar = document.querySelector(".calendar");
        node_calendar.innerHTML = "";
        const node_month = document.createElement("div");
        try {node_calendar.appendChild(node_month);}
        catch (e) { if (e instanceof TypeError) {} }
        node_month.setAttribute("class", "month");
        let node_week;
        let node_day;
        let node_day_string;
        if (set_weekday_view === "number") {
            let node_header_month = document.createElement("h2");
            node_header_month.setAttribute("id", "node_header_month");
            node_header_month.textContent = months[date.getMonth()] + " " + date.getFullYear();
            node_month.appendChild(node_header_month)
            let node_header = document.createElement("div");
            node_header.setAttribute("class", "weekdays_header")
            for (let i in weekdays) {
                let node_header_element = document.createElement("div");
                    let node_header_element__longVersion = document.createElement("p");
                    node_header_element__longVersion.setAttribute("class", "weekday_lg");
                    node_header_element__longVersion.textContent = capitalize(weekdays[i]);
                    node_header_element.appendChild(node_header_element__longVersion);
                    let node_header_element__shortVersion = document.createElement("p");
                    node_header_element__shortVersion.setAttribute("class", "weekday_sh");
                    node_header_element__shortVersion.textContent = capitalize(weekdays_short[i]);
                    node_header_element.appendChild(node_header_element__shortVersion);

                node_header.appendChild(node_header_element);
            };
            node_month.appendChild(node_header);
        }
        let weekspermonth = weeks_in_a_month(input_date);
        for (let x=0; x < weekspermonth; x++) {
            node_week = document.createElement("div");
            node_week.setAttribute("cal_week", cal_week);
            if (cal_week == calendar_week(input_date)) {
                node_week.setAttribute("class", "active_week week")
            } else { node_week.setAttribute("class", "week") }
            node_month.appendChild(node_week);
            for (let xf=0; xf<7; xf++) {
                // console.log(last_date_of_month(input_date))
                // console.log("TEST: " + new Date(startdate.getFullYear(),startdate.getMonth(),startdate.getDate(),0))
                if (xf == (first_wday_of_month(input_date)) && calstart == false) {
                    calstart = true;
                    // console.log("CALSTART " + startdate)
                } else if (startdate >= (last_date_of_month(input_date))) {
                    calstart = false;
                    // console.log("CALEND " + startdate)
                }
                node_day = document.createElement("div");
                node_day_string = startdate.getFullYear() + "-" + format_two_digit(startdate.getMonth()+1) + "-" + format_two_digit(startdate.getDate());
                node_day.setAttribute("date", node_day_string);
                node_day.addEventListener("mouseover", function() {calendar_ev_hover(this)})
                node_day.addEventListener("mouseenter", function() {calendar_ev_mouseenter(this)})
                node_day.addEventListener("mouseleave", function() {calendar_ev_mouseleave(this)})
                // Click is replaced by MouseDown and Mouseup: node_day.addEventListener("click", function() {console.log(new Date(this.getAttribute("date")))})
                node_day.addEventListener("click", function() { calendar_pick_date(this) })
                node_day.addEventListener("mouseup", function() {calendar_ev_mouseup(this)})
                node_day.addEventListener("mousedown", function() {calendar_ev_mousedown(this)})

                node_day.textContent = format_two_digit(startdate.getDate());
                if (calstart == true) {
                    if (startdate.getFullYear() == input_date.getFullYear() && startdate.getMonth() == input_date.getMonth() && startdate.getDate() == input_date.getDate() && startdate.getFullYear() == new Date().getFullYear() && startdate.getMonth() == new Date().getMonth() && startdate.getDate() == new Date().getDate()) {
                        node_day.setAttribute("class", "weekday active_day today");
                        console.log(startdate.getFullYear() == input_date.getFullYear() && startdate.getMonth() == input_date.getMonth() && startdate.getDate() == input_date.getDate())
                    } else if (startdate.getFullYear() == input_date.getFullYear() && startdate.getMonth() == input_date.getMonth() && startdate.getDate() == input_date.getDate()) {
                        node_day.setAttribute("class", "weekday active_day");
                        console.log(startdate.getFullYear() == input_date.getFullYear() && startdate.getMonth() == input_date.getMonth() && startdate.getDate() == input_date.getDate())
                    }else if (startdate.getFullYear() == new Date().getFullYear() && startdate.getMonth() == new Date().getMonth() && startdate.getDate() == new Date().getDate()) {
                        node_day.setAttribute("class", "weekday today");
                    } else {
                        // console.log(input_date + " vs. " + startdate)
                        node_day.setAttribute("class", "weekday");
                    }
                } else {
                    node_day.setAttribute("class", "weekday inactive");
                }

                node_week.appendChild(node_day);
                // console.log("StartDate: " + startdate)

                startdate = new Date(startdate.setDate(startdate.getDate() + 1))
                console.log("Date: " + date)
            }
            cal_week++
        };
        console.log("OUTPUT DATE: " + date)
    }

    function show_view_4days(input_date) {
        console.log("4Days showing here")
        calendar_master = document.querySelector(".calendar");
        document.querySelector(".month").removeChild(document.querySelector("#node_header_month")) ;
        try {
            calendar_master.removeChild(document.querySelector(".month"));
            }
        catch (e) {
            // calendar_master.removeChild(document.querySelector(".header"));
            calendar_master.removeChild(document.querySelector(".view_4days"));
        }

        // console.log("START " + input_date)
        let calstart = false;
        if (startdate==undefined) {
            startdate = new Date()
        } else { startdate = new Date(date)
        }
        // console.log("STARTDATE: " + startdate)
        // console.log("DATE: " + date)
        // console.log("INP_DATE: " + input_date)
        let node_header = document.createElement("div");
        node_header.setAttribute("class", "fourdays_header")
        let node_header_month = document.createElement("h2");
        node_header_month.setAttribute("id", "node_header_month");
        node_header_month.textContent = months[date.getMonth()] + " " + date.getFullYear();
        calendar_master.appendChild(node_header_month)
        let cal_week = calendar_week(startdate);
        const node_calendar = document.querySelector(".calendar");
        const node_4days = document.createElement("div");
        node_calendar.appendChild(node_4days);
        node_4days.setAttribute("class", "view_4days");
        let node_day;
        let node_day_string;

        for (let x=0;x<4;x++) {
        node_day = document.createElement("div");
        node_day_string = startdate.getFullYear() + "-" + format_two_digit(startdate.getMonth()+1) + "-" + format_two_digit(startdate.getDate());
        node_day.setAttribute("date", node_day_string);
        node_day.addEventListener("mouseover", function() {calendar_ev_hover(this)})
        node_day.addEventListener("mouseenter", function() {calendar_ev_mouseenter(this)})
        node_day.addEventListener("mouseleave", function() {calendar_ev_mouseleave(this)})
        // Click is replaced by MouseDown and Mouseup: node_day.addEventListener("click", function() {console.log(new Date(this.getAttribute("date")))})
        node_day.addEventListener("click", function() { calendar_pick_date(this) })
        node_day.addEventListener("mouseup", function() {calendar_ev_mouseup(this)})
        node_day.addEventListener("mousedown", function() {calendar_ev_mousedown(this)})
        node_day.textContent = format_two_digit(startdate.getDate()) + " " + capitalize(weekdays[day_of_week(startdate)]);

        // node_day.setAttribute("class", "weekday active_day today");
        if (startdate.getFullYear() == input_date.getFullYear() && startdate.getMonth() == input_date.getMonth() && startdate.getDate() == input_date.getDate() && startdate.getFullYear() == new Date().getFullYear() && startdate.getMonth() == new Date().getMonth() && startdate.getDate() == new Date().getDate()) {
            node_day.setAttribute("class", "fourday active_day today");
            console.log(startdate.getFullYear() == input_date.getFullYear() && startdate.getMonth() == input_date.getMonth() && startdate.getDate() == input_date.getDate())
        } else if (startdate.getFullYear() == input_date.getFullYear() && startdate.getMonth() == input_date.getMonth() && startdate.getDate() == input_date.getDate()) {
            node_day.setAttribute("class", "fourday active_day");
            console.log(startdate.getFullYear() == input_date.getFullYear() && startdate.getMonth() == input_date.getMonth() && startdate.getDate() == input_date.getDate())
        }else if (startdate.getFullYear() == new Date().getFullYear() && startdate.getMonth() == new Date().getMonth() && startdate.getDate() == new Date().getDate()) {
            node_day.setAttribute("class", "fourday today");
        } else {
            // console.log(input_date + " vs. " + startdate)
            node_day.setAttribute("class", "fourday");
        }

        node_4days.appendChild(node_day);
        startdate = new Date(startdate.setDate(startdate.getDate() + 1))
        }
    }


        show_calendar(date);
        calendar_nextbutton = document.querySelector("#calendar_but_nextmonth");
        calendar_nextbutton.addEventListener("click", show_next_month, false);
        calendar_prevbutton = document.querySelector("#calendar_but_prevmonth");
        calendar_prevbutton.addEventListener("click", show_prev_month, false);
        calendar_view4days = document.querySelector("#calendar_but_view4day")
        calendar_view4days.addEventListener("click", function() {show_view_4days(date), false})
        calendar_view4days_next = document.querySelector("#calendar_but_view4day_next")
        calendar_view4days_next.addEventListener("click", function() {console.log(date);date=new Date(date.setDate(date.getDate()+1)); show_view_4days(date)}, false);
        calendar_view4days_prev = document.querySelector("#calendar_but_view4day_prev")
        calendar_view4days_prev.addEventListener("click", function() {date=new Date(date.setDate(date.getDate()-1)); show_view_4days(date)}, false);














    // function test() {
    //     doc = document.querySelector(".calendar")
    //     console.log(doc)
    // };

    console.log("Testing after:")
});
