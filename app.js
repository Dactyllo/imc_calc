var {app, BrowserWindow, Menu, MenuItem} = require('electron');

/*const electron = require('electron')
// Module to control application life.
const app = electron.app
const Menu = electron.Menu;
const MenuItem = electron.MenuItem;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow*/

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
	var template = [
	 {label: 'Quit', click: function() {app.quit();}},
	 {label: 'Informações', click: function() {
	 	if(sobreWindow == null) {
			sobreWindow = new BrowserWindow({
			  width: 500,
			  height: 580,
				//medida windows
			  //height: 630,
		    resizable: false,
		    maximizable: false,
				modal: true,
				parent: mainWindow,
		    acceptFirstMouse: true,
				autoHideMenuBar: true,
				icon: __dirname+"/icon.png"
			});
			sobreWindow.loadURL('file://' + __dirname + '/app/sobre.html');
			sobreWindow.setMenu(null);
			sobreWindow.on('closed', function() {
				sobreWindow = null;
			});
		}
	 }}
	];
	Menu.setApplicationMenu(Menu.buildFromTemplate(template));
	
	/*var menuTopo = new Menu();
	var menuSair = new MenuItem({ role: "quit", label: "Sair" });
	var menuDebug = new MenuItem({ role: "toggledevtools", label: "Debug" });
	var menuSobre = new MenuItem({ click: function() {
		if(sobreWindow == null) {
			sobreWindow = new BrowserWindow({
			  width: 500,
			  height: 580,
				//medida windows
			  //height: 630,
		    resizable: false,
		    maximizable: false,
				modal: true,
				parent: mainWindow,
		    acceptFirstMouse: true,
				autoHideMenuBar: true,
				icon: __dirname+"/icon.png"
			});
			sobreWindow.loadURL('file://' + __dirname + '/app/sobre.html');
			sobreWindow.setMenu(null);
			sobreWindow.on('closed', function() {
				sobreWindow = null;
			});
		}
	}, label: "Informações" });

	menuTopo.append(menuSair);
	menuTopo.append(menuSobre);*/
	//menuTopo.append(menuDebug);
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 600,
    height: 280,
		//medida windows
    //height: 330,
    resizable: false,
    maximizable: false,
    acceptFirstMouse: true,
		icon: __dirname+"/icon.png"
  });

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/app/index.html');
  //mainWindow.setMenu(menuTopo);
  // Open the DevTools.
  //mainWindow.openDevTools();
	//Menu.setApplicationMenu(menuTopo);

  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
		if(sobreWindow) sobreWindow.hide();
    mainWindow = null;
		app.quit();
		/*if (process.platform != 'darwin') {
	    app.quit();
	  }*/
  });
});
