const { app, BrowserWindow, globalShortcut } = require('electron');
let win;

app.whenReady().then(() => {
  win = new BrowserWindow({
    width: 700,
    height: 300,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    skipTaskbar: true,
    hasShadow: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.setIgnoreMouseEvents(false);
  win.loadFile('index.html'); // Your floating chat bar HTML file

  // GLOBAL HOTKEY
  globalShortcut.register('Control+Shift+Space', () => {
    if (win.isVisible()) {
      win.hide();
    } else {
      win.show();
      win.focus();
    }
  });
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});
