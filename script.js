const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const chatHistory = document.getElementById('chat-history');

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

async function sendMessage() {
    const message = userInput.value;
    if (!message) return;

    // Display user message in chat history
    chatHistory.innerHTML += `<div>You: ${message}</div>`;
    userInput.value = '';

    // Call the backend API
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });
        const data = await response.json();
        // Display bot's response in chat history
        chatHistory.innerHTML += `<div>Bot: ${data.reply}</div>`;
    } catch (error) {
        console.error('Error fetching data:', error);
        chatHistory.innerHTML += `<div>Bot: Sorry, I am having trouble connecting.</div>`;
    }
}
