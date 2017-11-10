/*/--------------------------------\*\
|*| REQUIRES
\*\--------------------------------/*/
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

/*/--------------------------------\*\
|*| TASKS
\*\--------------------------------/*/
gulp.task('sync', function() {
	browserSync.init({
		server: {
			baseDir: './public/'
		}
	});
});
