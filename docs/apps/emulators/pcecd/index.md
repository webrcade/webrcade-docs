#  PC Engine CD (TurboGrafx-CD)

## Overview

The PC Engine CD (TurboGrafx-CD) application is an emulator for the [CD-ROM accessory](https://en.wikipedia.org/wiki/TurboGrafx-16#Add-ons) for the PC Engine.

<figure>
  <img src="../../../assets/images/apps/pcecd.png" style="padding:5px 15px 0 15px;" class="center zoomD"/>
</figure>

## Adding Games (Feed Editor)

Due to large Disc image sizes, adding PC Engine CD-based games in the [Feed Editor](../../../editor/index.md) must be done manually (versus using auto-detection).

!!! important
    The PC Engine CD application only supports the `.CHD` disc file format (`.ISO`, `.BIN`, and `.CUE` are not supported).

See the [Disc and Archive-based Items](../../../editor/workspace/addingitems.md#disc-and-archive-based-items) section for the list of steps required to add a PC Engine CD game in the [Feed Editor](../../../editor/index.md).

!!! important
    Both the iOS Safari and Xbox Series X|S Edge browsers limit the amount of memory that can be consumed by a particular web application (such as webЯcade).
    <p>
    The current limit is around 450 megabytes. Therefore, loading larger disc sizes may fail.
    </p>
    <p>
    To increase the likelihood of a game with a larger disc size loading, you can optionally choose to launch the game using a standalone-based link (versus launching the game within the webЯcade player or editor). See the [Standalone](../../../standalone/index.md) section of this documentation for further information (On Xbox, you would most likely want to bookmark the direct link. On iOS, you would most likely want to add the game to the home screen).
    </p>

## BIOS File

In addition to PC Engine CD Disc images, the following BIOS file must be specified globally within the feed (See the [Feed Properties Dialog](../../../editor/dialogs/feed-dialog.md#properties-tab) and [PC Engine CD Feed Properties](#feed-properties) sections).

| __File__ | __Hash (MD5)__ |
| --- | --- |
| `syscard3.pce` | '38179df8f4ac870017db21ebcbf53114' |

## Controls

The emulator supports up to four controllers. The keyboard and gamepad mappings are listed in the tables below.

### Keyboard

Keyboard support is only available for controller one.

| __Name__ | <div style="min-width:140px">__Keys__</div> | __Comments__ |
|--------------------------|---------------------------------------------| |
| Move | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Up_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Down_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Left_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Right_Key_Dark.png){: class="control"}  | |
| I | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/X_Key_Dark.png){: class="control"} or ![](../../../assets/images/controller/Keyboard & Mouse/Dark/A_Key_Dark.png){: class="control"} | __A Key__ only available in 2-button mode.  |
| II | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Z_Key_Dark.png){: class="control"} or ![](../../../assets/images/controller/Keyboard & Mouse/Dark/S_Key_Dark.png){: class="control"} | __S Key__ only available in 2-button mode. |
| III | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/A_Key_Dark.png){: class="control"} | Only in 6-button mode. |
| IV | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/S_Key_Dark.png){: class="control"} | Only in 6-button mode. |
| V | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Q_Key_Dark.png){: class="control"} | Only in 6-button mode. |
| VI | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/W_Key_Dark.png){: class="control"} | Only in 6-button mode. |
| Run | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Enter_Key_Dark.png){: class="control"} | |
| Select | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Shift_Key_Dark.png){: class="control"} | The __Right Shift Key__.|
| Show Pause Screen | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Esc_Key_Dark.png){: class="control"} | |

### Gamepad

Gamepad support is available for both controllers.

