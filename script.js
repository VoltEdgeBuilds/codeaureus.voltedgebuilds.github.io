// script.js
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const chatHistory = document.getElementById('chat-history');

// Replace this with your Vercel deployment URL
const VERCEL_API_URL = 'https://your-vercel-project-name.vercel.app/api/chat';

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    chatHistory.innerHTML += `<div class="user-message">You: ${message}</div>`;
    userInput.value = '';

    try {
        const response = await fetch(VERCEL_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });
        
        const data = await response.json();
        chatHistory.innerHTML += `<div class="bot-message">Bot: ${data.reply}</div>`;
    } catch (error) {
        console.error('Error fetching data:', error);
        chatHistory.innerHTML += `<div class="bot-message error">Bot: Sorry, I am having trouble connecting.</div>`;
    }
}
