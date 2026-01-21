# ============================================================================
# START DEVELOPMENT SERVERS (PowerShell)
# ============================================================================
# This script starts both frontend and backend servers concurrently
# Run: .\start-dev.ps1
# ============================================================================

Write-Host "🚀 Starting Development Servers..." -ForegroundColor Cyan
Write-Host ""

# Check if required files exist
if (-not (Test-Path "server\.env")) {
    Write-Host "❌ Error: server\.env file not found!" -ForegroundColor Red
    Write-Host "   Please run setup.ps1 first or create server\.env manually" -ForegroundColor Yellow
    exit 1
}

if (-not (Test-Path ".env")) {
    Write-Host "⚠️  Warning: .env file not found. Creating with defaults..." -ForegroundColor Yellow
    $envContent = "VITE_API_URL=http://localhost:5000/api`n"
    Set-Content -Path ".env" -Value $envContent
}

# Check if concurrently is installed globally
$concurrentlyInstalled = npm list -g concurrently 2>$null
if (-not $concurrentlyInstalled) {
    Write-Host "📦 Installing concurrently globally..." -ForegroundColor Yellow
    npm install -g concurrently
}

Write-Host "✅ Starting both servers..." -ForegroundColor Green
Write-Host ""
Write-Host "📍 Frontend: http://localhost:5173" -ForegroundColor Cyan
Write-Host "📍 Backend:  http://localhost:5000" -ForegroundColor Cyan
Write-Host "📍 Health:   http://localhost:5000/health" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop both servers" -ForegroundColor Yellow
Write-Host ""

# Start both servers using concurrently
concurrently `
    --names "BACKEND,FRONTEND" `
    --prefix-colors "blue,green" `
    "cd server && npm run dev" `
    "npm run dev"
