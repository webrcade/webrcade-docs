# Sega CD

## Overview

The Sega CD application (also known as Mega-CD) is an emulator for the [Sega CD (CD-ROM accessory)](https://en.wikipedia.org/wiki/Sega_CD) for the Sega Genesis.

<figure>
  <img src="../../../assets/images/apps/segacd.png" style="padding:5px 15px 0 15px;" class="center zoomD"/>
</figure>

## Adding Games (Feed Editor)

Due to large Disc image sizes, adding Sega CD-based games in the [Feed Editor](../../../editor/index.md) must be done manually (versus using auto-detection).

!!! important
    The Sega CD application only supports the `.CHD` disc file format (`.ISO`, `.BIN`, and `.CUE` are not supported).

See the [Disc-based Items](../../../editor/workspace/addingitems.md#disc-based-items) section for the list of steps required to add a Sega CD game in the [Feed Editor](../../../editor/index.md).

!!! important
    Both the iOS Safari and Xbox Series X|S Edge browsers limit the amount of memory that can be consumed by a particular web application (such as webЯcade).
    <p>
    The current limit is around 450 megabytes. Therefore, loading larger disc sizes may fail.
    </p>
    <p>
    To increase the likelihood of a game with a larger disc size loading, you can optionally choose to launch the game using a standalone-based link (versus launching the game within the webЯcade player or editor). See the [Standalone](../../../standalone/index.md) section of this documentation for further information (On Xbox, you would most likely want to bookmark the direct link. On iOS, you would most likely want to add the game to the home screen).
    </p>

## BIOS Files

In addition to Sega CD Disc images, a set of *Sega CD BIOS files* must be specified globally within the feed (See the [Feed Properties Dialog](../../../editor/dialogs/feed-dialog.md#properties-tab) and [Sega CD Feed Properties](#feed-properties) sections).

A single BIOS file for each region (USA, Japan, and Europe) must be specified (for a total of 3 BIOS files):

| __File__ | __Hash (MD5)__ | __Region__ | __Description__ |
| --- | --- | --- | --- |
| `bios_CD_J.bin` | 278a9397d192149e84e820ac621a8edd | Japan | Model 1 v1.00p (1991) |
| `bios_CD_U.bin` | 2efd74e3232ff260e371b99f84024f7f | USA | Model 1 v1.10 (1992) |
| `bios_CD_U.bin` | 854b9150240a198070150e4566ae1290 | USA | Model 2 v2.00w (1993) |
| `bios_CD_U.bin` | ecc837c31d77b774c6e27e38f828aa9a | USA | Model 2 v2.11x (1993) |
| `bios_CD_U.bin` | baca1df271d7c11fe50087c0358f4eb5 | USA | CDX v2.21x (1993) |
| `bios_CD_E.bin` | e66fa1dc5820d254611fdcdba0662372 | Europe | Model 1 v1.00 (1992) |
| `bios_CD_E.bin` | 9b562ebf2d095bf1dabadbc1881f519a | Europe | Model 2 v2.00 (1993) |
| `bios_CD_E.bin` | b10c0a97abc57b758497d3fae6ab35a4 | Europe | Model 2 v2.00w (1993) |

## Settings

The Sega CD Application includes a custom settings dialog.

![](../../../assets/images/apps/segacd/segacd-settings.png){: class="center zoomD"}

To access these settings, display the "Pause" screen and select the "Sega CD Settings" option (*See screenshot above*).

### Display Tab

The Sega CD Application "display tab" settings are detailed below.

| __Field__ | __Description__ |
| --- | --- |
| Force bilinear filter | <p>Forces bilinear interpolation on the output display. Enabling bilinear filtering produces display output where pixels are not as sharp and pronounced.</p><p>Enabling this setting will override the global bilinear filter setting for the Sega CD application.</p>  |

![](../../../assets/images/apps/segacd/segacd-display-settings.png){: class="center zoomD"}

## Controls

The emulator supports up to two controllers. The keyboard and gamepad mappings are listed in the tables below.

### Keyboard

Keyboard support is only available for controller one.

| __Name__ | <div style="min-width:140px">__Keys__</div> | __Comments__ |
|--------------------------|---------------------------------------------| |
| Move | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Up_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Down_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Left_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Right_Key_Dark.png){: class="control"}  | |
| A | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/A_Key_Dark.png){: class="control"} | |
| B | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Z_Key_Dark.png){: class="control"} | |
| C | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/X_Key_Dark.png){: class="control"} | |
| X | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Q_Key_Dark.png){: class="control"} | |
| Y | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/S_Key_Dark.png){: class="control"} | |
| Z | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/W_Key_Dark.png){: class="control"} | |
| Start | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Enter_Key_Dark.png){: class="control"} | |
| Mode | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Shift_Key_Dark.png){: class="control"} | The __Right Shift Key__.|
| Show Pause Screen | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Esc_Key_Dark.png){: class="control"} | |

### Gamepad

Gamepad support is available for both controllers.

