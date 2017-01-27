const gulp = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');
const nodemon = require('gulp-nodemon');
const child_process = require('child_process');

gulp.task('connect', function(){
  connect.server({
    root: 'public',
    livereload: true,
  });
});

gulp.task('nodemon', function (cb) {

  var started = false;

  return nodemon({
    script: 'index.js'
  }).on('start', function () {
    // to avoid nodemon being started multiple times
    if (!started) {
      cb();
      started = true;
    }
  });
});

gulp.task('redis-start', function() {
  child_process.exec('redis-server', function(err, stdout, stderr) {
    console.log(stdout);
    if (err !== null) {
      console.log('exec error: ' + err);
    }
  });
});

// keeps gulp from crashing for scss errors
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
      .pipe(sass({ errLogToConsole: true }))
      .pipe(gulp.dest('./public/css'));
});

gulp.task('livereload', function (){
  gulp.src('./public/**/*')
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./public/**/*', ['livereload']);
});

gulp.task('default', ['connect', 'nodemon', 'redis-start', 'livereload', 'watch', 'sass']);