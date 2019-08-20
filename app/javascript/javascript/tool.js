let rentenrechner_out
let max_forms
rentenrechner_out = []

$(document).ready(function() {

  // // Smooth scrolling
  // var $root = $('html, body');
  // $('.navbar-nav a').click(function() {
  //   var href = $.attr(this, 'href');
  //   $root.animate({
  //     scrollTop: $(href).offset().top
  //   }, 500, function () {
  //     window.location.hash = href;
  //   });
  //   return false;
  // });// /end function Smooth Scrolling

  // Tooltips
  // $(function () {
  //   $('[class="tool_tip"]').tooltip();
  // }); // /end function Tooltip

  // // Draggable
  // $( function() {
  //   $( "#draggable" ).draggable({ snap: true });
  //   $( "#draggable2" ).draggable({ snap: ".ui-widget-header" });
  //   $( "#draggable3" ).draggable({ snap: ".ui-widget-header", snapMode: "outer" });
  //   $( "#draggable4" ).draggable({ grid: [ 20, 20 ] });
  //   $( "#draggable5" ).draggable({ grid: [ 80, 80 ] });
  // } );

  //////////////////////////////////////////////////////////////////////////////////////////
  // Quiz:


  var page=0
  var act_page = 0
  var act_tab = 0
  var setoption = 0
  // Progress-Bar
  $("#quiz_progress").append("\
    <div class='progress_bar'></div>")
  function progress_refresh() {
    $(".progress_bar").empty()
    for (var form_nr=0; form_nr < works.length; form_nr++) {
      var pgr_name = "progress_step" + form_nr
      $(".progress_bar").append("\
          <span class='circle' id='" + pgr_name + "' value=" + form_nr + "></span>"
        )
        $("#progress_step" + form_nr).click(function () {
          $('#aski_frame').empty()
          $('#exampleModal').scrollTop(0)
          page = parseInt($(this).attr("value"))
          for (var f=0; f < works.length; f++) {
            if (f < ($(this).attr("value"))) {
              $("#progress_step" + f).css("background-color", "grey")
            } else if (f == ($(this).attr("value"))) {
              $("#progress_step" + f).css("background-color", "darkgray")
            } else {            
              $("#progress_step" + f).css("background-color", "white")
            }
          }
          quiz_setrefresh()
          showtab(act_tab)
          startquiz(page)        }
      )
    }
    $(".circle").css("width", 100/(works.length)-4 +  "%")
  }
  progress_refresh()  // Progress-Bar
  $("#progress_step0").css("background-color", "darkgray")

  function count_max_forms() {
    max_forms = works[page].option_input.length
    console.log("MAX FORMS: " + max_forms)
    return max_forms
  }


  function store_input_date() {
    count_max_forms()
    get_forms = document.forms
    for (let x=0; x<max_forms;x++) {
      if (works[page].option_input[x][0] == "checkbox") {
        console.log("THIS IS A CHECKBOX !#")
      } else if (works[page].option_input[x][0] == "dropdown_minmax") {
        console.log("THIS IS A DROPDOWNMINMAX !#")
        rentenrechner_out[page] = get_forms[0].childNodes[1].childNodes[3].value

      } else if (works[page].option_input[x][0] == "input_multiline") {
        console.log("THIS IS A input_multiline !#")
        rentenrechner_out[page] = get_forms[0].childNodes[1].childNodes[3].value

      } else if (works[page].option_input[x][0] == "radio") {
        console.log("THIS IS A RADIO !#")
        get_forms[0].childNodes[0].childNodes.forEach(function(ev) {try { if (ev.getAttribute("class") == "form-check form-check-inline") { if (ev.firstElementChild.checked == true) {rentenrechner_out[page] = ev.firstElementChild.value; console.log("WUHU: " + ev.firstElementChild.value + " onPage "+ page)}}} catch(e) {}})
      }else {
        console.log("THIS IS A ELSE !#")

        for (let xv=0; xv<works[page].option_input[x].length;xv++) {
          console.log(get_forms[x].childNodes[1].querySelector("input").value)
          rentenrechner_out[page] = get_forms[x].childNodes[1].querySelector("input").value
        }
      }
    }

    console.log("Store Input Data: " + rentenrechner_out)
  }

  // Quiz-NextPageButton
  $('#quiznxt').click(function () {
    $("#quiz_progress .circle:eq(" + (page) + ")").css("background-color", "gray")
    store_input_date()
    page +=1
    console.log("PAGE: " + page)

    $("#quiz_progress .circle:eq(" + (page) + ")").css("background-color", "darkgray")

    $('#aski_frame').empty()
    $('#exampleModal').scrollTop(0)
      // If LastPage --> Create Functionality to ouput the works-array
    // This was used to "Create the Code" -->
    // if (page==works.length) {
    //   $('#quiznxt').hide();
    //   $("#aski_frame").append("\
    //       <div class='row output_code'>\
    //         <div class='col-12'>\
    //           <h1>Create the Code:</h1>\
    //           <button type='button' id='btndataset_out' class='btn btn-success btn-sm'>Code erzeugen</button>\
    //           <div id='data_output'></div>\
    //         </div>\
    //       </div>"
    //     )
    //     $('#btndataset_out').click(function () {
    //       console.log("Hi there")
    //       console.log("Final Output | " + works )
    //       $('#data_output').append("\
    //       <p>var works = [ ")
    //         for (f=0; f<works.length;f++) {
    //           $('#data_output').append("\ {<br> <t>instruction: '" + works[f].instruction + "',<br> question: '" + works[f].question + "',<br> option_input: [")
    //           for (xf=0;xf<works[f].option_input.length;xf++) {
    //             $('#data_output').append("\<br>['" + works[f].option_input[xf][0] + "', [")
    //             if (works[f].option_input[xf][0] === "input_line" || works[f].option_input[xf][0] === "input_multiline") {
    //               for (xff=0;xff<works[f].option_input[xf][1].length;xff++) {
    //                 console.log(works[f].option_input[xf][1][xff][0])
    //                 console.log("TEST!: " +  works[f].option_input[xf][1][xff][1])
    //                 $('#data_output').append("\<br>['" + works[f].option_input[xf][1][xff][0] + "', '" + works[f].option_input[xf][1][xff][1] + "', '" + works[f].option_input[xf][1][xff][2]  + "'], ")
    //                } 
    //                $('#data_output').append("], ")

    //             } else if (works[f].option_input[xf][0] === "accordion") {
    //               for (xff=0;xff<works[f].option_input[xf][1].length;xff++) {
    //                 console.log(works[f].option_input[xf][1][xff][0])
    //                 console.log("TEST!: " +  works[f].option_input[xf][1][xff][1])
    //                 $('#data_output').append("\<br>['" + works[f].option_input[xf][1][xff][0] + "', '" + works[f].option_input[xf][1][xff][1] + "'], ")
    //                } 
    //                $('#data_output').append("], ")
    //             } else {
    //               for (xff=0;xff<works[f].option_input[xf][1].length;xff++) {
    //                 $('#data_output').append("\<br>[ ['" + works[f].option_input[xf][1][xff][0] + "'], [")
    //                 for (xfff=0;xfff<works[f].option_input[xf][1][xff][1].length;xfff++) {
    //                   $('#data_output').append("\'" + works[f].option_input[xf][1][xff][1][xfff] + "',")
    //                 }
    //                 $('#data_output').append("],")
    //               }
    //             $('#data_output').append("\],],")
    //             }
    //             $('#data_output').append("\],<br>")
    //           }
    //          $('#data_output').append("\] <br>},<br>")
    //         }
    //       $('#data_output').append("]</p>")
    //     })
      if (page==works.length) {
      $('#quiznxt').hide();
      $("#aski_frame").append("\
          <div class='row output_code'>\
            <div class='col-12'>\
              <h1>Create the Code:</h1>\
              <button type='button' id='btndataset_out' class='btn btn-success btn-sm'>Code erzeugen</button>\
              <div id='data_output'></div>\
            </div>\
            <div class='row'>\
              <div class='col-12'>Ihre Eingaben:</div>\
              <div class='col-6'>Wie hoch schätzen Sie wird ihre monatliche Rente sein?</div><div class='col-6'>" + rentenrechner_out[0] + "</div>\
              <div class='col-6'>In welchem Jahr haben Sie angefangen zu arbeiten</div><div class='col-6'>" + rentenrechner_out[1] + "</div>\
              <div class='col-6'>Welche Art von Beschäftigungsverhältnis lag vor</div><div class='col-6'>" + rentenrechner_out[2] + "</div>\
              <div class='col-6'>Welches Geburtsjahr</div><div class='col-6'>" + rentenrechner_out[3] + "</div>\
              <div class='col-6'>Wie hoch ist ihr Jahresbruttogehalt?</div><div class='col-6'>" + rentenrechner_out[4] + "</div>\
              <div class='col-6'>Leben Sie in Ost- oder Westdeutschland?</div><div class='col-6'>" + rentenrechner_out[5] + "</div>\
              <div class='col-6'>Wieviele Kinder haben Sie</div><div class='col-6'>" + rentenrechner_out[6] + "</div>\
              <div class='col-6'>In welchem Jahr geboren?</div><div class='col-6'>" + rentenrechner_out[7] + "</div>\
            </div>\
          </div>"
        )
        $('#btndataset_out').click(function () {
          console.log("Final Output | " + works )
          $('#data_output').append("\
          <p>var works = [ ")
            for (f=0; f<works.length;f++) {
              $('#data_output').append("\ {<br> <t>instruction: '" + works[f].instruction + "',<br> question: '" + works[f].question + "',<br> option_input: [")
              for (xf=0;xf<works[f].option_input.length;xf++) {
                $('#data_output').append("\<br>['" + works[f].option_input[xf][0] + "', [")
                if (works[f].option_input[xf][0] === "input_line" || works[f].option_input[xf][0] === "input_multiline") {
                  for (xff=0;xff<works[f].option_input[xf][1].length;xff++) {
                    console.log(works[f].option_input[xf][1][xff][0])
                    console.log("TEST!: " +  works[f].option_input[xf][1][xff][1])
                    $('#data_output').append("\<br>['" + works[f].option_input[xf][1][xff][0] + "', '" + works[f].option_input[xf][1][xff][1] + "', '" + works[f].option_input[xf][1][xff][2]  + "'], ")
                   }
                   $('#data_output').append("], ")

                } else if (works[f].option_input[xf][0] === "accordion") {
                  for (xff=0;xff<works[f].option_input[xf][1].length;xff++) {
                    console.log(works[f].option_input[xf][1][xff][0])
                    console.log("TEST!: " +  works[f].option_input[xf][1][xff][1])
                    $('#data_output').append("\<br>['" + works[f].option_input[xf][1][xff][0] + "', '" + works[f].option_input[xf][1][xff][1] + "'], ")
                   } 
                   $('#data_output').append("], ")

                } else {
                  for (xff=0;xff<works[f].option_input[xf][1].length;xff++) {
                    $('#data_output').append("\<br>[ ['" + works[f].option_input[xf][1][xff][0] + "'], [")
                    for (xfff=0;xfff<works[f].option_input[xf][1][xff][1].length;xfff++) {
                      $('#data_output').append("\'" + works[f].option_input[xf][1][xff][1][xfff] + "',")
                    }
                    $('#data_output').append("],")
                  }
                $('#data_output').append("\],],")
                }
                $('#data_output').append("\],<br>")
              }
             $('#data_output').append("\] <br>},<br>")
            } 
          $('#data_output').append("]</p>")
        })
    } else {
      quiz_setrefresh()
      showtab(act_tab)
      startquiz(page)    }
  })

  // Quiz-PreviousPageButton
  $('#quizback').click(function () {
    $("#quiz_progress .circle:eq(" + page + ")").css("background-color", "white")
    page -=1
    $("#quiz_progress .circle:eq(" + page + ")").css("background-color", "darkgray")
    $('#aski_frame').empty()
    $('#exampleModal').scrollTop(0)
    startquiz(page)
  })

  // Show-Tab
  function showtab(new_tab) {
    $(".tabcontent" + act_tab).hide()
    act_tab = new_tab
    $(".tabcontent" + act_tab).show()
  }

  // Quiz-Setup SideBar
  function quiz_setrefresh() {
    $("#aski_setter").empty()
    $("#aski_setter").append("\
      <div id='quizSetControls' class='carousel slide' data-ride='carousel'>\
        <div class='row'>\
          <div class='col-sm-12 col-lg-6'>\
            <a class='quizSetSwitch' id='quizSetSwitchTitles' data-target='#quizSetControls' data-slide-to='0' class='active'>Titel<br>editieren</a>\
          </div>\
          <div class='col-sm-12 col-lg-6'>\
            <a class='quizSetSwitch' id='quizSetSwitchOptions' data-target='#quizSetControls' data-slide-to='1'>Form-Elemente<br>editieren</a>\
          </div>\
        </div>\
        <div class='carousel-inner'>\
          <div id='quizSetTitles' class='carousel-item active'>\
          <h3>Seite: " + (page+1) + "</h3>\
            <div class='form-group'>\
              <label for='quizsetInputTitle'>Subtitel:</label>\
              <input class='form-control' id='quizsetInputTitle' type='text' placeholder='" + works[page].instruction + "'>\
              <button type='button' id='quiz_settitle_btn' class='btn btn-success btn-md btn-block'>Übernehmen</button>\
            </div>\
            <div class='form-group'>\
              <label for='quizsetInputHeader'>Titel:</label>\
              <input class='form-control' id='quizsetInputHeader' type='text' placeholder='" + works[page].question + "'>\
              <button type='button' id='quiz_sethead_btn' class='btn btn-success btn-md btn-block'>Übernehmen</button>\
            </div>\
          </div>\
          <div class='carousel-item' id='form_options'>")
          $("#form_options").append("\
          <h3>Form editieren:</h3>\
          <div class='tab-bar'></div>\
          <div class='tab-frame'></div>"
        )
        var quiz_formitemplace = ""
        if(setoption==0) {
          $('#quizSetTitles').attr("class", "carousel-item active")
          $('#form_options').attr("class", "carousel-item")
        } else if (setoption==1) {
          $('#form_options').attr("class", "carousel-item active")
          $('#quizSetTitles').attr("class", "carousel-item")
        }
        for (xv=0;xv<works[page].option_input.length;xv++) {
          $(".tab-bar").append("\
          <a id='tab_page_to" + xv + "' class='tab' value=" + xv + "><span>(#" + (xv+1) + ")</span></a>"
          )
          $('#tab_page_to' + xv).click(function () {
            console.log(".tabcontent" + $.attr(this, 'value'))
            $('#tab_page_to' + act_tab).css('background','gray')
            $('#tab_page_to'+$.attr(this, 'value')).css('background','darkgray')
            showtab($.attr(this, 'value'))
            tab = $.attr(this, 'value')
            })
          $(".tab-frame").append("\
          <div class='tabcontent" + xv + "'>"
          ) 
          if (works[page].option_input[xv][0]==="dropdown_minmax") {
            feature_render = "Dropdown MinMax"
            console.log("Dropdown MinMax")
          } else if (works[page].option_input[xv][0]==="dropdown") {
            feature_render = "Dropdown"
            console.log("Dropdown")
          } else if (works[page].option_input[xv][0]==="dropdown-btn") {
            feature_render = "Drop Down Button"
            console.log("Drop Down Button")
          }
           else if (works[page].option_input[xv][0]==="input_line") {
            feature_render = "Input"
            console.log("Single Line Text")
          } else if (works[page].option_input[xv][0]==="radio") {
            feature_render = "RadioButton"
            console.log("Radio")
          } else if (works[page].option_input[xv][0]==="input_multiline") {
            feature_render = "Multi Line Text"
            console.log("Radio")
          } else if (works[page].option_input[xv][0]==="checkbox") {
            feature_render = "CheckBox"
            console.log("Checkbox")
          } else if (works[page].option_input[xv][0]==="accordion") {
            feature_render = "Accordion"
            console.log("Accordion")
          }
          for (xvv=0;xvv<works[page].option_input[xv][1].length;xvv++) {

            let num1 = xv
            let num2 = xvv
            $('#quiz_cbtitlebut' + xv + '-' + xvv).click(function(nul, input1=num1, input2=num2) {
              $('#aski_frame').empty()
              works[page].option_input[input1][1][input2][0] = $("#quiz_cbtitleinp"+input1+"-"+input2).val()
              startquiz(page)
            })
            $(".tabcontent" + xv).append("\
              <div class='form-group quiz_itemframe' id='quiz_itemframe" + xv + "-" + xvv + "'>\
              <div class='form-group' id='form-group" + xv + xvv + "'>\
                <label for='quizsetInputHeader'>" + feature_render + "-Title:</label>")
            if (feature_render==="RadioButton" || feature_render==="CheckBox" || feature_render==='Dropdown' || feature_render === 'Drop Down Button') {
                $("#form-group" + xv + xvv).append("\
                  <input class='form-control' id='quiz_cbtitleinp" + xv + "' type='text' placeholder='" + works[page].option_input[xv][1][xvv][0] + "'>\
                  <button type='button' id='quiz_cbtitlebut" + xv + "' class='btn btn-success btn-block btn-sm'>Übernehmen</button>\
                </div>")
              $("#quiz_cbtitlebut" + xv).click(function(nul, input1=num1, input2=num2) {
                $('#aski_frame').empty()
                console.log(works[page].option_input[input1][1][input2][0])

                works[page].option_input[input1][1][input2][0] = $("#quiz_cbtitleinp" + input1).val()
                quiz_setrefresh()
                showtab(act_tab)
                startquiz(page)
              })  
            }
            else if (feature_render == 'Dropdown MinMax') {
              // console.log(works[page].option_input[xv][1][xvv][0])
              $("#quiz_itemframe" + xv + "-" + xvv).append("\
                <div class='row' id='quizitemrow" + xv + "-" + xvv + "'>\
                  <input class='col-8 form-control' id='quiz_formtitle" + xv + "-" + xvv + "' type='text' placeholder='" + works[page].option_input[xv][1][xvv][0] + "'>\
                  <button type='button' id='quiz_cbtitlebut" + xv + "-" + xvv + "' class='col-2 btn btn-success btn-sm'>Ändern</button>\
                  <input class='col-8 form-control' id='quiz_formddmin" + xv + "-" + xvv + "' type='text' placeholder=' Min: " + works[page].option_input[xv][1][xvv][1][0] + "'>\
                  <button type='button' id='quiz_cbddmin" + xv + "-" + xvv + "' class='col-2 btn btn-success btn-sm'>Ändern</button>\
                  <input class='col-8 form-control' id='quiz_formddmax" + xv + "-" + xvv + "' type='text' placeholder=' Max: " + works[page].option_input[xv][1][xvv][1][1] + "'>\
                  <button type='button' id='quiz_cbddmax" + xv + "-" + xvv + "' class='col-2 btn btn-success btn-sm'>Ändern</button>\
                  </div>"
                )
                $('#quiz_cbtitlebut' + xv + "-" + xvv).click(function(nul, input1=num1, input2=num2) {
                  $('#aski_frame').empty()
                  console.log(works[page].option_input[input1][1])
                  works[page].option_input[input1][1][input2][0] = $("#quiz_formtitle" + input1 + "-" + input2).val()
                  console.log("TEST")
                  quiz_setrefresh()
                  showtab(act_tab)
                  startquiz(page)
                })
                $('#quiz_cbddmin' + xv + "-" + xvv).click(function(nul, input1=num1, input2=num2) {
                  $('#aski_frame').empty()
                  console.log(works[page].option_input[input1][1])
                  works[page].option_input[input1][1][input2][1][0] = $("#quiz_formddmin" + input1 + "-" + input2).val()
                  console.log("TEST")
                  quiz_setrefresh()
                  showtab(act_tab)
                  startquiz(page)
                })
                $('#quiz_cbddmax' + xv + "-" + xvv).click(function(nul, input1=num1, input2=num2) {
                  $('#aski_frame').empty()
                  works[page].option_input[input1][1][input2][1][1] = $("#quiz_formddmax" + input1 + "-" + input2).val()
                  quiz_setrefresh()
                  showtab(act_tab)
                  startquiz(page)
                })
              }
              else if (feature_render == 'Accordion') {
                $("#quiz_itemframe" + xv + "-" + xvv).append("\
                  <div class='row' id='quizitemrow" + xv + "-" + xvv + "'>\
                    <input class='col-8 form-control' id='quiz_formtitle" + xv + "-" + xvv + "' type='text' placeholder='" + works[page].option_input[xv][1][xvv][0] + "'>\
                    <button type='button' id='quiz_cbtitlebut" + xv + "-" + xvv + "' class='col-2 btn btn-success btn-sm'>Ändern</button>\
                    <input class='col-8 form-control' id='quiz_formtext" + xv + "-" + xvv + "' type='text' placeholder='" + works[page].option_input[xv][1][xvv][1][0] + "'>\
                    <button type='button' id='quiz_cbtext" + xv + "-" + xvv + "' class='col-2 btn btn-success btn-sm'>Ändern</button>\
                    </div>"
                  )
                  $('#quiz_cbtitlebut' + xv + "-" + xvv).click(function(nul, input1=num1, input2=num2) {
                    $('#aski_frame').empty()
                    works[page].option_input[input1][1][input2][0] = $("#quiz_formtitle" + input1 + "-" + input2).val()
                    quiz_setrefresh()
                    showtab(act_tab)
                    startquiz(page)
                  })
                  $('#quiz_cbtext' + xv + "-" + xvv).click(function(nul, input1=num1, input2=num2) {
                    $('#aski_frame').empty()
                    works[page].option_input[input1][1][input2][1] = $("#quiz_formtext" + input1 + "-" + input2).val()
                    quiz_setrefresh()
                    showtab(act_tab)
                    startquiz(page)
                  })

              }
              else if (feature_render == "Input" || feature_render == 'Multi Line Text') {
                $("#quiz_itemframe" + xv + "-" + xvv).append("\
                <div class='row' id='quizitemrow" + xv + "-" + xvv + "'>\
                  <input class='col-8 form-control' id='quiz_formtitle" + xv + "-" + xvv + "' type='text' placeholder='" + works[page].option_input[xv][1][xvv][0] + "'>\
                  <button type='button' id='quiz_cbtitlebut" + xv + "-" + xvv + "' class='col-2 btn btn-success btn-sm'>Ändern</button>\
                  <input class='col-8 form-control' id='quiz_formph" + xv + "-" + xvv + "' type='text' placeholder='" + works[page].option_input[xv][1][xvv][1] + "'>\
                  <button type='button' id='quiz_cbplaceholdbut" + xv + "-" + xvv + "' class='col-2 btn btn-success btn-sm'>Ändern</button>\
                  <input class='col-8 form-control' id='quiz_formsubmsg" + xv + "-" + xvv + "' type='text' placeholder='" + works[page].option_input[xv][1][xvv][2] + "'>\
                  <button type='button' id='quiz_cbsubmsgbut" + xv + "-" + xvv + "' class='col-2 btn btn-success btn-sm'>Ändern</button>\
                  </div>"
                )
                $('#quiz_cbtitlebut' + xv + "-" + xvv).click(function(nul, input1=num1, input2=num2) {
                  $('#aski_frame').empty()
                  works[page].option_input[input1][1][input2][0] = $("#quiz_formtitle" + input1 + "-" + input2).val()
                  quiz_setrefresh()
                  showtab(act_tab)
                  startquiz(page)
                })
                $('#quiz_cbplaceholdbut' + xv + "-" + xvv).click(function(nul, input1=num1, input2=num2) {
                  $('#aski_frame').empty()
                  works[page].option_input[input1][1][input2][1] = $("#quiz_formph" + input1 + "-" + input2).val()
                  quiz_setrefresh()
                  showtab(act_tab)
                  startquiz(page)
                })
                $('#quiz_cbsubmsgbut' + xv + "-" + xvv).click(function(nul, input1=num1, input2=num2) {
                  $('#aski_frame').empty()
                  works[page].option_input[input1][1][input2][2] = $("#quiz_formsubmsg" + input1 + "-" + input2).val()
                  quiz_setrefresh()
                  showtab(act_tab)
                  startquiz(page)
                })
              }

              if (feature_render === "Input" || feature_render === 'Multi Line Text' || feature_render ===  'Accordion' || feature_render == 'Dropdown MinMax' ) {
                if (num2==(works[page].option_input[xv][1].length-1)) {
                  $(".tabcontent" + xv).append("\
                  <button type='button' id='quiz_delfeature" + xv + "-" + xvv +"' class='btn btn-danger btn-lg' value='" + xv + "'>Entfernen</button>"
                  )
                  $("#quiz_delfeature" + xv + "-" + xvv).click(function(){
                    console.log("Löschen: " +  works[page].option_input.splice($(this).attr("value"),1))
                    $('#aski_frame').empty()
                    quiz_setrefresh()
                    showtab(act_tab)
                    startquiz(page)
                  })
                }
              }

              for (xvvv=0;xvvv<works[page].option_input[xv][1][xvv][1].length;xvvv++) {
                let num3 = xvvv
                if (feature_render == "CheckBox" || feature_render == 'RadioButton' || feature_render == 'Dropdown' || feature_render == "Drop Down Button") {
                  quiz_formitemplace = works[page].option_input[xv][1][xvv][1][xvvv]
                  $("#quiz_itemframe" + xv + "-" + xvv).append("\
                  <div class='row' id='quizitemrow" + xv + "-" + xvv + "-" + xvvv + "'>\
                    <input class='col-6 form-control' id='quiz_formitem" + xv + "-" + xvv + "-" + xvvv + "' type='text' placeholder='" + quiz_formitemplace + "'>\
                    <button type='button' id='quiz_cbtitlebut" + xv + "-" + xvv + "-" + xvvv + "' class='col-2 btn btn-success btn-sm'>Ändern</button>\
                    <button type='button' id='quiz_cbtitledelbut" + xv + "-" + xvv + "-" + xvvv + "' class='col-2 btn btn-danger btn-sm'>Löschen</button>\
                    </div>"
                  )
                  $('#quiz_cbtitlebut' + xv + "-" + xvv + "-" + xvvv).click(function(nul, input1=num1, input2=num2, input3=num3) {
                    $('#aski_frame').empty()
                    works[page].option_input[input1][1][input2][1][input3] = $("#quiz_formitem" + input1 + "-" + input2 + "-" + input3).val()
                    quiz_setrefresh()
                    showtab(act_tab)
                    startquiz(page)
                  })
                  $('#quiz_cbtitledelbut' + xv + "-" + xvv + "-" + xvvv).click(function(nul, input1=num1, input2=num2, input3=num3) {
                    $('#aski_frame').empty()
                    works[page].option_input[input1][1][input2][1].splice(([input3]),1)
                    $("#quizitemrow" + input1 + "-" + input2 + "-" + input3).empty()
                    quiz_setrefresh()
                    showtab(act_tab)
                    startquiz(page)
                  })
                            
                if (num3==(works[page].option_input[xv][1][xvv][1].length-1)) {
                  $(".tabcontent" + xv).append("\
                  <button type='button' id='quiz_additem" + xv + "-" + xvv + "-" + xvvv + "' class='btn btn-success btn-lg'>Weitere</button>\
                  <button type='button' id='quiz_delfeature" + xv + "-" + xvv +"' class='btn btn-danger btn-lg'>Entfernen</button>"
                  )
                  $('#quiz_additem' + xv + '-' + xvv + '-' + xvvv).click(function(nul, input1=num1, input2=num2) {
                    $('#aski_frame').empty()
                    works[page].option_input[input1][1][input2][1].push("#ToBeFilled")
                    quiz_setrefresh()
                    showtab(act_tab)
                    startquiz(page)
                  })
                  $("#quiz_delfeature" + xv + "-" + xvv).click(function(nul, input1=num1, input2=num2){
                    works[page].option_input.splice($(this).attr("value"),0)
                    $('#aski_frame').empty()
                    quiz_setrefresh()
                    showtab(act_tab)
                    startquiz(page)
                  })
                }
              }
            }
            $(".tabcontent" + xv).append("\
              </div>")
            }
          $(".tab-frame").append("\
          </div>"
          )
          $(".tabcontent" + xv).hide()
        }
        $('.tab').css('width', (100/works[page].option_input.length-3)+'%')
        $('.quizSetSwitch').click(function() {
          if (setoption == $.attr(this, 'data-slide-to')) {
            $('#quizSetSwitchTitles').css("background","darkgray")
            $('#quizSetSwitchOptions').css("background","gray")
          } else {
            $('#quizSetSwitchTitles').css("background","gray")
            $('#quizSetSwitchOptions').css("background","darkgray")
          }
          setoption = $.attr(this, 'data-slide-to');
        })
        $("#form_options").append("\<div class='setfeaturebox'> <button type='button' id='quiz_addoptioninput' class='btn btn-success btn-md btn-block'>Feature hinzufügen</button></div>")
        $("#aski_setter").append("\
        </div>\
      </div>"
      )
      $('#quiz_addoptioninput').click(function () {
        console.log("Neues Feature anlegen")
        $('#quiz_addoptioninput').hide()
        $('.setfeaturebox').append("\
        <div class='form-group'>\
          <label for='addFormControl'>Example select</label>\
          <select class='form-control' id='addFormControl'>\
            <option>Single Line Text</option>\
            <option>Multi Line Text</option>\
            <option>Accordion</option>\
            <option>CheckBox</option>\
            <option>RadioButton</option>\
            <option>Dropdown MinMax</option>\
            <option>Dropdown</option>\
          </select>\
        </div>\
        <button type='button' id='quiz_applyoption' class='btn btn-success btn-md btn-block'>Bestätigen</button>"
        )
        $("#quiz_applyoption").click(function() {
          console.log("Bestätige Feature Add")
          console.log($('#addFormControl').val())
          if ($('#addFormControl').val()==="CheckBox") {
            console.log("This is a CheckBox")
            $('.setfeaturebox').empty()
            $('.setfeaturebox').append("\
            <div class='form-group'>\
              <input class='form-control' id='addFormTitle' type='text' placeholder='Titel'>\
              <button type='button' id='addFormTitleBtn' class='btn btn-success btn-md btn-block'>Übernehmen</button>\
            </div>"
            )
            $('#addFormTitleBtn').click(function() {
              works[page].option_input.push(["checkbox", [[[$('#addFormTitle').val()],["#####"]]]])
              $('#aski_frame').empty()
              quiz_setrefresh()
              showtab(act_tab)
              startquiz(page)
            })
          }
          else if ($('#addFormControl').val()==="RadioButton") {
            console.log("This is a RadioButton")
            $('.setfeaturebox').empty()
            $('.setfeaturebox').append("\
            <div class='form-group'>\
              <input class='form-control' id='addFormTitle' type='text' placeholder='Titel'>\
              <button type='button' id='addFormTitleBtn' class='btn btn-success btn-md btn-block'>Übernehmen</button>\
            </div>"
            )
            $('#addFormTitleBtn').click(function() {
              works[page].option_input.push(["radio", [[[$('#addFormTitle').val()],["#####"]]]])
              $('#aski_frame').empty()
              quiz_setrefresh()
              showtab(act_tab)
              startquiz(page)
            })
          }
          else if ($('#addFormControl').val()==="Single Line Text") {
            console.log("This is a Singe Line Text")
            $('.setfeaturebox').empty()
            $('.setfeaturebox').append("\
            <div class='form-group'>\
              <input class='form-control' id='addFormTitle' type='text' placeholder='Titel'>\
              <button type='button' id='addFormTitleBtn' class='btn btn-success btn-md btn-block'>Übernehmen</button>\
            </div>"
            )
            $('#addFormTitleBtn').click(function() {
              works[page].option_input.push(["input_line", [[$('#addFormTitle').val(),"Placeholder","#######"]]])
              $('#aski_frame').empty()
              quiz_setrefresh()
              showtab(act_tab)
              startquiz(page)
            })
          }
          else if ($('#addFormControl').val()==="Accordion") {
            console.log("This is a Accordion")
            $('.setfeaturebox').empty()
            $('.setfeaturebox').append("\
              <div class='form-group'>\
              <input class='form-control' id='addFormTitle' type='text' placeholder='Titel'>\
              <input class='form-control' id='addFormMessage' type='text' placeholder='Message'>\
              <button type='button' id='addFormTitleBtn' class='btn btn-success btn-md btn-block'>Übernehmen</button>\
            </div>"
            )
            $('#addFormTitleBtn').click(function() {
              works[page].option_input.push(["accordion", [[$('#addFormTitle').val(),$('#addFormMessage').val()]]])
              $('#aski_frame').empty()
              quiz_setrefresh()
              showtab(act_tab)
              startquiz(page)
            })
          }
          else if ($('#addFormControl').val()==="Multi Line Text") {
            console.log("This is a Multi Line Text")
            $('.setfeaturebox').empty()
            $('.setfeaturebox').append("\
            <div class='form-group'>\
              <input class='form-control' id='addFormTitle' type='text' placeholder='Titel'>\
              <button type='button' id='addFormTitleBtn' class='btn btn-success btn-md btn-block'>Übernehmen</button>\
            </div>"
            )
            $('#addFormTitleBtn').click(function() {
              works[page].option_input.push(["input_multiline", [[$('#addFormTitle').val(),"Placeholder","#######"]]])
              $('#aski_frame').empty()
              quiz_setrefresh()
              showtab(act_tab)
              startquiz(page)
            })
          }
          else if ($('#addFormControl').val()==="Dropdown MinMax") {
            console.log("This is a DropDown MinMax")
            $('.setfeaturebox').empty()
            $('.setfeaturebox').append("\
            <div class='form-group'>\
              <input class='form-control' id='addFormTitle' type='text' placeholder='Titel'>\
              <input class='form-control' id='addFormMin' type='text' placeholder='Min (Zahl!)'>\
              <input class='form-control' id='addFormMax' type='text' placeholder='Max (Zahl!)'>\
              <button type='button' id='addFormTitleBtn' class='btn btn-success btn-md btn-block'>Übernehmen</button>\
            </div>"
            )
            $('#addFormTitleBtn').click(function() {
              works[page].option_input.push(["dropdown_minmax", [[$('#addFormTitle').val(),[$('#addFormMin').val(),$('#addFormMax').val()]]]])
              $('#aski_frame').empty()
              quiz_setrefresh()
              showtab(act_tab)
              startquiz(page)
            })
          }
          else if ($('#addFormControl').val()==="Dropdown" || $('#addFormControl').val()==="Drop Down Button") {
            console.log("This is a DropDown or DropDown-Btn")
            $('.setfeaturebox').empty()
            $('.setfeaturebox').append("\
            <div class='form-group'>\
              <input class='form-control' id='addFormTitle' type='text' placeholder='Titel'>\
              <button type='button' id='addFormTitleBtn' class='btn btn-success btn-md btn-block'>Übernehmen</button>\
            </div>"
            )
            $('#addFormTitleBtn').click(function() {
              if ($('#addFormControl').val()=== "Drop Down Button") {
              works[page].option_input.push(["dropdown-btn", [[$('#addFormTitle').val(),[["#####"]]]]])
              } else {
                works[page].option_input.push(["dropdown", [[$('#addFormTitle').val(),[["#####"]]]]])
              }
              $('#aski_frame').empty()
              quiz_setrefresh()
              showtab(act_tab)
              startquiz(page)
            })
          }
        })
        
      })


      $("#aski_setter").append("\<div class='setbuttonbox'> <button type='button' id='delpage' class='btn btn-danger btn-lg btn-block'>Seite entfernen</button> </div>")
      if (page==(works.length-1)) {
        $(".setbuttonbox").append("\<button type='button' id='addpage' class='btn btn-primary btn-lg btn-block'>Seite hinzufügen</button>")
        $('#addpage').click(function(){
          works.push({instruction:false,question:false,option_input:[]})
          $('#aski_frame').empty()
          quiz_setrefresh()
          showtab(act_tab)
          progress_refresh()
          startquiz(works.length-1)
        })}
      $('#delpage').click(function(){
        if (works.length==1) { 
          $('#delpage').hide()
        } else {
          $('#delpage').show()
        works.splice(page,1)
        if (page==(works.length)) {
          page = (page-1)
        }
        $('#aski_frame').empty()
        progress_refresh()
        quiz_setrefresh()
        startquiz(page)
        }  
      })
      $("#form_options").append("\
    </div>"
  )

  // Setup: SubTitle for Page
  $('#quiz_settitle_btn').click(function() {
    works[page].instruction = $("#quizsetInputTitle").val()
    $('#aski_frame').empty()
    startquiz(page)
  })

  // Setup: MainTitle for Page
  $('#quiz_sethead_btn').click(function() {
    works[page].question = $("#quizsetInputHeader").val()
    $('#aski_frame').empty()
    startquiz(page)
  })
  $('.carousel').carousel('pause')
  }

  // Button to switch on the Setup
  var setquiz = false
  $("#quiz_setfun").click(function(act_page) {
    if(setquiz==false) {
      $("#aski_setter").show()
      $("#aski_frame").parent().attr("class", "col-sm-12 col-lg-7")
      $("#aski_setter").attr("class", "col-sm-12 col-lg-4")
      $("#quiz_setfun span").empty()
      $("#quiz_setfun span").append("Zurück zum Quiz")
      setquiz = true
      quiz_setrefresh()
    } else {
      $("#aski_setter").hide()
      $("#aski_frame").parent().attr("class", "col-sm-12")
      $("#aski_setter").attr("class", "col-sm-12 col-lg-4")
      $("#quiz_setfun span").empty()
      $("#quiz_setfun span").append("Quiz-Settings")
      setquiz = false
    }
  })
  $("#aski_setter").hide()

  // Quiz-Start
  function startquiz(act_page) {
    if(act_page==0) {
      $('#quizback').hide();
      $('#quiznxt').show();
    }
    if(act_page>0) {
      quiz_setrefresh();
      $('#quizback').show();
    }
    if(act_page<works.length) {
      $('#quiznxt').show()
    }

    $("#aski_frame").append("\
    <div class='col-12 instruction'>" +
      works[act_page].instruction +
    "</div>\
    <div class='col-12' id='question'>" +
      works[act_page].question +
    "</div>"
    );
    var quiz_pg = "#quizform" + act_page
    $("#aski_frame").append("\<form id='quizform" + act_page + "'>")
    for (var form_nr=0; form_nr < works[act_page].option_input.length; form_nr++) {

      if (works[act_page].option_input[form_nr][0] === "dropdown_minmax") {
        for (var f=0; f < works[act_page].option_input[form_nr][1].length; f++) {
            $(quiz_pg).append("\
            <div class='form-group option'>\
              <label for='exampleFormControlSelect" + form_nr + f + "'>" + works[act_page].option_input[form_nr][1][f][0] + "</label>\
              <select class='form-control' id='exampleFormControlSelect" + form_nr + f + "'>");
            for (var num=works[act_page].option_input[form_nr][1][f][1][0]; num<works[act_page].option_input[form_nr][1][f][1][1]; num++) {
              $("#exampleFormControlSelect"+form_nr+f).append("\
                <option>" + num + "</option>"
              )
            }
            console.log(document.querySelector("#exampleFormControlSelect" + form_nr + f).value)
            if (rentenrechner_out[act_page] != undefined) { try { document.querySelector("#exampleFormControlSelect" + form_nr + f).value = rentenrechner_out[act_page] } catch(e) {} }
          $("#aski_frame").append("\
            </select>\
          </div>"
          )

        }
      }

        if (works[act_page].option_input[form_nr][0] === "input_multiline") {
        for (var f=0; f < works[act_page].option_input[form_nr][1].length; f++) {
            var form_name = "#form_grp" + [act_page] + [form_nr] + [f]
            $(quiz_pg).append("\
                <div id='form_grp" + [act_page] + [form_nr] + [f] + "' class='form-group option'>\
                <label for='form_grp" + [act_page] + [form_nr] + [f] + "'>" + works[act_page].option_input[form_nr][1][f][0] + "</label>"
              )              
            $(form_name).append("\
              <textarea class='form-control' id='form_grp" + [act_page] + [form_nr] + [f] + "' rows='3' placeholder='" + works[act_page].option_input[form_nr][1][f][1] + "'></textarea>"
              )
            $(form_name).append("\
              <small id='textHelp' class='form-text text-muted'>" + works[act_page].option_input[form_nr][1][f][2] + "</small>"
            )
            $(quiz_pg).append("</div>")
            if (rentenrechner_out[act_page] != undefined) { try { document.querySelector("#form_grp" + [act_page] + [form_nr] + [f]).childNodes[3].value = rentenrechner_out[act_page] } catch(e) {} }
        }
      }

      if (works[act_page].option_input[form_nr][0] === "input_line") {
        for (var f=0; f < works[act_page].option_input[form_nr][1].length; f++) {
            var form_name = "#form_grp" + [act_page] + [form_nr] + [f]
            $(quiz_pg).append("\
                <div id='form_grp" + [act_page] + [form_nr] + [f] + "' class='form-group option'>\
                <label for='form_grp" + [act_page] + [form_nr] + [f] + "'>" + works[act_page].option_input[form_nr][1][f][0] + "</label>"
              )              
            $(form_name).append("\
                <input type='text' class='form-control' id='form_grp" + [act_page] + [form_nr] + [f] + "' aria-describedby='textHelp' placeholder=" + works[act_page].option_input[form_nr][1][f][1] + ">"
              )
            $(form_name).append("\
              <small id='textHelp' class='form-text text-muted'>" + works[act_page].option_input[form_nr][1][f][2] + "</small>"
            )
            $(quiz_pg).append("</div>")
            if (rentenrechner_out[act_page] != undefined) { try { document.querySelector("#form_grp" + [act_page] + [form_nr] + [f]).childNodes[3].value = rentenrechner_out[act_page] } catch(e) {} }
        }
      }

      if (works[act_page].option_input[form_nr][0] === "accordion") {
        for (var f=0; f < works[act_page].option_input[form_nr][1].length; f++) {
            var form_name = "#form_grp" + [act_page] + [form_nr] + [f]
            $(quiz_pg).append("\
            <div class='accordion' id='accordion" + page + f + "'>\
            <div class='card'>\
              <div class='card-header' id='heading" + page + f + "'>\
                <h5 class='mb-0'>\
                  <button class='btn btn-link' type='button' data-toggle='collapse' data-target='#collapse" + page + f + "' aria-expanded='true' aria-controls='collapse" + page + f + "'>" +
                  works[act_page].option_input[form_nr][1][f][0] + 
                  "\</button>\
                </h5>\
              </div>\
              <div id='collapse" + page + f + "' class='collapse' aria-labelledby='heading" + page + f + "' data-parent='#accordion" + page + f + "'>\
                <div class='card-body'>" + 
                  works[act_page].option_input[form_nr][1][f][1] +
                "\</div>\
              </div>\
            </div>\
          </div>")
        }
      }

      if (works[act_page].option_input[form_nr][0] === "radio") {
        for (var f=0; f < works[act_page].option_input[form_nr][1].length; f++) {
          for (var xf=0; xf < works[act_page].option_input[form_nr][1][f][1].length; xf++) {

            if(xf === 0) {
              $(quiz_pg).append("\<div id='form_grp" + act_page + form_nr + f + "'>\
              <p>" + works[act_page].option_input[form_nr][1][f][0] + "</p>")

            }
            var id_name = [act_page] + [form_nr] + [f] +[xf]
            var form_name = "#form_grp" + [act_page] + [form_nr] + [f]
            $(form_name).append("\
              <div class='form-check form-check-inline' id='" + id_name + "'>"
            )
            if (xf==0) {
              $("#"+id_name).append("\
                <input class='form-check-input' type='radio' name='exampleRadios" + act_page + form_nr + f + "' id='" + form_name + "' value='" + works[act_page].option_input[form_nr][1][f][1][xf] + "' checked>"
              )
            } else {
              $("#"+id_name).append("\
                <input class='form-check-input' type='radio' name='exampleRadios" + act_page + form_nr + f + "' id='" + form_name + "' value='" + works[act_page].option_input[form_nr][1][f][1][xf] + "' >"
              )
            }

            $("#"+id_name).append("\
                <label class='form-check-label' for='" + form_name + "'>" + works[act_page].option_input[form_nr][1][f][1][xf] + "</label>"
                )
            };
            if(xf === works[act_page].option_input[form_nr][1].length) {
              $(form_name).append("\
            </div>"
          )
        }
        if (rentenrechner_out[act_page] != undefined) { document.forms[0].childNodes.forEach(function(ev){ ev.childNodes.forEach(function(ev2) {try {if (ev2.getAttribute("class")=="form-check form-check-inline") {if(ev2.childNodes[3].textContent==rentenrechner_out[act_page]) {ev2.childNodes[1].checked = true}  } } catch(ev3) {}} )}) }

      }
      }
      
      if (works[act_page].option_input[form_nr][0] === "dropdown-btn") {
        for (var f=0; f < works[act_page].option_input[form_nr][1].length; f++) {
          $(form_name).append("\
            <div class='dropdown'>\
              <button class='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton" + act_page + form_nr + f + "' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>\
                Dropdown button\
              </button>\
              <div class='dropdown-menu' id='dropdown-menu" + act_page + form_nr + f + "' aria-labelledby='dropdownMenuButton" + act_page + form_nr + f + "'>")
          for (var xf=0; xf < works[act_page].option_input[form_nr][1][f][1].length; xf++) {
            // console.log(works[act_page].option_input[form_nr][1][f][1])
            $("#dropdown-menu" + act_page + form_nr + f).append("\
            <a class='dropdown-item' href='#'>" + works[act_page].option_input[form_nr][1][f][1][xf] + "</a>")
            if(xf === 0) {
              $(quiz_pg).append("\<div id='form_grp" + act_page + form_nr + f + "'>\
              <p>" + works[act_page].option_input[form_nr][1][f][0] + "</p>")
            }
            var form_name = "#form_grp" + [act_page] + [form_nr] + [f]
            $(form_name).append("\
              </div>")
          };
          if(xf === works[act_page].option_input[form_nr][f].length) {
            $(quiz_pg).append("\</div")
          }
        };
      };

      if (works[act_page].option_input[form_nr][0] === "dropdown") {
        for (var f=0; f < works[act_page].option_input[form_nr][1].length; f++) {
          console.log(works[act_page].option_input[form_nr][1][f])
            $(quiz_pg).append("\
            <div class='form-group option'>\
              <label for='exampleFormControlSelect" + form_nr + f + "'>" + works[act_page].option_input[form_nr][1][f][0] + "</label>\
              <select class='form-control' id='exampleFormControlSelect" + form_nr + f + "'>");
            for (var num=0; num<works[act_page].option_input[form_nr][1][f][1].length; num++) { 
              $("#exampleFormControlSelect"+form_nr+f).append("\
                <option>" + works[act_page].option_input[form_nr][1][f][1][num] + "</option>"
              )
            }
          $("#aski_frame").append("\
            </select>\
          </div>"
          )
        }
      }


      if (works[act_page].option_input[form_nr][0] === "checkbox") {
        for (var f=0; f < works[act_page].option_input[form_nr][1].length; f++) {
          for (var xf=0; xf < works[act_page].option_input[form_nr][1][f][1].length; xf++) {
            if(xf === 0) {
              $(quiz_pg).append("\<div id='form_grp" + act_page + form_nr + f + "'>\
              <p>" + works[act_page].option_input[form_nr][1][f][0] + "</p>")
            }
            var id_name = [act_page] + [form_nr] + [f] +[xf]
            var form_name = "#form_grp" + [act_page] + [form_nr] + [f]
            $(form_name).append("\
              <div class='form-check form-check-inline option'>\
                <input class='form-check-input' type='checkbox' id='inlineCheckbox" + f + xf + "' value='" + works[act_page].option_input[form_nr][1][f][1][xf] + "'>\
                <label class='form-check-label' for='inlineCheckbox" + f + xf + "'>" + works[act_page].option_input[form_nr][1][f][1][xf] + "</label>\
              </div>"
            )
          };
          if(xf === works[act_page].option_input[form_nr][f].length) {
            $(quiz_pg).append("\</div")
          }
        };
      };




      $(form_name).css("margin-bottom", "2em")
      $(form_name + ' p').css("font-size", "1.2em")    }
    $("#aski_frame").append("\</form>")

  }

  // Start the Quiz
  $("#quizstart").click(startquiz(page))






 ///////////////////////////////////////////////////////////////
 // The News-Script starts here:



//  function news_feed() {
//    for (f=0; f<news.length; f++) {
//     console.log(news[f])
//     $('#news_container').append("\
//         <div class='col-sm-12 col-lg-6'>\
//                 <div class='card-body'>\
//                   <h5 class='card-title'>" + news[f].card_title + "</h5>\
//                   <p class='card-text'>" + news[f].card_pretext + "</p>\
//                     <button type='button' class='btn btn-primary' data-toggle='modal' data-target='#newsModal" + f +"'>\
//                     " + news[f].button_text + "\
//                       </button>\
//             </div>\
//         </div>\
//       <div class='modal fade' id='newsModal" + f + "' tabindex='-1' role='dialog' aria-labelledby='newsModalLabel" + f + "' aria-hidden='true'>\
//           <div class='modal-dialog' role='document'>\
//             <div class='modal-content'>\
//               <div class='modal-header'>\
//                 <h5 class='modal-title' id='newsModalLabel" + f + "'>" + news[f].card_title + "</h5>\
//                 <button type='button' class='close' data-dismiss='modal' aria-label='Close'>\
//                   <span aria-hidden='true'>&times;</span>\
//                 </button>\
//               </div>\
//               <div class='modal-body'>\
//                 <div class='row news_frame'>\
//                   <div class='modal_subtitle'>" + news[f].modal_subtitle + "</div>\
//                   <div class='modal_text'>" + news[f].modal_text + "</div>\
//                   <img class='modal_image' src='" + news[f].modal_image + "'>\
//                   <div class='modal_date'>" + news[f].modal_date + "</div>\
//                 </div>\
//               </div>\
//               <div class='modal-footer'>\
//                 <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>\
//               </div>\
//             </div>\
//           </div>\
//         </div>")
//     }
//  }

//  news_feed()

}); // /end function DOCUMENT READY !!!
