# Category Editor

The "Category Editor" is used to create and/or edit "category" entries within a webЯcade feed. Category entries provide a means of classifying items (games, etc.) into user-defined groups
(by game type, console type, etc.).

For a feed to be considered valid it must contain at least one category object.

  * Categories can be added to the active feed via the [Categories Tab](../workspace/categoriestab.md) of the [Feed Workspace](../workspace/index.md).
  * Items can be added to categories via the [Items Tab](../workspace/itemstab.md) of the [Feed Workspace](../workspace/index.md).

!!! note
    The fields within the "Category Editor" support drag and drop functionality. See the [Drag and Drop](../draganddrop.md) section for more information. Specifically the sections demonstrating how to [Drag Text](../draganddrop.md#drag-text) and [Drag Images](../draganddrop.md#drag-images).

## General Tab

The general tab consists of basic information about the category (title, description, etc.).

![](../../assets/images/editor/categoryeditor/generaltab.png){: class="center zoomD"}

### Fields

| __Field__ | __Description__ |
| --- | --- |
| Title | A title for the category. |
| Long title |A long title for the category (will be used in locations with additional room for display). |
| Description | A description of the category. |

## Thumbnail Tab

The thumbnail tab allows a thumbnail for the category to be specified. The thumbnail image will be displayed in the [webЯcade player](../../userguide/index.md).

![](../../assets/images/editor/categoryeditor/thumbnailtab.png){: class="center zoomD"}

### Fields

| __Field__ | __Description__ |
| --- | --- |
| Thumbnail location (URL) | The location (URL) of a thumbnail image for the category.<br><br>This field supports drag and drop of image-based URLs (see [Drag Images](../draganddrop.md#drag-images) for more information). |
| Thumbnail image | The image corresponding to the specified URL in `Thumbnail location`.<br><br>Image-based URLs can be dragged and dropped on the image to set the `Thumbnail location` (see [Drag Images](../draganddrop.md#drag-images) for more information). |

## Background Tab

The background tab allows a background image for the category to be specified. The background image will be displayed in the [webЯcade player](../../userguide/index.md).

![](../../assets/images/editor/categoryeditor/backgroundtab.png){: class="center zoomD"}

### Fields

| __Field__ | __Description__ |
| --- | --- |
| Background location (URL) | The location (URL) of a background image for the category.<br><br>This field supports drag and drop of image-based URLs (see [Drag Images](../draganddrop.md#drag-images) for more information). |
| Pixelated Scaling | Whether to pixelate the image when it is sized to fit the dimensions of the [webЯcade player](../../userguide/index.md). This option should typically be enabled when a screenshot with smaller dimensions is being used as a background image. Without enabling this option, the screenshot will most likely appear blurry when stretched to fit the player's dimensions. |
| Background image | The image corresponding to the specified URL in `Background location`.<br><br>Image-based URLs can be dragged and dropped on the image to set the `Background location` (see [Drag Images](../draganddrop.md#drag-images) for more information).   |
