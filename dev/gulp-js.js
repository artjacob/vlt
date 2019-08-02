////////////////////////////////////////////////////////////////////////////////////////////////////
// gulp / js ///////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
const { src, dest, watch } = require("gulp");
const log = require("fancy-log");
const color = require("ansi-colors");
const config = require("./gulp-config.js");

// Módulos específicos para JS
const concat = require("gulp-concat");
const babel = require("gulp-babel");

let tasks = { };

////////////////////////////////////////////////////////////////////////////////////////////////////

// Watch
tasks["watch"] = function watchJS(done) {
    watch(config["js"]["watch"], { "cwd": config["js"]["dir"] }, tasks["stage"]);
    done();
};

// Stage
tasks["stage"] = function stageJS(done) {
    src(config["js"]["source"], { sourcemaps: true })
        .pipe(concat("vlt.js"))
        .pipe(babel({ presets: ["@babel/env"] }))
        .pipe(dest(config["js"]["destination"]["development"], { sourcemaps: true, mode: "0644" }));

    log(color.yellow("JS !!"));
    done();
};

module.exports = tasks;
