var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCss = require('gulp-clean-css');
var googlecdn = require('gulp-google-cdn');
var sass = require('gulp-sass');
var del = require('del');
var bower = require('gulp-bower');


var devTasks = ['clean', 'compress-js-dev', 'sass-dev'];
var prodTasks = ['clean', 'compress-js', 'sass', 'minify-css', 'cdn'];


gulp.task('default', ['bower', 'dev'], function () {
});
gulp.task('clean', function () {
	return del([
		'dist/**/*.css',
		'dist/**/*.scss',
		'dist/**/*.js',
	]);
});


//dev
gulp.task("compress-js-dev", function () {
	return gulp.src('js/*.js')
		.pipe(uglify(
			{
				"compress": false,
				"preserveComments": "all",
				"output": {
					"beautify": true,
					"comments": true,
					"bracketize": true
				}
			}
		))
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('sass-dev', function () {
	return gulp.src('sass/**/*.scss') // path to your file
		.pipe(sass(
			{
				outputStyle: 'expanded',
				sourceComments: true
			}
		))
		.pipe(minifyCss(
			{
				"benchmark": true,
				"compatibility": 'ie8',
				"keepSpecialComments": "*",
				"keepBreaks": true
			}
		))
		//.pipe(concat('all.css'))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('bower', function () {
	return bower({cmd: 'update'});
});

// prod
gulp.task("compress-js", function () {
	return gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('cdn', function () {
	return gulp.src('index.html')
		.pipe(googlecdn(require('./bower.json')))
		.pipe(gulp.dest('dist'));
});

gulp.task('minify-css', function () {
	return gulp.src('css/*.css') // path to your file
		.pipe(minifyCss())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('sass', function () {
	return gulp.src('sass/**/*.scss') // path to your file
		.pipe(sass(
			{
				outputStyle: 'expanded',
				sourceComments: true
			}
		))
		.pipe(minifyCss())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('dev', devTasks, function () {
	gulp.watch(['css/**/*.css', 'js/**/*.js', 'sass/**/*.scss'], devTasks);
});

gulp.task('prod', prodTasks, function () {
	cssOptions = {};
});
