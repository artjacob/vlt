////////////////////////////////////////////////////////////////////////////////////////////////////
// gulp / config ///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
const fs = require("fs-extra");

let config = { };

// CSS
config["css"] = {
	"color": "cyan",
	"dir": "./source/css/",
	"watch": ["**/**.scss"],
	"source": ["./source/css/vlt.scss"],
	"destination": {
		"development": "./public/"
	}
};

// JS
config["js"] = {
	"color": "yellow",
	"dir": "./source/js/",
	"watch": ["**/**.js"],
	"source": fs.readJsonSync("./source/js/modules.json"),
	"destination": {
		"development": "./public/"
	}
};

// HTML
config["html"] = {
	"color": "magenta",
	"dir": "./source/html/",
	"watch": ["**/**.pug", "**/**.html"],
	"source": ["./source/html/vlt.pug"],
	"destination": {
		"development": "./public/",
		"production": "./deploy/"
	}
};

// Assets
config["assets"] = {
	"color": "green",
	"dir": "./source/assets/",
	"watch": ["**"],
	"files": [
		{
			"title": "service-worker",
			"type": "js",
			"source": "./source/assets/service-worker.js",
			"destination": {
				"development": "./public/",
				"production": "./deploy/"
			},
			"filename": "service-worker.js"
		},
		{
			"title": "manifest",
			"type": "json",
			"source": "./source/assets/manifest.json",
			"destination": {
				"development": "./public/",
				"production": "./deploy/"
			},
			"filename": "manifest.json"
		},
		{
			"title": "icon",
			"type": "png",
			"source": "./source/assets/icon.png",
			"destination": {
				"development": "./public/",
				"production": "./deploy/"
			},
			"filename": "icon.png"
		}
	]
};

module.exports = config;
