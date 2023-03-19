#  Neo Geo CD

## Overview

The Neo Geo CD application is an emulator for the [Neo Geo CD](https://en.wikipedia.org/wiki/Neo_Geo_CD) game console.

<figure>
  <img src="../../../assets/images/apps/neogeocd.png" style="padding:5px 15px 0 15px;" class="center zoomD"/>
</figure>

## Adding Games (Feed Editor)

Due to large Disc image sizes, adding Neo Geo CD-based games in the [Feed Editor](../../../editor/index.md) must be done manually (versus using auto-detection).

!!! important
    The Neo Geo CD application only supports the `.CHD` disc file format (`.ISO`, `.BIN`, and `.CUE` are not supported).

See the [Disc and Archive-based Items](../../../editor/workspace/addingitems.md#disc-and-archive-based-items) section for the list of steps required to add a Neo Geo CD game in the [Feed Editor](../../../editor/index.md).

!!! important
    Both the iOS Safari and Xbox Series X|S Edge browsers limit the amount of memory that can be consumed by a particular web application (such as webЯcade).
    <p>
    The current limit is around 450 megabytes. Therefore, loading larger disc sizes may fail.
    </p>
    <p>
    To increase the likelihood of a game with a larger disc size loading, you can optionally choose to launch the game using a standalone-based link (versus launching the game within the webЯcade player or editor). See the [Standalone](../../../standalone/index.md) section of this documentation for further information (On Xbox, you would most likely want to bookmark the direct link. On iOS, you would most likely want to add the game to the home screen).
    </p>

## BIOS File

In addition to Neo Geo CD Disc images, one of the following BIOS files must be specified globally within the feed (See the [Feed Properties Dialog](../../../editor/dialogs/feed-dialog.md#properties-tab) and [Neo Geo CD Feed Properties](#feed-properties) sections).

| __File__ | __Hash (MD5)__ | __Description__ |
| --- | --- | --- |
| `neocd_z.rom` | 11526d58d4c524daef7d5d677dc6b004 | Recommended |
| `neocd_f.rom` | 8834880c33164ccbe6476b559f3e37de |  |
| `neocd_t.rom` | de3cf45d227ad44645b22aa83b49f450 | |
| `neocd_st.rom` | f6325a33c6d63ea4b9162a3fa8c32727 | |
| `front-sp1.bin` | 5c2366f25ff92d71788468ca492ebeca | |
| `top-sp1.bin` | 122aee210324c72e8a11116e6ef9c0d0 | |
| `neocd.bin` | f39572af7584cb5b3f70ae8cc848aba2 | |

<!-- ## Settings

The Neo Geo CD Application includes a custom settings dialog.

![](../../../assets/images/apps/neogeocd/neogeocd-settings.png){: class="center zoomD"}

To access these settings, display the "Pause" screen and select the "Neo Geo CD Settings" option (*See screenshot above*).

### Display Tab

The Neo Geo CD Application "display tab" settings are detailed below.

| __Field__ | __Description__ |
| --- | --- |
| Force bilinear filter | <p>Forces bilinear interpolation on the output display. Enabling bilinear filtering produces display output where pixels are not as sharp and pronounced.</p><p>Enabling this setting will override the global bilinear filter setting for the Neo Geo CD application.</p>  |

![](../../../assets/images/apps/pcecd/neogeocd-display-settings.png){: class="center zoomD"} -->

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
| Select | ![](../../../assets/images/controller/Keyboard & Mouse/Dark/Shift_Key_Dark.png){: class="control"} | The __Right Shift Key__.|
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
| Select                       | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"}  | Not available for Xbox and not recommended for iOS (see alternate)<br><br>Press the __View (Back) Button__. |
| Select<br>(Alternate)           | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_RT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick_Click.png){: class="control"} | Hold down the __Right Trigger__ and click (press down) on the __Left Thumbstick__. |
| Show Pause Screen                    | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Menu.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate 3 or 4)<br><br>Hold down the __Left Trigger__ and press the __Menu (Start) Button__. |
| Show Pause Screen<br>(Alternate)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate 3 or 4)<br><br>Hold down the __Left Trigger__ and press the __View (Back) Button__. |
| Show Pause Screen<br>(Alternate 2)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_X.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_View.png){: class="control"} | Not available for Xbox and not recommended for iOS (see alternate 3 or 4)<br><br>Hold down the __X Button__ and press the __View (Back) Button__. |
| Show Pause Screen<br>(Alternate 3)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Left_Stick_Click.png){: class="control"} | Hold down the __Left Trigger__ and click (press down) on the __Left Thumbstick__. |
| Show Pause Screen<br>(Alternate 4)        | ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_LT.png){: class="control"} &nbsp;and&nbsp; ![](../../../assets/images/controller/Xbox Series X/XboxSeriesX_Right_Stick_Click.png){: class="control"} | Hold down the __Left Trigger__ and click (press down) on the __Right Thumbstick__. |

