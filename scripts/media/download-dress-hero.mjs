import { mkdir, readFile, access, writeFile } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "../..");
const manifestPath = path.join(__dirname, "dress-hero-sources.json");
const outputDir = path.join(
  projectRoot,
  "public",
  "images",
  "fashion",
  "category-heroes",
  "dresses"
);

async function exists(filePath) {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function downloadImage({ filename, url }) {
  const destination = path.join(outputDir, filename);

  if (await exists(destination)) {
    console.log(`skip  ${filename} already exists`);
    return;
  }

  console.log(`get   ${filename}`);

  const response = await fetch(url, {
    redirect: "follow",
    headers: {
      "User-Agent": "TIAH one-time media importer"
    }
  });

  if (!response.ok) {
    throw new Error(`${filename}: HTTP ${response.status} ${response.statusText}`);
  }

  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().startsWith("image/")) {
    throw new Error(`${filename}: expected image content, received ${contentType || "unknown"}`);
  }

  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length === 0) {
    throw new Error(`${filename}: downloaded file was empty`);
  }

  await writeFile(destination, bytes);
  console.log(`saved ${filename} (${Math.round(bytes.length / 1024)} KB)`);
}

async function main() {
  await mkdir(outputDir, { recursive: true });

  const manifest = JSON.parse(await readFile(manifestPath, "utf8"));

  if (!Array.isArray(manifest) || manifest.length === 0) {
    throw new Error("dress-hero-sources.json has no image sources");
  }

  for (const item of manifest) {
    if (!item?.filename || !item?.url) {
      throw new Error("Each manifest entry needs filename and url");
    }

    await downloadImage(item);
  }

  console.log(`\nDone. Images are stored in ${path.relative(projectRoot, outputDir)}`);
  console.log("They will not download again unless you delete them or rename them.");
}

main().catch((error) => {
  console.error(`\nDress hero import failed: ${error.message}`);
  process.exitCode = 1;
});
