# ⚡ Quick Start Guide

Get your full-stack Personal Website up and running in 5 minutes!

## 🚀 Step 1: Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

## 🔧 Step 2: Set Up MongoDB

### Option A: Local MongoDB
1. Install [MongoDB Community Edition](https://www.mongodb.com/try/download/community)
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/personal-website`

### Option B: MongoDB Atlas (Cloud - Recommended)
1. Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free tier available)
2. Create a cluster
3. Create database user
4. Whitelist IP (use `0.0.0.0/0` for development)
5. Get connection string

## 📧 Step 3: Configure Email (Gmail)

1. Go to your Google Account Settings
2. Enable **2-Step Verification**
3. Go to **Security** > **2-Step Verification** > **App passwords**
4. Generate App Password for "Mail"
5. Copy the 16-character password

**Important:** Use the App Password, NOT your regular Gmail password!

## ⚙️ Step 4: Configure Environment Variables

### Backend Configuration

```bash
cd server

# Copy example file
# Windows (PowerShell):
Copy-Item env.example.txt .env

# macOS/Linux:
cp env.example.txt .env
```

Edit `server/.env`:

```env
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:5173
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key-here
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM_NAME=Your Name
ADMIN_EMAIL=your-admin-email@gmail.com
```

### Frontend Configuration

Create `.env` in project root:

```env
VITE_API_URL=http://localhost:5000/api
```

## ▶️ Step 5: Start the Servers

### Terminal 1 - Backend:
```bash
cd server
npm run dev
```

You should see:
```
🚀 Server running in development mode on port 5000
✅ MongoDB Connected: ...
📍 Health check: http://localhost:5000/health
```

### Terminal 2 - Frontend:
```bash
npm run dev
```

You should see:
```
VITE v6.3.5  ready in XXX ms
➜  Local:   http://localhost:5173/
```

## ✅ Step 6: Test Everything

1. **Open browser:** `http://localhost:5173`

2. **Test backend health:**
   - Visit: `http://localhost:5000/health`
   - Should return JSON with success message

3. **Test contact form:**
   - Scroll to Contact section
   - Fill in name, email, and message
   - Click "Send Message"
   - You should see a success message
   - Check your admin email for notification
   - Check sender's email for auto-reply

## 🎯 You're Done!

Your full-stack application is now running!

### What's Working:
- ✅ Frontend React app
- ✅ Backend Express API
- ✅ MongoDB database connection
- ✅ Contact form saving to database
- ✅ Email notifications
- ✅ Auto-reply emails

## 📝 Troubleshooting

### Backend won't start
- Check MongoDB is running (if using local)
- Verify `MONGODB_URI` in `.env` is correct
- Check port 5000 is not in use

### Emails not sending
- Verify App Password (not regular password)
- Check 2-Step Verification is enabled
- Verify SMTP credentials in `.env`

### Frontend can't connect to backend
- Check backend is running on port 5000
- Verify `VITE_API_URL` in frontend `.env`
- Check CORS settings in backend

### MongoDB connection failed
- Verify connection string
- Check IP whitelist (for Atlas)
- Verify database user credentials

## 📚 Next Steps

- Read [SETUP.md](./SETUP.md) for detailed documentation
- Read [README_FULLSTACK.md](./README_FULLSTACK.md) for complete overview
- Customize email templates in `server/src/services/emailService.js`
- Add authentication for admin routes

## 🆘 Need Help?

Check the detailed documentation:
- **[SETUP.md](./SETUP.md)** - Complete setup guide
- **[server/README.md](./server/README.md)** - Backend API docs
- **[README_FULLSTACK.md](./README_FULLSTACK.md)** - Full overview

---

**Happy Coding! 🎉**
