# Overview

This seciton of the documentation is for advanced users. Please be aware that making changes as suggested in this section may break your webrcade instance.

## How the magic happens

- The [Editor](https://editor.webrcade.com/) website is used to create the [`feed.json`](/feeds) file that is imported into the [Play](https://play.webrcade.com/) website.

- The Play website then builds your library by downloading the pictures you set to each game and platform, based on the links stored in the `feed.json` file. Once a game is selected, it is downloaded into memory during gameplay and then deleted upon closing or backing out of the game to the Play website.

## Save files

The save files generated from the in-game save locations are stored inside your web browser's website data. Be careful not to clear browsing data as this will also wipe out your saves. Its always recommended to utilize the [cloud storage](/storage) solution to ensure your saves are safe.
