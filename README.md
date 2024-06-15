# Continuous Deployment with Cloud Run

GitHub -> CloudBuild (Build) -> CloudRun (Deploy)

## GitHub repo

- https://github.com/nirgluzman/GCP-Continuous-Deployment-CloudRun.git
- https://github.com/mrwade/ultimate-node-stack

## Resources

- https://kevinwwwade.medium.com/the-ultimate-node-docker-setup-step-by-step-2023-update-4fd9dd8be48b
- https://www.youtube.com/watch?v=yuTrHeDYY3E (Typescript/Node/Docker Setup)
- https://www.youtube.com/watch?v=GhSAQ19f4HA (Continuous Deployment with Cloud Run)
- https://www.youtube.com/watch?v=NCa0RTSUEFQ (Continuous Deployment to Cloud Run using GitHub
  Actions)

## Centralized Recommendations for TSConfig bases

- https://github.com/tsconfig/bases
- https://www.npmjs.com/package/@tsconfig/node22

## SWC (Speedy Web Compiler) - TypeScript / JavaScript compiler

- https://swc.rs/docs/getting-started
- https://swc.rs/docs/configuration/swcrc

## ESLint

- https://eslint.org/
- https://typescript-eslint.io/getting-started/

- ESLint is a static code analysis tool that checks your JavaScript code for common problems, such
  as syntax errors, formatting issues, code style violations, and potential bugs.

```bash
npm install --save-dev eslint @eslint/js @types/eslint__js typescript typescript-eslint
```

## rimraf

- Remove files and directories.
- Its primary purpose is to ensure consistent behavior across different platforms (Windows, macOS,
  Linux)

## Authenticate for using the gcloud CLI

https://cloud.google.com/docs/authentication/gcloud

```bash
gcloud init # first-time setup or when switching between different environments
gcloud auth login # re-authenticate
gcloud auth list # check your currently active accounttsc
```

## Managing gcloud CLI configurations

https://cloud.google.com/sdk/docs/configurations
https://cloud.google.com/sdk/gcloud/reference/config/set

```bash
gcloud config configurations list # lists existing named configurations
gcloud config set # set properties in your active configuration
```
