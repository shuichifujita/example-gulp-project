/*/--------------------------------\*\
|*| REQUIRES
\*\--------------------------------/*/
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

/*/--------------------------------\*\
|*| TASKS
\*\--------------------------------/*/
// Copy html file to public directory
gulp.task('compress:images', function() {
  var files = ['./source/assets/**/*.+(png|jpg|svg)'];
  gulp.src(files)
      .pipe(imagemin())
      .pipe(gulp.dest('./build/img/'));
})
