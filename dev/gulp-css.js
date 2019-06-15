////////////////////////////////////////////////////////////////////////////////////////////////////
// gulp / css //////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
const gulp = require("gulp");
const browserSync = require("browser-sync").get("gulp");
const log = require("fancy-log");
const color = require("ansi-colors");
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");

// Módulos específicos para CSS
const sass = require("gulp-sass");
const groupMediaQueries = require("gulp-group-css-media-queries");
const cssnano = require("gulp-cssnano");

// Tarefas
