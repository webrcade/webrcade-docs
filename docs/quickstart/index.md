# Quick Start

## Install with Docker

The fastest way to get up and running is via the [Docker container](https://hub.docker.com/r/webrcade/webrcade).
After you have docker installed on either [Linux](https://docs.docker.com/engine/install/ubuntu/) or [Windows](https://docs.docker.com/desktop/install/windows-install/), do one of the follow:

Install via docker cli:

```sh
docker run -rm \
  --name=webrcade \
  -p 80:80 \
  -v /path/to/content:/var/www/html/content \
  --restart=unless-stopped \
  webrcade/webrcade:latest
```

or deploy with docker-compose:

```yaml
version: "3"
services:
  webrcade:
    image: webrcade/webrcade:latest
    container_name: webrcade
    volumes:
      - /path/to/content:/var/www/html/content # Docker for Windows use "/c/path/to/content"
    ports:
      - 80:80
    restart: unless-stopped
```

## Setup

The `/path/to/content` location will be accessible to the webRcade server so it can host your games and feeds locally.

Its recommended to have your ROMs in their own system folder structure:

!!! example
    - nes/Super Mario Bros. (U).nes (or .zip)
    - gba/Sonic Advance (U).gba (or .zip)
    - myfeed.json

When setting up games/feeds with the editor, use the following example URLs:

!!! example
    - /content/nes/Super Mario Bros. (U).nes
    - /content/gba/Sonic Advance (U).gba
    - /content/myfeed.json

## ROM Organization

The naming convention for mathing these ROMs to their artwork comes from public hash sources like [No-Intro](https://no-intro.org/).

You can use a tool like [Rom Center](https://www.romcenter.com/downloadpage/) that will hash your ROMs, match them to the database and rename them accordingly.
