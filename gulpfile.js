var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');

// can install pump to replace pipe if you want to trace errors

gulp.task('minify-css', function () {
    return gulp.src('public/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('build/css'))
});

gulp.task('minify-js', function () {
    return gulp.src('public/js-files/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js-files'));
});


gulp.task('minify-html', function () {
    return gulp.src('public/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('build'));
});

gulp.task('move', function () {
   return  gulp.src([
       'public/**/*',
       '!public/css/**',
       '!public/js-files/**',
       '!public/css',
       '!public/js-files',
       '!public/*.html'
   ])
       .pipe(gulp.dest('build'))
});

gulp.task('minify', gulp.parallel('minify-js', 'minify-css', 'minify-html'));
gulp.task('build', gulp.series('minify', 'move'));
