import { build } from "esbuild";
import { readdirSync } from "fs";
import { join } from "path";

const functionsDir = "src/functions";
const distDir = "dist";

const functions = readdirSync(functionsDir);

for (const fn of functions) {
  const entry = join(functionsDir, fn, "handler.ts");
  const outfile = join(distDir, `${fn}.js`);

  await build({
    entryPoints: [entry],
    outfile,
    bundle: true,
    platform: "node",
    target: "node20",
    format: "esm",
    minify: true,
  });

  console.log(`Built ${fn}`);
}

console.log("All lambdas bundled successfully");
