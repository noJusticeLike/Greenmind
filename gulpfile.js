const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");

gulp.task('sass-min', function () {
    return gulp.src('sass/style.sass')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(rename("style.min.css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('css/'))
});

gulp.task('sass', function () {
    return gulp.src('sass/style.sass')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(rename("style.css"))
        .pipe(gulp.dest('css/'))
});



gulp.task('watch', function(){
	gulp.watch('sass/*.sass', gulp.series('sass', 'sass-min'));
});

gulp.task('default', gulp.series('sass', 'sass-min', 'watch'));