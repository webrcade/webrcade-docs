# Settings Dialog

The "Settings Dialog" supports viewing and/or modifying the configuration of various webЯcade settings.

![](../../assets/images/editor/settingsdialog/settings-annotated.png){: style="padding:5px;" class="center zoomD"}

Pressing the "Settings" icon *(#1 in screenshot above)* will display the "Settings Dialog".

The various categories of settings are organized into distinct tabs, as detailed below.

### Display Settings Tab

The "Display Settings" tab is used to view and/or modify settings related to how items (games, etc.) should be displayed (or rendered).

![](../../assets/images/editor/settingsdialog/settings-displaytab.png){: style="padding:5px;" class="center zoomD"}

| __Field__ | __Description__ |
| --- | --- |
| Screen size | The screen size to use when playing a game.<br><br>Options include:<br><ul><li>`Native` : The application's native resolution</li><li>`16:9` : Widescreen resolution</li><li>`Fill` : Fill the entire contents of the screen</li></ul> |
| Vertical sync | Enables vertical sync (VSync) when playing games. Vertical sync attempts to synchronize the frame rate of the game with the display (screen) which eliminates artifacts such as screen tearing.<br><br>This setting can be disabled if performance-related issues are experienced.  |
| Bilinear filter | Performs bilinear interpolation on the output display. Enabling bilinear filtering produces display output where pixels are not as sharp and pronounced. |

### Cloud Storage Tab

The "Cloud Storage" tab is used to view and/or modify settings related to webЯcade's use of cloud storage.

For more information, refer to the [Cloud Storage](../../storage/index.md) section of this documentation.

![](../../assets/images/editor/settingsdialog/settings-cloudtab.png){: style="padding:5px;" class="center zoomD"}

| __Field__ | __Description__ |
| --- | --- |
| Enabled | Toggles whether cloud storage (via Dropbox) is enabled or not. |
| Dropbox (link/unlink button) | This button is used to either *link* or *unlink* a Dropbox account with webЯcade depending on its current status.<br><br>It is important to note that this *linking* operation must be repeated for each unique browser and/or device being used with webЯcade. |

### Advanced Settings Tab

The "Advanced" tab is used to view and/or modify settings that typically remain at their default values.

![](../../assets/images/editor/settingsdialog/settings-advancedtab.png){: style="padding:5px;" class="center zoomD"}

| __Field__ | __Description__ |
| --- | --- |
| Experimental apps | Enables whether *experimental* applications are displayed in the webЯcade *[player](../../userguide/index.md)* or *[feed editor](../../editor/index.md)*.<br><br>Applications are typically designated as *experimental* based on high resource requirements or due to instability and defects. |
