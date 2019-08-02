////////////////////////////////////////////////////////////////////////////////////////////////////
// gulp / css //////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
const { src, dest, watch } = require("gulp");
const log = require("fancy-log");
const color = require("ansi-colors");
const config = require("./gulp-config.js");

// Módulos específicos para CSS
const sass = require("gulp-sass");
const groupMediaQueries = require("gulp-group-css-media-queries");
const cssnano = require("gulp-cssnano");
const browserSync = require("browser-sync").get("gulp");

let tasks = { };

////////////////////////////////////////////////////////////////////////////////////////////////////

// Watch
tasks["watch"] = function watchCSS(done) {
    watch(config["css"]["watch"], { "cwd": config["css"]["dir"] }, tasks["stage"]);
    done();
};

// Stage
tasks["stage"] = function stageCSS(done) {
    src(config["css"]["source"], { sourcemaps: true })
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(groupMediaQueries())
        .pipe(cssnano({ autoprefixer: { add: true, browsers: ["> 1%"] }, zindex: true }))
        .pipe(dest(config["css"]["destination"]["development"], { sourcemaps: true, mode: "0644" }))
        .pipe(browserSync.stream());

    log(color.cyan("CSS !!"));
    done();
};

module.exports = tasks;
