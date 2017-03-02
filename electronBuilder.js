"use strict"

const builder = require("electron-builder");
const Platform = builder.Platform;

//console.log(Platform);
// Promise is returned
builder.build({
  targets: Platform.LINUX.createTarget(),
  config: {
   "linux": { target: "AppImage" }
  }
}).then((res) => {
  // handle result
	console.log(res);
	console.log("Done...");
}).catch((error) => {
  // handle error
});
