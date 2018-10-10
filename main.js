// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu, MenuItem } = require('electron')

const Store = require('./store.js')

// Create a store to load config file
const store = new Store({
  // We'll call our data file 'user-preferences'
  configName: 'user-preferences',
  defaults: {
    port: 6842
  }
})

const serialWebsocket = require('./serial-websocket/serial-websocket.js')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {

  // start serial-websocket
  let port = store.get('port')
  serialWebsocket(port)

  // Create the browser window.
  mainWindow = new BrowserWindow({show: false})
  mainWindow.maximize()
  mainWindow.show()

  mainWindow.loadFile('tipibot-controller-gui/index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })


  const menu = new Menu()

  menu.append(new MenuItem({
    label: 'Toggle full screen',
    accelerator: 'CommandOrControl+F',
    // accelerator: process.platform === 'darwin' ? 'Cmd+F' : 'Ctrl+F',
    click: () => {
      console.log('toggle full screen')
      mainWindow.setFullScreen(mainWindow.isFullScreen())
    }
  }))
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
