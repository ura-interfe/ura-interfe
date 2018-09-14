var gulp = require('gulp');
var compass = require('gulp-compass');
var plumber = require('gulp-plumber');
var webserver = require('gulp-webserver');

// webserver
gulp.task('webserver', function () {
    gulp.src('.') 
        .pipe(webserver({
            host: 'localhost',
            port: 8000,
            livereload: true
        }));
});

// compass
gulp.task('compass', function(){
    gulp.src('sass/**/*.scss')
    .pipe(plumber())
    .pipe(compass({
        config_file: 'config.rb',
        comments: false,
        css: 'stylesheets/',
        sass: 'sass/'
    }));
});

//watch
gulp.task('watch', function(){
  gulp.watch('sass/*.scss',['compass']);
});

gulp.task('default', ['watch' ,'webserver']);