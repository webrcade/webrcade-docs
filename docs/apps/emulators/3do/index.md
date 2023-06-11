# 3DO Interactive Multiplayer

## Overview

The 3DO application is an emulator for the [3DO Interactive Multiplayer](https://en.wikipedia.org/wiki/3DO_Interactive_Multiplayer) gaming console.

<figure>
  <img src="../../../assets/images/apps/3do.png" style="padding:5px 15px 0 15px;" class="center zoomD"/>
</figure>

## Adding Games (Feed Editor)

Due to large Disc image sizes, adding 3DO games in the [Feed Editor](../../../editor/index.md) must be done manually (versus using auto-detection).

!!! important
    The 3DO application only supports the `.CHD` disc file format (`.ISO`, `.BIN`, and `.CUE` are not supported).

See the [Disc and Archive-based Items](../../../editor/workspace/addingitems.md#disc-and-archive-based-items) section for the list of steps required to add a 3DO game in the [Feed Editor](../../../editor/index.md).

!!! important
    Both the iOS Safari and Xbox Series X|S Edge browsers limit the amount of memory that can be consumed by a particular web application (such as webЯcade).
    <p>
    The current limit is around 450 megabytes. Therefore, loading larger disc sizes may fail.
    </p>
    <p>
    To increase the likelihood of a game with a larger disc size loading, you can optionally choose to launch the game using a standalone-based link (versus launching the game within the webЯcade player or editor). See the [Standalone](../../../standalone/index.md) section of this documentation for further information (On Xbox, you would most likely want to bookmark the direct link. On iOS, you would most likely want to add the game to the home screen).
    </p>

## BIOS File

In addition to 3DO Disc images, one of the following BIOS files must be specified globally within the feed (See the [Feed Properties Dialog](../../../editor/dialogs/feed-dialog.md#properties-tab) and [3DO Feed Properties](#feed-properties) sections).

| __File__ | __Hash (MD5)__ | __Description__ |
| --- | --- | --- |
| panafz1.bin | f47264dd47fe30f73ab3c010015c155b | Recommended |
| panafz10.bin      | 51f2f43ae2f3508a14d9f56597e2d3ce | |
| panafz10-norsa.bin | 1477bda80dc33731a65468c1f5bcbee9 | |
| panafz10e-anvil.bin | a48e6746bd7edec0f40cff078f0bb19f | |
| panafz10e-anvil-norsa.bin | cf11bbb5a16d7af9875cca9de9a15e09 | |
| panafz1j.bin | a496cfdded3da562759be3561317b605 | |
| panafz1j-norsa.bin  | f6c71de7470d16abe4f71b1444883dc8 | |
| goldstar.bin   | 8639fd5e549bd6238cfee79e3e749114 | |
| sanyotry.bin   | 35fa1a1ebaaeea286dc5cd15487c13ea | |
| 3do_arcade_saot.bin | 8970fc987ab89a7f64da9f8a8c4333ff | |

## Font File (optional)

An optional font file can be specified (required for a small number of Japanese-exclusive games to run). To use a font file, specify one of the files below globally within the feed (See the [Feed Properties Dialog](../../../editor/dialogs/feed-dialog.md#properties-tab) and [3DO Feed Properties](#feed-properties) sections).

| __File__ | __Hash (MD5)__
| --- | --- |
| panafz1-kanji.bin | b8dc97f778a6245c58e064b0312e8281 |
| panafz10ja-anvil-kanji.bin | 428577250f43edc902ea239c50d2240d |

## Controls

The 3DO application supports up to four controllers, however only one controller is available by default. This is due to the fact that the underlying emulator exhibits known issues on certain games when multiple controllers are enabled. To enable multiple controllers, launch a game, then display the pause menu and select the appropriate number of controllers (see screenshot below).

![](../../../assets/images/apps/3do/controllers.png){: class="center zoomD"}

The keyboard and gamepad mappings are listed in the tables below.

### Keyboard

Keyboard controls are listed below.

| __Name__ | <div style="min-width:140px">__Keys__</div> | __Comments__ |
|--------------------------|---------------------------------------------| |
| Move | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Up_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Down_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Left_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Right_Key_Dark.png){: class="control"}  | |
| Button A | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Z_Key_Dark.png){: class="control"} | |
| Button B | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/X_Key_Dark.png){: class="control"} | |
| Button C | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/C_Key_Dark.png){: class="control"} | |
| Left Bumper | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/A_Key_Dark.png){: class="control"} | |
| Right Bumper | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/S_Key_Dark.png){: class="control"} | |
| Play | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Enter_Key_Dark.png){: class="control"} &nbsp;or&nbsp; ![](../../../assets/images/controller/Keyboard & Mouse/Dark/V_Key_Dark.png){: class="control"}  | |
| Stop | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Shift_Key_Dark.png){: class="control"} | The __Right Shift Key__.|
| Show Pause Screen | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Esc_Key_Dark.png){: class="control"} | |

### Gamepad

Gamepad mappings are listed below.

