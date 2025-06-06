const faqs = {
  "how do i use paytm": [
    "1. Open Paytm app.",
    "2. Choose the service like 'Pay', 'Recharge', etc.",
    "3. Enter details and complete the transaction."
  ],
  "what is google pay": [
    "Google Pay is a digital payment app by Google.",
    "You can send/receive money, pay bills, and recharge with it."
  ],
  "how do i send a photo on whatsapp": [
    "1. Open WhatsApp and go to the chat.",
    "2. Tap the 📎 (attachment) icon.",
    "3. Select 'Gallery' or 'Camera'.",
    "4. Choose the photo and tap Send."
  ]
};

function normalize(text) {
  return text.toLowerCase().trim().replace(/[^\w\s]/gi, '');
}

function displayMessage(sender, text) {
  const chatMessages = document.getElementById("chat-messages");
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}`;
  messageDiv.innerText = text;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
  const inputField = document.getElementById("user-input");
  const userInput = inputField.value.trim();
  if (userInput === "") return;

  displayMessage("user", userInput);
  inputField.value = "";

  const normalizedInput = normalize(userInput);

  if (faqs[normalizedInput]) {
    faqs[normalizedInput].forEach(step => displayMessage("bot", step));
  } else {
    displayMessage("bot", "Sorry, I don't know that yet. Try another question like:\n- How do I use Paytm?\n- What is Google Pay?");
  }
}
