# About 

WebЯcade consists of a simple [web-based front end](./userguide/index.md) that provides the ability to play popular gaming content entirely within the context of the browser across a [wide variety of platforms](./apps/../platforms/index.md). 

The content for playing games (binaries, etc.) and populating the front-end (images, etc.) is collected from [cloud-based resources](./feeds/resources/index.md) based on [user-defined feeds](./feeds/index.md) that are registered via the webЯcade front-end.

![](assets/images/platforms/ios/safari-full.png){: style="padding:5px 15px;" class="center"}

The following lists attempt to further describe webЯcade in terms of its primary features versus those features that are not a direct focus.

Primary features:

* Runs entirely within the web browser leveraging JavaScript, WebAssembly, and the HTML5 gamepad and audio interfaces
* Adaptive user interface supports [wide variety of platforms](./apps/../platforms/index.md) (Xbox Series X|S, iOS, Android, Windows, macOS)
* Native gamepad support (Bluetooth and USB) for both front-end navigation and when playing games
* [User-defined cloud-based feeds](./feeds/index.md) identify the resources (images, etc.) required to populate the front-end as well as the content (binaries, etc.) required to play games

Not focused on:

* Directly playing locally stored game content (ROMs, etc.)<br>(*Technically possible by using a local web server, but not a primary use case*) 
* The "latest and greatest" emulator features and compatibility<br>(*Primary emphasis is on compatibility with popular game content across a variety of platforms while minimizing resource requirements*)
* Touch-based (virtual) gamepad controls<br>(*The focus is native gamepad controller support via Bluetooth and USB*)

## Getting Started

The recommended steps for getting started with webЯcade are listed below:

* Review the [User Guide](./userguide/index.md) in order to familiarize yourself with the webЯcade front-end.
* Read the documentation for the [Platform](./platforms/index.md) you will be using with webЯcade to learn platform-specific details such as how to optimize the experience and how to connect controllers. 
* Review the documentation for each [Application](apps/index.md) that is launched to determine its keyboard and gamepad mappings as well as any other application-specific notes (an application is the emulator or engine being used to play a particular game, etc.).
