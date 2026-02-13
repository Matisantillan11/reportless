<div align="center">

# Reportless - AI Powered Report Generation

[About](#-about) ✦ [Tech Stack](#-tech-stack) ✦ [Getting Started](#-installation) ✦ [Usage](#-usage) ✦ [Commands](#-commands) ✦ [How It Works](#-how-it-works) 

</div>


A scalable fullstack monorepo built with Next.js and AWS Lambda for generating structured reports from CV uploads and user-provided templates.

This project is designed as a production-ready architecture experiment focused on serverless backend processing, shared TypeScript contracts, and clean monorepo structure using pnpm workspaces.

## 🚀 Tech Stack

| Technology | Purpose |
|------------|----------|
| Next.js 16 | Frontend & API routes |
| TypeScript | End-to-end type safety |
| pnpm Workspaces | Monorepo management |
| AWS Lambda (Node 24) | Serverless processing |
| esbuild | Fast Lambda bundling |
| AWS SDK v3 | AWS service integration |
| Tailwind CSS | UI styling |
| Shared Workspace Package | Cross-layer types & schemas |


## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/Matisantillan11/reportless
cd report-generator
```

Install all workspace dependencies:

```bash
pnpm install
```

## 🛠 Usage

Run Frontend (Next.js)

```bash
pnpm run dev or pnpm --filter @report-generator/web dev
```

Build lambda functions:

```bash
pnpm --filter @report-generator/lambdas build
```

This will bundle every Lambda found inside the `services/lambdas/src/functions` directory into the `services/lambdas/dist` directory.

## 📁 Project Structure

```
report-generator/
│
├── apps/
│   └── web/                # Next.js frontend
│
├── services/
│   └── lambdas/            # AWS Lambda functions
│       ├── src/functions/  # Each folder = 1 Lambda
│       ├── build.mjs       # Dynamic esbuild bundler
│       └── dist/           # Bundled output
│
├── packages/
│   └── shared/             # Shared types & utilities
│
├── pnpm-workspace.yaml
├── tsconfig.base.json
└── package.json
```

## 🧞 Commands

| Command                  | Action                             |
| ------------------------ | ---------------------------------- |
| `pnpm install`             | Install all workspace dependencies  |
| `pnpm run dev`             | Start the web app development server  |
| `pnpm --filter @report-generator/lambdas build`       | Build the Lambda functions  |
| `pnpm --filter @report-generator/lambdas clean`       | Clean the Lambda functions  |
| `pnpm --filter @report-generator/lambdas typecheck`       | Type check the Lambda functions  |



## 🔁 How It Works

1- User uploads a CV and selects a template.

2- Files are stored in S3.

3- Frontend triggers a Lambda invocation.

4- Lambda:

- Retrieves files

- Extracts structured data

- Generates the final report

- Uploads output to S3

5- Frontend retrieves the generated file.


<br />


##### Built by Matias Santillan | @Matisantillan11. 🌱

