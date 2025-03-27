import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

// Read GitHub token from environment variables
const githubToken = new pulumi.Config().require("githubToken");

// Initialize GitHub provider
const provider = new github.Provider("github", { token: githubToken });

// Create a new repository
const repo = new github.Repository("my-repo", {
    name: "my-automated-repo",
    description: "Repository created with Pulumi",
    visibility: "public",
    autoInit: true, // Initialize with README.md
}, { provider });

// Create the develop branch
const developBranch = new github.Branch("develop", {
    repository: repo.name,
    branch: "develop",
    sourceBranch: "main",
}, { provider });

// Create an issue template
const issueTemplate = new github.RepositoryFile("issue-template", {
    repository: repo.name,
    file: ".github/ISSUE_TEMPLATE.md",
    content: `
# Bug Description
- Describe the issue...

# Steps to Reproduce
1. Step 1
2. Step 2
3. Step 3

# Expected Behavior
- Describe the expected outcome...
    `,
}, { provider });

// Export the repository URL
export const repoUrl = repo.htmlUrl;
