import { mkdirSync, writeFileSync } from "node:fs";

// Weekly status line: an AI agent reporting to its human.
// Punchline grows out of real agent work — tool calls — and the
// human's endless "just one more thing".
function buildEntry(): string {
  const line =
    "Weekly status: I called 312 tools this week and not one of them explains why you keep saying 'just one more thing'.";

  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  return line;
}

function writeEntry(path: string, text: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(path, text, "utf8");
}

writeEntry("/output/entry.txt", buildEntry());
