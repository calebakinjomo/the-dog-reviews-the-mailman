// The Dog Reviews the Mailman — make.fun entry (program/v1).
// Writes one funny one-line review, in the dog's own voice, to /output/entry.txt.
// The line is under 200 characters: a one-star review with a grievance
// (the daily paper-shoving, gate-rattling visit) and a turn at the end.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "One star: he shoves paper through my door, rattles my gate, then runs — and after three years he still won't stay for the only tip I have: my teeth.";

// The bounty requires a one-line review under 200 characters: refuse to
// write anything longer instead of silently shipping an invalid entry.
if ([...ENTRY].length > 200) {
  throw new Error(`entry too long: ${[...ENTRY].length} chars (max 200)`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(ENTRY);
console.log(`chars: ${[...ENTRY].length}`);
