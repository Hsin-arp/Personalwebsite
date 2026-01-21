# 🎨 Personal Website - Full-Stack Application

A production-ready full-stack web application with a beautiful React frontend and a robust Node.js/Express backend.

## ✨ Features

### Frontend
- 🎨 **Pixel-perfect responsive UI** from Figma design
- ⚡ **React + Vite** for blazing-fast development
- 🎭 **Tailwind CSS** for modern styling
- 📱 **Fully responsive** across all devices
- 🎬 **Smooth animations** with Framer Motion
- 🎯 **Type-safe** with TypeScript

### Backend
- 🚀 **Node.js + Express** REST API
- 🗄️ **MongoDB** with Mongoose ODM
- 📧 **Nodemailer** for email notifications
- 🔐 **JWT** authentication (ready for use)
- ✅ **Input validation** and sanitization
- 🛡️ **Security middleware** (Helmet, CORS, Rate Limiting)
- 📝 **Error handling** and logging

### Contact Form
- ✅ Saves submissions to MongoDB
- 📧 Sends email notification to admin
- 📬 Auto-reply to users
- 🚫 Rate limiting (5/hour per IP)
- ✅ Real-time validation and error handling

## 🏗️ Architecture

```
Frontend (React + Vite)     Backend (Express + MongoDB)
     │                              │
     │  REST API                    │
     │  HTTP Requests               │
     ├─────────────────────────────►│
     │                              ├──► MongoDB
     │                              │
     │                              ├──► Nodemailer
     │                              │
     │◄─────────────────────────────┤
     │  JSON Response               │
```

## 📦 Tech Stack

**Frontend:**
- React 18.3.1
- Vite 6.3.5
- TypeScript 5.7.3
- Tailwind CSS 4.1.12
- Framer Motion
- Radix UI Components

**Backend:**
- Node.js (v18+)
- Express 4.21.1
- MongoDB with Mongoose 8.8.4
- Nodemailer 6.9.16
- JWT (jsonwebtoken) 9.0.2
- Express Validator 7.2.0
- Helmet 8.0.0
- CORS 2.8.5
- Express Rate Limit 7.4.1

## 🚀 Quick Start

### 1. Clone and Install

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

### 2. Configure Environment

**Backend** (`server/.env`):
```env
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:5173
MONGODB_URI=mongodb://localhost:27017/personal-website
JWT_SECRET=your-secret-key
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=admin@example.com
```

**Frontend** (`.env`):
```env
VITE_API_URL=http://localhost:5000/api
```

### 3. Start Servers

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

Visit: `http://localhost:5173`

## 📚 Detailed Documentation

- **[SETUP.md](./SETUP.md)** - Complete setup guide
- **[server/README.md](./server/README.md)** - Backend API documentation

## 🔌 API Endpoints

### Public Routes

- `POST /api/contact` - Submit contact form
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello!"
  }
  ```

- `GET /health` - Server health check

### Admin Routes (Future: Requires JWT)

- `GET /api/contact` - Get all contacts (paginated)
- `GET /api/contact/:id` - Get contact by ID
- `PATCH /api/contact/:id` - Update contact status
- `DELETE /api/contact/:id` - Delete contact

## 🔒 Security Features

- ✅ Input validation and sanitization
- ✅ Rate limiting (5 submissions/hour)
- ✅ CORS protection
- ✅ Helmet.js security headers
- ✅ Environment variable protection
- ✅ Error handling without info leakage
- ✅ JWT authentication ready

## 📧 Email Configuration

The contact form automatically:
1. Saves submission to MongoDB
2. Sends notification email to admin
3. Sends auto-reply to user

**Gmail Setup:**
1. Enable 2-Step Verification
2. Create App Password
3. Use App Password (not regular password)

## 🗄️ Database Schema

### Contact Model
```javascript
{
  name: String (required, max 100),
  email: String (required, validated),
  message: String (required, max 2000),
  status: Enum (new, read, replied, archived),
  ipAddress: String,
  userAgent: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 📁 Project Structure

```
Personalwebsite/
├── src/                          # Frontend
│   ├── app/
│   │   ├── components/          # React components
│   │   └── App.tsx              # Main app component
│   ├── lib/
│   │   └── api.ts               # API utilities
│   └── styles/                  # CSS files
├── server/                       # Backend
│   ├── src/
│   │   ├── config/              # Database config
│   │   ├── controllers/         # Route controllers
│   │   ├── models/              # MongoDB models
│   │   ├── routes/              # API routes
│   │   ├── services/            # Email service
│   │   ├── middleware/          # Auth, validation
│   │   └── server.js            # Entry point
│   └── package.json
├── package.json                  # Frontend dependencies
├── vite.config.ts               # Vite config
└── SETUP.md                     # Setup guide
```

## 🧪 Testing

### Backend Health Check
```bash
curl http://localhost:5000/health
```

### Test Contact Form
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message"
  }'
```

## 🚢 Deployment

### Frontend
- Already configured for GitHub Pages
- Run `npm run deploy` to deploy

### Backend
- Deploy to services like:
  - Heroku
  - Railway
  - Render
  - AWS
  - DigitalOcean

**Important:** Update environment variables for production!

## 🎯 Next Steps

1. ✅ Complete setup
2. ✅ Test locally
3. 🔄 Add admin panel (optional)
4. 🔄 Implement JWT auth for admin routes
5. 🔄 Deploy to production
6. 🔄 Set up CI/CD (optional)

## 🐛 Troubleshooting

See [SETUP.md](./SETUP.md) for detailed troubleshooting guide.

Common issues:
- MongoDB connection errors
- Email not sending (check App Password)
- CORS errors (check FRONTEND_URL)
- Port conflicts

## 📝 License

MIT License - feel free to use this project!

## 🤝 Contributing

Contributions welcome! Please follow best practices:
- Clean, readable code
- Proper error handling
- Security considerations
- Documentation updates

---

**Built with ❤️ using React, Node.js, and MongoDB**

For detailed setup instructions, see [SETUP.md](./SETUP.md)
