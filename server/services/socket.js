// services/socket.js
const GroupMessage = require('../models/GroupMessage');

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('New client connected');

        // Join group
        socket.on('join-group', (groupId) => {
            socket.join(groupId);
            console.log(`User joined group ${groupId}`);
        });

        // Send message in group
        socket.on('send-group-message', async (data) => {
            const message = new GroupMessage({
                group: data.groupId,
                sender: data.senderId,
                content: data.content,
            });
            await message.save();
            io.to(data.groupId).emit('receive-group-message', message);
        });

        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    });
};
