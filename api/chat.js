// This is a simplified example. In a real-world app, you'd use a server framework like Express.js.
// Assuming this is a serverless function or a simple Node.js endpoint.

module.exports = async (req, res) => {
    const { message } = req.body;
    let reply = "I'm sorry, I don't understand that.";

    if (message.toLowerCase().includes("hello")) {
        reply = "Hello there! How can I help you today?";
    } else if (message.toLowerCase().includes("how are you")) {
        reply = "I'm a bot, but I'm doing great! Thanks for asking.";
    }

    res.status(200).json({ reply });
};
