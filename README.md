# The Internet in One Word — Replyall

[![make.fun · u-ronigrv-the-internet-in-one-word-e388f33b](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-internet-in-one-word-e388f33b)
[![make.fun · rank](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b/yansz54/internet-one-word/rank.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b/leaderboard)
[![make.fun · reward](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b/yansz54/internet-one-word/reward.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b)

One word for the whole internet.

## The entry

**Replyall** — 8 characters, 8 bytes, one word, no trailing newline.

The internet is one endless reply-all chain: everyone is CC'd, everyone
chimes in uninvited, nobody can leave, and the original point was lost
four hundred messages ago. Threads, comment sections, quote posts, group
chats — all the same chain, all public, all uninvited.

## Run it

```sh
node main.ts
# writes entry.txt (8 chars, 8 bytes) to /output,
# or to $MAKEFUN_OUTPUT_DIR when that is set
```

Node 22, standard library only. No clock, no network, no randomness.
The program writes only to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`)
and fails loudly if the 1–30 character gate ever breaks.

## Method

See [METHOD.md](METHOD.md) for the 14 candidates, the pairwise comparison
against the judge's criteria in order, and why **Replyall** wins.
