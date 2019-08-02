////////////////////////////////////////////////////////////////////////////////////////////////////
// gulp / html /////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
const { src, dest, watch } = require("gulp");
const log = require("fancy-log");
const color = require("ansi-colors");
const config = require("./gulp-config.js");

// Módulos específicos para HTML
const pug = require("gulp-pug");
const inline = require("gulp-inline-source");
const rename = require("gulp-rename");

let tasks = { };

////////////////////////////////////////////////////////////////////////////////////////////////////

// Watch
tasks["watch"] = function watchHTML(done) {
    watch(config["html"]["watch"], { "cwd": config["html"]["dir"] }, tasks["stage"]);
    done();
};

// Stage
tasks["stage"] = function stageHTML(done) {
    for (let channel in config["html"]["destination"]) {
        src(config["html"]["source"])
            .pipe(pug({
                "pretty": (channel === "development"? " " : false),
                "locals": {
                    "env": channel
                }
            }))
            .pipe(inline())
            .pipe(rename("index.html"))
            .pipe(dest(config["html"]["destination"][channel], { mode: "0644" }));
    }

    log(color.magenta("HTML !!"));
    done();
};

module.exports = tasks;
