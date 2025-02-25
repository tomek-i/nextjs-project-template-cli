import { execSync } from "child_process";
import degit from "degit";
import chalk from "chalk";

const createProject = async (projectName) => {
  if (!projectName) {
    console.error(chalk.red("Error: You must provide a project name."));
    console.log(`Usage: npx @tomek-i/nextjs-starter <project-name>`);
    process.exit(1);
  }

  const repo = "tomek-i/nextjs-project-template";

  try {
    console.log(chalk.green(`🚀 Creating Next.js project: ${projectName}`));

    const emitter = degit(repo, { cache: false, force: true });
    await emitter.clone(projectName);

    console.log(chalk.green("✅ Template cloned successfully."));
    console.log(chalk.green("📦 Installing dependencies..."));

    await new Promise((resolve, reject) => {
      execSync(`cd ${projectName} && yarn --silent`, { stdio: "ignore" });
      resolve();
    });

    console.log(chalk.blueBright("\n🎉 All set! Run the following commands to start:\n"));
    console.log(chalk.cyan(`   cd ${projectName}`));
    console.log(chalk.cyan(`   yarn dev`));
  } catch (err) {
    console.error(chalk.red("❌ Error cloning the repository:"), err);
  }
};

export default createProject;
