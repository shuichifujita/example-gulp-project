/* -------------------------------- *\
 * REQUIRES
\* -------------------------------- */
var gulp = require('gulp');
var watch = require('gulp-watch');

//var errorMessage = "Error: <%= error.message %>";

/*/--------------------------------\*\
|*| TASKS
\*\--------------------------------/*/
// 直列。前のタスクが終了したら次へ。
// watchでのタスク指定は依存関係にある一番最後のもの。
gulp.task('run', function() {
  // css
  gulp.watch('./sources/scss/**/*.scss', ['build:sass']);
  // js
  gulp.watch('./sources/js/**/*.js', ['build:js']);
});
