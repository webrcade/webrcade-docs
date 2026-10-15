# ColecoVision

## Overview

The ColecoVision application is an emulator for the [ColecoVision](https://en.wikipedia.org/wiki/ColecoVision) game console.

<figure>
  <img src="../../../assets/images/apps/colecovision.png" style="padding:5px 15px 0 15px;" class="center zoomD"/>
  <figcaption>Caos Begins by Antoni Burguera</figcaption>
</figure>

## BIOS File

In addition to ColecoVision ROM files, a *ColecoVision BIOS* (typically named `coleco.rom`) must be specified globally within the feed (See the [Feed Properties Dialog](../../../editor/dialogs/feed-dialog.md#properties-tab) and [ColecoVision Feed Properties](#feed-properties) sections).

| __File__ | __Hash (MD5)__ |
| --- | --- |
| `coleco.rom` | 2c66f5911e5b42b8ebe113403548eee7 |

## Controls

The emulator supports two controllers. The keyboard and gamepad mappings are listed in the tables below.

### Standard Controls

#### Keyboard

Keyboard controls are listed below.

| __Name__ | <div style="min-width:140px">__Keys__</div> | __Comments__ |
|--------------------------|---------------------------------------------| |
| Move | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Up_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Down_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Left_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Right_Key_Dark.png){: class="control"}  | |
| Left Fire | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Z_Key_Dark.png){: class="control"} | |
| Right Fire | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/X_Key_Dark.png){: class="control"} | |
| Show Keypad Display | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Shift_Key_Dark.png){: class="control"} | The __Right Shift Key__. See [Keypad](#keypad) section for more details. |
| Show Keypad Display<br>(Alternate) | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Ctrl_Key_Dark.png){: class="control"} | Hold, then release, to open the on-screen [Keypad](#keypad) screen. |
| Show Pause Screen | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Esc_Key_Dark.png){: class="control"} | |

#### Gamepad

Gamepad mappings are listed below.

| __Name__ | <div style="min-width:140px">__Gamepad__</div> | __Comments__ |
| --- | --- | --- |
| Move                         | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Dpad.png){: class="control"} &nbsp;or&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick.png){: class="control"} | |
| Left Fire                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_A.png){: class="control"} | |
| Right Fire                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_B.png){: class="control"} | |
| Toggle Keypad Display                        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate)<br><br>Press the __View (Back) Button__.<br><br>See [Keypad](#keypad) section for more details. |
| Toggle Keypad Display <br>(Alternate)            | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Right_Stick_Click.png){: class="control"} | Hold down the __Left Trigger__ and click (press down) on the __Right Thumbstick__. |
| Show Pause Screen                    | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_X.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox.<br><br>Hold down the __X Button__ and press the __View (Back) Button__. |
| Show Pause Screen<br>(Alternate)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick_Click.png){: class="control"} | Hold down the __Left Trigger__ and click (press down) on the __Left Thumbstick__. |

### Super Action Controls

#### Keyboard

Keyboard controls are listed below.

| __Name__ | <div style="min-width:140px">__Keys__</div> | __Comments__ |
|--------------------------|---------------------------------------------| |
| Move | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Up_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Down_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Left_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Right_Key_Dark.png){: class="control"}  | |
| Yellow Button | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Z_Key_Dark.png){: class="control"} | |
| Orange Button | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/X_Key_Dark.png){: class="control"} | |
| Purple Button | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/A_Key_Dark.png){: class="control"} | |
| Blue Button | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/S_Key_Dark.png){: class="control"} | |
| Show Keypad Display | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Shift_Key_Dark.png){: class="control"} | The __Right Shift Key__. See [Keypad](#keypad) section for more details. |
| Show Keypad Display<br>(Alternate) | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Ctrl_Key_Dark.png){: class="control"} | Hold, then release, to open the on-screen [Keypad](#keypad) screen. |
| Show Pause Screen | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Esc_Key_Dark.png){: class="control"} | |

#### Gamepad

Gamepad mappings are listed below.

