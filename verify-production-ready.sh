#!/bin/bash

# Production Readiness Verification Script
# Kaira Oasis Care Website

echo "=========================================="
echo "🚀 Production Readiness Check"
echo "=========================================="
echo ""

# Color codes
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

ERRORS=0
WARNINGS=0

# Check Node/npm
echo "📦 Checking dependencies..."
if command -v npm &> /dev/null; then
    echo -e "${GREEN}✓${NC} npm is installed"
else
    echo -e "${RED}✗${NC} npm is not installed"
    ERRORS=$((ERRORS + 1))
fi

# Check .env file
echo ""
echo "🔐 Checking environment variables..."
if [ -f ".env" ]; then
    echo -e "${GREEN}✓${NC} .env file exists"
    
    if grep -q "VITE_SUPABASE_URL" .env; then
        echo -e "${GREEN}✓${NC} VITE_SUPABASE_URL configured"
    else
        echo -e "${RED}✗${NC} VITE_SUPABASE_URL not configured"
        ERRORS=$((ERRORS + 1))
    fi
    
    if grep -q "VITE_SUPABASE_PUBLISHABLE_KEY" .env; then
        echo -e "${GREEN}✓${NC} VITE_SUPABASE_PUBLISHABLE_KEY configured"
    else
        echo -e "${RED}✗${NC} VITE_SUPABASE_PUBLISHABLE_KEY not configured"
        ERRORS=$((ERRORS + 1))
    fi
else
    echo -e "${RED}✗${NC} .env file not found"
    ERRORS=$((ERRORS + 1))
fi

# Check .env.example
echo ""
echo "📋 Checking .env.example..."
if [ -f ".env.example" ]; then
    echo -e "${GREEN}✓${NC} .env.example exists"
else
    echo -e "${YELLOW}⚠${NC} .env.example not found (should exist for documentation)"
    WARNINGS=$((WARNINGS + 1))
fi

# Check package.json
echo ""
echo "📦 Checking package.json..."
if [ -f "package.json" ]; then
    echo -e "${GREEN}✓${NC} package.json exists"
else
    echo -e "${RED}✗${NC} package.json not found"
    ERRORS=$((ERRORS + 1))
fi

# Check node_modules
echo ""
echo "📚 Checking node_modules..."
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✓${NC} Dependencies installed"
else
    echo -e "${YELLOW}⚠${NC} Dependencies not installed. Run: npm install"
    WARNINGS=$((WARNINGS + 1))
fi

# Check build configuration
echo ""
echo "⚙️  Checking build configuration..."
if [ -f "vite.config.ts" ]; then
    echo -e "${GREEN}✓${NC} vite.config.ts exists"
else
    echo -e "${RED}✗${NC} vite.config.ts not found"
    ERRORS=$((ERRORS + 1))
fi

# Check TypeScript
echo ""
echo "📘 Checking TypeScript..."
if [ -f "tsconfig.json" ]; then
    echo -e "${GREEN}✓${NC} tsconfig.json exists"
else
    echo -e "${RED}✗${NC} tsconfig.json not found"
    ERRORS=$((ERRORS + 1))
fi

# Check ESLint
echo ""
echo "🔍 Checking ESLint..."
if [ -f "eslint.config.js" ]; then
    echo -e "${GREEN}✓${NC} eslint.config.js exists"
else
    echo -e "${RED}✗${NC} eslint.config.js not found"
    ERRORS=$((ERRORS + 1))
fi

# Check Supabase configuration
echo ""
echo "🗄️  Checking Supabase..."
if [ -f "supabase/config.toml" ]; then
    echo -e "${GREEN}✓${NC} supabase/config.toml exists"
    
    # Check for project_id
    if grep -q "project_id" supabase/config.toml; then
        echo -e "${GREEN}✓${NC} Supabase project configured"
    else
        echo -e "${RED}✗${NC} Supabase project_id not found"
        ERRORS=$((ERRORS + 1))
    fi
else
    echo -e "${RED}✗${NC} supabase/config.toml not found"
    ERRORS=$((ERRORS + 1))
fi

# Check Edge Functions
echo ""
echo "⚡ Checking Edge Functions..."
if [ -d "supabase/functions/send-contact-email" ]; then
    echo -e "${GREEN}✓${NC} send-contact-email function exists"
    
    if [ -f "supabase/functions/send-contact-email/index.ts" ]; then
        echo -e "${GREEN}✓${NC} Function implementation file exists"
    else
        echo -e "${RED}✗${NC} Function implementation file missing"
        ERRORS=$((ERRORS + 1))
    fi
else
    echo -e "${RED}✗${NC} send-contact-email function directory not found"
    ERRORS=$((ERRORS + 1))
fi

# Check source files
echo ""
echo "📁 Checking source files..."
if [ -d "src" ]; then
    echo -e "${GREEN}✓${NC} src directory exists"
    
    if [ -f "src/components/Contact.tsx" ]; then
        echo -e "${GREEN}✓${NC} Contact component exists"
    else
        echo -e "${RED}✗${NC} Contact component missing"
        ERRORS=$((ERRORS + 1))
    fi
    
    if [ -f "src/hooks/useContactForm.ts" ]; then
        echo -e "${GREEN}✓${NC} Contact form hook exists"
    else
        echo -e "${RED}✗${NC} Contact form hook missing"
        ERRORS=$((ERRORS + 1))
    fi
else
    echo -e "${RED}✗${NC} src directory not found"
    ERRORS=$((ERRORS + 1))
fi

# Summary
echo ""
echo "=========================================="
echo "📊 Summary"
echo "=========================================="

if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo -e "${GREEN}✓ All checks passed!${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Deploy Edge Function: supabase functions deploy send-contact-email"
    echo "2. Set RESEND_API_KEY: supabase secrets set RESEND_API_KEY=<your-key>"
    echo "3. Deploy to production: npm run build && [deploy command]"
    echo ""
    exit 0
elif [ $ERRORS -gt 0 ]; then
    echo -e "${RED}✗ Critical errors found: $ERRORS${NC}"
    echo -e "${YELLOW}⚠ Warnings: $WARNINGS${NC}"
    echo ""
    echo "Please fix the critical errors before deploying."
    exit 1
else
    echo -e "${GREEN}✓ No critical errors${NC}"
    echo -e "${YELLOW}⚠ Warnings: $WARNINGS${NC}"
    echo ""
    echo "Review the warnings above before deploying."
    exit 0
fi
