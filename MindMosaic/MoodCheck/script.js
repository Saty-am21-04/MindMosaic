document.getElementById("logMoodBtn").addEventListener("click", function () {
  const mood = document.getElementById("moodInput").value.trim();

  if (mood) {
    // Save mood to localStorage
    localStorage.setItem("userMood", mood);

    // Redirect to chatbot page
    window.location.href = "chatbot.html";
  } else {
    alert("Please enter your mood before proceeding.");
  }
});

document.querySelectorAll(".emoji-group button").forEach(button => {
  button.addEventListener("click", () => {
    const moodInput = document.getElementById("moodInput");
    const isSelected = button.classList.contains("selected");

    // Deselect if already selected
    if (isSelected) {
      button.classList.remove("selected");
      moodInput.value = "";
    } else {
      // Remove 'selected' from all buttons
      document.querySelectorAll(".emoji-group button").forEach(btn => {
        btn.classList.remove("selected");
      });

      // Add 'selected' to clicked button
      button.classList.add("selected");

      // Update mood input field
      const mood = button.getAttribute("data-mood");
      const emoji = button.textContent;
      moodInput.value = `${emoji} (${mood})`;
    }
  });
});


