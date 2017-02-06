'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jasmine = require('gulp-jasmine');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var runSequence = require('run-sequence');


gulp.task('js', function() {
	return gulp.src([
	'./SharePointApp2/Scripts/App.js',
	'./SharePointApp2/Scripts/Src/*.js',
	'./SharePointApp2/Scripts/lib/*.js'
])
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'))
	
});

gulp.task('unittest', function () {
    return gulp.src('./SharePointApp2/Scripts/spec/lib/*.js')
       .pipe(jasmine());
});

gulp.task('min', function () {
   return gulp.src([
	'./SharePointApp2/Scripts/App.js',
	'./SharePointApp2/Scripts/Src/*.js',
	'./SharePointApp2/Scripts/lib/*.js'
])
        .pipe(concat('sharepoint.js')) //the name of the resulting file
        .pipe(uglify())
        .pipe(gulp.dest('./SharePointApp2/Scripts/Dest')) //the destination folder
        .pipe(notify({ message: 'Finished minifying JavaScript'}));

});

gulp.task('watch', function() {
    gulp.watch('./SharePointApp2/Scripts/**/*.js');
});

gulp.task('build', function() {
    runSequence('js', 'unittest', 'min', function() {
        console.log('Run something else');
    });
});
//gulp.task('default', ['codecheck','min']);