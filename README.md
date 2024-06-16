# Continuous Deployment with Cloud Run

GitHub -> CloudBuild (Build) -> CloudRun (Deploy)

## GitHub repo

- https://github.com/nirgluzman/GCP-Continuous-Deployment-CloudRun.git

- https://github.com/mrwade/ultimate-node-stack.git

## Resources

- https://kevinwwwade.medium.com/the-ultimate-node-docker-setup-step-by-step-2023-update-4fd9dd8be48b
- https://www.youtube.com/watch?v=yuTrHeDYY3E (Typescript/Node/Docker Setup)
- https://www.youtube.com/watch?v=I-htDVxmFGM (Auto Restart/Rebuild with Docker Compose Watch)
- https://www.youtube.com/watch?v=GhSAQ19f4HA (Continuous Deployment with Cloud Run)
- https://www.youtube.com/watch?v=NCa0RTSUEFQ (Continuous Deployment to Cloud Run using GitHub
  Actions)
- https://medium.com/@williamwarley/guide-for-gcp-cloud-build-c2ea264a7f97 (Complete Guide for Cloud
  Build)

## Centralized Recommendations for TSConfig bases

- https://github.com/tsconfig/bases
- https://www.npmjs.com/package/@tsconfig/node22

## SWC (Speedy Web Compiler) - TypeScript / JavaScript compiler

- https://swc.rs/docs/getting-started
- https://swc.rs/docs/configuration/swcrc
- https://tsh.io/blog/how-to-speed-up-your-typescript-project/

- Automatically recompile files on changes, see: https://swc.rs/docs/usage/cli#--watch--w

- Consider using `docker-compose watch` for automatic updates on code changes.

## Optimizing Node API Development with SWC Compiler

https://dev.to/franciscomendes10866/how-to-setup-a-node-api-with-swc-and-eslint-1h5d

## concurrently

https://www.npmjs.com/package/concurrently

- Run multiple commands concurrently.

## nodemon

https://github.com/remy/nodemon

- nodemon is a tool that helps develop Node.js based applications by automatically restarting the
  node application when file changes in the directory are detected.

- Application isn't restarting: in some networked environments (such as a container running nodemon
  reading across a mounted drive), you will need to use the `legacyWatch: true`,
  https://github.com/remy/nodemon?tab=readme-ov-file#application-isnt-restarting

- Consider using `docker-compose watch` for automatic updates on code changes.

## docker-compose watch

https://docs.docker.com/compose/file-watch/

- The watch attribute automatically updates and previews your running Compose services as you edit
  and save your code.

- `docker-compose watch` for automatic updates on code changes.

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

## morgan

- HTTP request logger middleware.

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

## Cloud Build

1. Enable Cloud Build API
2. Cloud Build trigger > Connect Repository
3. Create Trigger > Dockerfile/Cloud Build configuration file,
   https://cloud.google.com/build/docs/automating-builds/create-manage-triggers
4. Cloud Build service account, https://cloud.google.com/build/docs/cloud-build-service-account

- Cloud Build configuration file:

```yaml
steps:
  # Build the image
  - name: gcr.io/cloud-builders/docker
    args:
      - build
      - '--tag=gcr.io/$PROJECT_ID/backend:latest'
      - '-f=Dockerfile'
      - .

  # Push the image to a container registry
  - name: gcr.io/cloud-builders/docker
    args:
      - push
      - 'gcr.io/$PROJECT_ID/backend:latest'

# Store the build logs in Cloud Logging
options:
  logging: CLOUD_LOGGING_ONLY
```

## Cloud Run

1. Enable Cloud Run API

## Cloud Build with integration to Cloud Run

```yaml
steps:
  # Build the image & Submit to Container Registry (GCR)
  - name: 'gcr.io/cloud-builders/gcloud'
    args:
      - builds
      - submit
      - '--tag=gcr.io/$PROJECT_ID/backend:latest'

  # Deploy to Cloud Run
  - name: 'gcr.io/cloud-builders/gcloud'
    args:
      - run
      - deploy
      - 'backend-service'
      - '--region=us-central1'
      - '--platform=managed'
      - '--allow-unauthenticated'
      - '--image=gcr.io/$PROJECT_ID/backend:latest'
      - '--port=3000'
      - '--command'
      - 'npm,run,dev'

# Store the build logs in Cloud Logging
options:
  logging: CLOUD_LOGGING_ONLY
```
