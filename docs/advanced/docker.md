# Docker

## Overview

WebЯcade includes the ability to run a private server instance as a [Docker](https://www.docker.com/) container.

The webЯcade Docker image can be found at the following location:
[https://hub.docker.com/r/webrcade/webrcade/](https://hub.docker.com/r/webrcade/webrcade/)

!!! important
    Not all features of webЯcade (cloud-based storage, etc.) are currently available via the Docker image.

## Run Command

The Docker `run` command should be similar to the following:

```
docker run -d \
  --name=<container-name> \
  -p <host-console-port>:80 \
  -v <host-content-path>:/var/www/html/content \
  --restart unless-stopped \
  webrcade/webrcade:latest
```

The arguments are as follows:

| __Name__ | __Required__ | __Description__ |
| --- | --- | --- |
| container-name | No | The name to use for the webЯcade container. |
| host-console-port | Yes | The port used to access webRcade on the host system. |
| host-content-path | No | An optional path on the host system that contains content (ROM files, `.CHD` files, etc.) to use with webЯcade feeds. |

The following is an example of the `run` command with argument values provided.

```
docker run -d \
  --name=webrcade \
  -p 8080:80 \
  -v /home/myuser/webrcade-content:/var/www/html/content \
  --restart unless-stopped \
  webrcade/webrcade:latest
```

## Accessing WebЯcade

Once the container has started, it can be accessed using the following URL structure:
`http://<host-system>:<host-console-port>`

If host-based content was exposed (see `host-content-path` above), it can be accessed with the following URL structure:

`http://<host-system>:<host-console-port>/content`

It is worth noting that the webRcade Docker container exposes its content with Cross-Origin Resource Sharing (CORS) headers that allow it to be served to any webЯcade instance.

Therefore, this content could also be used via the public webRcade server (this requires connectivity from the device that is accessing the public server and the private webRcade Docker instance).