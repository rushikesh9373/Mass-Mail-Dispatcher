const emailForm = document.getElementById("emailForm");
const csvFileInput = document.getElementById("csvFile");
const invalidList = document.getElementById("invalidList");
const validList = document.getElementById("validList");
const emailContentInput = document.getElementById("emailContent");
const fromInput = document.getElementById("from"); // Added input for "From" field
const sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", function () {
  const file = csvFileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const csvContent = event.target.result;
      const lines = csvContent.split("\n");

      const invalidEmails = [];
      const validEmails = [];

      lines.forEach((line) => {
        const email = line.trim();
        if (isValidEmail(email)) {
          validEmails.push(email);
        } else {
          invalidEmails.push(email);
        }
      });

      displayEmails(invalidEmails, invalidList);
      displayEmails(validEmails, validList);

      // Send emails via AJAX
      sendEmails(validEmails);
    };
    reader.readAsText(file);
  }
});

function sendEmails(emails) {
  const from = fromInput.value;
  const subject = emailContentInput.value;
  const message = emailContentInput.value;

  // Send emails using AJAX to the PHP script
  fetch("sendmail.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `from=${encodeURIComponent(from)}&subject=${encodeURIComponent(
      subject
    )}&message=${encodeURIComponent(message)}&recipients=${encodeURIComponent(
      emails.join("\n")
    )}`,
  })
    .then((response) => response.text())
    .then((data) => {
      // Handle the response from the server if needed
      console.log(data);
    })
    .catch((error) => {
      console.error("Error sending emails:", error);
    });
}
