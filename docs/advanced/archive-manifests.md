
# Archive Manifests

The webЯcade archive manifest format was developed to reduce the amount of memory required
by applications (emulators and engines) whose content is a set of files packaged in a
single archive (`.zip`) file. Examples of applications that utilize archive files include
[Quake](../../apps/engines/quake/) and [ScummVM](../../apps/engines/scummvm/).

!!! important
    The  webЯcade editor's [repackage archive tool](../editor/tools/repackage-archive.md) can be used
    to automatically generate archive manifests.

The webЯcade archive manifest is a (`.json`) file that includes a list (manifest) of URLs
to all of the other files that are required for the game, etc. WebЯcade will parse the manifest
and then proceed to download and assemble all of the pieces required to play the content.

Using the manifest format greatly reduces the memory required by the browser as it doesn't have
to load the entire archive (`.zip`) into memory, and then subsequently extract and store each
file (also in memory). Instead, it is able to download each file directly, thus not incurring the
memory for the archive itself or the memory required by the extraction process.

!!! important
    For game archive (`.zip`) sizes that are over 100 megabytes in size, it is highly recommended that the webЯcade archive manifest (`.json`) layout be utilized. This will greatly
    reduce the amount of memory necessary for the browser to load the game, and increase
    compatibility with devices with higher memory use limitations (iOS and Xbox).

While the rest of this document walks through the details of the webЯcade archive manifest format,
it is typically much easier to use the webЯcade editor's [repackage archive tool](../editor/tools/repackage-archive.md) to automatically generate archive manifests.

### Archive Format (JSON)

