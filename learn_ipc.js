// https://blog.logrocket.com/handling-interprocess-communications-in-electron-applications-like-a-pro/

const electron = require('electron')
const ipc = electron.ipcRenderer

const syncMsgBtn = document.querySelector('#sendSyncMsgBtn')
syncMsgBtn.addEventListener('click', () => {
    // message from main to renderer
    ipc.on('message-from-main', (event, args) => {
        console.log('message received from main: ', event, args);
    })
    // message sent to main from renderer
    const reply = ipc.sendSync('sync-message', 'Sent from main Window')
    const message = `Synchronous message reply: ${reply}`
    document.querySelector('#syncReply').innerHTML = message

})