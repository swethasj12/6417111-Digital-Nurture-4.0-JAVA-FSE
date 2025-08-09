# Git Hands-On Lab Guide

## Objectives

- Familiarize with Git commands like `git init`, `git status`, `git add`, `git commit`, `git push`, and `git pull`.
- Learn how to setup Git configuration on your machine.
- Integrate Notepad++ as the default editor for Git.
- Add files to a Git repository and push/pull from a remote repository.

## Prerequisites

- Git Bash installed on your machine.
- Notepad++ installed (optional but recommended).
- A GitLab account (or GitHub) for remote repository hosting.

---

## Step 1: Setup your machine with Git Configuration

1. **Create a GitLab account** and login.

2. **Create a new project** on GitLab called `GitDemo`.

3. **Check if Git is installed** by opening Git Bash and typing:

   ```bash
   $ git --version
Configure your Git username and email globally:
$ git config --global user.name "Your Name"
$ git config --global user.email "your.email@example.com"
Verify your Git configuration:
bash
$ git config --list
