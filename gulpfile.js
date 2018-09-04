var gulp            = require("gulp"),
    imagemin        = require("gulp-imagemin"),
    imageminMozjpeg = require("imagemin-mozjpeg"),
    hash            = require("gulp-hash"),
    del             = require("del")

gulp.task("images", function () {
  gulp.src("assets/images/**/*")
    .pipe(imagemin([
      imageminMozjpeg({
        quality: 80
      }),
      imagemin.svgo({
    		plugins: [
    			{removeViewBox: true},
    			{cleanupIDs: false}
    		]
    	})
    ]))
    .pipe(gulp.dest("static/images"))
})

// Set production build as default task
gulp.task("default", ["images"])
