function Task(gulp, pathFiles, plugins, fn){

  var runTasks = function () {
    gulp.task('css', function(cb) {
      var processors = [
        plugins.lost(),
        plugins.autoprefixer(),
        plugins.cssmqpacker()
      ];
      if (fn.isProduction()) {
        processors.push(plugins.cssnano());
      }
      return gulp.src([pathFiles.src.app + "/**/*.styl", pathFiles.src.base + "/app.styl"], { base: "./" })
        .pipe(plugins.stylus({ use: [plugins.rupture()] }))
        .pipe(plugins.postcss(processors))
        .pipe(plugins.urlVersion({ lastcommit: true }))
        .pipe(gulp.dest("./"))
        .on('end', fn.successHandler);
    });
  };

  return {
    run : runTasks
  }
}

module.exports = Task;
