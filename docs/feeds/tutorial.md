# Feed Tutorial

This tutorial walks through the various steps necessary to create a webЯcade feed. During this tutorial, many of the [Resources](./resources/index.md) (cloud-based services, content hosting, etc.) that have been proven to be compatible with the development of webЯcade feeds are utilized.

The [Format](./format.md) of webЯcade feeds is JSON (JavaScript Object Notation), which is a text-based format. Thus, all that is required to follow along and develop the feed document is a simple text-based editor. Alternatively, using a JSON-specific editor such as [Tutorials Point's Online JSON Editor](https://www.tutorialspoint.com/online_json_editor.htm){target=_blank} is recommended as it provides immediate feedback when errors are detected and allows for "beautifying" (reformatting) the document.

## Create Feed Object

The [Feed Object](./format.md#feed-object) is the root object in a webЯcade document that contains high-level meta-information about the feed. The only required fields are a `title` and an array of `categories`. 

Start by copying the example content below into the feed document you are creating. Update the `title`, `longTitle`, and `description` to reflect your specific feed. Alternatively, `longTitle` and `description` can be removed as they are optional (See the [Feed Object](./format.md#feed-object) documentation for more details).

``` json 
{
  "title": "Tutorial Feed",
  "longTitle": "WebЯcade Tutorial Feed",
  "description": "A simple single game feed for the webЯcade tutorial.",
  "categories": []
}
```

### Add Feed Images

The [Feed Object](./format.md#feed-object) supports the ability to associate optional thumbnail and background images with the feed. These images will be displayed when the feed is selected within the, "Feeds view", of the webЯcade player.

In this particular case, we will be using [Imgur](./resources/imgur.md) to host the images. Follow the steps outlined within the [Imgur Resource](./resources/imgur.md) page to upload the two images listed below. When prompted to choose a photo, simply paste in the following URLs (one at a time).

* Feed Thumbnail Image<br>`https://docs.webrcade.com/tutorial/feed-thumb.jpg`
* Feed Background Image<br>`https://docs.webrcade.com/tutorial/feed-background.jpg`

Copy the URLs of the newly uploaded images from Imgur (as described in the [Imgur Resource](./resources/imgur.md) page), and add them to the webЯcade feed document that is being developed. At this point the feed document should appear similar to the one shown below (`thumbnail` and `background` images are highlighted).

``` json hl_lines="5-6"
{
  "title": "Tutorial Feed",
  "longTitle": "Tutorial webЯcade Feed",
  "description": "A simple single game feed for the webЯcade tutorial.",
  "thumbnail": "https://i.imgur.com/WxTQLOq.jpg",
  "background": "https://i.imgur.com/Xlz3eh9.jpg",
  "categories": []
}
```

## Create Category Object

[Category objects](./format.md#category-object) of a webЯcade feed provide a means of classifying items (games, etc.) into user-defined groups
(by game type, console type, etc.). For a feed to be considered valid it must contain at least one category object. The only required category object fields are a `title` and an array of `items`. 

Copy the highlighted lines below into the `categories` array of the feed document you are developing. Update the category `title` and `description` to reflect your specific feed. Alternatively, `description` can be removed as it is optional (See the [Category Object](./format.md#category-object) documentation for more details).

``` json hl_lines="8-12"
{
  "title": "Tutorial Feed",
  "longTitle": "WebЯcade Tutorial Feed",
  "description": "A simple single game feed for the webЯcade tutorial.",
  "thumbnail": "https://i.imgur.com/WxTQLOq.jpg",
  "background": "https://i.imgur.com/Xlz3eh9.jpg",
  "categories": [
    {
      "title": "Games",
      "description": "A category that contains a single game.",
      "items": []
    }
  ]
}
```

!!! note
    It is important to note that although only one category is being added in this tutorial, the webЯcade feed format supports multiple categories (additional category objects would be separated by commas in the `categories` array).

### Add Category Images

The [Category Object](./format.md#category-object) supports the ability to associate optional thumbnail and background images with the category. These images will be displayed when the category is selected within the, "Categories view", of the webЯcade player.

As we did previously for the feed object, [Imgur](./resources/imgur.md) will be used to host the images. Follow the steps outlined within the [Imgur Resource](./resources/imgur.md) page to upload the two images listed below. When prompted to choose a photo, simply paste in the following URLs (one at a time).

* Category Thumbnail Image<br>`https://docs.webrcade.com/tutorial/category-thumb.png`
* Category Background Image<br>`https://docs.webrcade.com/tutorial/category-background.jpg`

Copy the URLs of the newly uploaded images from Imgur (as described in the [Imgur Resource](./resources/imgur.md) page), and add them to the category object in the webЯcade feed document that is being developed. At this point the feed document should appear similar to the one shown below (the category's `thumbnail` and `background` images are highlighted).

``` json hl_lines="11-12"
{
  "title": "Tutorial Feed",
  "longTitle": "WebЯcade Tutorial Feed",
  "description": "A simple single game feed for the webЯcade tutorial.",
  "thumbnail": "https://i.imgur.com/WxTQLOq.jpg",
  "background": "https://i.imgur.com/Xlz3eh9.jpg",
  "categories": [
    {
      "title": "Games",
      "description": "A category that contains a single game.",
      "thumbnail": "https://i.imgur.com/N9EHEsC.png",
      "background": "https://i.imgur.com/ddTEKVv.jpg",
      "items": []
    }
  ]
}
```

## Create Item Object

[Item objects](./format.md#item-object) within a webЯcade feed correspond to items (games, etc.) that can be launched (played, etc.). Each item object must contain an application `type` property value (the specific emulator or game engine, etc. to launch). 

The [Applications](../apps/index.md) page contains a listing of all the available applications. The detailed page for each application contains a *"Feed"* section that includes the application-specific `type` value. In addition to the application `type`, item objects must include a `title`.

Copy the highlighted lines below into the `items` array of the [Category Object](./format.md#category-object) that was created in the previous section. The `description` property can be removed as it is optional (See the [Item Object](./format.md#item-object) documentation for more details).

``` json hl_lines="14-18"
{
  "title": "Tutorial Feed",
  "longTitle": "WebЯcade Tutorial Feed",
  "description": "A simple single game feed for the webЯcade tutorial.",
  "thumbnail": "https://i.imgur.com/WxTQLOq.jpg",
  "background": "https://i.imgur.com/Xlz3eh9.jpg",
  "categories": [
    {
      "title": "Games",
      "description": "A category that contains a single game.",
      "thumbnail": "https://i.imgur.com/N9EHEsC.png",
      "background": "https://i.imgur.com/ddTEKVv.jpg",
      "items": [
        {
          "title": "Super Uwol!",
          "type": "nes",
          "description": "Uwol enjoys a quiet retirement at his cozy house on the beach of Pepinoni (province of Badajoz) and doesn’t realize that somebody has stolen all his money from the bank. Uwol and his good ol’ friend Meemaid, the evil sorceress-turned-super heroine travel to the new and refurnished Storm Palace to regain the lost fortune.",
        }
      ]
    }
  ]
}
```

!!! note
    It is important to note that although only one item is being added in this tutorial, the webЯcade feed format supports multiple items per category (additional item objects would be separated by commas in the `items` array).

### Add Item Properties

Each application type has a set of type-specific properties (both required and optional) that can be specified via the `props` property of an [Item Object](./format.md#item-object). Each detailed application page contains a *"Feed"* section that includes the list of available type-specific properties. 

In this particular case, since we are using the NES application (`type` of `NES`), the [NES Application Properties](../apps/emulators/nes/index.md#properties) section found within the [NES Application](../apps/emulators/nes/index.md) page contains the set of applicable properties for this item.  

The only required property in the `props` object for an NES application is `rom`. The `rom` property value must be set to a URL that points to a NES ROM file or a zip file containing a ROM file.

For this particular item, we will use a URL (see below) that points to the excellent NES homebrew game, "Super Uwol!" by the Mojon Twins. The ROM file we will be referring to is hosted on Dropbox (see the [Dropbox Resource](resources/dropbox.md) page for details on hosting your own files on Dropbox). 

* Super Uwol! Rom<br>`https://dl.dropboxusercontent.com/s/csq3rb6wnopcv2p/super-uwol.nes`

Alternatively, a resource such as the [Internet Archive](resources/inetarchive.md) can be leveraged to obtain URLs to homebrew ROMs that are already being shared publicly.

Add the highlighted lines below (the `props` object) into the [Item Object](./format.md#item-object) that was added in the previous step.

``` json hl_lines="18-20"
{
  "title": "Tutorial Feed",
  "longTitle": "WebЯcade Tutorial Feed",
  "description": "A simple single game feed for the webЯcade tutorial.",
  "thumbnail": "https://i.imgur.com/WxTQLOq.jpg",
  "background": "https://i.imgur.com/Xlz3eh9.jpg",
  "categories": [
    {
      "title": "Games",
      "description": "A category that contains a single game.",
      "thumbnail": "https://i.imgur.com/N9EHEsC.png",
      "background": "https://i.imgur.com/ddTEKVv.jpg",
      "items": [
        {
          "title": "Super Uwol!",
          "type": "nes",
          "description": "Uwol enjoys a quiet retirement at his cozy house on the beach of Pepinoni (province of Badajoz) and doesn’t realize that somebody has stolen all his money from the bank. Uwol and his good ol’ friend Meemaid, the evil sorceress-turned-super heroine travel to the new and refurnished Storm Palace to regain the lost fortune.",
          "props": {
            "rom": "https://dl.dropboxusercontent.com/s/csq3rb6wnopcv2p/super-uwol.nes"
          }
        }
      ]
    }
  ]
}
```

### Add Item Images

The [Item Object](./format.md#item-object) supports the ability to associate optional thumbnail and background images with the item. These images will be displayed when the item is selected within the, "Items view", of the webЯcade player.

As we did previously for the feed and category objects, [Imgur](./resources/imgur.md) will be used to host the images. Follow the steps outlined within the [Imgur Resource](./resources/imgur.md) page to upload the two images listed below. When prompted to choose a photo, simply paste in the following URLs (one at a time).

* Item Thumbnail Image<br>`https://docs.webrcade.com/tutorial/uwol-thumb.png`
* Item Background Image<br>`https://docs.webrcade.com/tutorial/uwol-background.png`

Copy the URLs of the newly uploaded images from Imgur (as described in the [Imgur Resource](./resources/imgur.md) page), and add them to the item object in the webЯcade feed document that is being developed. At this point the feed document should appear similar to the one shown below (the item's `thumbnail` and `background` images are highlighted).

``` json hl_lines="17-18"
{
  "title": "Tutorial Feed",
  "longTitle": "WebЯcade Tutorial Feed",
  "description": "A simple single game feed for the webЯcade tutorial.",
  "thumbnail": "https://i.imgur.com/WxTQLOq.jpg",
  "background": "https://i.imgur.com/Xlz3eh9.jpg",
  "categories": [
    {
      "title": "Games",
      "description": "A category that contains a single game.",
      "thumbnail": "https://i.imgur.com/N9EHEsC.png",
      "background": "https://i.imgur.com/ddTEKVv.jpg",
      "items": [
        {
          "title": "Super Uwol!",
          "type": "nes",
          "thumbnail": "https://i.imgur.com/yJ2xKHK.png",
          "background": "https://i.imgur.com/ZUHJNjW.png",
          "description": "Uwol enjoys a quiet retirement at his cozy house on the beach of Pepinoni (province of Badajoz) and doesn’t realize that somebody has stolen all his money from the bank. Uwol and his good ol’ friend Meemaid, the evil sorceress-turned-super heroine travel to the new and refurnished Storm Palace to regain the lost fortune.",
          "props": {
            "rom": "https://dl.dropboxusercontent.com/s/csq3rb6wnopcv2p/super-uwol.nes"
          }
        }
      ]
    }
  ]
}
```

## Shorten Feed URLs

At this point we have a fully formed and valid feed document. An *optional* step that can be performed on the feed document is shortening the URLs that are contained within it. Shortening of URLs is recommended as it reduces the overall size of the feed document and mitigates false-positive blocking by simple URL filters. 

For each of the URLs present in the feed document perform the following:

* Follow the steps detailed in the TinyURL resource page to [shorten URLs](resources/tinyurl.md#shortened-urls).

The two tabs below show the feed document with "Full URLs" (prior to shortening) and with "Shortened URLs" (after shortening).

=== "Full URLs"
    ``` json hl_lines="5-6 11-12 17-18 21"
    {
      "title": "Tutorial Feed",
      "longTitle": "WebЯcade Tutorial Feed",
      "description": "A simple single game feed for the webЯcade tutorial.",
      "thumbnail": "https://i.imgur.com/WxTQLOq.jpg",
      "background": "https://i.imgur.com/Xlz3eh9.jpg",
      "categories": [
        {
          "title": "Games",
          "description": "A category that contains a single game.",
          "thumbnail": "https://i.imgur.com/N9EHEsC.png",
          "background": "https://i.imgur.com/ddTEKVv.jpg",
          "items": [
            {
              "title": "Super Uwol!",
              "type": "nes",
              "thumbnail": "https://i.imgur.com/yJ2xKHK.png",
              "background": "https://i.imgur.com/ZUHJNjW.png",
              "description": "Uwol enjoys a quiet retirement at his cozy house on the beach of Pepinoni (province of Badajoz) and doesn’t realize that somebody has stolen all his money from the bank. Uwol and his good ol’ friend Meemaid, the evil sorceress-turned-super heroine travel to the new and refurnished Storm Palace to regain the lost fortune.",
              "props": {
                "rom": "https://dl.dropboxusercontent.com/s/csq3rb6wnopcv2p/super-uwol.nes"
              }
            }
          ]
        }
      ]
    }
    ```
=== "Shortened URLs"
    ``` json hl_lines="5-6 11-12 17-18 21"
    {
      "title": "Tutorial Feed",
      "longTitle": "WebЯcade Tutorial Feed",
      "description": "A simple single game feed for the webЯcade tutorial.",
      "thumbnail": "https://tinyurl.com/5b8e2brx",
      "background": "https://tinyurl.com/yentv7y6",
      "categories": [
        {
          "title": "Games",
          "description": "A category that contains a single game.",
          "thumbnail": "https://tinyurl.com/cepxkn7h",
          "background": "https://tinyurl.com/vsk6d3py",
          "items": [
            {
              "title": "Super Uwol!",
              "type": "nes",
              "thumbnail": "https://tinyurl.com/mh3epukr",
              "background": "https://tinyurl.com/eebpj6u7",
              "description": "Uwol enjoys a quiet retirement at his cozy house on the beach of Pepinoni (province of Badajoz) and doesn’t realize that somebody has stolen all his money from the bank. Uwol and his good ol’ friend Meemaid, the evil sorceress-turned-super heroine travel to the new and refurnished Storm Palace to regain the lost fortune.",
              "props": {
                "rom": "https://tinyurl.com/wfknhbhc"
              }
            }
          ]
        }
      ]
    }
    ```

## Publish Feed

At this point, the feed can be published and shared for use with webЯcade. In this tutorial, we will utilize [Pastebin](resources/pastebin.md) to host the feed document. 

To host the feed document in Pastebin, perform the following:

* Follow the steps outlined on the [Pastebin Resource](resources/pastebin.md) page.
* Copy the final version of the feed document you developed during this tutorial into the new "paste".

At this point you should have a URL for the webЯcade feed that resembles the following:
`https://pastebin.com/raw/Fchkqw6g`

The feed can be tested by adding the feed URL within the webЯcade player ("Feeds" view).

## Alias Feed URL

Although the feed is now available and published, the URL that was assigned by Pastebin is not very memorable. Fortunately, we can utilize a service such as TinyURL to create a more memorable URL that is aliased to the Pastebin URL.

To create an alias for the feed URL, perform the following:

* Follow the steps detailed in the TinyURL resource page to [alias URLs](resources/tinyurl.md#aliased-urls).
* Provide the Pastebin URL from the previous step as the URL to alias
* Provide a name to alias to the Pastebin URL

At this point, you should have an aliased URL similar to the following:
`https://tinyurl.com/tutorial-feed`

The feed can be tested by adding the feed URL within the webЯcade player ("Feeds" view).


