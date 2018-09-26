var gulp = require('gulp');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');

gulp.task('rolo-compressor', function(){
    gulp.src('dev/assets/css/style.css')
   // gulp.src('dev/assets/css/**/*.css') pega todos os arquivos
   .pipe(cssmin())
   .pipe(rename({suffix: '.min'}))
   .pipe(gulp.dest('prod/assets/css/'));

});

gulp.task('escutador', function(){
    gulp.watch('dev/assets/css/style.css', ['rolo-comnpressor'])
})