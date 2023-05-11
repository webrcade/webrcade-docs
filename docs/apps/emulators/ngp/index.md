# SNK Neo Geo Pocket (and Neo Geo Pocket Color)

## Overview

The Neo Geo Pocket application is an emulator for the [Neo Geo Pocket](https://en.wikipedia.org/wiki/Neo_Geo_Pocket) and [Neo Geo Pocket Color](https://en.wikipedia.org/wiki/Neo_Geo_Pocket_Color) game consoles.

<figure>
  <img src="../../../assets/images/apps/ngp.png" style="padding:5px 15px 0 15px;" class="center zoomD"/>
  <figcaption>Dodger by Ivan Mackintosh</figcaption>
</figure>


## Controls

The emulator supports one controller. The keyboard and gamepad mappings are listed in the tables below.

### Keyboard

Keyboard controls are listed below.

| __Name__ | <div style="min-width:140px">__Keys__</div> | __Comments__ |
|--------------------------|---------------------------------------------| |
| Move | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Up_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Down_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Left_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Right_Key_Dark.png){: class="control"}  | |
| A | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Z_Key_Dark.png){: class="control"} or ![](../../../assets/images/controller/Keyboard & Mouse/Dark/S_Key_Dark.png){: class="control"} | |
| B | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/X_Key_Dark.png){: class="control"} or ![](../../../assets/images/controller/Keyboard & Mouse/Dark/A_Key_Dark.png){: class="control"} |  |
| Option | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Enter_Key_Dark.png){: class="control"} | |
| Show Pause Screen | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Esc_Key_Dark.png){: class="control"} | |

### Gamepad

Gamepad mappings are listed below.

| __Name__ | <div style="min-width:140px">__Gamepad__</div> | __Comments__ |
| --- | --- | --- |
| Move                         | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Dpad.png){: class="control"} &nbsp;or&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick.png){: class="control"} | |
| A                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_A.png){: class="control"} or ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Y.png){: class="control"} | |
| B                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_B.png){: class="control"} or ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_X.png){: class="control"} | |
| Option                        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Menu.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate)<br><br>Press the __Menu (Start) Button__. |
| Option<br>(Alternate)            | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_RT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Right_Stick_Click.png){: class="control"} | Hold down the __Right Trigger__ and click (press down) on the __Right Thumbstick__. |
| Show Pause Screen                    | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Menu.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate 3 or 4)<br><br>Hold down the __Left Trigger__ and press the __Menu (Start) Button__. |
| Show Pause Screen<br>(Alternate)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate 3 or 4)<br><br>Hold down the __Left Trigger__ and press the __View (Back) Button__. |
| Show Pause Screen<br>(Alternate 2)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_X.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate 3 or 4)<br><br>Hold down the __X Button__ and press the __View (Back) Button__. |
| Show Pause Screen<br>(Alternate 3)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick_Click.png){: class="control"} | Hold down the __Left Trigger__ and click (press down) on the __Left Thumbstick__. |
| Show Pause Screen<br>(Alternate 4)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Right_Stick_Click.png){: class="control"} | Hold down the __Left Trigger__ and click (press down) on the __Right Thumbstick__. |

## Flash Memory

Some Neo Geo Pocket cartridges include flash memory as a means of preserving state between sessions. The Neo Geo Pocket application supports persisting this flash memory state into the browser's local storage or optionally to [cloud-based storage](../../../storage/index.md). The flash memory contents will be persisted to storage whenever the pause screen is displayed (or the game is exited). Therefore, the menu should be displayed periodically for games that support flash memory to ensure the state is properly persisted.

## Feed

This section details how Neo Geo Pocket  application instances can be added to feeds.

### Type

The type names for the Neo Geo Pocket application are listed below:

   *  Neo Geo Pocket: `mednafen-ngp`
   *  Neo Geo Pocket Color: `mednafen-ngc`

!!! note
    The aliases `ngp` and `ngc` also currently map to the Neo Geo Pocket and Neo Geo Pocket Color applications respectively. In the future, these aliases may be mapped to different applications (different emulator implementations) if it is determined that there are more appropriate defaults.

### Properties

The table below contains the properties that are specific to the Neo Geo Pocket application. These properties are
specified in the `props` object of a feed item.

| __Property__ | __Type__ | __Required__ | __Details__ |
|----------|------|----------|---------|
| rom | URL | Yes | URL to a Neo Geo Pocket (or Color) ROM file or a zip file containing a ROM file. |
| language | Numeric | No | The language to use for displaying game text (if applicable) (defaults to `English`).<br><ul><li>`0` : English</li><li>`1` : Japanese</li><ul> |
| zoomLevel | Numeric | No | A numeric value indicating how much the display image should be zoomed in (0-40).<br><br>This property is typically used to hide the black borders that are present on some games. |

### Example

The following is an example of a complete feed that consists of a single Neo Geo Pocket Color application instance (`type` value of `ngc`). The `rom` property value is a URL that points to a Dropbox location that contains the excellent homebrew game Dodger by Ivan Mackintosh.

``` json hl_lines="10 12"
{
  "title": "Neo Geo Pocket Color Feed",
  "longTitle": "Neo Geo Pocket Color Example Feed",
  "categories": [
    {
      "title": "Neo Geo Pocket Color Games",
      "items": [
        {
          "title": "Dodger",
          "type": "ngc",
          "props": {
            "rom": "https://www.dropbox.com/s/94dxy7qtahg3mmk/Dodger.ngc?dl=0"
          }
        }
      ]
    }
  ]
}
```

This example can be tested by adding a feed with the following URL within the[webЯcade player](../../../userguide/index.md):

`https://tinyurl.com/sample-ngc-feed`

## References

- [Neo Geo Pocket Application GitHub Repository](https://github.com/webrcade/webrcade-app-mednafen)
