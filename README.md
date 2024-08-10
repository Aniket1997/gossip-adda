chat-backend/
│
├── config/
│   └── db.js              
│
├── controllers/
│   ├── authController.js  
│   ├── userController.js  
│   ├── chatController.js  
│   ├── groupController.js  # Handles groups and channels
│   └── messageController.js # Handles message sending in groups, channels, and direct
│
├── models/
│   ├── User.js            
│   ├── Message.js         
│   ├── Group.js           # Group model (can be a channel or a group)
│   └── GroupMessage.js    # GroupMessage model for messages within a group or channel
│
├── routes/
│   ├── authRoutes.js      
│   ├── userRoutes.js      
│   ├── chatRoutes.js      
│   └── groupRoutes.js     # Routes for group and channel operations
│
├── middleware/
│   ├── authMiddleware.js  
│
├── services/
│   ├── socket.js          
│
├── .env                   
├── server.js              
└── package.json   


frontend


chat-frontend/
│
├── public/
│   └── index.html
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── LoginForm.js
│   │   │   └── RegisterForm.js
│   │   ├── Chat/
│   │   │   ├── ChatWindow.js
│   │   │   └── MessageInput.js
│   │   └── Group/
│   │       ├── GroupList.js
│   │       └── GroupChat.js
│   ├── contexts/
│   │   ├── AuthContext.js
│   │   └── ChatContext.js
│   ├── hooks/
│   │   └── useAuth.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Login.js
│   │   └── Register.js
│   ├── services/
│   │   ├── api.js
│   │   └── socket.js
│   ├── App.js
│   ├── main.jsx
│   └── index.css
│
├── .env
├── tailwind.config.js
├── postcss.config.js
└── package.json
