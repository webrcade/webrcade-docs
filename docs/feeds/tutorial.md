# Feed Tutorial

This tutorial walks through the various steps necessary to create a webЯcade feed. During this tutorial, many of the [Resources](./resources/index.md) (cloud-based services, content hosting, etc.) that have been proven to be compatible with the development of webЯcade feeds are utilized.

The [Format](./format.md) of webЯcade feeds is JSON (JavaScript Object Notation), which is a text-based format. Thus, all that is required to follow along and develop the feed document is a simple text-based editor. Alternatively, using a JSON-specific editor such as [Tutorials Point's Online JSON Editor](https://www.tutorialspoint.com/online_json_editor.htm) is recommended as it provides immediate feedback when errors are detected and allows for "beautifying" (reformatting) the document.

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

The [Feed Object](./format.md#feed-object) supports the ability to associate optional thumbnail and background images with the feed. These images will be displayed when the feed is selected within the, "Feeds view", of the webЯcade front-end.

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

The [Category Object](./format.md#category-object) supports the ability to associate optional thumbnail and background images with the category. These images will be displayed when the category is selected within the, "Categories view", of the webЯcade front-end.

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

TODO

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

### Add Item Properties

TODO

* Super Uwol! Rom<br>`https://dl.dropboxusercontent.com/s/csq3rb6wnopcv2p/super-uwol.nes`

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

TODO

* Item Thumbnail Image<br>`https://docs.webrcade.com/tutorial/uwol-thumb.png`
* Item Background Image<br>`https://docs.webrcade.com/tutorial/uwol-background.png`

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

TODO

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

TODO

## Alias Feed URL

TODO
