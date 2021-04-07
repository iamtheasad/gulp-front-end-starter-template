// Initialize Modules
const gulp = require('gulp');
const {src, dest, watch, series, parallel} = require('gulp');

// Importing all gulp files
const clean = require('gulp-clean'); // Remove file
const browserSync = require('browser-sync').create(); // Automatically create server, watch files and reload on browser
const autoprefixer = require('autoprefixer'); // Browser Support Ad
const cssnano = require('cssnano'); // Optimize or minifiy css which consume size of css
const concat = require('gulp-concat'); // Two or more files push on a single file and give them new name
const postcss = require('gulp-postcss'); // Give editing eligibily to css change while render such as adding autoprefixer
const replace = require('gulp-replace'); // For rmoving cash files
const sass = require('gulp-sass'); // Wrap the scss and convert it to the style.css
const sourcemaps = require('gulp-sourcemaps'); // It shows where is the scss written
const uglify = require('gulp-uglify'); // Make js code minify
const terserGulp = require('gulp-terser'); // Make js code minify
const useref = require('gulp-useref'); // Multiple css & js file combine and make new file
const imagemin = require('gulp-imagemin'); // Optimize image file size
const nunjucksRender = require('gulp-nunjucks-render'); // Nunjucks convert to html
const prettyHtml = require('gulp-pretty-html'); // Decorating Html
const gulpif = require('gulp-if'); // This gulp plugin is used when we want to run a task only if certain condition is met


// File path variables
const filse = {
    htmlPath: 'dist/**/*.html',

    njkPath: 'src/views/**/*.+(html|nunjucks|njk)',
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
function htmlTask() {
    const cbString = new Date().getTime();

    return src(filse.njkPages)
        .pipe(nunjucksRender({
            path: ['src/views/']
        }))
        .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
        .pipe(prettyHtml({
            indent_size: 4,
            indent_char: ' ',
            unformatted: ['code', 'pre', 'em', 'strong', 'span', 'i', 'b', 'br'],
            extra_liners: ['head', 'body'],
            max_preserve_newlines: 1
        }))
        .pipe(dest('dist'));
}

// Scss Task
function scssTask() {
    const plugins = [
        autoprefixer({overrideBrowserslist: ['last 20 version']}),
        cssnano()
    ]
    return src(filse.scssPath, {sourcemaps: true})
        // .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(concat('custom.min.css'))
        // .pipe(sourcemaps.write('.'))
        .pipe(dest('dist/assets/css', {sourcemaps: '.'}));
}

// Vendor Scss Task
function vendorScssTask() {
    const plugins = [
        autoprefixer({overrideBrowserslist: ['last 20 version']}),
        cssnano()
    ]
    return src(filse.vendorSass)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(concat('vendor.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist/assets/css'));
}

// Javascript Task
function jsTask() {
    return src(filse.jsPath, {sourcemaps: true})
        // .pipe(sourcemaps.init())
        .pipe(concat('custom-script.min.js'))
        .pipe(terserGulp())
        // .pipe(sourcemaps.write('.'))
        .pipe(dest('dist/assets/js', {sourcemaps: '.'}))
}

// Move Vendor Files to Dist For Client
function vendorMove() {
    return src(filse.vendorPath)
        .pipe(dest('dist/assets/vendor'))
}

// Move scss Files to Dist for Client
function scssMove() {
    return src(filse.scssPath)
        .pipe(dest('dist/assets/scss'))
}

// Image Move Task
function imageTask() {
    return src(filse.imagePath)
        .pipe(dest('dist/assets/images/'))
}

// Fonts Move Task
function fontsTask() {
    return src(filse.fontPath)
        .pipe(dest('dist/assets/fonts/'))
}

// BroweserSync Task : Initialize a server
function browserSyncServer(done) {
    browserSync.init({
        port: '3001',
        server: {
            baseDir: './dist'
        }
    })

    done();
}

// BroweserSync Task : Reload the server automatically
function browserSyncReload(done) {
    browserSync.reload()
    done();
}

// Watch Task
function watchTask() {
    watch([filse.scssPath, filse.jsPath, filse.imagePath, filse.njkPath],
        parallel(scssTask, jsTask, imageTask, htmlTask, browserSyncReload)
    );
}


// #########################################################
// Default Tasks =======================================
// #########################################################
exports.default = series(
    vendorScssTask,
    parallel(scssTask, jsTask, htmlTask, fontsTask),
    scssMove,
    vendorMove,
    imageTask,
    browserSyncReload,
    browserSyncServer,
    watchTask
)


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


// Clean Images Task
function imageClean() {
    return src('dist/assets/images/', {read: false, allowEmpty: true})
        .pipe(clean({force: true}))
}

exports.imageClean = imageClean;




