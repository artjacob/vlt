"use strict";
const gulp = require("gulp");

const log = require("fancy-log");
const color = require("ansi-colors");
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const fs = require("fs-extra");
const sftp = require("gulp-sftp");
const request = require("request");

let CONFIG = { };

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

gulp.task("default", ["stage"]);
gulp.task("watch", ["watch-css", "watch-js", "watch-html"]);
gulp.task("stage", ["stage-css", "stage-js", "stage-html"]);


////////////////////////////////////////////////////////////////////////////////////////////////////
// html ////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
const pug = require("gulp-pug");
const inline = require("gulp-inline-source");

CONFIG.html = { };
CONFIG.html.source = ["./pug/vlt.pug"];
CONFIG.html.watch = ["**/**.pug"];

const stageHTML = () => {
	gulp.src(CONFIG.html.source)
		.pipe(plumber())

		.pipe(pug({
			"pretty": " ",
			"locals": {
				"env": "development"
			}
		}))

		.pipe(inline())
		.pipe(gulp.dest("./-/", { mode: "0644" }))
		.pipe(gulp.dest("./../vlt-public/-/", { mode: "0644" }));

	// gulp.src(CONFIG.html.source)
	// 	.pipe(plumber())

	// 	.pipe(pug({
	// 		"pretty": "\t",
	// 		"locals": {
	// 			"env": "development"
	// 		}
	// 	}))

	// 	.pipe(gulp.dest("./../vlt-public/", { mode: "0644" }));

	// Copia arquivos para repositório público
	fs.copy("./pug/", "./../vlt-public/pug/");

	log(color.magenta("HTML !!"));
};

const deployHTML = () => {
	gulp.src(CONFIG.html.source)
		.pipe(plumber())

		.pipe(pug({
			"pretty": false,
			"locals": {
				"env": "production"
			}
		}))
		.pipe(inline())

		.pipe(rename("vlt.html"))
		.pipe(sftp({
			host: "ftp.emitremmus.com",
			remotePath: "/home/artjacob/emitremmus.com/",
			auth: "artjacob"
		}));

	log(color.magenta("HTML !!"));
};

gulp.task("stage-html", stageHTML);
gulp.task("watch-html", () => { gulp.watch(CONFIG.html.watch, { cwd: "./pug/" }, stageHTML); });
gulp.task("deploy-html", ["stage-css", "stage-js"], deployHTML);


////////////////////////////////////////////////////////////////////////////////////////////////////
// css /////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
const sass = require("gulp-sass");
// const groupMediaQueries = require("gulp-group-css-media-queries");
const cssnano = require("gulp-cssnano");
const livereload = require("gulp-livereload");

CONFIG.css = { };
CONFIG.css.source = ["./scss/vlt.scss"];
CONFIG.css.watch = ["**/**.scss"];

const stageCSS = () => {
	gulp.src(CONFIG.css.source)
		.pipe(plumber())
		.pipe(sourcemaps.init())

		.pipe(sass({ outputStyle: "expanded" }))
		// .pipe(groupMediaQueries())
		.pipe(cssnano({ autoprefixer: { add: true, browsers: ["> 1%"] }, zindex: true }))

		.pipe(sourcemaps.write())
		.pipe(gulp.dest("./-/assets/", { mode: "0644" }))
		.pipe(gulp.dest("./../vlt-public/-/assets/", { mode: "0644" }))
		.pipe(livereload({ quiet: true }));

	// Copia arquivos para repositório público
	// gulp.src(CONFIG.css.source)
	// 	.pipe(plumber())
	// 	.pipe(sass({ outputStyle: "expanded" }))
	// 	.pipe(gulp.dest("./../vlt-public/public/", { mode: "0644" }));

	fs.copy("./scss/", "./../vlt-public/scss/");

	log(color.blue("CSS !!"));
};

gulp.task("stage-css", stageCSS);
gulp.task("watch-css", () => { livereload.listen(); gulp.watch(CONFIG.css.watch, { cwd: "./scss/" }, stageCSS); });


////////////////////////////////////////////////////////////////////////////////////////////////////
// js //////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const tsify = require("tsify");

CONFIG.js = { };
CONFIG.js.source = JSON.parse(fs.readFileSync("./js/modules.json"));
CONFIG.js.watch = ["**/**.js", "**/**.json"];

const stageJS = () => {
	CONFIG.js.source = JSON.parse(fs.readFileSync("./js/modules.json"));

	gulp.src(CONFIG.js.source)
		.pipe(plumber())
		.pipe(sourcemaps.init())

		.pipe(concat("vlt.js"))
		.pipe(babel({ presets: ["@babel/env"] }))

		.pipe(sourcemaps.write())
		.pipe(gulp.dest("./-/assets/", { mode: "0644" }))
		.pipe(gulp.dest("./../vlt-public/-/assets/", { mode: "0644" }));

	gulp.src(CONFIG.js.source)
		.pipe(plumber())
		.pipe(concat("vlt.js"))
		.pipe(gulp.dest("./../vlt-public/js/", { mode: "0644" }));

	log(color.yellow("JS !!"));
};

gulp.task("ts", function () {
	return browserify({
		basedir: ".",
		debug: false,
		entries: ["./ts/vlt.ts"],
		cache: { },
		packageCache: { }
	})
		.plugin(tsify)
		.bundle()
		.pipe(source("bundle.js"))
		.pipe(gulp.dest("./-/"));
});

gulp.task("stage-js", stageJS);
gulp.task("watch-js", () => { gulp.watch(CONFIG.js.watch, { cwd: "./js/" }, stageJS); });


////////////////////////////////////////////////////////////////////////////////////////////////////
// assets //////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
let assets = [
	{
		"title": "service-worker",
		"type": "js",
		"source": "./assets/service-worker.js",
		"destination": "/",
		"filename": "service-worker.js"
	},
	{
		"title": "manifest",
		"type": "json",
		"source": "./assets/manifest.json",
		"destination": "/-/vlt/",
		"filename": "manifest.json"
	}
];

const deployAssets = () => {
	assets.forEach((asset) => {
		let source = gulp.src(asset["source"]).pipe(plumber());

		if (asset["type"] === "js") {
			source.pipe(babel({ presets: ["@babel/env"] })).pipe(uglify());
		}

		source.pipe(rename(asset["filename"]))
			.pipe(sftp({
			host: "ftp.emitremmus.com",
			remotePath: "/home/artjacob/emitremmus.com" + asset["destination"],
			auth: "artjacob"
		}));
	});

	log(color.white("Assets !!"));
};

const purgeCache = () => {
	let file_list = [ ];

	assets.forEach((asset) => {
		let file_url = "https://emitremmus.com" + asset["destination"] + asset["filename"];
		file_list.push(file_url);
	});

	request({
		method: "POST",
		url: "https://api.cloudflare.com/client/v4/zones/5df2061be0196c924bc64f7f3b79c10c/purge_cache",
		headers: {
			"Cache-Control": "no-cache",
			"Content-Type": "application/json",
			"X-Auth-Key": "49f54c22994fcb1d3880be3cf3ceb3e8dba1d",
			"X-Auth-Email": "aacj03@gmail.com"
		},
		body: { files: file_list },
		json: true
	}, (error, response, body) => {
		if (error) throw new Error(error);
		log(color.gray("Assets Cache Purged !!"));
		// console.log(body);
	});

};

gulp.task("purge-cache", purgeCache);
gulp.task("deploy-assets", deployAssets);
gulp.task("deploy", ["deploy-html", "deploy-assets"], purgeCache);
