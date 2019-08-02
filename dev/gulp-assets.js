////////////////////////////////////////////////////////////////////////////////////////////////////
// gulp / assets ///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
const { src, dest, watch } = require("gulp");
const log = require("fancy-log");
const color = require("ansi-colors");
const config = require("./gulp-config.js");

// Módulos específicos para Assets
const fs = require("fs-extra");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

let tasks = { };

////////////////////////////////////////////////////////////////////////////////////////////////////

// Watch
tasks["watch"] = function watchAssets(done) {
    watch(config["assets"]["watch"], { "cwd": config["assets"]["dir"] }, tasks["stage"]);
    done();
};

// Stage
tasks["stage"] = function stageHTML(done) {
    config["assets"]["files"].forEach((file) => {
        let type = file["type"];
        let source = file["source"];

        fs.copyFileSync(source, file["destination"]["development"] + file["filename"]);

        if (type === "js") {
            src(source)
                .pipe(babel({ presets: ["@babel/env"] }))
                .pipe(uglify())
                .pipe(dest(file["destination"]["production"], { mode: "0644" }));
        }

        else if (type === "json") {
            let minified = fs.readJsonSync(source);
            fs.outputJsonSync(file["destination"]["production"] + file["filename"], minified);
        }

        else {
            fs.copyFileSync(source, file["destination"]["production"] + file["filename"]);
        }
    });

    log(color.green("Assets !!"));
    done();
};

module.exports = tasks;
