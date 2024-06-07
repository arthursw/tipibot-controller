# Tipibot controller

The application can be packaged with the instruction in the bellow section "Install, Build & Pack".

## Install, Build & Pack

 - Make sure package.json (`tipibot-controller/package.json`) contains all latest dependencies for `tipibot-controller`, `tipibot-controller-gui` and `serial-websocket` (i.e. make sure that dependencies in `serial-websocket/package.json` and `tipibot-controller-gui/package.json` are also in `tipibot-controller/package.json`)
 - Run `npm install` to install all dependencies in package.json (for tipibot-controller, tipibot-controller-gui and serial-websocket)
 - Download [serial-websocket](https://github.com/arthursw/serial-websocket) and [tipibot-controller-gui](https://github.com/arthursw/tipibot-controller-gui) (no need to install them since we just installed all dependencies)
 - If you get an error saying "Node - was compiled against a different Node.js version using NODE_MODULE_VERSION XXX": run `./node_modules/.bin/electron-rebuild` to rebuild everything (see [here](https://stackoverflow.com/questions/46384591/node-was-compiled-against-a-different-node-js-version-using-node-module-versio))
 - Run `npm run pack` to build and pack for the darwin platform and x64 architecture (or `pack:arm7l` for raspberry pi or `pack:win`, see package.json)