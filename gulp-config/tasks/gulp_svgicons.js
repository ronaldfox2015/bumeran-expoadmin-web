function Task(gulp, pathFiles, plugins, functions){
  var runTasks = function () {
    gulp.task('svgicons', function() {
      return gulp.src(pathFiles.src.icons + "/*.svg")
        .pipe(plugins.rename({prefix: 'g-icon-'}))
        .pipe(plugins.svgmin())
        .pipe(plugins.svgstore({ inlineSvg: true }))
        .pipe(gulp.dest(pathFiles.src.svgicons ));
    });
  }

  return {
    run : runTasks
  }
}

module.exports = Task;

