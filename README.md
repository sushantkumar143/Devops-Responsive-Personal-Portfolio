# 🚀 DevOps Portfolio Website – Git & GitHub Workflow Project

## 📌 Introduction

This project demonstrates a real-world DevOps and GitHub workflow by developing and managing a portfolio website using professional version control practices. The project simulates an industry-level collaborative software environment using Git and GitHub, covering feature development, testing, bug fixing, advanced merging strategies, release management, and semantic versioning.

The focus of this project is not only UI development but also proper source code lifecycle management using structured branching and clean commit history.

---

## 🛠️ Commands Used

### Repository Initialization

git init
git status
git add .
git commit -m "chore: setup initial project structure"

Branch Creation & Management
git checkout -b develop
git checkout -b feature/base-layout
git checkout -b feature/responsive-ui
git checkout -b feature/dark-mode
git checkout -b feature/contact-form
git checkout -b feature/animations
git checkout -b bugfix/header-style
git checkout -b bugfix/footer-text
git checkout -b test/ui-testing
git checkout -b release/v2.0
git checkout -b main

Feature, Bugfix & Testing Commits
git commit -m "feat(ui): add base layout"
git commit -m "feat(style): implement responsive layout"
git commit -m "feat(theme): add dark mode"
git commit -m "feat(form): add client-side form validation"
git commit -m "feat(animation): add scroll animations"
git commit -m "fix(header): improve color contrast"
git commit -m "fix(footer): correct footer alignment"
git commit -m "test(ui): fix layout and spacing issues"

Merging & Rebasing
git merge feature/contact-form
git rebase develop

Octopus Merge (Advanced Git Concept)
git merge feature/animations feature/dark-mode feature/contact-form

Project Structure Refactor
git mv src/index.html index.html
git commit -m "chore(structure): move index.html to project root"

Release & Version Management
git merge develop
git tag -a v1.0.0 -m "Initial portfolio UI"
git tag -a v1.0.1 -m "Project structure fix"
git tag -a v2.0.0 -m "Major UI redesign"

GitHub (Remote Repository)
git remote add origin <repository-url>
git push -u origin main
git push -u origin develop
git push origin --all
git push origin --tags

Commit History Visualization
git log --oneline --graph --decorate --all