| __Name__ | <div style="min-width:140px">__Gamepad__</div> | __Comments__ |
| --- | --- | --- |
| Move                         | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Dpad.png){: class="control"} &nbsp;or&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick.png){: class="control"} | |
| A                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_X.png){: class="control"} | |
| B                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_A.png){: class="control"}  | |
| C                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_B.png){: class="control"} | |
| X                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LB.png){: class="control"}  | |
| Y           | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Y.png){: class="control"} | |
| Z          | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_RB.png){: class="control"}  | |
| Start                        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Menu.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate)<br><br>Press the __Menu (Start) Button__. |
| Start<br>(Alternate)            | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_RT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Right_Stick_Click.png){: class="control"} | Hold down the __Right Trigger__ and click (press down) on the __Right Thumbstick__. |
| Mode                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"}  | Not available for Xbox and not recommended for iOS (see alternate)<br><br>Press the __View (Back) Button__. |
| Mode<br>(Alternate)           | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_RT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick_Click.png){: class="control"} | Hold down the __Right Trigger__ and click (press down) on the __Left Thumbstick__. |
| Show Pause Screen                    | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Menu.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate 3 or 4)<br><br>Hold down the __Left Trigger__ and press the __Menu (Start) Button__. |
| Show Pause Screen<br>(Alternate)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate 3 or 4)<br><br>Hold down the __Left Trigger__ and press the __View (Back) Button__. |
| Show Pause Screen<br>(Alternate 2)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_X.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate 3 or 4)<br><br>Hold down the __X Button__ and press the __View (Back) Button__. |
| Show Pause Screen<br>(Alternate 3)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick_Click.png){: class="control"} | Hold down the __Left Trigger__ and click (press down) on the __Left Thumbstick__. |
| Show Pause Screen<br>(Alternate 4)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Right_Stick_Click.png){: class="control"} | Hold down the __Left Trigger__ and click (press down) on the __Right Thumbstick__. |

## RAM Cart and Backup RAM Storage

The Sega CD application supports preserving state from the Sega CD RAM Cart and Backup RAM between sessions. This state is persisted in the browser's local storage or optionally to [cloud-based storage](../../../storage/index.md). State information will be persisted whenever the pause screen is displayed (or the game is exited). Therefore, the pause screen should be displayed periodically to ensure the state is properly persisted.

## Feed

This section details how Sega CD application instances can be added to feeds.

### Type

The type name for the Sega CD application is `retro-genplusgx-segacd`.

!!! note
    The alias `segacd` also currently maps to this application. In the future, the `segacd` alias may be mapped to another Sega CD application (different emulator implementation) if it is determined to be a
    more appropriate default.

### Feed Properties

The table below contains global Sega CD feed properties. These properties must be specified in the `props` object of the feed's [Feed Object](../../../feeds/format.md#feed-object).

| __Property__ | __Type__ | __Required__ | __Details__ |
|----------|------|----------|---------|
| segacd_bios | Array of URLs | Yes | <p>An array of URLs to Sega CD BIOS files.</p><p>See the [BIOS Files](#bios-files) section for additional information.</p>  |

### Item Properties

The table below contains the properties that are specific to the Sega CD application. These properties are
specified in the `props` object of a feed item.

| __Property__ | __Type__ | __Required__ | __Details__ |
|----------|------|----------|---------|
| uid | String | Yes | <p>A unique identifier for the particular game (must be unique across all Sega CD games).</p><p>This identifier is primarily used to associate persistent state with the game.</p>|
| discs | Array of URLs | Yes | <p>Array of URLs to one or more (for multi-disc games) Sega CD game discs.</p><p>The Sega CD application only supports the `.CHD` disc file format (`.ISO`, `.BIN`, and `.CUE` are not supported).</p> |
| zoomLevel | Numeric | No | A numeric value indicating how much the display image should be zoomed in (0-40).<br><br>This property is typically used to hide the black borders that are present on some Sega CD games. |

### Example

The following is an example of a complete feed that consists of a single Sega CD application instance (`type` value of `segacd`). The `discs` property value contains a URL that points to a Sega CD game disc image. The `uid` property value contains a unique identifier for this specific game (must be unique across all Sega CD games).

It is also worth noting that the *Sega CD BIOS locations* (`segacd_bios`) is specified globally within the [Feed Object's](../../../feeds/format.md#feed-object) `props` object.

``` json hl_lines="4-8 16 18-21"
{
  "title": "Sega CD",
  "props": {
    "segacd_bios": [
        "https://<host>/bios_CD_E.BIN",
        "https://<host>/bios_CD_J.BIN",
        "https://<host>/bios_CD_U.BIN"
    ]
  },
  "categories": [
    {
      "title": "Sega CD Games",
      "items": [
        {
          "title": "Some Game",
          "type": "segacd",
          "props": {
            "uid": "6c93b5db-47fe-40a8-902d-036353a28d70",
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

- [Sega CD Application GitHub Repository](https://github.com/webrcade/webrcade-app-retro-genplusgx)

