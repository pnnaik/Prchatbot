// Predefined static responses from the chatbot
const staticResponses = {
    "hello": "Hi! How can I help you?",
    "how are you": "I'm just a bot, but I'm doing great, thanks for asking!",
    "bye": "Goodbye! Take care!",
    "default": "Sorry, I didn't understand that. Can you ask something else?"
};

// Function to send message when the button is clicked
function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === '') return;  // Prevent sending empty messages

    // Display the user's message
    addMessage(userInput, 'user');

    // Clear the input field
    document.getElementById('userInput').value = '';

    // Get bot response and display it after a short delay
    const botResponse = getBotResponse(userInput);
    setTimeout(() => addMessage(botResponse, 'bot'), 500);  // Simulate thinking time
}

// Function to add a message to the chat
function addMessage(message, sender) {
    const chatBox = document.getElementById('chatBox');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', `${sender}-message`);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);

    // Auto scroll to the bottom of the chat
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to return static bot response
function getBotResponse(userMessage) {
    const messageLower = userMessage.toLowerCase();
    return staticResponses[messageLower] || staticResponses['default'];
}

// Function to detect 'Enter' key press for sending a message
function checkEnter(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}
