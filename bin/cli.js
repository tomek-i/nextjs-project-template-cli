#!/usr/bin/env node

import { execSync } from "child_process";
import degit from "degit";
import chalk from "chalk";

const args = process.argv.slice(2);
const projectName = args[0];

if (!projectName) {
  console.error(chalk.red("Error: You must provide a project name."));
  console.log(`Usage: npx @tomek-i/nextjs-starter <project-name>`);
  process.exit(1);
}

const repo = "tomek-i/nextjs-project-template"; 

console.log(chalk.green(`🚀 Creating Next.js project: ${projectName}`));

const emitter = degit(repo, { cache: false, force: true });

emitter.clone(projectName).then(() => {
  console.log(chalk.green("✅ Template cloned successfully."));
  console.log("📦 Installing dependencies...");
  execSync(`cd ${projectName} && yarn --silent`, { stdio: "ignore" });

  console.log(chalk.blueBright("\n🎉 All set! Run the following commands to start:\n"));
  console.log(chalk.cyan(`   cd ${projectName}`));
  console.log(chalk.cyan(`   yarn dev`));
}).catch((err) => {
  console.error(chalk.red("❌ Error cloning the repository:"), err);
});
