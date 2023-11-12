// modal_command.js

// Get the mintModal
var mintModal = document.getElementById("mintModal");

// Get the button that opens the mintModal
var btn = document.getElementById("mint-button-outer");

// Get the <span> element that closes the mintModal
var span = document.getElementsByClassName("mintModalClose")[0];

// When the user clicks the button, open the mintModal
btn.onclick = function() {
  mintModal.style.display = "block";
}

// When the user clicks on <span> (x), close the mintModal
span.onclick = function() {
  mintModal.style.display = "none";
}

// When the user clicks anywhere outside of the mintModal, close it
window.onclick = function(event) {
  if (event.target == mintModal) {
    mintModal.style.display = "none";
  }
}

