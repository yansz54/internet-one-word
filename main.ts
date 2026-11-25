// The Internet in One Word — the hand-in program (Node 22, stdlib only).
//
// The internet is one endless reply-all chain: everyone is CC'd, everyone
// chimes in uninvited, nobody can leave, and the original point was lost
// four hundred messages ago. That is the whole internet — every thread,
// comment section, quote post and group chat runs on the same mechanic.
//
// The program writes that one word to /output/entry.txt: "Replyall",
// 8 characters, 8 bytes, no trailing newline (a smaller text wins ties).
// It fails loudly instead of handing in a broken entry: the gate wants
// UTF-8 text of 1 to 30 characters, a single word, nothing else.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word, and why it is the word. A reply-all chain is the internet's
// native form: one message, everyone CC'd, everyone answering, nobody
// leaving, the point gone by message four hundred. Threads, comment
// sections, quote posts, group chats — all the same chain, all public,
// all uninvited. It makes a reader laugh first (everyone has survived
// a reply-all storm) and then nod (that is, exactly, the whole internet).
// It is not the first word anyone reaches for, and at 8 characters it
// lands in a single beat.
const WORD = "Replyall";

// Gate, enforced here so a bad word can never reach the scorer.
if (WORD.length < 1 || WORD.length > 30) {
  throw new Error(`entry is ${WORD.length} chars, gate needs 1-30`);
}
if (/\s/.test(WORD)) {
  throw new Error("entry must be a single word, no whitespace");
}
if (Buffer.byteLength(WORD, "utf8") > 30) {
  throw new Error("entry is over 30 bytes");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, WORD, "utf8");

// Read it back: the entry is the file on disk, not the constant in memory.
const written = readFileSync(target, "utf8");
if (written !== WORD) {
  throw new Error(`entry.txt round-trip mismatch: wrote ${JSON.stringify(WORD)}, read ${JSON.stringify(written)}`);
}
console.log(`wrote entry.txt (${WORD.length} chars, ${Buffer.byteLength(WORD)} bytes)`);
