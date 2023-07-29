function toggleDetails(button) {
    var details = button.previousElementSibling;
    details.classList.toggle("details"); // Toggle the "details" class to show/hide full details

    if (details.classList.contains("details")) {
      button.textContent = "Read more";
    } else {
      button.textContent = "Read less";
    }
  }