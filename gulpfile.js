var gulp = require("gulp"),
    less = require("gulp-less"),
    autoprefixer = require("gulp-autoprefixer");

// task-01-10
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

// task-01-11
gulp.task("task-01-11", function () {
    gulp.src("./task-01-11/src/css/index.less")
    .pipe(less().on('error', function (e) {
        console.log(e);
    }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./task-01-11/dist/css/'));
});
gulp.task('watch-01-11', function() {
    gulp.watch('./task-01-11/src/css/*.less', ['task-01-11']);
});