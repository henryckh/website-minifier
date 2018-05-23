# website-minifier
`website-minifier` is an example on how to use different gulp dependencies to minimize Javascript, CSS, HTML.  
 You can keep a copy of original Javascript, HTML, CSS while outputting the minimized Javascript, HTML, CSS to /build.  
 [Gulp](https://github.com/gulpjs/gulp) is a powerful toolkit for automation.

## Installation 
```sh
$npm install
````

## Example Usage
```js
// minify and move css from public to build/css 
gulp.task('minify-css', function () {
    return gulp.src('public/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('build/css'))
});

// minify and move js from public to build/js-files
gulp.task('minify-js', function () {
    return gulp.src('public/js-files/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js-files'));
});

// minify and move html from public to build/
gulp.task('minify-html', function () {
    return gulp.src('public/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('build'));
});

// custom command to copy files into build
// ! stand for exclude
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
```

## Build the website to /build directory
Build the minify css, javascript and html to /build.
```sh
$gulp build
```

## Run Website and Inspect the different
```sh
$npm start
```
Original Website: http://localhost:3000
Minimized Website: http://localhost:3000/build
