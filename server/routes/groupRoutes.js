// routes/groupRoutes.js
const express = require('express');
const {
    createGroup,
    addMember,
    getGroupMessages,
    getGroups,
} = require('../controllers/groupController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', authMiddleware, createGroup);
router.post('/add-member', authMiddleware, addMember);
router.get('/:groupId/messages', authMiddleware, getGroupMessages);
router.get('/my-groups', authMiddleware, getGroups);

module.exports = router;
