const mood = localStorage.getItem("userMood");
const greeting = document.getElementById("greeting");
const chatbox = document.getElementById("chatbox");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");

// Mood-based greeting
if (mood) {
  greeting.textContent = `Hi Satyam 👋, I see you're feeling "${mood}". Let's talk.`;
  addBotMessage(getMoodResponse(mood));
} else {
  greeting.textContent = "Hi Satyam 👋, how are you feeling today?";
}

// Handle user input
sendBtn.addEventListener("click", () => {
  const userText = userInput.value.trim();
  if (userText) {
    addUserMessage(userText);
    addBotMessage(getBotReply(userText));
    userInput.value = "";
  }
});

// Helper functions
function addUserMessage(msg) {
  chatbox.innerHTML += `<div><strong>You:</strong> ${msg}</div>`;
}

function addBotMessage(msg) {
  chatbox.innerHTML += `<div><strong>Bot:</strong> ${msg}</div>`;
}

function getMoodResponse(mood) {
  switch (mood.toLowerCase()) {
    case "sad":
      return "I'm here for you. Want to talk about what's weighing you down?";
    case "happy":
      return "That's wonderful! Want to share what made your day great?";
    case "anxious":
      return "Let's take a deep breath together. Would a calming tip help?";
    case "angry":
      return "It’s okay to feel that way. Want to vent or cool off with a distraction?";
    default:
      return "Thanks for sharing your mood. I'm here to support you.";
  }
}

function getBotReply(userText) {
  // Simple keyword-based response (can be upgraded to AI later)
  if (userText.includes("help")) return "I'm here to help. What’s on your mind?";
  if (userText.includes("breathe")) return "Try this: inhale for 4 seconds, hold for 4, exhale for 6.";
  if (userText.includes("quote")) return "“This too shall pass.” Want another?";
  return "Thanks for sharing. I’m listening.";
}