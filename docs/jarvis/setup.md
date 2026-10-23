# Set up JARVIS

JARVIS is a small Python program that runs next to the game. It reads what AETHER exports, answers in chat, and asks AETHER for operations you approve.

## 1. Open AETHER's channels

In `%AppData%\SpaceEngineers\Storage\AETHER_AETHER\aether_integration.ini`, set `Enabled=true` in the sections you want. AETHER writes this file the first time it runs.

| Section | Lets JARVIS |
|---|---|
| `[Export]` | Read what AETHER knows (planets, satellites, contacts, ships), refreshed every few seconds. |
| `[ChatRelay]` | Hear chat lines starting with `jarvis` and reply in chat. |
| `[Queries]` | Ask AETHER to calculate: move estimates, station plans, line of sight, coverage. |
| `[Operations]` | Request moves, docks, arm jobs and settings. Every one waits for your `/ok`. |
| `[Display]` <VersionBadge text="beta" kind="beta" /> | Show a planet, satellite or contact on the map, a console or a holo table. Every change is announced. |

## 2. Choose a brain

In `jarvis.ini`, `[Brain] Backend=` picks the model:

- `claude`: Anthropic's Claude. Fast and good with tools; a small cost per message. Save your key as the Windows user environment variable `ANTHROPIC_API_KEY`, or in a `.env` file next to JARVIS. Set a monthly spending limit in the Anthropic console.
- `ollama`: a local model through Ollama. Free and private, but very slow on an 8 GB graphics card while the game is running.

::: tip Which Claude model
Haiku is the cheapest. If JARVIS starts second-guessing requests instead of sending them, a Sonnet model follows instructions more reliably at a higher cost per message.
:::

## 3. Run it

1. Double-click `run_jarvis.bat` and keep the window open while you play.
2. In game, chat should show `JARVIS online`.
3. Try <span class="say">status report</span>.

Without the game, `py -3 -m jarvis --check` tests the setup and `py -3 -m jarvis --ask "quick status report"` asks one question.

## How it works

```text
game chat "jarvis ..."  →  AETHER chat_out_*.json  →  JARVIS (brain + tools)  →  chat_in.json  →  game chat
                                                         ├─ aether_snapshot.json          read what AETHER knows
                                                         ├─ query_in / query_res_*.json   calculations
                                                         └─ op_in / op_status_*.json      requests you approve
```

JARVIS can't change anything in your world directly. Every message it sends must carry the shared secret AETHER generates, and every operation still waits for you in game.
