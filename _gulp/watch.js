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
gulp.task('build', ['compress:images'], function() {
  // html
  gulp.watch('./sources/views/**/*.html', ['copy:html']);
  // css
  gulp.watch('./sources/scss/**/*.scss', ['build:sass']);
  // js
  gulp.watch('./sources/js/**/*.js', ['build:js']);
  // images
  gulp.watch('./sources/assets/**/*.+(png|jpg|svg)', ['compress:images']);
});
