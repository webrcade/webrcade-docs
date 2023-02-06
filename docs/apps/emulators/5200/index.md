# Atari 5200 (Experimental)

!!! warning
    The Atari 5200 application is currently designated as an *experimental* application.
    <p>
    This designation has been applied due to the following:
    </p>
    <ul>
    <li>Single player only (core does not support second fire or keypad for player 2)</li>
    <li>Does not support newer homebrew (unsupported mappings in core)</li>
    <li>Analog quirks (holding analog stick in a direction prior to level starting causes odd behavior: Centipede, Missile Command, probably others)</li>
    </ul>
    <p>
    By default, *Experimental* applications are not displayed in the webЯcade *[player](../../../userguide/index.md)* or *[feed editor](../../../editor/index.md)*.
    </p>
    <p>
    To enable the Atari 5200 application, refer to the *advanced settings* sections of the player ([player advanced settings](../../../userguide/index.md#advanced-settings-tab)) or editor ([editor advanced settings](../../../editor/workspace/settings.md#advanced-tab)).
    </p>

## Overview

The Atari 5200 application is an emulator for the [Atari 5200](https://en.wikipedia.org/wiki/Atari_5200) game console.

<figure>
  <img src="../../../assets/images/apps/5200.png" style="padding:5px 15px 0 15px;" class="center zoomD"/>
  <figcaption>Adventure II by The Square Trio Team</figcaption>
</figure>

## BIOS File (Optional)

In addition to Atari 5200 ROM files, an optional *Atari 5200 BIOS* (typically named `5200.rom`) can be specified globally within the feed (See the [Feed Properties Dialog](../../../editor/dialogs/feed-dialog.md#properties-tab) and [Atari 5200 Feed Properties](#feed-properties) sections).

| __File__ | __Hash (MD5)__ |
| --- | --- |
| `5200.rom` | 281f20ea4320404ec820fb7ec0693b38 |

## Controls

The emulator supports one controller. The keyboard and gamepad mappings are listed in the tables below.

### Standard Controls

#### Keyboard

Keyboard controls are listed below.

| __Name__ | <div style="min-width:140px">__Keys__</div> | __Comments__ |
|--------------------------|---------------------------------------------| |
| Move | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Up_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Down_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Left_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Right_Key_Dark.png){: class="control"}  | |
| Bottom Fire | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Z_Key_Dark.png){: class="control"} | |
| Top Fire | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/X_Key_Dark.png){: class="control"} | |
| Show Keypad Display | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Enter_Key_Dark.png){: class="control"} | See [Keypad](#keypad) section for more details. |
| Show Pause Screen | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Esc_Key_Dark.png){: class="control"} | |

#### Gamepad

Gamepad mappings are listed below.

| __Name__ | <div style="min-width:140px">__Gamepad__</div> | __Comments__ |
| --- | --- | --- |
| Move                         | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Dpad.png){: class="control"} | |
| Move                         | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick.png){: class="control"} | Analog input when `analog mode` is enabled. |
| Move (Player 2)              | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Right_Stick.png){: class="control"} | When `twin stick` mode is enabled. |
| Bottom Fire                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_A.png){: class="control"} | |
| Top Fire                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_B.png){: class="control"} | |
| Toggle Keypad Display                        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Menu.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate)<br><br>Press the __Menu (Start) Button__.<br><br>See [Keypad](#keypad) section for more details. |
| Toggle Keypad Display <br>(Alternate)            | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_RT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Right_Stick_Click.png){: class="control"} | Hold down the __Right Trigger__ and click (press down) on the __Right Thumbstick__. |
| Show Pause Screen                    | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Menu.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate 3 or 4)<br><br>Hold down the __Left Trigger__ and press the __Menu (Start) Button__. |
| Show Pause Screen<br>(Alternate)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate 3 or 4)<br><br>Hold down the __Left Trigger__ and press the __View (Back) Button__. |
| Show Pause Screen<br>(Alternate 2)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_X.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate 3 or 4)<br><br>Hold down the __X Button__ and press the __View (Back) Button__. |
| Show Pause Screen<br>(Alternate 3)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick_Click.png){: class="control"} | Hold down the __Left Trigger__ and click (press down) on the __Left Thumbstick__. |
| Show Pause Screen<br>(Alternate 4)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Right_Stick_Click.png){: class="control"} | Hold down the __Left Trigger__ and click (press down) on the __Right Thumbstick__. |

## Keypad

The following section describes how to interact with the Atari 5200 controller's keypad buttons.

Virtual keypads and direct keyboard mappings are supported.

<figure>
  <img src="../../../assets/images/apps/5200/keypad.png" style="padding:5px 15px 0 15px;" class="center zoomD"/>
  <figcaption>On-screen Keypad Display</figcaption>
</figure>

### Gamepad (Virtual keypad)

| __Name__ | <div style="min-width:140px">__Gamepad__</div> | __Comments__ |
| --- | --- | --- |
| Toggle Keypad Display                        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Menu.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate)<br><br>Press the __Menu (Start) Button__. |
| Toggle Keypad Display <br>(Alternate)            | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_RT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Right_Stick_Click.png){: class="control"} | Hold down the __Right Trigger__ and click (press down) on the __Right Thumbstick__. |
| Choose Key |![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Dpad.png){: class="control"} &nbsp;or&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick.png){: class="control"}   |  |
| Press Key  | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_A.png){: class="control"} | The key button will continue to be pressed until the button is released. This is important as some games require long presses for the key to be recognized. |

