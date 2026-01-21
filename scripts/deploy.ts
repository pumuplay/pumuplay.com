import { cp } from "node:fs/promises";
import { join } from "node:path";

const SOURCE_DIR = "./dist";
const TARGET_DIR = "../n8n-config/websites/www";

async function deploy() {
  try {
    console.log(`🚀 Deploying from ${SOURCE_DIR} to ${TARGET_DIR}...`);

    // Copy all files from dist to target directory
    await cp(SOURCE_DIR, TARGET_DIR, {
      recursive: true,
      force: true,
    });

    console.log("✅ Deployment completed successfully!");
  } catch (error) {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
  }
}

deploy();