| __Name__ | <div style="min-width:140px">__Gamepad__</div> | __Comments__ |
| --- | --- | --- |
| Move                         | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Dpad.png){: class="control"} &nbsp;or&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick.png){: class="control"} | |
| Spinner  | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Right_Stick.png){: class="control"} | |
| Yellow Button                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_A.png){: class="control"} | |
| Orange Button                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_B.png){: class="control"} | |
| Purple Button                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_X.png){: class="control"} | |
| Yellow Button                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Y.png){: class="control"} | |
| Toggle Keypad Display                        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate)<br><br>Press the __View (Back) Button__.<br><br>See [Keypad](#keypad) section for more details. |
| Toggle Keypad Display <br>(Alternate)            | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Right_Stick_Click.png){: class="control"} | Hold down the __Left Trigger__ and click (press down) on the __Right Thumbstick__. |
| Show Pause Screen                    | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_X.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox.<br><br>Hold down the __X Button__ and press the __View (Back) Button__. |
| Show Pause Screen<br>(Alternate)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick_Click.png){: class="control"} | Hold down the __Left Trigger__ and click (press down) on the __Left Thumbstick__. |

### Driving Controls

#### Gamepad

Gamepad mappings are listed below.

| __Name__ | <div style="min-width:140px">__Gamepad__</div> | __Comments__ |
| --- | --- | --- |
| Steer                         | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick.png){: class="control"} | |
| Joystick                         | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Dpad.png){: class="control"}  | Game-specific (for example, Turbo uses for shifting) |
| Gas Button                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_A.png){: class="control"} | |
| Brake Button                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_B.png){: class="control"} | |
| Toggle Keypad Display                        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate)<br><br>Press the __View (Back) Button__.<br><br>See [Keypad](#keypad) section for more details. |
| Toggle Keypad Display <br>(Alternate)            | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Right_Stick_Click.png){: class="control"} | Hold down the __Left Trigger__ and click (press down) on the __Right Thumbstick__. |
| Show Pause Screen                    | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_X.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox.<br><br>Hold down the __X Button__ and press the __View (Back) Button__. |
| Show Pause Screen<br>(Alternate)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick_Click.png){: class="control"} | Hold down the __Left Trigger__ and click (press down) on the __Left Thumbstick__. |

### Roller Controls

#### Gamepad

Gamepad mappings are listed below.

| __Name__ | <div style="min-width:140px">__Gamepad__</div> | __Comments__ |
| --- | --- | --- |
| Roller                         | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick.png){: class="control"} | |
| Joystick                         | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Dpad.png){: class="control"}  |  |
| Left Fire (2p)                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_A.png){: class="control"} | |
| Right Fire (2p)                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_B.png){: class="control"} | |
| Left Fire                        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_X.png){: class="control"} | |
| Right Fire                        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Y.png){: class="control"} | |
| Toggle Keypad Display                        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate)<br><br>Press the __View (Back) Button__.<br><br>See [Keypad](#keypad) section for more details. |
| Toggle Keypad Display <br>(Alternate)            | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Right_Stick_Click.png){: class="control"} | Hold down the __Left Trigger__ and click (press down) on the __Right Thumbstick__. |
| Show Pause Screen                    | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_X.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox.<br><br>Hold down the __X Button__ and press the __View (Back) Button__. |
| Show Pause Screen<br>(Alternate)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick_Click.png){: class="control"} | Hold down the __Left Trigger__ and click (press down) on the __Left Thumbstick__. |

## Keypad

The following section describes how to interact with the ColecoVision controller's keypad buttons. webЯcade provides two different ways to interact with it (the Radial Keypad is not available in [Super Action Controls](#super-action-controls) mode):

### Radial Keypad (quick-select)

<figure>
  <img src="../../../assets/images/apps/coleco/radial-keypad.png" style="padding:5px 15px 0 15px;" class="center zoomD"/>
  <figcaption>Radial Keypad</figcaption>
</figure>

Moving the right analog stick in a direction brings up a 12-key radial (pie-menu) selector, arranged clockwise from 12 o'clock: `1, 2, 3` (top), `4, 5, 6` (right), `7, 8, 9` (bottom), `*, 0, #` (left). Point the stick toward a key and confirm with either the Left or Right Bumper to press it. Releasing the stick back to center dismisses the selector without pressing anything.

