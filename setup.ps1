# ============================================================================
# FULL-STACK PROJECT SETUP SCRIPT (PowerShell)
# ============================================================================
# This script automates the setup of your Personal Website full-stack project
# Run this script in PowerShell: .\setup.ps1
# ============================================================================

Write-Host "🚀 Starting Full-Stack Project Setup..." -ForegroundColor Cyan
Write-Host ""

# ============================================================================
# STEP 1: Install Dependencies
# ============================================================================
Write-Host "📦 STEP 1: Installing Dependencies..." -ForegroundColor Yellow

Write-Host "  → Installing frontend dependencies..." -ForegroundColor Gray
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "  ❌ Frontend dependency installation failed!" -ForegroundColor Red
    exit 1
}
Write-Host "  ✅ Frontend dependencies installed" -ForegroundColor Green

Write-Host "  → Installing backend dependencies..." -ForegroundColor Gray
Set-Location server
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "  ❌ Backend dependency installation failed!" -ForegroundColor Red
    Set-Location ..
    exit 1
}
Write-Host "  ✅ Backend dependencies installed" -ForegroundColor Green
Set-Location ..

# ============================================================================
# STEP 2: Configure Environment Variables
# ============================================================================
Write-Host ""
Write-Host "⚙️  STEP 2: Configuring Environment Variables..." -ForegroundColor Yellow

# Backend .env file
$backendEnvPath = "server\.env"
$backendEnvExample = "server\env.example.txt"

if (-not (Test-Path $backendEnvPath)) {
    if (Test-Path $backendEnvExample) {
        Write-Host "  → Creating server\.env from example..." -ForegroundColor Gray
        Copy-Item $backendEnvExample $backendEnvPath
        Write-Host "  ✅ Backend .env file created" -ForegroundColor Green
        Write-Host "  ⚠️  IMPORTANT: Edit server\.env and configure:" -ForegroundColor Yellow
        Write-Host "     - MONGODB_URI (your MongoDB connection string)" -ForegroundColor Gray
        Write-Host "     - SMTP_USER (your Gmail address)" -ForegroundColor Gray
        Write-Host "     - SMTP_PASS (your Gmail App Password)" -ForegroundColor Gray
        Write-Host "     - ADMIN_EMAIL (where contact submissions are sent)" -ForegroundColor Gray
        Write-Host "     - JWT_SECRET (random secret key)" -ForegroundColor Gray
    } else {
        Write-Host "  ⚠️  server\env.example.txt not found. Creating server\.env manually..." -ForegroundColor Yellow
        New-Item -Path $backendEnvPath -ItemType File -Force | Out-Null
        Write-Host "  ✅ Backend .env file created (empty)" -ForegroundColor Green
    }
} else {
    Write-Host "  ℹ️  Backend .env file already exists (skipping)" -ForegroundColor Blue
}

# Frontend .env file
$frontendEnvPath = ".env"
$frontendEnvExample = ".env.example"

if (-not (Test-Path $frontendEnvPath)) {
    if (Test-Path $frontendEnvExample) {
        Write-Host "  → Creating .env from example..." -ForegroundColor Gray
        Copy-Item $frontendEnvExample $frontendEnvPath
        Write-Host "  ✅ Frontend .env file created" -ForegroundColor Green
    } else {
        Write-Host "  → Creating frontend .env file..." -ForegroundColor Gray
        $envContent = "VITE_API_URL=http://localhost:5000/api`n"
        Set-Content -Path $frontendEnvPath -Value $envContent
        Write-Host "  ✅ Frontend .env file created with default API URL" -ForegroundColor Green
    }
} else {
    Write-Host "  ℹ️  Frontend .env file already exists (skipping)" -ForegroundColor Blue
}

# ============================================================================
# STEP 3: Optional - Run npm audit fix
# ============================================================================
Write-Host ""
$runAudit = Read-Host "🔍 Run npm audit fix? (y/n)"
if ($runAudit -eq "y" -or $runAudit -eq "Y") {
    Write-Host "  -> Running npm audit fix for frontend..." -ForegroundColor Gray
    npm audit fix
    Write-Host "  -> Running npm audit fix for backend..." -ForegroundColor Gray
    Set-Location server
    npm audit fix
    Set-Location ..
    Write-Host "  ✅ npm audit fix completed" -ForegroundColor Green
} else {
    Write-Host "  ⏭️  Skipping npm audit fix" -ForegroundColor Gray
}

# ============================================================================
# STEP 4: Setup Complete
# ============================================================================
Write-Host ""
Write-Host "✅ Setup Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📝 Next Steps:" -ForegroundColor Cyan
Write-Host "  1. Edit server\.env with your configuration:" -ForegroundColor White
Write-Host "     - MONGODB_URI" -ForegroundColor Gray
Write-Host "     - SMTP credentials (Gmail App Password)" -ForegroundColor Gray
Write-Host "     - ADMIN_EMAIL" -ForegroundColor Gray
Write-Host ""
Write-Host "  2. Start the backend server:" -ForegroundColor White
Write-Host "     cd server; npm run dev" -ForegroundColor Gray
Write-Host ""
Write-Host "  3. In a new terminal, start the frontend:" -ForegroundColor White
Write-Host "     npm run dev" -ForegroundColor Gray
Write-Host ""
Write-Host "  4. Test the contact form at: http://localhost:5173" -ForegroundColor White
Write-Host ""
Write-Host "📚 For detailed instructions, see:" -ForegroundColor Cyan
Write-Host "   - QUICKSTART.md" -ForegroundColor Gray
Write-Host "   - SETUP.md" -ForegroundColor Gray
Write-Host ""
