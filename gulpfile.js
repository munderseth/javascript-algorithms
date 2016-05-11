const path = require('path');
const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');
const istanbul = require('gulp-istanbul');
const coveralls = require('gulp-coveralls');
const excludeGitignore = require('gulp-exclude-gitignore');

gulp.task('eslint', () => {
    return gulp.src('**/*.js')
        .pipe(excludeGitignore())
        .pipe(eslint())
        .pipe(eslint.formatEach())
        .pipe(eslint.failAfterError());
});

gulp.task('pre-test', () => {
    return gulp.src('algorithms/**/*.js')
        .pipe(istanbul({
            includeUntested: true
        }))
        .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], () => {
    gulp.src('test/**/*.js')
        .pipe(mocha({reporter: 'spec'}))
        .pipe(istanbul.writeReports())
        .pipe(istanbul.enforceThresholds({thresholds: {global: 100}}));
});

gulp.task('coveralls', ['test'], () => {
    if (!process.env.CI) {
        return;
    }

    return gulp.src(path.join(__dirname, 'coverage/lcov.info'))
        .pipe(coveralls());
});

gulp.task('default', ['eslint', 'coveralls']);
