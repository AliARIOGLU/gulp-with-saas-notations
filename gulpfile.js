const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function buildStyles() {
  return gulp
    .src("sass/*.scss")
    .pipe(sass())
    .pipe(purgecss({ content: ["*.html"] }))
    .pipe(gulp.dest("css"));
}

function watchTask() {
  gulp.watch(["sass/*.scss", "codex/**/*.scss", "*.html"], buildStyles);
}

// function streamTask() {
//   return gulp.src("*.js").pipe(gulp.dest("output"));
// }

// series -> task execute in order
exports.default = gulp.series(buildStyles, watchTask);

// parallel -> task execute in concurrency
// exports.default = gulp.parallel(buildStyles, watchTask);

// exports.default = streamTask;