This section details the [JSON](https://en.wikipedia.org/wiki/JSON) (JavaScript Object Notation) format of the webЯcade Archive Manifest along with fully-formed [concrete examples](#complete-examples).

## Root Object

The root object of a webЯcade manifest includes the following properties.

| __Property__ | __Type__ | __Required__ | __Details__ |
|----------|------|----------|---------|
| props | Object | No | An optional object used to provide meta-data about the manifest file (the game the manifest file corresponds to, etc.). |
| files | Array of [File](#file-object) objects | Yes | An array containing the files associated with the manifest. |

## File Object

A file object includes details regarding a specific file that is a part of the archive.

### Properties

The table below contains the properties available for file objects.

| __Property__ | __Type__ | __Required__ | __Details__ |
|----------|------|----------|---------|
| url | String | Yes | The URL used to access (download) the file.<br/><br/>If this `url` is an empty string `""` the URL will be relative to the location of the manifest itself. |
| extract | Boolean | No | Whether the file (`.zip`) should be extracted.<br><br>Sets of smaller files should be assembled into smaller archive files (50 megabytes or so) to reduce the time required to download each file individually. |
| name | String | Yes | The name (and optional path) of the file. |

## Complete Examples

### Basic Example

The following is a basic example of a webЯcade archive manifest file.

This particular manifest only includes two files. The first is a `.zip` file that contains a collection of small files that will be extracted. Sets of smaller files should be assembled into smaller archive files (50 megabytes or so) to reduce the time required to download each file individually. The second file is a much larger file that will be downloaded directly.

Since the actual file URLs are empty, they will be downloaded relative to the location of the webЯcade archive manifest URL itself.

Also, since full paths are not provided in the `name` fields, each of these files will reside at the root of the game content.

```
{
  "props": {
    "title": "Beneath a Steel Sky"
  },
  "files": [
    {
      "url": "",
      "extract": true,
      "name": "pak1.zip"
    },
    {
      "url": "",
      "name": "sky.dsk"
    }
  ]
}
```

### Advanced Example

The following is a more advanced example of a webЯcade archive manifest file. It contains a
large number of files, each with an explicit download URL. Many of the files are collections of
smaller `.zip` files (50 megabytes or less) that will be extracted to reduce the overall download
time of smaller individual files. The remaining files are larger in size, and will be downloaded
directly.

It is also worth noting that the `name` field for these files includes the full path (location)
indicating where they should be placed relative to the root of the game content.

```
{
  "props": {
    "title": "Broken Sword 2.5 - The Return of the Templars"
  },
  "files": [
    {
      "name": "rooms/apt/fmv/logo.ogv",
      "url": "https://www.dropbox.com/scl/fi/p2dqf1dadqvi3thinjhgq/logo.ogv?rlkey=fw3cmfklioh0bc779itb916zy&dl=0"
    },
    {
      "name": "rooms/apt/fmv/intro.ogv",
      "url": "https://www.dropbox.com/scl/fi/cr9om1yrl1h3bxe7fh9kq/intro.ogv?rlkey=fi64l5xmal0zslvn843w8yo5i&dl=0"
    },
    {
      "name": "rooms/apt/pak.zip",
      "url": "https://www.dropbox.com/scl/fi/hdq3tuw5zupoq9u0ggoaz/pak.zip?rlkey=fwfnenrji5mfdv3ema6v8eikl&dl=0",
      "extract": true
    },
    {
      "name": "rooms/pak1.zip",
      "url": "https://www.dropbox.com/scl/fi/o7ram5cbc1qrkp0mixtb6/pak1.zip?rlkey=f8nb5ozf1wn2q7bwxhtuymb1n&dl=0",
      "extract": true
    },
    {
      "name": "rooms/pak2.zip",
      "url": "https://www.dropbox.com/scl/fi/8n6e0y1fq4hoogqamfj7d/pak2.zip?rlkey=f1saxiik065ohq3eiui6p7nyi&dl=0",
      "extract": true
    },
    {
      "name": "rooms/pak3.zip",
      "url": "https://www.dropbox.com/scl/fi/oujbzantv1aqj3a22619w/pak3.zip?rlkey=fubazy8by9iumzr0yobyswbqm&dl=0",
      "extract": true
    },
    {
      "name": "rooms/pak4.zip",
      "url": "https://www.dropbox.com/scl/fi/fubuhi7abouk06hkw70nu/pak4.zip?rlkey=f7t9s8o03dlakx3b4a9hx2be1&dl=0",
      "extract": true
    },
    {
      "name": "rooms/pak5.zip",
      "url": "https://www.dropbox.com/scl/fi/uz5hi708wyyjpcvg0v8az/pak5.zip?rlkey=fnfo0d50uvaa2xrht55rqnarc&dl=0",
      "extract": true
    },
    {
      "name": "rooms/pak6.zip",
      "url": "https://www.dropbox.com/scl/fi/9i3oiyxtxa1a1u426jcxe/pak6.zip?rlkey=fztrd8551gru8gp1uuyx082tn&dl=0",
      "extract": true
    },
    {
      "name": "rooms/pak7.zip",
      "url": "https://www.dropbox.com/scl/fi/djx6uvd5ayplm8yw840wu/pak7.zip?rlkey=fdd3tykqz9ksvmzhjpugc96gz&dl=0",
      "extract": true
    },
    {
      "name": "rooms/pak8.zip",
      "url": "https://www.dropbox.com/scl/fi/unxxp4g1q7gzbocnxpxeb/pak8.zip?rlkey=f1qyozl6l15qpr8k0fq8gpz1b&dl=0",
      "extract": true
    },
    {
      "name": "speech/en/pak1.zip",
      "url": "https://www.dropbox.com/scl/fi/ozzrwr2mdv3191nb3cyeo/pak1.zip?rlkey=fk2ot4u9dgvsl87drui1n6q6k&dl=0",
      "extract": true
    },
    {
      "name": "speech/en/pak2.zip",
      "url": "https://www.dropbox.com/scl/fi/2b231bt14l8q7ue0bkfz0/pak2.zip?rlkey=fa3fwhigq1rkl68jyetbirtni&dl=0",
      "extract": true
    },
    {
      "name": "speech/en/pak3.zip",
      "url": "https://www.dropbox.com/scl/fi/ym1y9j7wpdls3et3vjygj/pak3.zip?rlkey=f3npr80h51rcjopyu7po3yjxw&dl=0",
      "extract": true
    },
    {
      "name": "pak1.zip",
      "url": "https://www.dropbox.com/scl/fi/8enj4fa1s2blnadmiaqfz/pak1.zip?rlkey=f4bg12ox205un859ut5eu0k6g&dl=0",
      "extract": true
    }
  ]
}
```