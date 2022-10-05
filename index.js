const {app, BrowserWindow} = require('electron') 

let janelaPrincipal

function CreateWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 900,
        webPreferences:{
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(CreateWindow)

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0){
        CreateWindow()
    }
})
