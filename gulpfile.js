var 
gulp   	    = require('gulp'),
uglify      = require('gulp-uglify'),
cssUglify   = require('gulp-minify-css'),
imagemin    = require('gulp-imagemin'),
minifyHTML  = require('gulp-minify-html'),
useref      = require('gulp-useref'),
jsValidate  = require('gulp-jsvalidate'),
config      = {
  paths: {
    css     : 'assets/css/*.css',
    cssLibs : 'assets/css/libs/*.css',
    js      : 'assets/js/*.js',
    jsLibs  : 'assets/js/libs/*.js',
    imgs    : 'assets/imgs/*',
    html    : 'assets/html/*.html',
  },
  pathsMin: {
    css    : 'deploy/css/',
    js     : 'deploy/js/',
    imgs   : 'deploy/imgs/',
    html   : 'deploy/',
  },
  tasks : {
    js       : 'js',
    jsLibs   : 'jsLibs',
    css      : 'css',
    cssLibs  : 'cssLibs',
    html     : 'html',
    imgs     : 'imgs'
  }
}

gulp.task(config.tasks.js, function() {
  gulp.src(config.paths.js)
    .pipe(jsValidate())
    .pipe(uglify())
    .pipe(gulp.dest(config.pathsMin.js));
});
gulp.task(config.tasks.jsLibs, function() {
  gulp.src(config.paths.jsLibs)
    .pipe(uglify())
    .pipe(gulp.dest(config.pathsMin.js))
});

gulp.task(config.tasks.css, function () {
  gulp.src(config.paths.css)
    .pipe(cssUglify())
    .pipe(gulp.dest(config.pathsMin.css));
});
gulp.task(config.tasks.cssLibs, function() {
  gulp.src(config.paths.cssLibs)
    .pipe(cssUglify())
    .pipe(gulp.dest(config.pathsMin.css))
});	
gulp.task(config.tasks.html, function () {
  gulp.src(config.paths.html)
    .pipe(minifyHTML())
    .pipe(useref())
    .pipe(gulp.dest(config.pathsMin.html));
}); 
gulp.task(config.tasks.imgs, function () {
  gulp.src(config.paths.imgs)
    .pipe(imagemin())
    .pipe(gulp.dest(config.pathsMin.imgs));
});


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

gulp.task('default', function() {
		gulp.run('watch');
});