// script.js

async function uploadFile() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select an image file.");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  document.getElementById("result").innerText = "🔍 Analyzing...";

  try {
    const response = await fetch("/analyze", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    document.getElementById("result").innerText = `Result: ${data.result} \nConfidence: ${data.confidence}%`;
  } catch (error) {
    document.getElementById("result").innerText = "❌ Error: Could not analyze image.";
  }
}
