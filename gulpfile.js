var gulp = require('gulp');
var gulpMinify = require('gulp-minify-css');
var stylus = require('gulp-stylus');
var nib = require('nib');
var server = require('gulp-webserver');
var browserify = require('browserify');
var gulpUglify = require('gulp-uglify');
var vinibuffer = require('vinyl-buffer');
var stream = require('vinyl-source-stream');

var config = {
  styles: {
    main: './src/styles/main.styl',
    output: './build/css'
  },
  scripts: {
    main: './src/js/index.js',
    output: './build/js'
  }
};


gulp.task('server', function (){
	gulp.src('./build')
		.pipe(server({
			host: '0.0.0.0',
			server: 3000
			}));
	});

gulp.task('build:css', function (){
	gulp.src(config.styles.main)
	.pipe(stylus({
		use: nib(),
		'include css': true
		}))
	.pipe(gulpMinify())
	.pipe(gulp.dest(config.styles.output));
	});

gulp.task('build:js', function (){
    return browserify(config.scripts.main)
        .bundle()
        .pipe(stream('bundle.js'))
        .pipe(vinibuffer())
        .pipe(gulpUglify())
        .pipe(gulp.dest(config.scripts.output));
    });
gulp.task('default', ['build:css', 'server', 'build:js']);