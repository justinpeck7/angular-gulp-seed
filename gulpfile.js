var gulp = require('gulp'),
    inject = require('gulp-inject'),
    concat = require('gulp-concat'),
    chalk = require('chalk'),
    clean = require('gulp-clean'),
    config = require('./build/config'),
    sequence = require('run-sequence'),
    concatCss = require('gulp-concat-css'),
    connect = require('gulp-connect'),
    gOpen = require('gulp-open');

const injectOrder = [
        './target/assets/angular.min.js',
        './target/assets/*.js',
        './target/*.js',
        './target/*/**/*.js',
        './target/*/*.js',
        './target/*.css',
        './target/*/**.css'
    ];

gulp.task('clean:target', function() {
    return gulp.src('target', {
            read: false
        })
        .pipe(clean())
        .on('end', function() {
            console.log(chalk.green('Target Cleaned'));
        });
});

gulp.task('copy:asset-scripts', function() {
    return gulp.src(config.asset_scripts)
        .pipe(gulp.dest('./target/assets'));
});

gulp.task('copy:asset-styles', function() {
    return gulp.src(config.asset_styles)
        .pipe(gulp.dest('./target/assets'));
});

gulp.task('copy:source', function() {
    return gulp.src(['./src/*/**', './src/*.js', './src/*/**/**.js', './src/*.css'])
        .pipe(gulp.dest('./target'));
});

gulp.task('inject:target', ['copy:source', 'copy:asset-scripts', 'copy:asset-styles'], function() {
    return gulp.src('./src/index.html')
        .pipe(inject(gulp.src(injectOrder, {
            read: false
        }), {
            ignorePath: 'target',
            addRootSlash: false
        }))
        .pipe(gulp.dest('./target'))
        .on('end', function() {
            console.log(chalk.green('Scripts injected'));
        });
});

gulp.task('default', function() {
    sequence('clean:target', 'inject:target', function() {
        console.log(chalk.green('Build completed'));
    });
});

gulp.task('clean:bin', function() {
    return gulp.src('./target/bin', {
            read: false
        })
        .pipe(clean())
        .on('end', function() {
            console.log(chalk.green('Target Cleaned'));
        });
});

gulp.task('concat-scripts', function() {
    return gulp.src(config.scripts)
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./target/bin'))
        .on('end', function() {
            console.log(chalk.green('Scripts Concatinated'));
        });
});

gulp.task('concat-styles', function() {
    return gulp.src(config.styles)
        .pipe(concatCss('main.css'))
        .pipe(gulp.dest('./target/bin'))
        .on('end', function() {
            console.log(chalk.green('Styles Concatinated'));
        });
});

gulp.task('inject:release', ['concat-scripts', 'concat-styles'], function() {
    gulp.src('./src/index.html')
        .pipe(inject(gulp.src(['./target/bin/*.css', 'target/bin/*.js'], {
            read: false
        }), {
            ignorePath: 'target/bin',
            addRootSlash: false
        }))
        .pipe(gulp.dest('./target/bin'))
        .on('end', function() {
            console.log(chalk.green('Release files injected'));
        });
});

gulp.task('release', function() {
    sequence('clean:bin', 'inject:release', function() {
        console.log(chalk.green('Release build completed'));
    });
});

gulp.task('serve', function() {
    gulp.watch(config.src_scripts.concat(config.src_styles), ['reload']);
    connect.server({
        root: './target',
        livereload: true
    });

    return gulp.src('./target/index.html')
        .pipe(gOpen({
            uri: 'http://localhost:8080',
            app: 'chrome'
        }));
});

gulp.task('reload', ['build:livereload'], function() {
    return gulp.src('./target')
        .pipe(connect.reload());
});

gulp.task('build:livereload', ['inject:target']);
