'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jasmine = require('gulp-jasmine');
var Server = require('karma').Server;
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var runSequence = require('run-sequence');


gulp.task('js', function () {
    return gulp.src([
	'./Scripts/App.js',
	'./Scripts/Src/*.js',
	'./Scripts/lib/*.js'
    ])
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'))

});

var testFiles = [
  'Scripts/lib/weather.js',
  'Scripts/spec/lib/weather-spec.js'
];

gulp.task('unittest', function (done) {
    var config = {
        configFile: __dirname + "/weather.conf.js",
        singleRun: true,
        autoWatch: false
    };

    var server = new Server(config, done);
    server.start();
});

gulp.task('min', function () {
    return gulp.src([
     './Scripts/App.js',
     './Scripts/Src/*.js',
     './Scripts/lib/*.js'
    ])
         .pipe(concat('sharepoint.js')) //the name of the resulting file
         .pipe(uglify())
         .pipe(gulp.dest('./Scripts/Dest')) //the destination folder
         .pipe(notify({ message: 'Finished minifying JavaScript' }));

});

gulp.task('build', function () {
    runSequence('js', 'unittest', 'min', function () {
        console.log('Run something else');
    });
});
//gulp.task('default', ['codecheck','min']);