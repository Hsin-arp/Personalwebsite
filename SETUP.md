# 🚀 Full-Stack Setup Guide

Complete setup instructions for running the Personal Website frontend and backend.

## 📋 Prerequisites

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **MongoDB** - [Install locally](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free tier)
- **Email Account** - Gmail recommended (requires App Password)

## 🗂️ Project Structure

```
Personalwebsite/
├── src/                    # Frontend React app
│   ├── app/
│   ├── lib/
│   └── styles/
├── server/                 # Backend Express API
│   ├── src/
│   │   ├── config/        # Database, environment config
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # MongoDB models
│   │   ├── routes/        # API routes
│   │   ├── services/      # Email service
│   │   ├── middleware/    # Auth, validation, error handling
│   │   └── utils/         # Helper functions
│   └── package.json
├── package.json           # Frontend dependencies
└── vite.config.ts         # Vite configuration
```

## 🔧 Backend Setup

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Environment Variables

```bash
cd server
cp .env.example .env
```

Edit `server/.env` with your configuration:

```env
# Server
NODE_ENV=development
PORT=5000

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# MongoDB
MONGODB_URI=mongodb://localhost:27017/personal-website
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/personal-website

# JWT (for future auth)
JWT_SECRET=your_super_secret_jwt_key_change_this
JWT_EXPIRE=7d

# Email Configuration (Gmail Example)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password-here
SMTP_FROM_NAME=Your Name

# Admin Email (where contact submissions are sent)
ADMIN_EMAIL=admin@example.com
```

### 3. MongoDB Setup

#### Option A: Local MongoDB

1. Install MongoDB Community Edition
2. Start MongoDB service:
   ```bash
   # Windows
   net start MongoDB
   
   # macOS/Linux
   sudo systemctl start mongod
   ```
3. MongoDB URI: `mongodb://localhost:27017/personal-website`

#### Option B: MongoDB Atlas (Cloud)

1. Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist your IP (or `0.0.0.0/0` for development)
5. Get connection string and update `MONGODB_URI`

### 4. Email Setup (Gmail)

1. Go to your Google Account settings
2. Enable **2-Step Verification**
3. Go to **Security** > **2-Step Verification** > **App passwords**
4. Generate an App Password for "Mail"
5. Use this App Password (not your regular password) in `SMTP_PASS`

**Important**: Use an App Password, not your regular Gmail password!

### 5. Start Backend Server

```bash
cd server

# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

Backend will run on `http://localhost:5000`

Test: Visit `http://localhost:5000/health`

## 🎨 Frontend Setup

### 1. Install Dependencies

```bash
# From project root
npm install
```

### 2. Configure Environment Variables

```bash
cp .env.example .env
```

Edit `.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

For production, update to your backend URL.

### 3. Start Development Server

```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

## ✅ Verification

### Test Backend

```bash
# Health check
curl http://localhost:5000/health

# Test contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

### Test Frontend

1. Open `http://localhost:5173`
2. Navigate to Contact section
3. Fill and submit the form
4. Check:
   - Success message appears
   - Admin receives email
   - User receives auto-reply
   - Data saved in MongoDB

## 🚀 Running Both Servers

### Option 1: Separate Terminals

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

### Option 2: Concurrently (Recommended)

Install concurrently globally:
```bash
npm install -g concurrently
```

Add to root `package.json`:
```json
"scripts": {
  "dev:all": "concurrently \"npm run dev\" \"cd server && npm run dev\"",
  "start:all": "concurrently \"npm start\" \"cd server && npm start\""
}
```

Run both:
```bash
npm run dev:all
```

## 📡 API Endpoints

### Contact Form
- **POST** `/api/contact` - Submit contact form
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I'm interested in working together!"
  }
  ```

### Admin Routes (Future: Requires JWT auth)
- **GET** `/api/contact` - Get all contacts
- **GET** `/api/contact/:id` - Get contact by ID
- **PATCH** `/api/contact/:id` - Update contact status
- **DELETE** `/api/contact/:id` - Delete contact

## 🔒 Security Features

- ✅ Input validation and sanitization
- ✅ Rate limiting (5 submissions/hour for contact form)
- ✅ CORS configuration
- ✅ Helmet.js security headers
- ✅ Environment variable protection
- ✅ Error handling without exposing sensitive info
- ✅ JWT authentication setup (ready for use)

## 🐛 Troubleshooting

### Backend Issues

**MongoDB Connection Error:**
- Verify MongoDB is running
- Check `MONGODB_URI` is correct
- For Atlas: Check IP whitelist and credentials

**Email Not Sending:**
- Verify SMTP credentials
- Check App Password (not regular password)
- Ensure 2-Step Verification is enabled
- Check spam folder

**Port Already in Use:**
- Change `PORT` in `server/.env`
- Or stop the process using port 5000

### Frontend Issues

**API Connection Error:**
- Verify backend is running
- Check `VITE_API_URL` in `.env`
- Check CORS settings in backend

**Build Errors:**
- Delete `node_modules` and reinstall
- Check Node.js version (v18+)

## 📚 Additional Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Nodemailer Guide](https://nodemailer.com/about/)
- [Vite Documentation](https://vitejs.dev/)

## 🎯 Next Steps

1. ✅ Backend and Frontend running
2. ✅ Database connected
3. ✅ Email service configured
4. ✅ Contact form working
5. 🔄 Deploy to production (when ready)

## 📝 Notes

- Contact form submissions are automatically saved to MongoDB
- Admin receives email notification on each submission
- Users receive auto-reply email confirmation
- Rate limiting prevents spam (5 submissions/hour)
- All data is validated and sanitized
- JWT authentication is ready for admin panel

---

**Need Help?** Check the `server/README.md` for detailed backend documentation.