### Keyboard (Virtual keypad)

| __Name__ | <div style="min-width:140px">__Keys__</div> | __Comments__ |
|--------------------------|---------------------------------------------| |
| Show Keypad | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Enter_Key_Dark.png){: class="control"} |  |
| Close Keypad | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Esc_Key_Dark.png){: class="control"} | |
| Choose Key | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Up_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Down_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Left_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Right_Key_Dark.png){: class="control"}  | |
| Press Key | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Enter_Key_Dark.png){: class="control"} | When keypad is visible.<br><br>The key button will continue to be pressed until the keyboard key is released. This is important as some games require long presses for the key to be recognized. |

### Keyboard (Direct mappings)

The key button will continue to be pressed until the keyboard key is released. This is important as some games require long presses for the key to be recognized.

| __Name__ | <div style="min-width:140px">__Keys__</div> | __Comments__ |
|--------------------------|---------------------------------------------| |
| Press key (0-9) | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/0_Key_Dark.png){: class="control"} - ![](../../../assets/images/controller/Keyboard & Mouse/Dark/9_Key_Dark.png){: class="control"}  |  |
| Press key (Asterick) | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Minus_Key_Dark.png){: class="control"} |  |
| Press key (Pound) | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Equals_Key_Dark.png){: class="control"}  |  |

## Feed

This section details how Atari 5200 application instances can be added to feeds.

### Type

The type name for the Atari 5200 application is `retro-5200`.

!!! note
    The alias `5200` also currently maps to this application. In the future, the `5200` alias may be mapped
    to another Atari 5200 application (different emulator implementation) if it is determined to be a
    more appropriate default.

### Feed Properties

The table below contains global Atari 5200 feed properties. These properties must be specified in the `props` object of the feed's [Feed Object](../../../feeds/format.md#feed-object).

| __Property__ | __Type__ | __Required__ | __Details__ |
|----------|------|----------|---------|
| atari5200_rom | URL | No | (optional) URL to an Atari 5200 BIOS file or a zip file containing the BIOS file. |

### Item Properties

The table below contains the properties that are specific to the Atari 5200 application. These properties are
specified in the `props` object of a feed item.

| __Property__ | __Type__ | __Required__ | __Details__ |
|----------|------|----------|---------|
| rom | URL | Yes | URL to an Atari 5200 ROM file or a zip file containing a ROM file. |
| swap | Boolean | No | Whether to swap the controller ports. This is typically enabled when games default to using port 2 (versus port 1). |
| analog | Boolean | No | Whether to enable analog mode on the controllers. |
| twinStick | Boolean | No | Whether to enable twin stick style controls (player 1 uses player 2's joystick for firing). |
| mappings | Map of Strings (key-value pairs) | No | Game-specific mappings from the Atari 5200 keys and buttons to the gamepad.<br><br>The `key` in the map must be one of the following:<br><ul><li>`a`: A button</li><li>`b`: B button</li><li>`x`: X button</li><li>`y`: Y button</li><li>`lb`: Left bumper</li><li>`rb`: Right bumper</li><li>`lt`: Left trigger</li><li>`rt`: Right trigger</li></ul>The `value` in the map must be one of the following:<br><ul><li>Keypad button: `0`-`9`, `#`, `*`, `start`, `reset`, `pause`</li><li>Controller button: `topfire` (Top Fire), `bottomfire` (Bottom Fire)</li></ul>  |
| descriptions | Map of Strings (key-value pairs) | No | Provides game-specific descriptions for the Atari 5200 controller keys and buttons. Shown when the keypad or game-specific controls are displayed.<br><br>The `key` in the map must be one of the following:<br><ul><li>Keypad button: `0`-`9`, `#`, `*`, `start`, `reset`, `pause`</li><li>Controller button: `topfire` (Top Fire), `bottomfire` (Bottom Fire)</li></ul>The `value` in the map will be the description for the `key` (keypad or controller button).  |
| zoomLevel | Numeric | No | A numeric value indicating how much the display image should be zoomed in (0-40).<br><br>This property is typically used to hide the black borders that are present on some Atari 5200 games. |

### Example

The following is an example of a complete feed that consists of a single Atari 5200 application instance (`type` value of `5200`). The `rom` property value is a URL that points to a Dropbox location that contains the excellent homebrew game Adventure II by The Square Trio Team.

It is also worth noting that the *Atari 5200 BIOS location* (`atari5200_rom`) is specified globally within the [Feed Object's](../../../feeds/format.md#feed-object) `props` object.

``` json hl_lines="4 12 14"
{
  "title": "Atari 5200",
  "props": {
    "atari5200_rom": "https://<host>/5200.rom"
  },
  "categories": [
    {
      "title": "Atari 5200 Games",
      "items": [
        {
          "title": "Adventure II",
          "type": "5200",
          "props": {
            "rom": "https://www.dropbox.com/s/ks2wbcizcoe9fqw/adv2a.bin?dl=0"
          }
        }
      ]
    }
  ]
}
```

## References

- [Atari 5200 Application GitHub Repository](https://github.com/webrcade/webrcade-app-retro-a5200)