## Internal Save Memory

The Neo Geo CD application supports persisting the console's internal save memory into the browser's local storage or optionally to [cloud-based storage](../../../storage/index.md). The contents will be persisted to storage whenever the pause screen is displayed (or the game is exited). Therefore, the menu should be displayed periodically for games that support saving to memory to ensure the state is properly persisted.

## Feed

This section details how Neo Geo CD application instances can be added to feeds.

### Type

The type name for the Neo Geo CD application is `retro-neocd`.

!!! note
    The alias `neogeocd` also currently maps to this application. In the future, the `neogeocd` alias may be mapped to another Neo Geo CD application (different emulator implementation) if it is determined to be a more appropriate default.

### Feed Properties

The table below contains global Neo Geo CD feed properties. These properties must be specified in the `props` object of the feed's [Feed Object](../../../feeds/format.md#feed-object).

| __Property__ | __Type__ | __Required__ | __Details__ |
|----------|------|----------|---------|
| neogeocd_bios | URL | Yes | <p>URL to a valid Neo Geo CD BIOS file.</p><p>See the [BIOS File](#bios-file) section for additional information.</p>  |

### Item Properties

The table below contains the properties that are specific to the Neo Geo CD application. These properties are specified in the `props` object of a feed item.

| __Property__ | __Type__ | __Required__ | __Details__ |
|----------|------|----------|---------|
| uid | String | Yes | <p>A unique identifier for the particular game (must be unique across all Neo Geo CD games).</p><p>This identifier is primarily used to associate persistent state with the game.</p>|
| discs | Array of URLs | Yes | <p>Array of URLs to one or more (for multi-disc games) Neo Geo CD game discs.</p><p>The Neo Geo CD application only supports the `.CHD` disc file format (`.ISO`, `.BIN`, and `.CUE` are not supported).</p> |
| skipCdLoading | Boolean | No | Whether to automatically fast forward CD loading sequences (enabled by default). |
| cdSpeedHack | Boolean | No | Modifies the CD-ROM BIOS to perform faster (enabled by default).  |
| region | Numeric | No | Sets the region of the console.<br>(defaults to "United States")<br><ul><li>`0` : United States</li><li>`1` : Japan</li><li>`2` : Europe</li></ul> |
| zoomLevel | Numeric | No | A numeric value indicating how much the display image should be zoomed in (0-40).<br><br>This property is typically used to hide the black borders that are present on some Neo Geo CD games. |

### Example

The following is an example of a complete feed that consists of a single Neo Geo CD application instance (`type` value of `neogeocd`). The `discs` property value contains a URL that points to a Neo Geo CD game disc image. The `uid` property value contains a unique identifier for this specific game (must be unique across all Neo Geo CD games).

It is also worth noting that the *Neo Geo CD BIOS location* (`neogeocd_bios`) is specified globally within the [Feed Object's](../../../feeds/format.md#feed-object) `props` object.

``` json hl_lines="4 12 14-17"
{
  "title": "Neo Geo CD",
  "props": {
    "neogeocd_bios": "https://<host>/neocd_z.rom"
  },
  "categories": [
    {
      "title": "Neo Geo CD Games",
      "items": [
        {
          "title": "Some Game",
          "type": "neogeocd",
          "props": {
            "uid": "cd945bde-c1b0-4fa5-9ad5-e05767b8e86e",
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

- [Neo Geo CD Application GitHub Repository](https://github.com/webrcade/webrcade-app-retro-neocd)

