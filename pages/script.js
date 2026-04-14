
//Send message to WhatsApp
  function sendToWhatsApp(e) {
    e.preventDefault(); // Prevent the default form submission behavior

  let phoneNumber = "918942862030"; // number with country code without + or 00
  let text = `Hello, Can I get more info ?`;
  let url = `https://wa.me/${phoneNumber}?text=${text}`;

  window.open(url, "_blank");
}


// Disable F12, Ctrl+Shift+I, Ctrl+U
document.onkeydown = function(e) {
  if (
    e.keyCode == 123 || // F12
    (e.ctrlKey && e.shiftKey && e.keyCode == 73) || // Ctrl+Shift+I
    (e.ctrlKey && e.keyCode == 85) // Ctrl+U
  ) {
    return false;
  }
};

// Disable right-click 
document.addEventListener("contextmenu", e => e.preventDefault());

// Detect DevTools
setInterval(function() {
  if (window.outerWidth - window.innerWidth > 150) {
    document.body.innerHTML = "Inspect not allowed";
  }
}, 1000);
