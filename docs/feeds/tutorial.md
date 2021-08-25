# Feed Tutorial

## Create Feed Object

blah blah

``` json 
{
  "title": "Tutorial Feed",
  "longTitle": "WebЯcade Tutorial Feed",
  "description": "A simple single game feed for the webЯcade tutorial.",
  "categories": []
}
```

### Add Feed Images

blah blah

* Feed Thumbnail Image<br>`https://docs.webrcade.com/tutorial/feed-thumb.jpg`
* Feed Background Image<br>`https://docs.webrcade.com/tutorial/feed-background.jpg`

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

blah blah

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

### Add Category Images

blah blah

* Category Thumbnail Image<br>`https://docs.webrcade.com/tutorial/category-thumb.png`
* Category Background Image<br>`https://docs.webrcade.com/tutorial/category-background.jpg`

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

blah blah

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

blah blah

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

blah blah

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

blah blah

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

## Alias Feed URL

