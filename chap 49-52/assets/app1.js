function displayFormData() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var submittedData = document.getElementById("submittedData");
    submittedData.innerHTML = `
      <h2>Form Data:</h2>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Password:</strong> ${password}</p>
    `;

    // Prevent the form from submitting and refreshing the page
    return false;
  }