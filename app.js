var {app, BrowserWindow, Menu, MenuItem} = require('electron');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;
var sobreWindow = null;

// Quit when all windows are closed.
/*app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});*/

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {


	var menuTopo = new Menu();
	var menuSair = new MenuItem({ role: "quit", label: "Sair" });
	var menuDebug = new MenuItem({ role: "toggledevtools", label: "Debug" });
	var menuSobre = new MenuItem({ click: function() {
		sobreWindow = new BrowserWindow({
		  width: 400,
		  height: 400
		});
		sobreWindow.loadURL('file://' + __dirname + '/app/sobre.html');
		sobreWindow.setMenu(null);
		sobreWindow.on('closed', function() {
			sobreWindow = null;
		});
	}, label: "Sobre" });

	menuTopo.append(menuSair);
	menuTopo.append(menuSobre);
	menuTopo.append(menuDebug);
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 600,
    height: 280,
    resizable: false,
    maximizable: false,
    acceptFirstMouse: true,
    titleBarStyle: 'hidden'
  });
  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/app/index.html');

  mainWindow.setMenu(menuTopo);

  // Open the DevTools.
  //mainWindow.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
		if(sobreWindow) sobreWindow.hide();
    mainWindow = null;
		if (process.platform != 'darwin') {
	    app.quit();
	  }
  });
});
