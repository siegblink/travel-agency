const gulp = require('gulp')
const watch = require('gulp-watch')
const browserSync = require('browser-sync').create()

gulp.task('browserReload', function(done) {
  browserSync.reload()
  done()
})

gulp.task('cssInject', function(done) {
  return gulp.src('./app/temp/styles/styles.css').pipe(browserSync.stream())
})

gulp.task('watch', function(done) {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app',
    },
  })
  watch('./app/index.html', gulp.series('browserReload'))
  watch('./app/assets/styles/**/*.css', gulp.series('styles', 'cssInject'))
  done()
})
