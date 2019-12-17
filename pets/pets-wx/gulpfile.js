const gulp = require('gulp')
const rename = require('gulp-rename')
const sass = require('gulp-sass')

// 嵌套输出方式 nested
// 展开输出方式 expanded 
// 紧凑输出方式 compact 
// 压缩输出方式 compressed
taskSass = function () {
    console.log("sass buld")

}
gulp.task('sass_pages', function () {
    return gulp.src('pages/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(rename({extname: ".wxss"}))
        .pipe(gulp.dest('pages'));
});

gulp.task('sass_wxss', function () {
    return gulp.src('wxss/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(rename({extname: ".wxss"}))
        .pipe(gulp.dest('wxss'));
});
gulp.task('watch', function () {
    gulp.watch("pages/**/*.scss", gulp.parallel("sass_pages"))
    gulp.watch("wxss/*.scss", gulp.parallel("sass_wxss"))
});