const {app, BrowserWindow, ipcMain, ipcRenderer} = require('electron')
const path = require('path')
const appFolder = path.dirname(process.execPath)
// to open app at login, update name here to app name
// const updateExe = path.resolve(appFolder, '..', 'Youni Supercharger.exe')
// const exeName = path.basename(process.execPath)

var mainWindow;

function createWindow () {
    // Create the browser window.
    mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: true    
      }
    })
    mainWindow.loadFile('index.html')
    // Open the DevTools.
    mainWindow.webContents.openDevTools()

  
}

app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') app.quit()
  })

app.on('activate', function () {
// On macOS it's common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// uncomment to open app at login
// app.setLoginItemSettings({
//     openAtLogin: true,
//     path: updateExe,
//     args: [
//         '--processStart', `"${exeName}"`,
//         '--process-start-args', `"--hidden"`
//     ]
// })

ipcMain.on('sync-message', (event, arg) => {
    // message receieved from renderer
    event.returnValue = 'Message Received!'
    // message sent to renderer from main
    mainWindow.webContents.send('message-from-main');
})
