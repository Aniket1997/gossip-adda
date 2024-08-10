// controllers/groupController.js
const Group = require('../models/Group');
const User = require('../models/User');

exports.createGroup = async (req, res) => {
    const { name, description, isChannel, members } = req.body;
    try {
        const group = new Group({
            name,
            description,
            isChannel,
            members: members || [],
            createdBy: req.user.id,
        });
        await group.save();
        res.json(group);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.addMember = async (req, res) => {
    const { groupId, userId } = req.body;
    try {
        const group = await Group.findById(groupId);
        if (!group) return res.status(404).json({ msg: 'Group not found' });

        group.members.push(userId);
        await group.save();
        res.json(group);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.getGroupMessages = async (req, res) => {
    const { groupId } = req.params;
    try {
        const group = await Group.findById(groupId);
        if (!group) return res.status(404).json({ msg: 'Group not found' });

        const messages = await GroupMessage.find({ group: groupId }).sort({ createdAt: 1 });
        res.json(messages);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.getGroups = async (req, res) => {
    try {
        const groups = await Group.find({ members: req.user.id });
        res.json(groups);
    } catch (err) {
        res.status(500).send('Server error');
    }
};
