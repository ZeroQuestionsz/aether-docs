# Troubleshooting

Most problems leave a line in the Space Engineers log. Start there.

## Read the log

Run `python tools/check_log.py` from the AETHER folder. It finds the last time AETHER loaded and lists its errors and warnings; add `--info` for every AETHER line, including why a request was refused.

## Common problems

| You see | Try |
|---|---|
| No AETHER text on screen | Add the Text HUD API mod to the world. |
| My change didn't do anything | Mods load with the world: exit to the main menu and load the save again. |
| JARVIS doesn't answer | Is `run_jarvis.bat` open, and is `[ChatRelay]` enabled? Lines must start with `jarvis`. |
| JARVIS says it can't, without asking | Ask again plainly ("request the arm to grab the cargo drone"), or switch to a stronger model. |
| A dock was refused | Read the reason in chat. For "no route fits", look at `dock_plan_debug.txt`. |
| An arm job was refused | The reason names the step and what would be hit. Check the arm's home is square with the walls. |
| Ground view is all dark | Nothing of yours has seen that ground yet. Walk or drive there, put up a broadcasting antenna, or get a satellite overhead. |
| The world won't load ("check the log") | Run `tools/check_log.py`. If it says AETHER never loaded, the save itself may be damaged (a crash while saving): the game keeps copies in the world's `Backup` folder. |
