const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');
const excludeGitignore = require('gulp-exclude-gitignore');

gulp.task('eslint', () => {
    return gulp.src('**/*.js')
        .pipe(excludeGitignore())
        .pipe(eslint())
        .pipe(eslint.formatEach())
        .pipe(eslint.failAfterError());
});

gulp.task('test', () => {
    gulp.src('test/**/*.js')
        .pipe(babel())
        .pipe(mocha({reporter: 'spec'}));
});
