#!/bin/bash
# GitHub Profiler - Clean & Rebuild Script (JavaScript Version)

set -e

# 1. Purge existing src directory
echo "🧹 Cleaning up existing 'src' directory..."
rm -rf src/*

# 2. Create the new structure
echo "🏗️  Creating new folder structure..."
BASE="src"

# Directories
mkdir -p "$BASE/api"
mkdir -p "$BASE/assets"
mkdir -p "$BASE/components/common"
mkdir -p "$BASE/layouts"
mkdir -p "$BASE/constants"
mkdir -p "$BASE/features/search"
mkdir -p "$BASE/features/profile"
mkdir -p "$BASE/features/repositories"
mkdir -p "$BASE/hooks"
mkdir -p "$BASE/pages"
mkdir -p "$BASE/routes"
mkdir -p "$BASE/utils"

# Create core files (.js/.jsx)
touch "$BASE/api/github.js"
touch "$BASE/components/common/Button.jsx"
touch "$BASE/components/common/Input.jsx"
touch "$BASE/layouts/Navbar.jsx"
touch "$BASE/layouts/Footer.jsx"
touch "$BASE/features/search/SearchBar.jsx"
touch "$BASE/features/profile/ProfileCard.jsx"
touch "$BASE/features/repositories/RepoCard.jsx"
touch "$BASE/hooks/useFetch.js"
touch "$BASE/pages/HomePage.jsx"
touch "$BASE/pages/ProfilePage.jsx"
touch "$BASE/routes/AppRoutes.jsx"
touch "$BASE/App.jsx"
touch "$BASE/main.jsx"

echo "✅ Success! Project structure is now clean and ready for JS development."