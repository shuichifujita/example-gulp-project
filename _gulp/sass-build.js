/*/--------------------------------\*\
|*| REQUIRES
\*\--------------------------------/*/
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

/*/--------------------------------\*\
|*| TASKS
\*\--------------------------------/*/
// SCSS
gulp.task('build:sass', function() {
  var files = ['./source/scss/app.scss'];
  gulp.src(files)
    .pipe(plumber()) // error時にwatchを止めないやつ
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./build/css/'));
});
