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

});


