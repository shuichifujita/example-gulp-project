/*/--------------------------------\*\
|*| REQUIRE
\*\--------------------------------/*/
var gulp = require('gulp');
var requireDir = require('require-dir');
var dir = requireDir('./_gulp');

//var errorMessage = "Error: <%= error.message %>";

/*/--------------------------------\*\
|*| TASKS
\*\--------------------------------/*/

// Default
gulp.task('default', ['run', 'sync']);
console.log('[**** GULP START! ****]');