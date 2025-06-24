# Docker

## Overview

WebЯcade includes the ability to run a private server instance as a [Docker](https://www.docker.com/) container.

The webЯcade Docker image can be found at the following location:
[https://hub.docker.com/r/webrcade/webrcade/](https://hub.docker.com/r/webrcade/webrcade/)

!!! important
    Not all features of webЯcade (cloud-based storage, etc.) are currently available via the Docker image.

!!! important
    While using HTTPS is not strictly required, some applications ([DOS](../apps/emulators/dos/index.md), etc.) rely on it to function properly due to the need for multi-threading. Therefore, HTTPS is the recommended protocol to use with WebЯcade due to full compatibility across applications.

## Run Command

The Docker `run` command should be similar to the following:

```
docker run -d \
  --name=<container-name> \
  -p <host-console-port-http>:80 \
  -p <host-console-port-https>:443 \
  -v <host-content-path>:/var/www/html/content \
  --restart unless-stopped \
  webrcade/webrcade:latest
```

The arguments are as follows:

| __Name__ | __Required__ | __Description__ |
| --- | --- | --- |
| container-name | No | The name to use for the webЯcade container. |
| host-console-port-http | Yes | The port used to access webRcade on the host system via HTTP. |
| host-console-port-https | No | The port used to access webRcade on the host system via HTTPS. |
| host-content-path | No | An optional path on the host system that contains content (ROM files, `.CHD` files, etc.) to use with webЯcade feeds. |

The following is an example of the `run` command with argument values provided.

```
docker run -d \
  --name=webrcade \
  -p 8080:80 \
  -p 8443:443 \
  -v /home/myuser/webrcade-content:/var/www/html/content \
  --restart unless-stopped \
  webrcade/webrcade:latest
```

## Accessing WebЯcade

Once the container has started, it can be accessed using the following URL structure:
`http://<host-system>:<host-console-port-http>` or<br>
`https://<host-system>:<host-console-port-https>`

If host-based content was exposed (see `host-content-path` above), it can be accessed with the following URL structure:

`http://<host-system>:<host-console-port-http>/content` or <br>
`https://<host-system>:<host-console-port-https>/content`

It is worth noting that the webRcade Docker container exposes its content with Cross-Origin Resource Sharing (CORS) headers that allow it to be served to any webЯcade instance.

Therefore, this content could also be used via the public webRcade server (this requires connectivity from the device that is accessing the public server and the private webRcade Docker instance).

## SSL Support (HTTPS)

Upon container startup, the system will check for the existence of the following SSL key-pair files:

```
/usr/local/apache2/conf/ssl/
  server.key
  server.crt
```

If these files are not found, a self-signed key-pair will be automatically generated.

While using HTTPS is not strictly required, some applications ([DOS](../apps/emulators/dos/index.md), etc.) rely on it to function properly due to the need for multi-threading.






