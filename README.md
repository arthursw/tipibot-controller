# Tipibot controller

## Install, Build & Pack

 - Make sure package.json (`tipibot-controller/package.json`) contains all latest dependencies for `tipibot-controller`, `tipibot-controller-gui` and `serial-websocket` (i.e. make sure that dependencies in `serial-websocket/package.json` and `tipibot-controller-gui/package.json` are also in `tipibot-controller/package.json`)
 - Run `npm install` to install all dependencies in package.json (for tipibot-controller, tipibot-controller-gui and serial-websocket)
 - Download [serial-websocket](https://github.com/arthursw/serial-websocket) and [tipibot-controller-gui](https://github.com/arthursw/tipibot-controller-gui) (no need to install them since we just installed all dependencies)
 - Run `npm run pack` to build and pack for the current plateform (or `pack:linux` or `pack:win`)