var gulp           = require('gulp'),
    gutil          = require('gulp-util' ),
    sass           = require('gulp-sass'),
    sourcemaps     = require('gulp-sourcemaps'),
    browserSync    = require('browser-sync'),
    concat         = require('gulp-concat'),
    uglify         = require('gulp-uglify'),
    cleanCSS       = require('gulp-clean-css'),
    rename         = require('gulp-rename'),
    del            = require('del'),
    imagemin       = require('gulp-imagemin'),
    cache          = require('gulp-cache'),
    autoprefixer   = require('gulp-autoprefixer'),
    notify         = require("gulp-notify"),
    csso 		   = require('gulp-csso'),
    prettify       = require('gulp-html-prettify');


// Скрипты проекта
gulp.task('common-js', function() {
    return gulp.src([
        'app/js/common.js',
        'app/js/plugins-api.js',
        'app/js/form.js',
        'app/js/waypoints.js'
    ])
        .pipe(concat('common.min.js'))
        .pipe(gulp.dest('app/js'));
});

gulp.task('js', ['common-js'], function() {
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js',
        'app/libs/jquery.countdown/dist/jquery.countdown.min.js',
        'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
        'app/libs/slick-carousel/slick/slick.js',
        'app/libs/waypoints/lib/jquery.waypoints.min.js',
        'app/libs/jquery-mask-plugin/src/jquery.mask.js',
        'app/libs/jquery-animateNumber-master/jquery.animateNumber.min.js',
        'app/libs/air-datepicker/dist/js/datepicker.min.js',
        'app/libs/vivus/dist/vivus.min.js',
        'app/js/common.min.js' // Всегда в конце
    ])
        .pipe(concat('scripts.min.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {browserSync({server: {baseDir: 'app'}, notify: false});});

gulp.task('sass', function() {
    return gulp.src('app/sass/**/*.sass')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
        .pipe(rename({suffix: '.min', prefix : ''}))
        .pipe(autoprefixer(['> 2%','last 15 versions']))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('sass_build', function() {
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
        .pipe(rename({suffix: '.min', prefix : ''}))
        .pipe(autoprefixer(['> 2%','last 15 versions']))
        .pipe(csso())
        .pipe(cleanCSS())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('ie', function() {
    return gulp.src('app/sass/plugin_libs/ie9.sass')
        .pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
        .pipe(rename({suffix: '.min', prefix : ''}))
        .pipe(autoprefixer(['ie 9']))
        .pipe(csso())
        .pipe(cleanCSS())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}));
});
gulp.task('ie_old', function() {
    return gulp.src('app/sass/plugin_libs/ie8.sass')
        .pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
        .pipe(rename({suffix: '.min', prefix : ''}))
        .pipe(autoprefixer(['ie 8']))
        .pipe(csso())
        .pipe(cleanCSS())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['sass', 'ie', 'ie_old', 'js', 'browser-sync'], function() {
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/sass/plugin_libs/ie8.sass', ['ie_old']);
    gulp.watch('app/sass/plugin_libs/ie.sass', ['ie']);
    gulp.watch('app/libs/**/**/**/*.sass', ['sass']);
    gulp.watch('app/js/*.js', ['js']);
    gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('imagemin', function() {
    return gulp.src('app/img/**/*')
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('html_prettify', function() {
    gulp.src('dist/index.html')
        .pipe(prettify({indent_char: '', indent_size: -1}))
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['removedist', 'imagemin', 'js', 'sass_build', 'ie', 'ie_old'], function() {
    var buildFiles = gulp.src([
        'app/*.html',
        'app/.htaccess'
    ]).pipe(gulp.dest('dist'));
    var buildCss = gulp.src([
        'app/css/*.css',
    ]).pipe(gulp.dest('dist/css'));
    var buildJs = gulp.src([
        'app/js/html5shiv.min.js',
        'app/js/scripts.min.js'
    ]).pipe(gulp.dest('dist/js'));
    var buildFonts = gulp.src([
        'app/fonts/**/*'
    ]).pipe(gulp.dest('dist/fonts'));
});

gulp.task('removedist', function() { return del.sync('dist'); });
gulp.task('clearcache', function () { return cache.clearAll(); });

gulp.task('default', ['watch']);
