# Git Hands-On Lab 3 – Branching and Merging

---

## 1. Created New Branch

```bash
git checkout -b GitNewBranch

2. Listed Branches
bash
Copy code
git branch -a
3. Created a File and Committed
bash
Copy code
echo "This is from GitNewBranch" > branchfile.txt
git add branchfile.txt
git commit -m "Added branchfile.txt in GitNewBranch"
4. Switched Back to Master Branch and Compared
bash
Copy code
git checkout master
git diff master..GitNewBranch
