//<% js_glob = Rails.application.root.join('app', 'webpacker', 'javascript', '*.{js}') %>
//<% Dir.glob(js_glob).each do |image| %>
//  import '<%= image %>';
//<% end %>

//import "./questions.js";
let testBut

document.addEventListener("turbolinks:load", () => {

    // testBut = document.querySelector(".testBut").addEventListener("click", function() {
    //     console.log("huuhu")
    //     console.log(document.querySelector("#question_rente_estimate").value)

    //     // $.ajax({
    //     //     url: "rechner.html",
    //     //     context: document.body,
    //     //     type: "post",
    //     //     success: function(data) { $("body").innerHTML = data.html }
    //     //   }).done(function() {
    //     //     $( this ).addClass( "done" );
    //     //   });

    //     // axios({
    //     //     method: 'POST',
    //     //     url: '/rechner',
    //     //     data: document.querySelector("#question_rente_estimate").value,
    //     //     headers: {
    //     //       'X-CSRF-Token': document.querySelector("meta[name=csrf-token]").content
    //     //     }
    //     //   })
    //     //   .then(function(response) {...},
    //     //   .catch(function(error) {...}
    //     //   })


    // });

    const hamburger = document.querySelector(".nav_hamburger")
    hamburger.onclick = function nav_collapse() {
        if (document.querySelector(".nav_container").getAttribute("show") == "false") {
            document.querySelector(".nav_container").setAttribute("show", "true")
        } else {
            document.querySelector(".nav_container").setAttribute("show", "false")
        }
    }

    // Adding an Event listener to activate/deactivate the navbar-toggle
    function myFunction(x) {
        if (x.matches) { // If media query matches
            document.querySelector(".nav_container").setAttribute("show", "false")
        } else {
            document.querySelector(".nav_container").setAttribute("show", "true")
        }
    }
  
    var x = window.matchMedia("(max-width: 768px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes
    // $("h2").hide()
});


