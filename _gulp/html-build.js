/*/--------------------------------\*\
|*| REQUIRES
\*\--------------------------------/*/
var gulp = require('gulp');

/*/--------------------------------\*\
|*| TASKS
\*\--------------------------------/*/
// Copy html file to public directory
gulp.task('copy:html', function() {
  var files = ['./sources/views/**/*.html'];
  gulp.src(files)
      .pipe(gulp.dest('./public/'));
})
