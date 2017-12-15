var gulp         = require("gulp"),
    autoprefixer = require("gulp-autoprefixer"),
    imagemin     = require("gulp-imagemin"),
    sass         = require("gulp-sass"),
    hash         = require("gulp-hash"),
    del          = require("del")

//Compile SCSS files to CSS
gulp.task("sass", function () {
  del(["static/css/**/*"])
  gulp.src("src/sass/**/*.sass")
    .pipe(sass({outputStyle : "compressed"}))
    .pipe(autoprefixer({browsers : ["last 20 versions"]}))
    .pipe(hash())
    .pipe(gulp.dest("static/css"))
    .pipe(hash.manifest("hash.json"))
    .pipe(gulp.dest("data/styles"))
})

// Hash images
gulp.task("images", function () {
  del(["static/images/**/*"])
  gulp.src("src/images/**/*")
    .pipe(imagemin({progressive: true}))
    .pipe(hash())
    .pipe(gulp.dest("static/images"))
    .pipe(hash.manifest("hash.json"))
    .pipe(gulp.dest("data/images"))
})

// Hash js files
gulp.task("js", function () {
  del(["static/js/**/*"])
  gulp.src("src/js/**/*")
    .pipe(imagemin({progressive: true}))
    .pipe(hash())
    .pipe(gulp.dest("static/js"))
    .pipe(hash.manifest("hash.json"))
    .pipe(gulp.dest("data/js"))
})

// Pass favicon through separately
gulp.task("favicon", function () {
  gulp.src("src/images/favicon.ico")
      .pipe(gulp.dest("static/images"))
})

// Watch asset folder for changes
gulp.task("watch", ["dev-sass", "js", "images", "favicon"], function () {
  gulp.watch("src/sass/**/*", ["sass"])
  gulp.watch("src/js/**/*", ["js"])
  gulp.watch("src/images/**/*", ["images"])
  gulp.watch("src/images/favicon.ico", ["favicon"])
})

// Set production build as default task
gulp.task("default", ["sass", "js", "images", "favicon"])
