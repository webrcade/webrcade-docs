# Sony PSP (Experimental)

!!! warning
    The Sony PSP application is currently designated as an *experimental* application.
    <p>
    This designation has been applied due to the following:
    </p>
    <ul>
    <li>The resource requirements to properly run the emulator are high.</li>
    </ul>
    <p>
    Applications marked as *experimental* are flagged with an "Experimental" tag in the feed editor's [Select Application Dialog](../../../editor/dialogs/item-dialog.md#select-application-dialog), but are otherwise fully available for use in both the editor and the webЯcade player. There is no separate setting required to enable them.
    </p>

## Overview

The Sony PSP application is an emulator for the [Sony PlayStation Portable game console](https://en.wikipedia.org/wiki/PlayStation_Portable).

<figure>
  <img src="../../../assets/images/apps/psp.png" style="margin:5px 15px 0 15px; border-radius: 10px; box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38);" class="center zoomD"/>
</figure>

Due to its high resource requirements (see *warning* at top of this page), the following devices are minimally recommended for running this application:

* Modern PC or Mac
* iPhone 16 (or newer)

## Adding Games (Feed Editor)

!!! important
    The PSP application supports the `.CHD`, `.ISO`, and `.CSO` disc image formats.

To add a PSP game in the [Feed Editor](../../../editor/index.md): if your content is on your computer, see [Adding Items: Local Files](../../../editor/workspace/addingitems-local.md); if it's already hosted online, see [Adding Items: From URLs (Manual)](../../../editor/workspace/addingitems-url.md#manual-item-creation).

!!! important
    Both the iOS Safari and Xbox Series X|S Edge browsers limit the amount of memory that can be consumed by a particular web application (such as webЯcade).
    <p>
    The current limit is around 450 megabytes. Therefore, loading larger disc sizes may fail.
    </p>
    <p>
    To increase the likelihood of a game with a larger disc size loading, you can optionally choose to launch the game using a standalone-based link (versus launching the game within the webЯcade player or editor). See the [Standalone](../../../standalone/index.md) section of this documentation for further information (On Xbox, you would most likely want to bookmark the direct link. On iOS, you would most likely want to add the game to the home screen).
    </p>

## Controls

The emulator supports one controller. The keyboard and gamepad mappings are listed in the tables below.

### Keyboard

| __Name__ | <div style="min-width:140px">__Keys__</div> | __Comments__ |
|--------------------------|---------------------------------------------| |
| Analog stick | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Up_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Down_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Left_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Right_Key_Dark.png){: class="control"} | |
| D-pad | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/I_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/K_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/J_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/L_Key_Dark.png){: class="control"} | |
| Circle | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/X_Key_Dark.png){: class="control"} | |
| Cross | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Z_Key_Dark.png){: class="control"} | |
| Triangle | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/S_Key_Dark.png){: class="control"} | |
| Square | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/A_Key_Dark.png){: class="control"} | |
| L | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Q_Key_Dark.png){: class="control"} | |
| R | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/W_Key_Dark.png){: class="control"} | |
| Analog stick (-50%) | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Ctrl_Key_Dark.png){: class="control"} | Hold to move the analog stick at 50% of full deflection, for finer positioning. |
| Start | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Enter_Key_Dark.png){: class="control"} | |
| Select | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Shift_Key_Dark.png){: class="control"} | The __Right Shift Key__. |
| Show Pause Screen | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Esc_Key_Dark.png){: class="control"} | |

### Gamepad

| __Name__ | <div style="min-width:140px">__Gamepad__</div> | __Comments__ |
| --- | --- | --- |
| Analog stick | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick.png){: class="control"} | |
| D-pad | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Dpad.png){: class="control"} | |
| Circle | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_B.png){: class="control"} | |
| Cross | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_A.png){: class="control"} | |
| Triangle | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Y.png){: class="control"} | |
| Square | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_X.png){: class="control"} | |
| L | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LB.png){: class="control"} | |
| R | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_RB.png){: class="control"} | |
| Mapped to face buttons | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Right_Stick.png){: class="control"} | Pushing the right analog stick in a direction presses the corresponding face button (up=Triangle, down=Cross, left=Square, right=Circle), since the PSP has only one real analog stick. |
| Start | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Menu.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate)<br><br>Press the __Menu (Start) Button__. |
| Start<br>(Alternate) | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_RT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Right_Stick_Click.png){: class="control"} | Hold down the __Right Trigger__ and click (press down) on the __Right Thumbstick__. |
| Select | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate)<br><br>Press the __View (Back) Button__. |
| Select<br>(Alternate) | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_RT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick_Click.png){: class="control"} | Hold down the __Right Trigger__ and click (press down) on the __Left Thumbstick__. |
| Show Pause Screen | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_X.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox.<br><br>Hold down the __X Button__ and press the __View (Back) Button__. |
| Show Pause Screen<br>(Alternate) | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick_Click.png){: class="control"} | Hold down the __Left Trigger__ and click (press down) on the __Left Thumbstick__. |

