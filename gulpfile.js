var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');


var cssOptions = {};
var jsOptions = {};

gulp.task('default', ['dev'], function () {
});

gulp.task("compress-js", function () {
	return gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('minify-css', function () {
	return gulp.src('css/*.css') // path to your file
		.pipe(minifyCss())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('dev', ['compress-js', 'minify-css'], function () {
	cssOptions = {};
	jsOptions = {
		"preserveComments": "all",
		"beautify": true
	};
	gulp.watch(['css/**/*.css', 'js/**/*.js'], ['compress-js', 'minify-css']);
});
