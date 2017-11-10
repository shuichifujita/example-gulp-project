/*/--------------------------------\*\
|*| REQUIRES
\*\--------------------------------/*/
var gulp = require('gulp');
var eslint = require('gulp-eslint');

/*/--------------------------------\*\
|*| TASKS
\*\--------------------------------/*/
// lint seting in commentout
/*eslint arrow-parens: [2, "always"]*/
/*eslint-env es6*/
// ESlint
gulp.task('lint:js', function() {
	var files = ['./sources/**/*.js'];
	return gulp.src(files)
		.pipe(eslint({
			"parser": "babel-eslint",
			"rules": {
				'strict': 2
			},
			"globals": [
				"jQuery",
				"$"
			],
			"env": {
				"node": true,
				"es6": true,
				"browser": true
			},
			"ecmaFeatures": {
				"arrowFunctions": true,
				"blockBindings": true,
				"forOf": true,
				"jsx": true
			}
		}))
		.pipe(eslint.format())
		.pipe(eslint.failOnError());
});
