var gulp   = require('gulp');

// The dist task
gulp.task('dist', function () {
  return gulp.src('src/client/lib/*')
    .pipe(gulp.dest('dist/'))
})

// The default task
gulp.task('default', ['dist']);
