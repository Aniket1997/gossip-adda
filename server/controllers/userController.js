// controllers/userController.js
const User = require('../models/User');

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.updateProfile = async (req, res) => {
    const { name, statusMessage } = req.body;
    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ msg: 'User not found' });

        user.name = name || user.name;
        user.statusMessage = statusMessage || user.statusMessage;
        await user.save();

        res.json(user);
    } catch (err) {
        res.status(500).send('Server error');
    }
};
