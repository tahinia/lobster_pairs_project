var gulp = require('gulp');
var sass = require('gulp-sass');    
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('sass', function(done){

    gulp.src('public/sass/**/*.scss')
      .pipe(sass({outputStyle: 'compressed'})) // Using gulp-sass
      .pipe(gulp.dest('public/stylesheets'))

      done();
  });

gulp.task('scripts', function(done){

    gulp.src('public/javascripts/**/*.js')
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/javascripts'))

        done();
});


gulp.task('watch', function(done){

    // added done above too

    gulp.watch('public/sass/**/*.scss', gulp.series('sass') )
    gulp.watch('public/javascripts/**/*.js', gulp.series('scripts') )
    done();
})