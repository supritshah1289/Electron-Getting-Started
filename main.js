const {app, BrowserWindow} = require('electron');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.

let win;

function createWindow() {
//create the browser window.
//give height and width of the window
win = new BrowserWindow({width: 800, height: 600})

//load index file of the app
win.loadURL(`file://${__dirname}/index.html`)

//open the devTools
// debugging purpose
// win.webContents.openDevTools()


//emitted when window is closed.
win.on('closed', ()=>{
  //dereference the window object, usually you would store windows
  //in an array if your app supports multi windows, this is the time
  //when you should delete the corresponding element.
  win = null
})

} // create window close

//this method will be called when electron has finished
//initialization and is ready to create browser windows.
//some APIs can only be used after this event occurs

app.on('ready', createWindow)


//quit when all windows are closed
app.on('window-all-closed', ()=>{
  //On macOS it is common for application and their menu bar
  //to stay active until user quits explicitly with cmd + Q

  if(process.platform !== 'darwin'){
    app.quit()
  }
})

app.on('activate', ()=>{
  //on macOS it's common to re-create a window in the app when the
  //dock icon is clicked and there are no other windows open

  if(win === null){
    createWindow()
  }
})





