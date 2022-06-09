# Neo Geo (Arcade and Console)

## Overview

The Neo Geo application is an emulator for the [Neo Geo](https://en.wikipedia.org/wiki/Neo_Geo_(system)) MVS (arcade) and AES (console) systems.

The underlying emulator is [FinalBurn Neo](https://github.com/finalburnneo/FBNeo) version 1.0.0.2.

See [this page](https://play-staging.webrcade.com/app/neo/js/gamelist-neogeo.txt) for a detailed list of all games supported by this application.

<figure>
  <img src="../../../assets/images/apps/neogeo.png" style="padding:5px 15px 0 15px;" class="center zoomD"/>
</figure>

!!! note
    In addition to Neo Geo ROM files, a *Neo Geo BIOS* (.zip file) must be specified globally
    within the feed (See the [Feed Properties Dialog](../../../editor/dialogs/feed-dialog.md#properties-tab) and [Neo Geo Feed Properties](#feed-properties) sections).

## Controls

The emulator supports up to two controllers. The keyboard and gamepad mappings are listed in the tables below.

### Keyboard

Keyboard controls are listed below.

| __Name__ | <div style="min-width:140px">__Keys__</div> | __Comments__ |
|--------------------------|---------------------------------------------| |
| Move | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Up_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Down_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Left_Key_Dark.png){: class="control"} ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Arrow_Right_Key_Dark.png){: class="control"}  | |
| Button A | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Z_Key_Dark.png){: class="control"} | |
| Button B | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/X_Key_Dark.png){: class="control"} | |
| Button C | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/C_Key_Dark.png){: class="control"} | |
| Button D | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/V_Key_Dark.png){: class="control"} | |
| Start | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Enter_Key_Dark.png){: class="control"} | |
| Coin | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Shift_Key_Dark.png){: class="control"} | The __Right Shift Key__.|
| Show Pause Screen | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Esc_Key_Dark.png){: class="control"} | |

### Gamepad

Gamepad mappings are listed below.

| __Name__ | <div style="min-width:140px">__Gamepad__</div> | __Comments__ |
| --- | --- | --- |
| Move                         | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Dpad.png){: class="control"} &nbsp;or&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick.png){: class="control"} | |
| Button A                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_A.png){: class="control"} | | |
Button B                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_B.png){: class="control"}  | |
| Button C                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_X.png){: class="control"} | |
| Button D                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Y.png){: class="control"}  | |
| Start                        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Menu.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate)<br><br>Press the __Menu (Start) Button__. |
| Start<br>(Alternate)            | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_RT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Right_Stick_Click.png){: class="control"} | Hold down the __Right Trigger__ and click (press down) on the __Right Thumbstick__. |
| Coin                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"}  | Not available for Xbox and not recommended for iOS (see alternate)<br><br>Press the __View (Back) Button__. |
| Coin<br>(Alternate)           | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_RT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick_Click.png){: class="control"} | Hold down the __Right Trigger__ and click (press down) on the __Left Thumbstick__. |
| Show Pause Screen                    | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Menu.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate 3 or 4)<br><br>Hold down the __Left Trigger__ and press the __Menu (Start) Button__. |
| Show Pause Screen<br>(Alternate)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate 3 or 4)<br><br>Hold down the __Left Trigger__ and press the __View (Back) Button__. |
| Show Pause Screen<br>(Alternate 2)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_X.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate 3 or 4)<br><br>Hold down the __X Button__ and press the __View (Back) Button__. |
| Show Pause Screen<br>(Alternate 3)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick_Click.png){: class="control"} | Hold down the __Left Trigger__ and click (press down) on the __Left Thumbstick__. |
| Show Pause Screen<br>(Alternate 4)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Right_Stick_Click.png){: class="control"} | Hold down the __Left Trigger__ and click (press down) on the __Right Thumbstick__. |

## NVRAM and Memory Card Persistence

Some Neo Geo games include NVRAM and/or support memory cards as a means of preserving state between sessions. The Neo Geo application supports persisting this state into the browser's local storage. The state will be persisted to local storage whenever the pause screen is displayed (or the game is existed). Therefore, the menu should be displayed periodically for games that support such storage to ensure state is properly persisted.

## Feed

This section details how Neo Geo application instances can be added to feeds.

### Type

The type name for the Neo Geo application is `fbneo-neogeo`.

!!! note
    The alias `neogeo` also currently maps to this application. In the future, the `neogeo` alias may be mapped
    to another Neo Geo application (different emulator implementation) if it is determined to be a
    more appropriate default.

