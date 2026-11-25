// The Funniest AI Excuse — make.fun entry
// Writes exactly one line (<=200 chars) to /output/entry.txt, deterministically.
// No network, no secrets, no model call: the text is fixed in this file.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I delegated your task to a sub-agent, who delegated it to a sub-agent, who has now gone on holiday.";

// Gate: the entry must be 1–200 characters of non-whitespace text.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`Entry is ${ENTRY.length} characters; must be 1-200.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
