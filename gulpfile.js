// Initialize Modules
const gulp = require('gulp');
const {src, dest, watch, series, parallel} = require('gulp');

// Importing all gulp files
const clean = require('gulp-clean'); // Remove file
const browserSync = require('browser-sync').create(); // Automatically reload on browser
const autoprefixer = require('autoprefixer'); // Browser Support Ad
const cssnano = require('cssnano'); // Optimize or minifiy css which consume size of css
const concat = require('gulp-concat'); // Two or more files push on a single file
const postcss = require('gulp-postcss'); // Give editing eligibily to css change while render such as adding autoprefixer
const replace = require('gulp-replace'); // For rmoving cash files
const sass = require('gulp-sass'); // Wrap the scss and convert it to the style.css
const sourcemaps = require('gulp-sourcemaps'); // It shows where is the scss written
// const uglify = require('gulp-uglify'); // Make js code minify & undreadable
// const useref = require('gulp-useref'); // Multiple css & js file combine and make new file
const imagemin = require('gulp-imagemin'); // Optimize image file size
const nunjucksRender = require('gulp-nunjucks-render'); // Nunjucks convert to html
const prettyHtml = require('gulp-pretty-html'); // Decorating Html
// const gulpif = require('gulp-if'); // This gulp plugin is used when we want to run a task only if certain condition is met


// File path variables
const filse = {
    htmlPath: 'dist/**/*.+(html|nunjucks|njk)',

    njkPath: 'src/views/**/*.(html|nunjucks|njk)',
    njkPages: 'src/views/pages/**/*.+(html|nunjucks|njk)',

    scssPath: 'src/assets/scss/**/*.scss',

    jsPath: 'src/assets/js/**/*.js',
    fontPath: 'src/assets/fonts/**/*.{eot,svg,ttf,woff,woff2}',

    imagePath: 'src/assets/images/**/*',
    distImagePath: 'dist/assets/images/**/*',

    vendorPath: 'src/assets/vendor/**/*',
    vendorSass: 'src/assets/vendor/**/*.scss'
}


// Html Task
function htmlTask(){
    return src(filse.njkPages)
        .pipe(nunjucksRender({
            path: ['src/views/']
        }))
        .pipe(dest('dist'));
}

exports.htmlTask = htmlTask;


// Scss Task
function scssTask() {
    return src(filse.scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(dest('dist/assets/css/'));
}

exports.scssTask = scssTask;

// #########################################################
// Non Default Tasks =======================================
// #########################################################

//Image Minify Task
function imageMinify() {
    return src(filse.imagePath)
        .pipe(imagemin(
            [
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]
        ))
        .pipe(dest('dist/assets/images/'))
}

exports.imageMinify = imageMinify;


// Clean Dist Folder Task
function cleanDist() {
    return src('dist', {read: false})
        .pipe(clean())
}

exports.cleanDist = cleanDist;




