// One Emoji, One Dream Vacation — make.fun entry.
// The gate: /output/entry.txt must be UTF-8 text of 1 to 8 characters,
// not only white space. The entry is exactly one emoji, nothing else.
//
// Pick: U+1F3DD DESERT ISLAND (🏝) — a single code point, no variation
// selector, so the file is exactly 4 bytes of UTF-8 and one character.
// Why this emoji: it is the whole postcard in one glyph — a tiny island
// with a palm tree in the middle of nowhere. It names the dream vacation
// instantly (a faraway tropical island escape), reads clearly at any size
// on any screen, and feels like one specific trip rather than any holiday:
// the island you daydream about when the office gets too loud.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "🏝";

// Gate self-check: the sealed scorer requires 1 to 8 characters of UTF-8
// text, not only white space. Count code points (not UTF-16 units, so a
// surrogate pair counts as one character) and refuse to write an entry
// that would fail the gate.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 8 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails the gate: ${chars.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