### Feed Properties

The table below contains global Neo Geo feed properties. These properties must be specified in the `props` object of the feed's [Feed Object](../../../feeds/format.md#feed-object).

| __Property__ | __Type__ | __Required__ | __Details__ |
|----------|------|----------|---------|
| neogeo_bios  | URL | Yes | URL to a zip file containing one or more Neo Geo BIOS files. |

### Item Properties

The table below contains the properties that are specific to the Neo Geo application. These properties are
specified in the `props` object of a feed item.

| __Property__ | __Type__ | __Required__ | __Details__ |
|----------|------|----------|---------|
| rom | URL | Yes | URL to the primary Neo Geo ROM zip file. |
| additionalRoms | Array of URLs | No | An array of URLs to additional Neo Geo ROM zip files.<br><br>This is required when the primary ROM file requires additional ROM files to execute.<br><br>For example, the primary ROM might be a clone or variant that relies on the "parent" ROM file. |
| volAdjust | Numeric | No | Adjusts the volume from its default level.<br><br>Possible values range from `-99` to `99`.<br><br>In the vast majority of cases this setting should never be utilized. But, for some games where the default volume level is extremely low (inaudible), this property can be used to make the sound audible. |
| bios | Numeric | No | The BIOS to use (must be available in the BIOS zip file).<br><ul><li>`0` : (default)</li><li>`1` : MVS Asia/Europe ver. 6 (1 slot)</li><li>`2` : MVS Asia/Europe ver. 5 (1 slot)</li><li>`3` : MVS Asia/Europe ver. 3 (4 slot)</li><li>`4` : MVS USA ver. 5 (2 slot)</li><li>`5` : MVS USA ver. 5 (4 slot)</li><li>`6` : MVS USA ver. 5 (6 slot)</li><li>`7` : MVS USA (U4)</li><li>`8` : MVS USA (U3)</li><li>`9` : MVS Japan ver. 6 (? slot)</li><li>`10` : MVS Japan ver. 5 (? slot)</li><li>`11` : MVS Japan ver. 3 (4 slot)</li><li>`12` : NEO-MVH MV1C (Asia)</li><li>`13` : NEO-MVH MV1C (Japan)</li><li>`14` : MVS Japan (J3)</li><li>`15` : MVS Japan (J3, alt)</li><li>`16` : AES Japan</li><li>`17` : AES Asia</li><li>`18` : Development Kit</li><li>`19` : Deck ver. 6 (Git Ver 1.3)</li><li>`20` : Universe BIOS ver. 4.0</li><li>`21` : Universe BIOS ver. 3.3</li><li>`22` : Universe BIOS ver. 3.2</li><li>`23` : Universe BIOS ver. 3.1</li><li>`24` : Universe BIOS ver. 3.0</li><li>`25` : Universe BIOS ver. 2.3</li><li>`26` : Universe BIOS ver. 2.3 (alt)</li><li>`27` : Universe BIOS ver. 2.2</li><li>`28` : Universe BIOS ver. 2.1</li><li>`29` : Universe BIOS ver. 2.0</li><li>`30` : Universe BIOS ver. 1.3</li><li>`31` : Universe BIOS ver. 1.2</li><li>`32` : Universe BIOS ver. 1.2 (alt)</li><li>`33` : Universe BIOS ver. 1.1</li><li>`34` : Universe BIOS ver. 1.0</li><li>`35` : NeoOpen BIOS v0.1 beta</li></ul>  |
| forceAesMode | Boolean | No | Whether to force AES (console) mode (must be supported by selected `bios`). |


### Example

The following is an example of a complete feed that consists of a single Neo Geo application instance (`type` value of `neogeo`). The `rom` property value is a URL that points to a Neo Geo ROM (.zip file).

It is also worth noting that the *Neo Geo BIOS location* (`neogeo_bios`) is specified globally within the [Feed Object's](../../../feeds/format.md#feed-object) `props` object.

``` json hl_lines="4 12 14"
{
  "title": "Neo Geo",
  "props": {
    "neogeo_bios": "https://<host>/neogeo.zip"
  },
  "categories": [
    {
      "title": "Neo Geo Games",
      "items": [
        {
          "title": "Some Neo Geo Game",
          "type": "neogeo",
          "props": {
            "rom": "https://<host>/some-neo-geo-game.zip"
          }
        }
      ]
    }
  ]
}
```

## References

- [Neo Geo Application GitHub Repository](https://github.com/webrcade/webrcade-app-fbneo)
