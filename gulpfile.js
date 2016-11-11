var gulp = require('gulp');
var minifyCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var less = require('gulp-less');

gulp.task('less', function () {
  gulp.src('style/less/main.less')
  .pipe(less())
  .pipe(concat('main.css'))
  .pipe(gulp.dest('style/'))
  .pipe(minifyCSS(''))
  .pipe(rename({suffix: ".min"}))
  .pipe(gulp.dest('style/'));
});

gulp.task('watch', function() {
    gulp.watch('style/less/main.less', ['less'])
});
