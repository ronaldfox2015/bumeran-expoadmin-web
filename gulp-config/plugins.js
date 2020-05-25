var Plugins = {};
// Plugins globals
Plugins.if            = require("gulp-if");
Plugins.runSequence   = require("run-sequence");
Plugins.fs            = require("fs");
Plugins.util          = require("gulp-util");
Plugins.notifier      = require("node-notifier");

// Plugins gulp styles
Plugins.lost          = require("lost");
Plugins.autoprefixer  = require("autoprefixer");
Plugins.cssmqpacker   = require("css-mqpacker");
Plugins.postcss       = require("gulp-postcss");
Plugins.rupture       = require("rupture");
Plugins.cssnano       = require("cssnano");
Plugins.stylus        = require("gulp-stylus");
Plugins.urlVersion    = require("gulp-css-url-versioner");
//Plugins gulp svgicons
Plugins.svgstore      = require("gulp-svgstore");
Plugins.svgmin        = require("gulp-svgmin");
Plugins.rename        = require("gulp-rename");

module.exports = Plugins;
