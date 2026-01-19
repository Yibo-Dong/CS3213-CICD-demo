# CS3213-CICD-demo
This repository demonstrates how to use GitHub Actions to set up a basic but realistic CI/CD pipeline for a student web project.
It is designed as part of NUS CS3213 to help students understand how CI/CD fits into their project workflow.

The example project is a simplified “NextBus-style” web application, but the focus of this repository is on the automation pipeline rather than the application logic.

## Repository Overview

This repository contains:

* A simple static web application
* Automated checks that run on every pull request
* Automatic deployment to GitHub Pages when changes are merged into main

## Getting Started

Fork this repository into your own GitHub account.

Enable GitHub Actions for the forked repository.

Do NOT fork it into the course GitHub organization unless instructed.

## Continuous Integration (CI)

The CI workflow runs automatically when:

* A pull request is opened or updated

* A commit is pushed to the repository

The CI checks include:

* Basic sanity checks (repository structure)

* Documentation checks

* Naming convention checks for project files

These checks are designed to reflect common requirements in student projects, such as having proper documentation and consistent file naming.

## Continuous Deployment (CD)

When changes are merged into the main branch:

* The project is automatically built

* The latest version is deployed to GitHub Pages

* The deployed site can be accessed via a public URL

This simulates a real-world deployment workflow for frontend projects.

## Exercises

### Exercise 1: Understanding CI

Inspect the file .github/workflows/ci.yml.
Identify:

* When the workflow is triggered

* What jobs are defined

* What each job checks

### Exercise 2: Failing and Fixing a CI Check

* Rename Documentation.md to documentation.md.

* Push the change and observe the CI failure.

* Rename it back to Documentation.md and verify that the CI passes.

### Exercise 3: Extending the CI

* Add a new CI check to ensure that:

* All JavaScript files in src/ are non-empty

Hints:

* Add a script under scripts/

* Invoke it from the CI workflow