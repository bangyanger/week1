var gulp = require("gulp");
var scss = require("gulp-sass");
var web = require("gulp-webserver");
var uglify = require("gulp-uglify");
var watch = require("gulp-watch");
var cleancss = require("gulp-clean-css");
var concat = require("gulp-concat")


gulp.task("scss", function() {
    return gulp.src("src/scss/index.scss")
        .pipe(scss())
        .pipe(gulp.dest("src/css/"))
})

gulp.task("w", function() {
    return gulp.watch("src/css/index.css")
        .pipe(gullp.dest("src/css/"))
})

gulp.task('web', function() {
    return gulp.src("src")
        .pipe(web({
            liverelode: true,
            open: true
        }))
})