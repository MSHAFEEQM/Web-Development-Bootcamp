
let cardDetails = {
    cardNumber : "001"
}
  var cardNumber = "111";
  var cardTitle = "Design One Card"
  var cardText = "lorem ipsum jsfni sifsn snmskfjus nsfjoisf snfsij snfshjfi snfsifhisf sfsi fs"

  var cardArea = document.getElementById("cardArea");
  
  var cardTemplate = `<div class="card">
                        <div class="card-head">
                            <p class="number">${cardNumber}</p>
                            <div class="tag">
                                <p>Daily UI</p>
                            </div>
                        </div>
                        <div class="card-body">
                            <h6 class="card-title">${cardTitle}</h6>
                            <p class="card-text">${cardText}</p>
                        </div>
                        <div class="card-buttons">
                            <button id="start-button">Start</button>
                            <button id="done-button">Done</button>
                            <button id="view-button">View Design</button>
                        </div>
                        </div>`

 
 
document.getElementById("addNewTask").onclick = ()=> {

    cardArea.insertAdjacentHTML("beforeend", cardTemplate);
    
}

window.onscroll = function() {
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
      // You're at the bottom of the page
      
    }
  };
