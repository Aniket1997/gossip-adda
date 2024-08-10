// controllers/chatController.js
const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
    const { recipient, content } = req.body;
    console.log('Sending message:', { sender: req.user.id, recipient, content });

    try {
        const message = new Message({ sender: req.user.id, recipient, content });
        await message.save();
        res.json(message);
    } catch (err) {
        console.error('Error sending message:', err.message);
        res.status(500).send(`Server error: ${err.message}`);
    }
};

exports.getMessages = async (req, res) => {
    const { recipientId } = req.params;
    console.log('Fetching messages for recipient:', recipientId);

    try {
        const messages = await Message.find({
            $or: [
                { sender: req.user.id, recipient: recipientId },
                { sender: recipientId, recipient: req.user.id },
            ],
        }).sort({ createdAt: 1 });
        res.json(messages);
    } catch (err) {
        console.error('Error fetching messages:', err.message);
        res.status(500).send(`Server error: ${err.message}`);
    }
};

