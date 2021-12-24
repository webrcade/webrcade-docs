# Left Sidebar

The "Left Sidebar" (highlighted in red in the screenshot below) contains the top-level actions that can be performed within the webЯcade editor.

![](../assets/images/editor/sidebar/sidebar-annotated.png){: class="center zoomD"}

Each of the actions located in the "Left Sidebar" are described in the table below.

| __Action__ | __Icon__ | __Description__ |
| --- | --- | --- |
| [New](#new-action) | ![](../assets/images/editor/icons/round_note_add_white_24dp.png){: class="action"} | Displays a context menu containing several options for creating a new feed.<br><br>See the [New Action](#new-action) section for more information. |
| [Import](#import-action) | ![](../assets/images/editor/icons/round_publish_white_24dp.png){: class="action"} | Displays the "Import Feed" dialog.<br><br>See the [Import Action](#import-action) section for more information.   |
| [Export](#export-action) | ![](../assets/images/editor/icons/round_file_download_white_24dp.png){: class="action"} | Exports the *active feed* (the feed currently being edited in the feed workspace) to JSON format and downloads the resulting file.<br><br>See the [Export Action](#export-action) section for more information.  |
| [Test](#test-action) | ![](../assets/images/editor/icons/round_check_circle_white_24dp.png){: class="action"} | Displays the *active feed* (the feed currently being edited in the feed workspace) in the [webЯcade player](../userguide/index.md).<br><br>See the [Test Action](#test-action) section for more information.  |
| [Load](#load-action) | ![](../assets/images/editor/icons/round_file_open_white_24dp.png){: class="action"} | Displays the "Load Feed" dialog.<br><br>See the [Load Action](#load-action) section for more information.
| [Save](#save-action) | ![](../assets/images/editor/icons/round_save_white_24dp.png){: class="action"} | Saves the *active feed* (the feed currently being edited in the feed workspace) to the browser's *local* storage. The title of the feed is used to uniquely identify it.<br><br>See the [Save Action](#load-action) section for more information.  |


## Actions

The following sections describe in detail the various actions that are located in the "Left Sidebar".

### New Action

The new action initiates the creation of a new feed within the webЯcade editor. After creation, the new feed becomes the *active feed* (the feed currently being edited in the feed workspace) in the editor.  

![](../assets/images/editor/sidebar/newmenu.png){: class="center zoomD"}

When the "New Action" is clicked, a context menu is displayed containing several options for creating a new feed. The options within the context menu are detailed in the table below.

| __Menu Item__ | __Icon__ | __Description__ |
| --- | --- | --- |
| Clone example feed | ![](../assets/images/editor/icons/round_file_copy_white_24dp.png){: class="action"} | Creates a copy of the *example feed* (a feed consisting of two categories with three items each) and makes it the *active feed* (the feed currently being edited in the feed workspace). |
| Clone default feed | ![](../assets/images/editor/icons/round_file_copy_white_24dp.png){: class="action"} | Creates a copy of the *default feed* (the default feed for webЯcade comprised of high-quality homebrew across the various application types supported by webЯcade) and makes it the *active feed* (the feed currently being edited in the feed workspace).  |
| Empty feed | ![](../assets/images/editor/icons/round_file_copy_white_24dp.png){: class="action"} | Creates an empty feed comprised of a single category and no items and makes it the *active feed* (the feed currently being edited in the feed workspace). |

### Import Action

The "Import Action" creates a copy of a feed located remotely (via URL) or locally (via a file) and makes it the *active feed* (the feed currently being edited in the feed workspace).

When the "Import Action" is clicked, a dialog is displayed that allows for selecting a remote (via URL) or local (via file) feed. The following two sections describe each of these scenarios.

**Import from URL**

To import a remote feed, select the `URL` tab as shown in the screenshot below. Next, enter the URL for the remote feed in the `Feed Location` text field and press the `OK` button.

![](../assets/images/editor/sidebar/importurl.png){: class="center zoomD"}

If the download is successful, a copy of the feed will become the *active feed* (the feed currently being edited in the feed workspace).

**Import From File**

To import a feed from a local file, select the `File` tab as shown in the screenshot below. Next, click the `Select Feed File...` button and select the local file. Once the file has been selected, click the `OK` button.

![](../assets/images/editor/sidebar/importfile.png){: class="center zoomD"}

If a valid feed is found in the selected file, a copy of the feed will become the *active feed* (the feed currently being edited in the feed workspace).

### Export Action

The "Export Action" exports the *active feed* (the feed currently being edited in the feed workspace) to JSON format and downloads the resulting file.

Once exported, the file (or its contents) can be shared for use by others (or between your devices) using a cloud-based hosting service such as Pastebin or Dropbox (See the [Pastebin Resource](../feeds/resources/pastebin.md) and [Dropbox Resource](../feeds/resources/dropbox.md) documentation sections).

### Test Action

TODO

### Load Action

![](../assets/images/editor/sidebar/loadfeed.png){: class="center zoomD"}

**Table Toolbar**

TODO

**Table Columns**

TODO

### Test Action

TODO

### Save Action

![](../assets/images/editor/sidebar/overwritefeed.png){: class="center zoomD"}