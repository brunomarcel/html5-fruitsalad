var 
gulp   	    = require('gulp'),
uglify      = require('gulp-uglify'),
cssUglify   = require('gulp-minify-css'),
imagemin    = require('gulp-imagemin'),
minifyHTML  = require('gulp-minify-html'),
rename      = require("gulp-rename"),
concat      = require('gulp-concat'),
config      = {
  paths: {
    css    : 'assets/css/*.css',
    js     : 'assets/js/*js',
    jsLibs : 'assets/js/libs/*js',
    imgs   : 'assets/imgs/',
    html   : 'assets/*.html',
  },
  pathsMin: {
    css    : 'deploy/css/',
    js     : 'deploy/js/',
    jsLibs : 'assets/js/libs/*js',
    imgs   : 'deploy/imgs/',
    html   : 'deploy/',
  },
  tasks : {
    js     : 'js',
    jsLibs : 'jsLibs',
    css    : 'css',
    html   : 'html',
    imgs   : 'imgs'
  };
}

gulp.task(config.tasks.js, function() {
  gulp.src(config.paths.js)
    .pipe(uglify())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(concat("all.js"))
    .pipe(gulp.dest(config.pathsMin.js))
});

gulp.task(config.tasks.jsLibs, function() {
  gulp.src(config.paths.jsLibs)
    .pipe(uglify())
    .pipe(concat("plugins.js"))
    .pipe(gulp.dest(config.pathsMin.js))
});

gulp.task(config.tasks.css, function (e) {
  gulp.src(config.paths.css)
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(cssUglify())
    .pipe(gulp.dest(config.pathsMin.css));
});	

gulp.task(config.tasks.html, function () {
  gulp.src(config.paths.html)
    .pipe(minifyHTML())
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
  });
  gulp.watch(config.paths.css, function() {
    gulp.run(config.tasks.css);
  });
  gulp.watch(config.paths.js, function() {
    gulp.run(config.tasks.js);
  });
  gulp.watch(config.paths.jsLibs, function() {
    gulp.run(config.tasks.jsLibs);
  });
  gulp.watch(config.paths.imgs, function() {
    gulp.run(config.tasks.imgs);
  });
  
  gutil.log('Is watching!');
  
});

gulp.task('default', function() {
		gulp.run('watch');
});