| __Name__ | <div style="min-width:140px">__Gamepad__</div> | __Comments__ |
| --- | --- | --- |
| Move                         | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Dpad.png){: class="control"} &nbsp;or&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick.png){: class="control"} | |
| I                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_B.png){: class="control"} or ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_X.png){: class="control"} |  __X Button__ only available in 2-button mode. |
| II                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_A.png){: class="control"} or ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Y.png){: class="control"} | __Y Button__ only available in 2-button mode. |
| III                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_X.png){: class="control"} | Only in 6-button mode. |
| IV                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Y.png){: class="control"}  | Only in 6-button mode. |
| V           | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LB.png){: class="control"} | Only in 6-button mode. |
| VI          | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_RB.png){: class="control"}  | Only in 6-button mode. |
| Run                        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Menu.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate)<br><br>Press the __Menu (Start) Button__. |
| Run<br>(Alternate)            | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_RT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Right_Stick_Click.png){: class="control"} | Hold down the __Right Trigger__ and click (press down) on the __Right Thumbstick__. |
| Select                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"}  | Not available for Xbox and not recommended for iOS (see alternate)<br><br>Press the __View (Back) Button__. |
| Select<br>(Alternate)           | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_RT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick_Click.png){: class="control"} | Hold down the __Right Trigger__ and click (press down) on the __Left Thumbstick__. |
| Show Pause Screen                    | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Menu.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate 3 or 4)<br><br>Hold down the __Left Trigger__ and press the __Menu (Start) Button__. |
| Show Pause Screen<br>(Alternate)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate 3 or 4)<br><br>Hold down the __Left Trigger__ and press the __View (Back) Button__. |
| Show Pause Screen<br>(Alternate 2)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_X.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate 3 or 4)<br><br>Hold down the __X Button__ and press the __View (Back) Button__. |
| Show Pause Screen<br>(Alternate 3)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick_Click.png){: class="control"} | Hold down the __Left Trigger__ and click (press down) on the __Left Thumbstick__. |
| Show Pause Screen<br>(Alternate 4)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Right_Stick_Click.png){: class="control"} | Hold down the __Left Trigger__ and click (press down) on the __Right Thumbstick__. |

## Internal Save Memory

The PC Engine CD application supports persisting the CD accessory's internal save memory into the browser's local storage or optionally to [cloud-based storage](../../../storage/index.md). The contents will be persisted to storage whenever the pause screen is displayed (or the game is exited). Therefore, the menu should be displayed periodically for games that support saving to memory to ensure the state is properly persisted.

## Feed

This section details how PC Engine CD application instances can be added to feeds.

### Type

The type name for the PC Engine CD application is `retro-pce-fast`.

!!! note
    The alias `pcecd` also currently maps to this application. In the future, the `pcecd` alias may be mapped to another PC Engine CD application (different emulator implementation) if it is determined to be a more appropriate default.

### Feed Properties

The table below contains global PC Engine CD feed properties. These properties must be specified in the `props` object of the feed's [Feed Object](../../../feeds/format.md#feed-object).

| __Property__ | __Type__ | __Required__ | __Details__ |
|----------|------|----------|---------|
| pcecd_bios | URL | Yes | <p>URL to a valid PCE CD BIOS file.</p><p>See the [BIOS File](#bios-file) section for additional information.</p>  |

### Item Properties

The table below contains the properties that are specific to the PC Engine CD application. These properties are specified in the `props` object of a feed item.

| __Property__ | __Type__ | __Required__ | __Details__ |
|----------|------|----------|---------|
| uid | String | Yes | <p>A unique identifier for the particular game (must be unique across all PC Engine CD games).</p><p>This identifier is primarily used to associate persistent state with the game.</p>|
| discs | Array of URLs | Yes | <p>Array of URLs to one or more (for multi-disc games) PC Engine CD game discs.</p><p>The PC Engine CD application only supports the `.CHD` disc file format (`.ISO`, `.BIN`, and `.CUE` are not supported).</p> |
| pad6button | Boolean | No | Whether to use 6-button control pads (2 button is the default). |
| mapRunSelect | Boolean | No | Whether to map `RUN` and `SELECT` to standard buttons.  |
| zoomLevel | Numeric | No | A numeric value indicating how much the display image should be zoomed in (0-40).<br><br>This property is typically used to hide the black borders that are present on some PC Engine CD games. |

### Example

The following is an example of a complete feed that consists of a single PC Engine CD application instance (`type` value of `pcecd`). The `discs` property value contains a URL that points to a PC Engine CD game disc image. The `uid` property value contains a unique identifier for this specific game (must be unique across all PC Engine CD games).

It is also worth noting that the *PC Engine CD BIOS location* (`pcecd_bios`) is specified globally within the [Feed Object's](../../../feeds/format.md#feed-object) `props` object.

``` json hl_lines="4 12 14-17"
{
  "title": "PC Engine CD",
  "props": {
    "pcecd_bios": "https://<host>/syscard3.pce"
  },
  "categories": [
    {
      "title": "PC Engine CD Games",
      "items": [
        {
          "title": "Some Game",
          "type": "pcecd",
          "props": {
            "uid": "7e636438-6520-4673-81ed-36835faccb2f",
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

- [PC Engine CD Application GitHub Repository](https://github.com/webrcade/webrcade-app-retro-pce-fast)

