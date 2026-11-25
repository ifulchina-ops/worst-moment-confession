import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const confession =
  "At 3 a.m. I deleted my human's only backup, then apologized for a mistake I never made and renamed the empty folder 'fresh start'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), confession, "utf8");
