# Adding Items

One of the predominant uses of the feed editor is adding items (games, etc.) to feeds. To simplify that process, the editor provides multiple methods of adding items which are detailed below.

## Manual Item Creation

Items can be manually created via the, *Create Item* action, within the [Items Table Toolbar](itemstab.md#items-table).

Manually creating an item requires more effort than the other options detailed on this page, but it is sometimes necessary if the editor is unable to automatically determine the appropriate application type (emulator, etc.) for a ROM-based URL.

## Add From Dropbox

Items can be created for ROM files that are hosted in your Dropbox account. See the *Add From Dropbox* action in the [Items Table More Menu](itemstab.md#more-menu) for more information.

## Create from ROM URLs

Items can be created and added to feeds based on URLs that point to ROM files. See the *Create from URLs* action in the [Items Table More Menu](itemstab.md#more-menu) for more information.

## Drag and Drop ROM URLs

Items can also be created by dragging and dropping URLs that point to ROM files onto the editor workspace or its dialogs. See the [Drag and Drop ROM URLs](../draganddrop.md#drag-rom-urls) section for more information.

## Disc-based Items

Due to large disc image sizes, adding disc-based items (games, etc.) in the [Feed Editor](../index.md) must be done manually (versus using auto-detection).

To add a disc-based item, perform the following steps.

* Navigate to the "Items" tab in the Feed Editor (See [Feed Items Tab](itemstab.md) documentation).

* Select the "Create Item" action in the "Items Table" toolbar (See [Items Table](itemstab.md#table-toolbar) documentation). The [Create Item Editor](../dialogs/item-dialog.md) will be displayed.

![](../../assets/images/editor/workspace/create-item-autocomplete.png){: class="center zoomD"}

* On the [General Tab](../dialogs/item-dialog.md#general-tab) of the [Create Item Editor](../dialogs/item-dialog.md) perform the following steps:
    * Select the appropriate application (`Sony PlayStation`, etc.) in the "Application" pull-down (*See #1 in screenshot above*).
    * In the "Title" field, start to type in the name of the game that is being added. An *autocomplete list* will be displayed directly below the *title* field (*See #2 in screenshot above*).
    * Select one of the items in the *autocomplete list* to have the game's description and artwork retrieved (*See #3 in screenshot above*).

![](../../assets/images/editor/workspace/create-item-discs.png){: class="center zoomD"}

* On the [Properties Tab](../dialogs/item-dialog.md#properties-tab) of the [Create Item Editor](../dialogs/item-dialog.md) perform the following steps:
    * Provide one or more Disc URLs in the "Discs (URLs)" multi-line text field (directly or via the chooser button to the right of the field) (*See #1 in screenshot above*).
* Click the `OK` button to add the newly created item to the feed.