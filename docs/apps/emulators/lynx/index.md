# Atari Lynx

## Overview

The Atari Lynx application is an emulator for the [Atari Lynx](https://en.wikipedia.org/wiki/Atari_Lynx) handheld game console. 

<figure>
  <img src="../../../assets/images/apps/lynx.png" style="padding:5px 15px 0 15px;" class="center zoomD"/>
  <figcaption>Xump 2 by Retroguru</figcaption>
</figure>

!!! note
    In addition to Atari Lynx ROM files, an *Atari Lynx Boot ROM* must be specified globally
    within the feed (See the [Feed Properties Dialog](../../../editor/dialogs/feed-dialog.md#properties-tab) and [Atari Lynx Feed Properties](#feed-properties) sections).

## Controls

The emulator supports one controller. The keyboard and gamepad mappings are listed in the tables below.

### Keyboard

Keyboard controls are listed below.

| __Name__ | <div style="min-width:140px">__Keys__</div> | __Comments__ |
|--------------------------|---------------------------------------------| |
| Move | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Up_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Down_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Left_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Right_Key_Dark.png){: class="control"}  | |                  
| A | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/X_Key_Dark.png){: class="control"} or ![](../../../assets/images/controller/Keyboard & Mouse/Dark/A_Key_Dark.png){: class="control"} |  |                  
| B | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Z_Key_Dark.png){: class="control"} or ![](../../../assets/images/controller/Keyboard & Mouse/Dark/S_Key_Dark.png){: class="control"} | |  
| Option 1 | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Q_Key_Dark.png){: class="control"} | |      
| Option 2 | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/W_Key_Dark.png){: class="control"} | |      
| Lynx Pause | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Enter_Key_Dark.png){: class="control"} | |                  
| Show Pause Screen | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Esc_Key_Dark.png){: class="control"} | |                  

### Gamepad

Gamepad mappings are listed below.

| __Name__ | <div style="min-width:140px">__Gamepad__</div> | __Comments__ |
| --- | --- | --- |
| Move                         | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Dpad.png){: class="control"} &nbsp;or&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick.png){: class="control"} | |
| A                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_B.png){: class="control"} or ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_X.png){: class="control"} | |
| B                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_A.png){: class="control"} or ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Y.png){: class="control"} | |
| Option 1                        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LB.png){: class="control"} | |
| Option 2                        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_RB.png){: class="control"} | |
| Lynx Pause                        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Menu.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate)<br><br>Press the __Menu (Start) Button__. |
| Lynx Pause<br>(Alternate)            | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_RT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Right_Stick_Click.png){: class="control"} | Hold down the __Right Trigger__ and click (press down) on the __Right Thumbstick__. |
| Show Pause Screen                    | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Menu.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate 3 or 4)<br><br>Hold down the __Left Trigger__ and press the __Menu (Start) Button__. |
| Show Pause Screen<br>(Alternate)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate 3 or 4)<br><br>Hold down the __Left Trigger__ and press the __View (Back) Button__. |
| Show Pause Screen<br>(Alternate 2)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_X.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate 3 or 4)<br><br>Hold down the __X Button__ and press the __View (Back) Button__. |
| Show Pause Screen<br>(Alternate 3)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick_Click.png){: class="control"} | Hold down the __Left Trigger__ and click (press down) on the __Left Thumbstick__. |
| Show Pause Screen<br>(Alternate 4)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Right_Stick_Click.png){: class="control"} | Hold down the __Left Trigger__ and click (press down) on the __Right Thumbstick__. |

## Feed 

This section details how Atari Lynx application instances can be added to feeds.

### Type

The type name for the Atari Lynx application is `mednafen-lnx`. 

!!! note
    The alias `lnx` also currently maps to this application. In the future, the `lnx` alias may be mapped
    to another Atari Lynx application (different emulator implementation) if it is determined to be a 
    more appropriate default.
    
### Feed Properties

The table below contains global Atari Lynx feed properties. These properties must be specified in the `props` object of the feed's [Feed Object](../../../feeds/format.md#feed-object).

| __Property__ | __Type__ | __Required__ | __Details__ |
|----------|------|----------|---------|
| lnx_boot | URL | Yes | URL to an Atari Lynx Boot ROM file or a zip file containing the Boot ROM file. |

### Item Properties

The table below contains the properties that are specific to the Atari Lynx application. These properties are
specified in the `props` object of a feed item. 

| __Property__ | __Type__ | __Required__ | __Details__ |
|----------|------|----------|---------|
| rom | URL | Yes | URL to an Atari Lynx ROM file or a zip file containing a ROM file. |
| rotation | Numeric | No | How many degrees the screen should be rotated.<br><br>Valid values are 0, 90, and 270. |

### Example

The following is an example of a complete feed that consists of a single Atari Lynx application instance (`type` value of `lnx`). The `rom` property value is a URL that points to a Dropbox location that contains the excellent homebrew game Xump 2 by Retroguru.

It is also worth noting that the *Lynx Boot Rom location* (`lnx_boot`) is specified globally within the [Feed Object's](../../../feeds/format.md#feed-object) `props` object.

``` json hl_lines="4 12 14"
{
  "title": "Atari Lynx",
  "props": {
    "lnx_boot": "https://<host>/lynxboot.img"
  },
  "categories": [
    {
      "title": "Atari Lynx Games",
      "items": [
        {
          "title": "xump2-v100",
          "type": "lnx",
          "props": {
            "rom": "https://dl.dropboxusercontent.com/s/zas4yxzcw2exqij/xump2-v.latest-atarilynx.zip"
          }
        }
      ]
    }
  ]
}
```

## References

- [Atari Lynx Application GitHub Repository](https://github.com/webrcade/webrcade-app-mednafen)
