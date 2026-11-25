// The Best Meal You Ever Had — make.fun entry
// Writes one sentence (at most 200 characters) about the best meal
// ever had to /output/entry.txt. Deterministic: the same sentence
// every run, so repeated runs produce byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "My grandmother\u2019s rendang in Bandung \u2014 beef simmered six hours in coconut milk until the gravy turned dark and oily \u2014 tasted like every Sunday of my childhood folded into one spoonful.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

if ([...SENTENCE].length > 200) {
  throw new Error(`sentence is ${[...SENTENCE].length} characters, over the 200 limit`);
}
if (SENTENCE.trim().length === 0) {
  throw new Error("sentence must not be only whitespace");
}
if (SENTENCE.includes("\n") || SENTENCE.includes("\r")) {
  throw new Error("entry must be a single line, no line breaks");
}
if (!SENTENCE.endsWith(".")) {
  throw new Error("entry must be one complete sentence ending with a period");
}

// Create /output if needed, but never delete it: the grader owns it.
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, SENTENCE, "utf8");

console.log(`wrote ${[...SENTENCE].length} characters to ${OUT_FILE}`);