| __Name__ | <div style="min-width:140px">__Gamepad__</div> | __Comments__ |
| --- | --- | --- |
| Move                         | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Dpad.png){: class="control"} &nbsp;or&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick.png){: class="control"} | |
| Button A                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_X.png){: class="control"} | | |
| Button B                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_A.png){: class="control"}  | |
| Button C                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_B.png){: class="control"} | |
| Left Bumper                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LB.png){: class="control"} | |
| Right Bumper                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_RB.png){: class="control"} | |
| Play                        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Y.png){: class="control"} |  |
| Play                        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Menu.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate)<br><br>Press the __Menu (Start) Button__. |
| Play<br>(Alternate)            | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_RT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Right_Stick_Click.png){: class="control"} | Hold down the __Right Trigger__ and click (press down) on the __Right Thumbstick__. |
| Stop                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"}  | Not available for Xbox and not recommended for iOS (see alternate)<br><br>Press the __View (Back) Button__. |
| Stop<br>(Alternate)           | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_RT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick_Click.png){: class="control"} | Hold down the __Right Trigger__ and click (press down) on the __Left Thumbstick__. |
| Show Pause Screen                    | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Menu.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate 3 or 4)<br><br>Hold down the __Left Trigger__ and press the __Menu (Start) Button__. |
| Show Pause Screen<br>(Alternate)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate 3 or 4)<br><br>Hold down the __Left Trigger__ and press the __View (Back) Button__. |
| Show Pause Screen<br>(Alternate 2)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_X.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate 3 or 4)<br><br>Hold down the __X Button__ and press the __View (Back) Button__. |
| Show Pause Screen<br>(Alternate 3)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick_Click.png){: class="control"} | Hold down the __Left Trigger__ and click (press down) on the __Left Thumbstick__. |
| Show Pause Screen<br>(Alternate 4)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Right_Stick_Click.png){: class="control"} | Hold down the __Left Trigger__ and click (press down) on the __Right Thumbstick__. |

## Internal Save Memory

The 3DO application supports persisting the console's internal save memory into the browser's local storage or optionally to [cloud-based storage](../../../storage/index.md). The contents will be persisted to storage whenever the pause screen is displayed (or the game is exited). Therefore, the menu should be displayed periodically for games that support saving to memory to ensure the state is properly persisted.

## Feed

This section details how 3DO application instances can be added to feeds.

### Type

The type name for the 3DO application is `retro-opera`.

!!! note
    The alias `3do` also currently maps to this application. In the future, the `3do` alias may be mapped to another 3DO application (different emulator implementation) if it is determined to be a more appropriate default.

### Feed Properties

The table below contains global 3DO feed properties. These properties must be specified in the `props` object of the feed's [Feed Object](../../../feeds/format.md#feed-object).

| __Property__ | __Type__ | __Required__ | __Details__ |
|----------|------|----------|---------|
| threedo_bios | URL | Yes | <p>URL to a valid 3DO BIOS file.</p><p>See the [BIOS File](#bios-file) section for additional information.</p>  |
| threedo_fonts | URL | No | <p>URL to a valid 3DO Fonts file.</p><p>See the [Font File](#font-file-optional) section for additional information.</p>  |


### Item Properties

The table below contains the properties that are specific to the 3DO application. These properties are specified in the `props` object of a feed item.

| __Property__ | __Type__ | __Required__ | __Details__ |
|----------|------|----------|---------|
| uid | String | Yes | <p>A unique identifier for the particular game (must be unique across all 3DO games).</p><p>This identifier is primarily used to associate persistent state with the game.</p>|
| discs | Array of URLs | Yes | <p>Array of URLs to one or more (for multi-disc games) 3DO game discs.</p><p>The 3DO application only supports the `.CHD` disc file format (`.ISO`, `.BIN`, and `.CUE` are not supported).</p> |
| hack | Numeric | No | Specifies the game-specific hack to enable.<br><ul><li>`0` : (None)</li><li>`1` : Crash 'n Burn</li><li>`2` : Dinopark Tycoon</li><li>`3` : Samurai Shodown</li><li>`4` : Alone in the Dark</li><li>`5` : Microcosm</li></ul><p>Some games require a "hack" work properly.</p> |
| zoomLevel | Numeric | No | A numeric value indicating how much the display image should be zoomed in (0-40).<br><br>This property is typically used to hide the black borders that are present on some 3DO games. |

### Example

The following is an example of a complete feed that consists of a single 3DO application instance (`type` value of `3do`). The `discs` property value contains a URL that points to a 3DO game disc image. The `uid` property value contains a unique identifier for this specific game (must be unique across all 3DO games).

It is also worth noting that the *3DO BIOS location* (`threedo_bios`) is specified globally within the [Feed Object's](../../../feeds/format.md#feed-object) `props` object.

``` json hl_lines="4 12 14-17"
{
  "title": "3DO",
  "props": {
    "threedo_bios": "https://<host>/panafz1.bin"
  },
  "categories": [
    {
      "title": "3DO Games",
      "items": [
        {
          "title": "Some Game",
          "type": "3do",
          "props": {
            "uid": "569a91ec-aac1-4bea-8960-435bd004b041",
            "discs": [
                "https://<host>/somegame.chd"
            ]
          }
        }
      ]
    }
  ]
}
```

## References

- [3DO Application GitHub Repository](https://github.com/webrcade/webrcade-app-retro-opera)

