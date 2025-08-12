# GitLab Remote Setup and Push Guide

## Step 1: Create a new project in GitLab

1. Go to [https://gitlab.com/](https://gitlab.com/) and log in.
2. Click **New project** or **Create a project**.
3. Choose **Create blank project**.
4. Enter a **Project name** (e.g., `myproject2`).
5. Optionally add a description.
6. Choose visibility: Private or Public.
7. Click **Create project**.

---

## Step 2: Get the GitLab repository URL

- After project creation, GitLab shows the repository URL.
- You can use either:
  - HTTPS URL:  
    ```
    https://gitlab.com/your_username/myproject2.git
    ```
  - SSH URL (if SSH keys are set up):  
    ```
    git@gitlab.com:your_username/myproject2.git
    ```

---

## Step 3: Add remote origin to your local Git repository

In your local project directory (`myproject2`), run:

```bash
git remote add origin https://gitlab.com/your_username/myproject2.git

## Step 4: Push your commits to GitLab
git push -u origin master

