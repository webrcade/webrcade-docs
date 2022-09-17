# Nintendo Game Boy

## Overview

The Game Boy application for [webЯcade](https://www.webrcade.com) is an emulator for the [Game Boy](https://en.wikipedia.org/wiki/Game_Boy) handheld game console.

<figure>
  <img src="../../../assets/images/apps/gb-border.png" style="padding:5px 15px 0 15px;" class="center zoomD"/>
  <figcaption>Rocket Man (Demo) by Light Games</figcaption>
</figure>


## Controls

The emulator supports one controller. The keyboard and gamepad mappings are listed in the tables below.

### Keyboard

Keyboard controls are listed below.

| __Name__ | <div style="min-width:140px">__Keys__</div> | __Comments__ |
|--------------------------|---------------------------------------------| |
| Move | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Up_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Down_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Left_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Right_Key_Dark.png){: class="control"}  | |
| A | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/X_Key_Dark.png){: class="control"} or ![](../../../assets/images/controller/Keyboard & Mouse/Dark/A_Key_Dark.png){: class="control"} | |
| B | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Z_Key_Dark.png){: class="control"} or ![](../../../assets/images/controller/Keyboard & Mouse/Dark/S_Key_Dark.png){: class="control"} | |
| Start | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Enter_Key_Dark.png){: class="control"} | |
| Select | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Shift_Key_Dark.png){: class="control"} | The __Right Shift Key__.|
| Show Pause Screen | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Esc_Key_Dark.png){: class="control"} | |

### Gamepad

Gamepad mappings are listed below.

| __Name__ | <div style="min-width:140px">__Gamepad__</div> | __Comments__ |
| --- | --- | --- |
| Move                         | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Dpad.png){: class="control"} &nbsp;or&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick.png){: class="control"} | |
| A                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_B.png){: class="control"} or ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_X.png){: class="control"} | |
| B                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_A.png){: class="control"} or ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Y.png){: class="control"} | |
| Start                        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Menu.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate)<br><br>Press the __Menu (Start) Button__. |
| Start<br>(Alternate)            | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_RT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Right_Stick_Click.png){: class="control"} | Hold down the __Right Trigger__ and click (press down) on the __Right Thumbstick__. |
| Select                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"}  | Not available for Xbox and not recommended for iOS (see alternate)<br><br>Press the __View (Back) Button__. |
| Select<br>(Alternate)           | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_RT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick_Click.png){: class="control"} | Hold down the __Right Trigger__ and click (press down) on the __Left Thumbstick__. |
| Show Pause Screen                    | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Menu.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate 3 or 4)<br><br>Hold down the __Left Trigger__ and press the __Menu (Start) Button__. |
| Show Pause Screen<br>(Alternate)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate 3 or 4)<br><br>Hold down the __Left Trigger__ and press the __View (Back) Button__. |
| Show Pause Screen<br>(Alternate 2)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_X.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate 3 or 4)<br><br>Hold down the __X Button__ and press the __View (Back) Button__. |
| Show Pause Screen<br>(Alternate 3)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick_Click.png){: class="control"} | Hold down the __Left Trigger__ and click (press down) on the __Left Thumbstick__. |
| Show Pause Screen<br>(Alternate 4)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Right_Stick_Click.png){: class="control"} | Hold down the __Left Trigger__ and click (press down) on the __Right Thumbstick__. |

## Battery-backed SRAM

Some Game Boy cartridges include battery-backed SRAM as a means of preserving state between sessions. The Game Boy application supports persisting this SRAM state into the browser's local storage or optionally to [cloud-based storage](../../../storage/index.md). The SRAM contents will be persisted whenever the pause screen is displayed (or the game is exited). Therefore, the menu should be displayed periodically for games that support battery-backed SRAM to ensure the state is properly persisted.

## Feed

This section details how Game Boy application instances can be added to feeds.

### Type

The type name for the Game Boy application is `vba-m-gb`.

!!! note
    The alias `gb` also currently maps to this application. In the future, the `gb` alias may be mapped
    to another Nintendo Game Boy application (different emulator implementation) if it is determined to be a more appropriate default.

### Properties

The table below contains the properties that are specific to the Game Boy application. These properties are
specified in the `props` object of a feed item.

| __Property__ | __Type__ | __Required__ | __Details__ |
|----------|------|----------|---------|
| rom | URL | Yes | URL to a Game Boy ROM file or a zip file containing a ROM file. |
| hwType | Numeric | No | The type of hardware to emulate (defaults to `Automatic`).<br><ul><li>`0` : Automatic</li><li>`1` : Game Boy Color</li><li>`2` : Super Game Boy</li><li>`3` : Game Boy</li><li>`4` : Game Boy Advance</li><li>`5` : Super Game Boy 2</li></ul> |
| colors | Numeric | No | The category of colors to use for the display. (defaults to Grayscale).<br><ul><li>`0` : Grayscale</li><li>`1` : Greenscale</li><li>`2` : Super Game Boy</li></ul> |
| palette | Numeric | No | The specific palette to use within the selected color category (see `colors` property).<br><br> This value defaults to the first palette available within the selected color category.<br><br>Each color category has a set of palettes available for selection. The simplest way to determine a specific palette value for this property is by using the [Feed Editor](../../../editor/index.md), selecting a palette, exporting the feed and viewing the numeric value for the selected palette.  |
| border | Numeric | No | Whether to display a border around the screen (defaults to `Off`).<br><ul><li>`0` : Off</li><li>`1` : On</li><li>`2` : Automatic</li></ul> |

### Example

The following is an example of a complete feed that consists of a single Game Boy application instance (`type` value of `gb`). The `rom` property value is a URL that points to a Dropbox location that contains the excellent demo of the homebrew game Rocket Man by Light Games.

The `hwType` value has been set to `5` to force the emulated hardware to be the `Super Game Boy 2`. The `border` value has also been set to `1` to enable the game's custom border on the Super Game Boy. Neither of these options are required, but can be used to customize the experience for each game.

``` json hl_lines="12 14-16"
{
  "title": "Game Boy Feed",
  "longTitle": "Nintendo Game Boy Example Feed",
  "categories": [
    {
      "title": "Game Boy Games",
      "longTitle": "Nintendo Game Boy Games",
      "items": [
        {
          "title": "Rocket Man",
          "longTitle": "Rocket Man (Demo)",
          "type": "gb",
          "props": {
            "rom": "https://dl.dropboxusercontent.com/s/0z8wwdxk54v9dgi/Rocket%20Man%20%28Demo%29%20v1.2.1.gb",
            "hwType": 5,
            "border": 1
          }
        }
      ]
    }
  ]
}
```

This example can be tested by adding a feed with the following URL within the [webЯcade player](../../../userguide/index.md):

`https://tinyurl.com/sample-gb-feed`

## References

- [Nintendo Game Boy Application GitHub Repository](https://github.com/webrcade/webrcade-app-vba-m)
