# Pulumi GitHub Automation

## 🚀 Introduction
This tool automates GitHub repository management using Pulumi. It enables you to:
- ✅ Create a GitHub repository automatically
- ✅ Create a new branch in the repository
- ✅ Add an issue template

## 📌 Prerequisites
Before starting, ensure you have the following installed:
- [Pulumi](https://www.pulumi.com/docs/install/)
- [Node.js (v20+)](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

## 🔧 Installation
1. **Install Pulumi**  
   ```sh
   curl -fsSL https://get.pulumi.com | sh
   ```
2. **Install Node.js**  
   ```sh
   npm install -g typescript
   ```
3. **Clone the repository**  
   ```bash
   git clone https://github.com/phuoctt03/pulumi-github-automation.git
   cd pulumi-github-automation
   ```
4. **Install dependencies**  
   ```bash
   npm install
   ```

## ⚙️ Configuration
### **Step 1: Create a Personal Access Token (PAT)**
- Navigate to **GitHub Settings → Developer settings → Personal Access Token**
- Click "Generate new token" (classic)
- Select the following permissions:
  - `repo` (Full control of repositories)
  - `admin:org` (Manage organization settings)
  - `admin:repo_hook` (Manage webhooks)
- Copy the generated token for later use.

### **Step 2: Log in to Pulumi**
Use Pulumi local storage:
```bash
pulumi login --local
```

### **Step 3: Set GitHub Token in Pulumi Config**
```bash
pulumi config set --secret githubToken <YOUR_GITHUB_PERSONAL_ACCESS_TOKEN>
```

## 🚀 Deploying with Pulumi
### **Step 1: Initialize Pulumi Stack**
```bash
pulumi stack init dev
```

### **Step 2: Deploy the Infrastructure**
```bash
pulumi up --yes
```
After deployment, Pulumi will output a URL to your new GitHub repository:
```bash
Outputs:
    repoUrl: "https://github.com/your-username/my-automated-repo"
```
Go to this URL to verify that the repository was created successfully.

## 🎯 Features
- ✅ Automates GitHub repository creation
- ✅ Creates a new branch
- ✅ Sets up an issue template

## ❓ Troubleshooting
- If Pulumi does not detect the GitHub Token, run:
  ```bash
  pulumi config get githubToken
  ```
  Ensure the token is correctly stored.
- If the repository is not created, check your GitHub token permissions.

## 🤝 Contributing
Feel free to fork this project and submit a pull request. Contributions are welcome!

## 📜 License
This project is licensed under the MIT License. See `LICENSE` for details.

## 📞 Contact
For any issues, open an **issue** or contact [ttpeeihus@gmail.com].

