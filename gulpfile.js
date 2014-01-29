// Install dependence
// npm install gulp gulp-uglify gulp-minify-css gulp-imagemin gulp-useref gulp-jsvalidate gulp-concat gulp-cache

var 
gulp   	    = require('gulp'),
uglify      = require('gulp-uglify'),
cssUglify   = require('gulp-minify-css'),
imagemin    = require('gulp-imagemin'),
useref      = require('gulp-useref'),
jsValidate  = require('gulp-jsvalidate'),
concat      = require('gulp-concat'),
cache       = require('gulp-cache'),
config      = {
  paths: {
    css     : 'assets/css/*.css',
    cssLibs : 'assets/css/libs/*.css',
    js      : 'assets/js/*.js',
    jsLibs  : 'assets/js/libs/*.js',
    imgs    : 'assets/imgs/*',
    html    : 'assets/*.html',
  },
  pathsMin: {
    css    : 'deploy/css/',
    js     : 'deploy/js/',
    imgs   : 'deploy/imgs/',
    html   : 'deploy/',
  },
  tasks : {
    js      : 'js',
    jsLibs  : 'jsLibs',
    css     : 'css',
    cssLibs : 'cssLibs',
    html    : 'html',
    imgs    : 'imgs'
  }
}

/*
  Task js
  path: assets/js/*.js
  save to: deploy/js/all.js
  dependece: gulp-jsvalidate, gulp-concat, gulp-uglify
*/
gulp.task(config.tasks.js, function() {
  gulp.src(config.paths.js)
    .pipe(jsValidate())
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(gulp.dest(config.pathsMin.js));
});

/*
  Task jsLibs
  path: assets/js/libs/*.js
  save to: deploy/js/plugins.js
  dependece: gulp-jsvalidate, gulp-concat, gulp-uglify
*/
gulp.task(config.tasks.jsLibs, function() {
  gulp.src(config.paths.jsLibs)
    .pipe(concat("plugins.js"))
    .pipe(uglify())
    .pipe(gulp.dest(config.pathsMin.js))
});

/*
  Task css
  path: assets/css/*.css
  save to: deploy/css/all.css
  dependece: gulp-concat, gulp-minify-css
*/
gulp.task(config.tasks.css, function () {
  gulp.src(config.paths.css)
    .pipe(concat("all.css"))
    .pipe(cssUglify())
    .pipe(gulp.dest(config.pathsMin.css));
});

/*
  Task cssLibs
  path: assets/css/libs/*.css
  save to: deploy/css/plugins.css
  dependece: gulp-concat, gulp-minify-css
*/
gulp.task(config.tasks.cssLibs, function() {
  gulp.src(config.paths.cssLibs)
    .pipe(concat("plugins.css"))
    .pipe(cssUglify())
    .pipe(gulp.dest(config.pathsMin.css))
});	

/*
  Task html
  path: assets/*.html
  save to: deploy/
  dependece: gulp-useref
*/
gulp.task(config.tasks.html, function () {
  gulp.src(config.paths.html)
    .pipe(useref())
    .pipe(gulp.dest(config.pathsMin.html));
}); 

/*
  Task imgs
  path: assets/imgs/*
  save to: deploy/imgs/
  dependece: gulp-cache, gulp-imagemin
*/
gulp.task(config.tasks.imgs, function () {
  gulp.src(config.paths.imgs)
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest(config.pathsMin.imgs));
});

// Task watch
gulp.task('watch', function() {
  gulp.watch(config.paths.html, function() {
    gulp.run(config.tasks.html);
    gulp.run(config.tasks.imgs);
  });
  gulp.watch(config.paths.css, function() {
    gulp.run(config.tasks.css);
    gulp.run(config.tasks.cssLibs);
  });
  gulp.watch(config.paths.js, function() {
    gulp.run(config.tasks.js);
    gulp.run(config.tasks.jsLibs);
  });
});

// Task default
gulp.task('default', function() {
		gulp.run('watch');
});
