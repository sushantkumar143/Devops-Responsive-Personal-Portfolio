# Portfolio Project – Git Execution Flow (v1.0.0 → v2.0.0)

## Project Overview
This project demonstrates a complete professional Git workflow followed during the development of a Portfolio Web Application.  
It covers the entire lifecycle from repository initialization to a major UI redesign release (v2.0.0).  
The repository is created for academic evaluation and showcases real-world Git practices such as branching, merging, rebasing, conflict resolution, tagging, and release management.

---

## Technologies Used
HTML • CSS • JavaScript • Git (Git Bash) • GitHub

---

## Project Structure
Portfolio_Project/
│── index.html
│── assets/
│── css/
│── js/
│── images/
│── README.md


---

## Git Execution Flow

### Repository Setup
- Initialized Git repository using `git init`
- Created base project structure
- Performed initial commit (`chore: setup initial project structure`)
- Created and switched to `develop` branch

### Feature Development
- Created feature branches:
  - `feature/base-layout`
  - `feature/responsive-ui`
  - `feature/dark-mode`
  - `feature/contact-form`
  - `feature/animations`
- Implemented features with meaningful commits

### Testing & Bug Fixes
- Created UI testing branch `test/ui-testing`
- Created bugfix branches:
  - `bugfix/header-style`
  - `bugfix/footer-text`
- Applied bug fixes with independent commits

### Merge, Rebase & Advanced Workflow
- Merged bugfix branches with manual conflict resolution
- Rebasing feature branches onto `develop`
- Performed advanced octopus merge
- Visualized commit history using:


### Version v1.0.0 Release
- Refactored project structure
- Created `main` branch
- Merged `develop` into `main`
- Created release tag `v1.0.0`
- Created patch release tag `v1.0.1`

### Remote Repository Management
- Added remote origin
- Pushed all branches to GitHub
- Pushed all tags to GitHub

### Major Update – v2.0.0
- Created release branch `release/v2.0`
- Performed full UI replacement
- Single commit for complete UI rewrite
- Merged release branch into `develop` and `main`
- Created final release tag `v2.0.0`
- Pushed final release to GitHub

### Cleanup & Verification
- Deleted unused branches
- Verified final version and release tags

---

## Branches Used
`main`, `develop`, `feature/*`, `bugfix/*`, `test/ui-testing`, `release/v2.0`  
Each branch contains at least one meaningful commit.

---

## Merge Conflict Demonstration
Merge conflicts were intentionally created during branch merges, resolved manually by editing conflicted files, removing conflict markers, and committing the final merged version successfully.

---

## Git Commit Graph
The commit graph clearly demonstrates:
- Parallel feature development
- Bugfix integration
- Rebasing workflow
- Octopus merge
- Version tagging
- Major version upgrade

---

## Screenshots
Screenshots included in the repository demonstrate:
- Repository initialization
- Branch creation
- Feature and bugfix commits
- Merge conflict resolution
- Commit graph visualization
- Pushing branches and tags to GitHub

---

## Challenges Faced
- Managing multiple branches simultaneously
- Resolving merge conflicts correctly
- Understanding rebase vs merge
- Maintaining a clean and readable commit history

---

## Learning Outcomes
- Practical implementation of advanced Git workflows
- Branching, merging, and release strategies
- Merge conflict handling
- Professional GitHub documentation
- Industry-standard version control practices

---

## Conclusion
This project successfully demonstrates a complete end-to-end Git execution flow from v1.0.0 to v2.0.0, reflecting structured development practices, clean version history, and professional Git usage.

---

## Author
**Sushant Kumar**  
Department of Computer Science & Engineering  
Lovely Professional University