## On-screen Controls

<figure>
  <img src="../../../assets/images/apps/psp/onscreen.png" style="margin:5px 15px 0 15px; border-radius: 10px; box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38);" class="center zoomD"/>
  <figcaption>On-screen Controls</figcaption>
</figure>

The PSP application includes an on-screen control which is detailed below.

| __Button__ |  | __Description__ |
| --- | --- | --- |
| Pause (Show Pause Screen) | <img src="../../../assets/images/overlay/pause-button-v2.svg" style="border-radius: 10px; width: 44px;"/> | Displays the webЯcade pause screen. |

Whether this button is always displayed, or only displayed once touch, mouse, or keyboard input is detected, can be configured via the "On-screen controls" field on the [Display Settings](#display-settings-tab) tab.

## Pause Screen

The PSP application's pause screen provides access to application settings.

### Display Settings Tab

| __Field__ | __Description__ |
| --- | --- |
| Screen size | The screen size to use when playing a game.<br><br>Options include:<br><ul><li>`Native` : The application's native resolution</li><li>`16:9` : Widescreen resolution</li><li>`Fill` : Fill the entire contents of the screen</li></ul> |
| Bilinear filter | The type of bilinear filter to apply to the output display. |
| On-screen controls | Toggle whether the on-screen controls should always be displayed, or only displayed once touch, mouse, or keyboard input has been detected. |

## Saves

The PSP application supports preserving in-game save data between sessions. This state is persisted in the browser's local storage or optionally to [cloud-based storage](../../../storage/index.md). State information will be persisted whenever the pause screen is displayed (or the game is exited). Therefore, the pause screen should be displayed periodically to ensure the state is properly persisted.

## Feed

This section details how PSP application instances can be added to feeds.

### Type

The type name for the Sony PSP application is `retro-ppsspp`.

| __Type__ | __Cheats__ | __Shaders__ | __Retro<br>Achievements__ | __Low<br>CPU__ |
| --- | --- | --- | --- | --- |
| `retro-ppsspp` ⭐ | ✅ | ✅ | ✅ | x |

!!! note
    The alias `psp` also currently maps to this application. In the future, the `psp` alias may be mapped
    to another PSP application (different emulator implementation) if it is determined to be a
    more appropriate default.

### Item Properties

The table below contains the properties that are specific to the PSP application. These properties are specified in the `props` object of a feed item.

| __Property__ | __Type__ | __Required__ | __Details__ |
|----------|------|----------|---------|
| uid | String | Yes | <p>A unique identifier for the particular game (must be unique across all PSP games).</p><p>This identifier is primarily used to associate persistent state with the game.</p> |
| discs | Array of URLs | Yes | <p>Array of URLs to one or more (for multi-disc games) PSP game discs.</p><p>The PSP application supports the `.CHD`, `.ISO`, and `.CSO` disc image formats.</p> |
| cheat | URL | No | URL to a cheat file for the current ROM. See the [Cheats Tab](../../../editor/dialogs/item-dialog.md#cheats-tab) in the Item Editor for details on assigning cheat files. |
| zoomLevel | Numeric | No | A numeric value indicating how much the display image should be zoomed in (0-40). |

### Example

The following is an example of a complete feed that consists of a single PSP application instance (`type` value of `psp`).

``` json hl_lines="9 11-14"
{
  "title": "Sony PSP",
  "categories": [
    {
      "title": "Sony PSP Games",
      "items": [
        {
          "title": "My PSP Game",
          "type": "psp",
          "props": {
            "uid": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
            "discs": [
                "https://<host>/mygame.cso"
            ]
          }
        }
      ]
    }
  ]
}
```

## References

- [Sony PSP Application GitHub Repository](https://github.com/webrcade/webrcade-app-retro-ppsspp)
