# Feed Categories Tab

The "Feed Categories Tab" consists of the categories associated with the current feed. The order that the categories appear in the [Categories Table](#categories-table) is identical to the order they will be presented in the [webЯcade player](../../userguide/index.md) (they are not sorted alphanumerically).

For a feed to be considered valid, it must contain at least one category.

![](../../assets/images/editor/workspace/categoriestab.png){: class="center zoomD"}

## Categories Table

The "Categories Table" contains the categories associated with the current feed. 

The [Table Toolbar](#table-toolbar) consists of the various category-based actions that can be performed on the categories table. The [Table Columns](#table-columns) section describes the columns that comprise the categories table.

### Table Toolbar

The following table describes the various category-based actions that can be performed on the categories table.

| __Action__ | __Icon__ | __Description__ |
| --- | --- | --- |
| Create Category | ![](../../assets/images/editor/icons/baseline_add_box_white_24dp.png){: class="action"} | Displays the [Create Category Editor](../dialogs/category-dialog.md) which is used to add a new category to the current feed. |
| Move Up | ![](../../assets/images/editor/icons/round_arrow_upward_white_24dp.png){: class="action"} | Moves the currently selected categories **up** in the table.<br><br>The order that the categories appear in the [Categories Table](#categories-table) is identical to the order they will be presented in the [webЯcade player](../../userguide/index.md) (they are not sorted alphanumerically). |
| Move Down | ![](../../assets/images/editor/icons/round_arrow_downward_white_24dp.png){: class="action"} | Moves the currently selected categories **down** in the table.<br><br>The order that the categories appear in the [Categories Table](#categories-table) is identical to the order they will be presented in the [webЯcade player](../../userguide/index.md) (they are not sorted alphanumerically). |
| Duplicate | ![](../../assets/images/editor/icons/round_content_copy_white_24dp.png){: class="action"} | Creates duplicate copies of the currently selected categories.<br><br>The copy operations performed are *"deep clones"* which include copies of the items that are associated with each selected category.  |
| Delete | ![](../../assets/images/editor/icons/round_delete_white_24dp.png){: class="action"} | Deletes the currently selected categories. |
| More | ![](../../assets/images/editor/icons/round_more_horiz_white_24dp.png){: class="action"} | Displays the [More Menu](#more-menu). |

### Table Columns

The following table describes the columns that comprise the categories table.

| __Column__ |  | __Description__ |
| --- | --- | --- |
| Title | | The title of the category associated with the row. |
| Edit | ![](../../assets/images/editor/icons/round_edit_white_24dp.png){: class="action"} | When the pencil icon is clicked, the [Category Editor](../dialogs/category-dialog.md) is displayed, providing the ability to edit the category associated with the row. |
| Item Count | | The count of items that are included in the category.<br><br>Clicking on the *item count* will navigate to the [Feed Items Tab](itemstab.md) and display the items included in the category associated with the row. |

## More Menu

The "More Menu" provides additional actions that can be performed on the categories table.

![](../../assets/images/editor/workspace/categoriesmoremenu.png){: class="center zoomD"}

The following table describes the additional actions that can be performed on the categories table.

| __Menu Item__ | __Icon__ | __Description__ |
| --- | --- | --- |
| Analyze | ![](../../assets/images/editor/icons/round_find_in_page_white_24dp.png){: class="action"} | *Analyzes* the items associated with the currently selected categories.<br><br>Analysis of an item consists of determining and updating the following aspects of the item (if able to be discovered):<br><ul><li>The [Application](../../apps/index.md) for the item. (for ROM-based items)</li><li>The [Properties](../dialogs/item-dialog.md#properties-tab) for the item. (for ROM-based items)</li><li>The title (and long title) for the item.</li><li>The artwork (thumbnail and background images) for the item.</li></ul> The *analyze* operation is similar to *scraping* functionality found in other front-ends. The primary difference is that the *analyze* operation attempts to determine the application type and related properties in addition to meta-data (titles and artwork).|
