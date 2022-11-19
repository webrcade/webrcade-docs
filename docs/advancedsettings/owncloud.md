# [Docker-Compose](https://docs.docker.com/compose/) with [ownCloud](https://owncloud.com/)

## Overview

- Docker-compose is a simple, streamlined way to launch one or more docker containers using one `docker-compose.yml`.
- ownCloud is a self hosted cloud storage alternative to Dropbox and GoogleDrive. Use your own harddrives and you don't have to pay monthly fees. (Aside from power. You will need to leave the host/server computer on.)

This docker-compose configuration will deploy a stack of containers containing: webrcade, owncloud & its necessary databases for user and file management.

## Installation

After downloading the [docker-compose.yml](https://github.com/webrcade/webrcade/pull/103/files#diff-423deb13b7c401b1a7f41ee91c77f722e11d2f317d6a66b546524e8a04cc8b03) file, open it in notepad and set the following variables:

!!! example
    - webRcade
        - volumes
            - owncloud storage path
            - owncloud username (use admin username during initial setup)
    - ownCloud
        - environment
            - server IP address
            - admin username
            - admin password
        - volumes
            - owncloud storage path

Then deploy the docker-compose file by using the following or uploading the `docker-compose.yml` into [Portainer (web GUI for docker)](https://hub.docker.com/r/portainer/portainer-ce):

```sh
docker-compose up
```

!!! note
    File/folder changes need to be done using the ownCloud interface for them to be tracked. It does not auto scan folders for changes.


After all the containers are up and running on your docker host, you will need to run a manual file scan to recognize the webrcade folder and contents within. This is done by accessing the terminal inside the container using the following:

```sh
docker exec -ti webrcade-owncloud entrypoint bash
```

Now that you're inside the container, start the file scan:

```sh
occ files:scan --all
```

- webRcade can be reached at [http://localhost/](http://localhost/)
- ownCloud can be reached at [http://localhost:8080/](http://localhost:8080/) or [https://localhost/](https://localhost/)

At this point, you are up and running. The suggested final step is to enter the ownCloud interface with admin, create a new user, then edit the docker-compose file's webrcade volume path to that new username and redeploy the stack.

## External Access

!!! warning
    Do not forward port 80 as that points to webRcade. This project is in early development with focuses on functionality not security. webRcade will not be held liable for damages done by external attacks.

To access ownCloud from the web, [forward port](https://www.noip.com/support/knowledgebase/general-port-forwarding-guide/) 443 for https from your external router (internet facing) to your docker host IP address.

Most users receive a dynamic IP address from their ISP and as such, it is not a reliable link to use when importing content into your feeds. As such, its best to use the [DDNS](https://en.wikipedia.org/wiki/Dynamic_DNS) feature included in most modern routers to reflect any changes of your external IP address to a DNS server.

TL;DR IP addresses change but names are forever (terms & conditions apply)

[Afraid.org (aka FreeDNS)](https://freedns.afraid.org/) is a simple, cost effective DNS server solution and they have detailed instructions on the website.