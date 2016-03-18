var gulp = require("gulp"),
    less = require("gulp-less"),
    autoprefixer = require("gulp-autoprefixer");


gulp.task("task-01-10", function () {
    gulp.src("./task-01-10/src/index.less")
    .pipe(less().on('error', function (e) {
        console.log(e);
    }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./task-01-10/dist/'));
});
gulp.task('watch-01-10', function() {
    gulp.watch('./task-01-10/src/*.less', ['task-01-10']);
});