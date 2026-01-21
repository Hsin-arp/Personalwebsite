# 🪟 PowerShell Setup Commands

Complete PowerShell-friendly commands to set up and run your full-stack project on Windows.

---

## ⚡ Quick One-Shot Setup (Copy-Paste All At Once)

```powershell
# Full project setup - run this entire block
Write-Host "🚀 Starting Setup..." -ForegroundColor Cyan; Write-Host ""; Write-Host "📦 Installing frontend dependencies..." -ForegroundColor Yellow; npm install; if ($LASTEXITCODE -eq 0) { Write-Host "✅ Frontend installed" -ForegroundColor Green } else { Write-Host "❌ Frontend install failed" -ForegroundColor Red; exit 1 }; Write-Host "📦 Installing backend dependencies..." -ForegroundColor Yellow; Set-Location server; npm install; if ($LASTEXITCODE -eq 0) { Write-Host "✅ Backend installed" -ForegroundColor Green; Set-Location .. } else { Write-Host "❌ Backend install failed" -ForegroundColor Red; Set-Location ..; exit 1 }; Write-Host ""; Write-Host "⚙️  Configuring environment..." -ForegroundColor Yellow; if (-not (Test-Path "server\.env")) { if (Test-Path "server\env.example.txt") { Copy-Item "server\env.example.txt" "server\.env"; Write-Host "✅ Created server\.env" -ForegroundColor Green } else { New-Item -Path "server\.env" -ItemType File -Force | Out-Null; Write-Host "✅ Created empty server\.env" -ForegroundColor Green } }; if (-not (Test-Path ".env")) { $envContent = "VITE_API_URL=http://localhost:5000/api`n"; Set-Content -Path ".env" -Value $envContent; Write-Host "✅ Created .env" -ForegroundColor Green }; Write-Host ""; Write-Host "✅ Setup Complete!" -ForegroundColor Green; Write-Host ""; Write-Host "⚠️  IMPORTANT: Edit server\.env with your MongoDB URI and email credentials!" -ForegroundColor Yellow
```

---

## 📋 Step-by-Step Commands

### Step 1: Install All Dependencies

```powershell
# Install frontend dependencies
npm install

# Install backend dependencies
Set-Location server
npm install
Set-Location ..
```

**Alternative (One-Line):**
```powershell
npm install; Set-Location server; npm install; Set-Location ..
```

---

### Step 2: Configure Environment Variables

#### Backend Configuration

```powershell
# Copy example .env file
Copy-Item "server\env.example.txt" "server\.env"

# Or create manually if example doesn't exist
New-Item -Path "server\.env" -ItemType File -Force

# Open .env file for editing (Windows)
notepad server\.env

# Or use VS Code
code server\.env
```

#### Frontend Configuration

```powershell
# Create frontend .env file
$envContent = "VITE_API_URL=http://localhost:5000/api`n"
Set-Content -Path ".env" -Value $envContent

# Or edit manually
notepad .env
```

---

### Step 3: Fill in Environment Variables

**Edit `server\.env` and add:**

```env
# MongoDB Connection (choose one)
MONGODB_URI=mongodb://localhost:27017/personal-website
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/personal-website

# Gmail Email Configuration
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
ADMIN_EMAIL=admin@example.com

# JWT Secret (generate a random string)
JWT_SECRET=your_random_secret_key_here_min_32_characters

# Other settings
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:5173
SMTP_FROM_NAME=Your Name
```

**To get Gmail App Password:**
1. Go to Google Account Settings
2. Enable 2-Step Verification
3. Go to Security > App passwords
4. Generate password for "Mail"
5. Use that 16-character password in `SMTP_PASS`

---

### Step 4: Optional - Run npm audit fix

```powershell
# Frontend
npm audit fix

# Backend
Set-Location server
npm audit fix
Set-Location ..
```

**One-Line:**
```powershell
npm audit fix; Set-Location server; npm audit fix; Set-Location ..
```

---

### Step 5: Start Backend Server

```powershell
# Navigate to server directory
Set-Location server

# Start in development mode (with auto-reload)
npm run dev

# Or start in production mode
npm start
```

**One-Line:**
```powershell
Set-Location server; npm run dev
```

**Expected Output:**
```
🚀 Server running in development mode on port 5000
✅ MongoDB Connected: ...
📍 Health check: http://localhost:5000/health
📍 API endpoint: http://localhost:5000/api/contact
```

---

### Step 6: Start Frontend Server (New Terminal)

Open a **new PowerShell window** and run:

```powershell
# From project root
npm run dev
```

**Expected Output:**
```
VITE v6.3.5  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

---

### Step 7: Start Both Servers Together

**Option A: Using PowerShell Script**
```powershell
# Run the provided script
.\start-dev.ps1
```

**Option B: Using concurrently (install globally first)**
```powershell
# Install concurrently globally
npm install -g concurrently

# Start both servers
concurrently "cd server && npm run dev" "npm run dev"
```

**Option C: Separate Terminals**

