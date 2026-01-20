# CS3213 CI/CD Demo

This repository is a demonstration of using GitHub Actions for CI/CD, designed as part of NUS CS3213.  
It includes both CI checks and a CD workflow that deploys a static site to GitHub Pages.

---

## Setup

1. Fork this repo into your own GitHub account.  
2. Enable GitHub Actions on the forked repo.  
3. DO NOT fork it into the course GitHub organization as we already have one fork here.  

---

## Demo: Hello World

The workflow `.github/workflows/ci.yml` contains a simple job `helloworld` that prints "Hello World".  
Take a look at the file to understand how it is configured, then navigate to the **Actions** tab on GitHub to see it run.

---

## Demo: Check Filename Prefix

The job `check-filename-prefix` verifies that all source files in `src/` start with the prefix `CS3213`.  

1. Push a commit where a file does not follow the prefix rule.  
2. Check the **Actions** tab → the job will fail.  
3. Rename the file to comply with the rule and push again.  
4. Verify that the job now passes.

---

## Exercise: Check Documentation

The job `check-docs` verifies that `Documentation.md` exists in the root directory and is not empty.  

- The actual check logic is implemented in `scripts/check_docs.py`.  
- To complete the exercise, execute this script in your workflow.  
- Observe how the job fails if `Documentation.md` is missing or empty, and passes after fixing it.

---

## Demo: Continuous Deployment (CD)

The workflow `.github/workflows/pages.yml` demonstrates CD by deploying the static site to GitHub Pages.  

1. Make a change in `site/` or `index.html`.  
2. Push to the `main` branch.  
3. The `deploy` job will automatically run, upload the artifact, and deploy the site.  
4. Refresh the GitHub Pages URL to see your changes live.  

> Notes:  
> - The deploy job uses the required environment `github-pages`.  
> - This illustrates how CD automatically ships CI-verified code to production.  
> - No manual deployment steps are needed.

---
