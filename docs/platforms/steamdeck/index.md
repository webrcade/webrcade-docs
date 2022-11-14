# Steam Deck

## Overview

This page provides information on how to obtain the optimal experience when using webЯcade with the Steam Deck.

## Browser Support

The recommended browser for use with webЯcade on the Steam Deck is Chrome. It can be downloaded from Desktop Mode via the Discover app. Once downloaded, right click on Chrome and click "Add to Steam". (Note: Any modern chromium based browser should be )

!!! note
    Any modern chromium based browser (i.e. Edge, Brave, etc.) should be compatible with webRcade, however your milage may vary depending on your hardware specs because these emaultors are running on your device.

### Gaming Mode

While in gaming mode, a nice touch would be to have webRcade open in full screen like it were its installed locally. You can edit the Google Chrome shortcut's launch options to do this by enabling kiosk mode and opening the webRcade website directly.

!!!Note
    This is easiest done while in desktop mode

* In the desktop client of Steam, right click on the Chrome shortcut the click "Properties"
* Under the "Shortcut" options, find the "Launch Options" text box, then add this to the end:

```txt
--kiosk "http://192.168.1.120/"
```

Once thats done, the whole line should look something like this:

!!!Example
    run --branch=stable --arch=x86_64 --command=/app/bin/chrome --file-forwarding com.google.Chrome @@u @@ --window-size=1024,640 --force-device-scale-factor=1.25 --device-scale-factor=1.25 --kiosk "http://192.168.1.120/"
