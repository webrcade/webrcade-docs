# Dropbox

[Dropbox](https://dropbox.com/) can be used to host images, game-related files (ROMs, etc.), and webЯcade feed documents.

!!! important
    <p>
    By default, Dropbox URLs do not support downloading content directly (it first
    presents a landing page with details about the file, etc.). Fortunately, webЯcade will automatically convert these URLs and allow for direct downloading of the associated
    content.
    </p>
    <p>
    However, this automatic conversion process will not take place when the Dropbox URL
    is shortened via a link shortener (TinyURL, etc.). This is a fairly common practice
    when the feed is hosted in Dropbox and a shortener is used to reduce the feed's
    URL.
    </p>
    <p>
    If you still wish to use a link shortener with a Dropbox URL (for a feed, etc.), you can modify the URL manually to support direct downloading prior to shortening it.
    </p>
    <p>
    For Dropbox URLs that look similar to the following:
    ```
    https://www.dropbox.com/...njyKSC.a78?rlkey=wbv6ujv3gblk1uftj6j1jhv8x&dl=0
    ```
    Simply change `dl=0` to `dl=1` as shown below:
    ```
    https://www.dropbox.com/...njyKSC.a78?rlkey=wbv6ujv3gblk1uftj6j1jhv8x&dl=1
    ```
    </p>

The process to host files in Dropbox is as follows:

* Register and login to a Dropbox account.
* Upload one or more files to Dropbox.
* Copy the link associated with each file (see screenshot below). The "`Copy link`" option will appear when a file is hovered by the cursor.

![](../../assets/images/feed/dropbox/copylink.png){: style="padding:5px 15px;" class="center zoomD"}

* After clicking on the "`Copy link`" option, a pop-in stating that the link has been copied to the clipboard will appear (see screenshot below).

![](../../assets/images/feed/dropbox/linkcopied.png){: style="padding:5px 15px;" class="center zoomD"}

!!! note
    Although it is possible to host images in Dropbox, it is *not recommended*. The time to retrieve images
    from Dropbox is significantly slower than dedicated image hosting sites (see [Imgur page](./imgur.md)), leading to an
    inconsistent webЯcade player (front-end) experience (slow loading images with visible pop-ins, etc.).



## Example

The following is an example of a simple webЯcade feed that includes the Dropbox link to the excellent Sega Master System homebrew game Darc (outlined in the steps above).

There is also a tab named, *"Shortened URLs*", wherein the link has been shortened (see [TinyURL page](./tinyurl.md#shortened-urls)). Shortening of URLs is recommended as it reduces the size of the overall feed and mitigates false-positive blocking by simple URL filters.

=== "Full URL"
    ``` json hl_lines="11"
    {
      "title": "Dropbox Example Feed",
      "categories": [
        {
          "title": "Games",
          "items": [
            {
              "title": "Darc",
              "type": "sms",
              "props": {
                "rom": "https://dl.dropboxusercontent.com/s/mjp3odan08deqp2/DARC.sms",
                "ym2413": true
              }
            }
          ]
        }
      ]
    }
    ```
=== "Shortened URL"
    ``` json hl_lines="11"
    {
      "title": "Dropbox Example Feed",
      "categories": [
        {
          "title": "Games",
          "items": [
            {
              "title": "Darc",
              "type": "sms",
              "props": {
                "rom": "https://tinyurl.com/4r9rww",
                "ym2413": true
              }
            }
          ]
        }
      ]
    }
    ```

The example from above can be tested by adding a feed with the following URL within the [webЯcade player](../../userguide/index.md):

`https://tinyurl.com/dropbox-feed-example`