| __Name__ | <div style="min-width:140px">__Gamepad__</div> | __Comments__ |
| --- | --- | --- |
| Show Radial Keypad / Choose Key | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Right_Stick.png){: class="control"} | Suppressed while the Left Trigger is held down (to avoid conflicting with the grid keypad combo below). Not available in [Super Action Controls](#super-action-controls) mode. |
| Press Key | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LB.png){: class="control"} &nbsp;or&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_RB.png){: class="control"} | |

<figure>
  <img src="../../../assets/images/apps/coleco/keypad.png" style="padding:5px 15px 0 15px;" class="center zoomD"/>
  <figcaption>On-screen Keypad Display</figcaption>
</figure>

### Gamepad (Virtual keypad)

| __Name__ | <div style="min-width:140px">__Gamepad__</div> | __Comments__ |
| --- | --- | --- |
| Show Keypad                        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate)<br><br>Press the __View (Back) Button__. |
| Show Keypad<br>(Alternate)            | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Right_Stick_Click.png){: class="control"} | Hold down the __Left Trigger__ and click (press down) on the __Right Thumbstick__. |
| Close Keypad | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | |
| Choose Key |![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Dpad.png){: class="control"} &nbsp;or&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick.png){: class="control"}   |  |
| Press Key  | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_A.png){: class="control"} | The key button will continue to be pressed until the button is released. This is important as some games require long presses for the key to be recognized. |

### Keyboard (Virtual keypad)

| __Name__ | <div style="min-width:140px">__Keys__</div> | __Comments__ |
|--------------------------|---------------------------------------------| |
| Show Keypad | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Shift_Key_Dark.png){: class="control"} | The __Right Shift Key__. |
| Show Keypad<br>(Alternate) | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Ctrl_Key_Dark.png){: class="control"} | |
| Close Keypad | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Shift_Key_Dark.png){: class="control"} | |
| Close Keypad<br>(Alternate) | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Ctrl_Key_Dark.png){: class="control"} | |
| Close Keypad<br>(Alternate 2) | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Esc_Key_Dark.png){: class="control"} | |
| Choose Key | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Up_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Down_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Left_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Right_Key_Dark.png){: class="control"}  | |
| Press Key | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Space_Key_Dark.png){: class="control"} &nbsp;or&nbsp; ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Enter_Key_Dark.png){: class="control"} | |

### Keyboard (Direct mappings)

The key button will continue to be pressed until the keyboard key is released. This is important as some games require long presses for the key to be recognized.

| __Name__ | <div style="min-width:140px">__Keys__</div> | __Comments__ |
|--------------------------|---------------------------------------------| |
| Press key (0-9) | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/0_Key_Dark.png){: class="control"} - ![](../../../assets/images/controller/Keyboard & Mouse/Dark/9_Key_Dark.png){: class="control"}  |  |
| Press key (Asterick) | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Minus_Key_Dark.png){: class="control"} |  |
| Press key (Pound) | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Equals_Key_Dark.png){: class="control"}  |  |

## On-screen Controls

<figure>
  <img src="../../../assets/images/apps/coleco/onscreen.png" style="margin:5px 15px 0 15px; border-radius: 10px; box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38);" class="center zoomD"/>
  <figcaption>On-screen Controls</figcaption>
</figure>

The ColecoVision application includes a set of on-screen controls which are detailed below.

