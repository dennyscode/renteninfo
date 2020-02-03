$( "body[data-page='QuestionsRechner']" ).ready(function() {
  // On Checkbox-Selection deactivate other Checkboxes
  function checkboxSelection (input) {
    console.log(input.parentElement)
    let ele
    let counter = input.parentNode.children.length
    for ( let i = 0; i < counter; i++) {
      ele = input.parentNode.children[i].children[1]
      if (input.parentNode.children[i] != input) {
        //console.log(input.parentNode.children[i].children[1])
        ele.style.backgroundColor = "#eee" //"#74cf12"
        ele.children[0].style.display = "none"
      } else {
        ele.style.backgroundColor = "#74cf12"
        ele.children[0].style.display = "flex"
      }
    }
  }

  function setNames(input) {
    console.log(input);
    let counter = input.length;
    for (let f = 0; f < counter; f++) {
      input[f].children[0].setAttribute("name", "rente_jobs[" + f + "][beginn]");
      input[f].children[1].setAttribute("name", "rente_jobs[" + f + "][ende]");
      input[f].children[3].setAttribute("name", "rente_jobs[" + f + "][brutto]");
    }
  }

  function checkboxEventAdder () {
    let counter
    let _counter
    let i
    let _i
    let ele
    counter = document.querySelectorAll(".js-checkboxes").length
    for (i = 0; i < counter; i++) {
      _counter = document.querySelectorAll(".js-checkboxes")[i].children[1].children.length
      for (_i = 0; _i < _counter; _i++) {
        ele = document.querySelectorAll(".js-checkboxes")[i].children[1].children[_i]
        ele.addEventListener("click", function() {checkboxSelection(this);console.log("CHECKBOX_TEST!")})
      }
    }
  }
  checkboxEventAdder()
  // Add Jobs on click
  function addJob(input) {
    console.log(input);
    const c = document.querySelector(".js-addJobhistory")
    let elements = input.parentNode.children[1].children.length
    console.log("Number of Jobs to add: " + elements)
    let d = document.createElement("div")
    d.setAttribute("class", "form__grid")
    for (let i=0; i < 3;i++) {
      let f = document.createElement("input");
      f.setAttribute("class", "form__input");
      f.setAttribute("multiple", "multiple");
      f.setAttribute("type", "text");

      if (i==0) {
        f.setAttribute("placeholder", "Beginn");
        f.setAttribute("name", "rente_jobs[" + elements + "][beginn]");
      }
      if (i==1) {
        f.setAttribute("placeholder", "Ende");
        f.setAttribute("name", "rente_jobs[" + elements + "][ende]");
      }
      if (i==2) {
        f.setAttribute("placeholder", "Brutto");
        f.setAttribute("name", "rente_jobs[" + elements + "][brutto]");
      }
      d.appendChild(f)
      if (i==2) {
        let remove_button = document.createElement("div");
        remove_button.setAttribute("class", "button js-delJob");
        let remove_container = document.createElement("div");
        remove_container.setAttribute("class", "icon icon__small");
        let remove = document.createElement("div");
        remove.setAttribute("class", "icon__delete");
        remove_container.appendChild(remove);
        remove_button.appendChild(remove_container);
        remove_button.addEventListener("click", function() {delJob(this)});
        d.appendChild(remove_button);
      }
    }
    c.parentNode.children[1].appendChild(d)
  }
  document.querySelector(".js-addJobhistory").addEventListener("click", function() {addJob(this)})

  function delJob(input) {
    let ele = input.parentNode.parentNode.children;
    input.parentElement.remove();
    setNames(ele);
  }

  try { document.querySelector(".js-delJob").addEventListener("click", function() {console.log("Del Job"); delJob(this)}) }
  catch (e) { if (e instanceof TypeError) {} }


  // Add Input Fields
  function createTextfields(input) {
    const c = document.querySelector("#rente_kinderlist");
    c.innerHTML = "";

    for (let i = 1; i<=input; i++) {
      let c = document.querySelector("#rente_kinderlist");
      let f = document.createElement("input");
      f.setAttribute("class", "form__input");
      f.setAttribute("multiple", "multiple");
      f.setAttribute("placeholder", i + ". Kind");
      f.setAttribute("type", "text");
      f.setAttribute("name", 'question[rente_kinder_gebjahr][]');
      c.appendChild(f);
    }
  }

  // this is the eventlistener for the slider rente_estimate
  try {
    document.querySelector("#slider_r_estimate").addEventListener("input", function() {document.querySelector("#rente_estimate_input").value = document.querySelector("#slider_r_estimate").value})
    document.querySelector("#slider_r_kinder").addEventListener("input", function() {document.querySelector("#question_rente_kinder").value = this.value;createTextfields(this.value)})
    document.querySelector("#question_rente_kinder").addEventListener("input", function() {document.querySelector("#question_rente_kinder").value = this.value;createTextfields(this.value)})
  
    // this is the eventlistener for the checkboxes
    document.querySelectorAll(".checkbox__label").forEach(function(element) { element.addEventListener("click", function() {this.children[0].checked= "true"}); })
  
    // eventlistener for rechner tool:
    // Haben Sie vorher gearbeitet? Radiobutton -->
  
    document.querySelector("#rente_uebergang__nein").parentElement.addEventListener("click", function() {document.querySelector("#rente_jobs").style.display ="none"})
    document.querySelector("#rente_uebergang__ja").parentElement.addEventListener("click", function() {document.querySelector("#rente_jobs").style.display ="flex";document.querySelector("#rente__kinder_gebjahr").style.display ="flex"})

    // Haben Sie Kinder? Radiobutton -->
    document.querySelector("#rente_kinder__nachwuchs_nein").parentElement.addEventListener("click", function() {document.querySelector("#question_rente_kinder").value="0";document.querySelector("#rente__kinder").style.display ="none";document.querySelector("#rente__kinder_gebjahr").style.display ="none"})
    document.querySelector("#rente_kinder__nachwuchs_ja").parentElement.addEventListener("click", function() {document.querySelector("#question_rente_kinder").value="1";document.querySelector("#rente__kinder").style.display ="flex";document.querySelector("#rente__kinder_gebjahr").style.display ="flex"})
  }
  catch (e) { if (e instanceof TypeError) {} }
  console.log("Testing Renteninfo_Form.js")
})
