/*/--------------------------------\*\
|*| REQUIRES
\*\--------------------------------/*/
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var babelify = require('babelify');
var browserify = require('browserify');
var through2 = require('through2');

/*/--------------------------------\*\
|*| TASKS
\*\--------------------------------/*/
gulp.task('build:js', ['lint:js'], function() {
  var files = ['./source/js/app.js'];

  gulp.src(files)
    .pipe(plumber()) // error時にwatchを止めないやつ
    .pipe(through2.obj(function(file, encode, callback) {
      browserify(file.path)
        .transform(babelify)
        .bundle(function(err, res) {
          if (err) {
            return callback(err)
          };
          file.contents = res;
          callback(null, file)
        });
    }))
    .on("error", function(err) { console.log("Error: " + err.message); })
    .pipe(gulp.dest('./build/js/'));
});