| __Button__ |  | __Description__ |
| --- | --- | --- |
| Keypad | <img src="../../../assets/images/overlay/keypad-button-v2.svg" style="border-radius: 10px; width: 44px;"/> | Opens the on-screen [Keypad](#keypad) screen. |
| Pause (Show Pause Screen) | <img src="../../../assets/images/overlay/pause-button-v2.svg" style="border-radius: 10px; width: 44px;"/> | Displays the webЯcade pause screen. |

Whether these buttons are always displayed, or only displayed once touch, mouse, or keyboard input is detected, can be configured via the "On-screen controls" field on the [Display Settings](#display-settings-tab) tab.

## Pause Screen

The ColecoVision application's pause screen provides access to application settings.

### Display Settings Tab

| __Field__ | __Description__ |
| --- | --- |
| Screen size | The screen size to use when playing a game.<br><br>Options include:<br><ul><li>`Native` : The application's native resolution</li><li>`16:9` : Widescreen resolution</li><li>`Fill` : Fill the entire contents of the screen</li></ul> |
| Bilinear mode | The type of bilinear filter to apply to the output display. |
| On-screen controls | Toggle whether the on-screen controls should always be displayed, or only displayed once touch, mouse, or keyboard input has been detected. |

## Feed

This section details how ColecoVision application instances can be added to feeds.

### Type

The type name for the ColecoVision application is `colem`.

| __Type__ | __Cheats__ | __Shaders__ | __Retro<br>Achievements__ | __Low<br>CPU__ |
| --- | --- | --- | --- | --- |
| `colem` ⭐ | x | x | ✅ | ✅ |

!!! note
    The alias `coleco` also currently maps to this application. In the future, the `coleco` alias may be mapped
    to another ColecoVision application (different emulator implementation) if it is determined to be a
    more appropriate default.

### Feed Properties

The table below contains global ColecoVision feed properties. These properties must be specified in the `props` object of the feed's [Feed Object](../../../feeds/format.md#feed-object).

| __Property__ | __Type__ | __Required__ | __Details__ |
|----------|------|----------|---------|
| coleco_rom | URL | Yes | URL to a ColecoVision BIOS file or a zip file containing the BIOS file. |

### Item Properties

The table below contains the properties that are specific to the ColecoVision application. These properties are
specified in the `props` object of a feed item.

| __Property__ | __Type__ | __Required__ | __Details__ |
|----------|------|----------|---------|
| rom | URL | Yes | URL to a ColecoVision ROM file or a zip file containing a ROM file. |
| controlsMode | Numeric | No | The type of controls to use.<br><ul><li>`0` : Standard</li><li>`1` : Super Action</li><li>`2` : Driving</li><li>`3` : Roller</li></ul> |
| mappings | Map of Strings (key-value pairs) | No | Game-specific mappings from the ColecoVision keys and buttons to the gamepad.<br><br>The `key` in the map must be one of the following:<br><ul><li>`a`: A button</li><li>`b`: B button</li><li>`x`: X button</li><li>`y`: Y button</li><li>`lb`: Left bumper</li><li>`rb`: Right bumper</li><li>`lt`: Left trigger</li><li>`rt`: Right trigger</li></ul>The `value` in the map must be one of the following:<br><ul><li>Keypad button: `0`-`9`, `#`, `*`</li><li>Controller button: `firel` (left Fire), `firer` (Right Fire), `firel2` (Left Fire 2p), `firer2` (Right Fire 2p) `purple` (Super Action), `blue` (Super Action)</li></ul>  |
| descriptions | Map of Strings (key-value pairs) | No | Provides game-specific descriptions for the ColecoVision controller keys and buttons. Shown when the keypad or game-specific controls are displayed.<br><br>The `key` in the map must be one of the following:<br><ul><li>Keypad button: `0`-`9`, `#`, `*`</li><li>Controller button: `firel` (left Fire), `firer` (Right Fire), `firel2` (Left Fire 2p), `firer2` (Right Fire 2p) `purple` (Super Action), `blue` (Super Action)</li></ul>The `value` in the map will be the description for the `key` (keypad or controller button).  |
| zoomLevel | Numeric | No | A numeric value indicating how much the display image should be zoomed in (0-40).<br><br>This property is typically used to hide the black borders that are present on some ColecoVision games. |


### Example

The following is an example of a complete feed that consists of a single ColecoVision application instance (`type` value of `coleco`). The `rom` property value is a URL that points to a Dropbox location that contains the excellent homebrew game Caos Begins by Antoni Burguera.

It is also worth noting that the *ColecoVision BIOS location* (`coleco_rom`) is specified globally within the [Feed Object's](../../../feeds/format.md#feed-object) `props` object.

``` json hl_lines="4 12 14"
{
  "title": "ColecoVision",
  "props": {
    "coleco_rom": "https://<host>/coleco.rom"
  },
  "categories": [
    {
      "title": "ColecoVision Games",
      "items": [
        {
          "title": "Caos Begins",
          "type": "coleco",
          "props": {
            "rom": "https://www.dropbox.com/s/zbkxo8udhtey55j/caos-begins-2016.rom?dl=0"
          }
        }
      ]
    }
  ]
}
```

## References

- [ColecoVision Application GitHub Repository](https://github.com/webrcade/webrcade-app-colem)