**Terminal 1:**
```powershell
Set-Location server; npm run dev
```

**Terminal 2:**
```powershell
npm run dev
```

---

## ✅ Verification Commands

### Test Backend Health

```powershell
# PowerShell
Invoke-RestMethod -Uri "http://localhost:5000/health" | ConvertTo-Json

# Or using curl (if available)
curl http://localhost:5000/health
```

### Test MongoDB Connection

```powershell
# Check if backend started successfully
# Look for: "✅ MongoDB Connected" in backend terminal
```

### Test Contact Form API

```powershell
# Submit test contact form
$body = @{
    name = "Test User"
    email = "test@example.com"
    message = "This is a test message"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5000/api/contact" `
    -Method POST `
    -ContentType "application/json" `
    -Body $body | ConvertTo-Json
```

### Test Frontend

```powershell
# Open in default browser
Start-Process "http://localhost:5173"
```

---

## 🔍 Troubleshooting Commands

### Check if Ports are in Use

```powershell
# Check port 5000 (backend)
Get-NetTCPConnection -LocalPort 5000 -ErrorAction SilentlyContinue

# Check port 5173 (frontend)
Get-NetTCPConnection -LocalPort 5173 -ErrorAction SilentlyContinue

# Kill process on port 5000 (if needed)
$process = Get-NetTCPConnection -LocalPort 5000 | Select-Object -ExpandProperty OwningProcess
Stop-Process -Id $process -Force
```

### Verify Node.js Version

```powershell
node --version
# Should be v18 or higher

npm --version
```

### Check if MongoDB is Running (Local)

```powershell
# Windows Service
Get-Service | Where-Object {$_.Name -like "*mongo*"}

# Check if MongoDB port is listening
Get-NetTCPConnection -LocalPort 27017 -ErrorAction SilentlyContinue
```

### View Environment Variables

```powershell
# Check if .env files exist
Test-Path "server\.env"
Test-Path ".env"

# View backend .env (be careful with secrets!)
Get-Content "server\.env"

# View frontend .env
Get-Content ".env"
```

### Clear npm Cache (if needed)

```powershell
npm cache clean --force
```

### Reinstall Dependencies

```powershell
# Remove node_modules and reinstall
Remove-Item -Recurse -Force node_modules, server\node_modules
npm install
Set-Location server; npm install; Set-Location ..
```

---

## 📝 Complete Setup Scripts

### Quick Setup Script

Run the provided `setup.ps1`:

```powershell
.\setup.ps1
```

This will:
- Install all dependencies
- Create .env files
- Optionally run npm audit fix
- Show next steps

### Start Development Script

Run the provided `start-dev.ps1`:

```powershell
.\start-dev.ps1
```

This will:
- Check for .env files
- Start both servers concurrently
- Display URLs and instructions

---

## 🎯 Complete Workflow (Copy-Paste)

```powershell
# ============================================================================
# COMPLETE SETUP AND START WORKFLOW
# ============================================================================

# 1. Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install
Set-Location server
npm install
Set-Location ..

# 2. Configure environment
Write-Host "Configuring environment..." -ForegroundColor Yellow
if (-not (Test-Path "server\.env")) {
    Copy-Item "server\env.example.txt" "server\.env" -ErrorAction SilentlyContinue
    if (-not (Test-Path "server\.env")) {
        New-Item -Path "server\.env" -ItemType File -Force | Out-Null
    }
    Write-Host "⚠️  Please edit server\.env with your MongoDB URI and email credentials!" -ForegroundColor Yellow
}
if (-not (Test-Path ".env")) {
    "VITE_API_URL=http://localhost:5000/api" | Out-File -FilePath ".env" -Encoding utf8
}

# 3. Start backend (in new window)
Write-Host "Starting backend server..." -ForegroundColor Green
Write-Host "Open a new PowerShell window and run: Set-Location server; npm run dev" -ForegroundColor Cyan

# 4. Start frontend (wait a bit, then run in new window)
Start-Sleep -Seconds 2
Write-Host "Starting frontend server..." -ForegroundColor Green
Write-Host "Open another PowerShell window and run: npm run dev" -ForegroundColor Cyan

# Or use the start-dev.ps1 script to start both together
Write-Host ""
Write-Host "💡 Tip: Run .\start-dev.ps1 to start both servers together!" -ForegroundColor Yellow
```

---

## 📚 Additional Commands

### Build for Production

```powershell
# Build frontend
npm run build

# Backend doesn't need build (just run with node)
```

### Deploy Frontend (GitHub Pages)

```powershell
npm run deploy
```

### Check for Updates

```powershell
# Frontend
npm outdated

# Backend
Set-Location server
npm outdated
Set-Location ..
```

---

## 🆘 Need Help?

- See `QUICKSTART.md` for quick setup guide
- See `SETUP.md` for detailed instructions
- See `CHECKLIST.md` for verification steps
- Check backend logs in terminal
- Check browser console for frontend errors

---

**✅ All commands tested for Windows PowerShell compatibility!**
