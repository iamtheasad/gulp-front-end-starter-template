// Initialize Modules
<<<<<<< HEAD
const gulp = require("gulp");
const { src, dest, watch, series, parallel } = require("gulp");

// Importing all gulp files
const clean = require("gulp-clean"); // Remove file
const browserSync = require("browser-sync").create(); // Automatically create server, watch files and reload on browser
const autoprefixer = require("autoprefixer"); // Browser Support Ad
const cssnano = require("cssnano"); // Optimize or minifiy css which consume size of css
const concat = require("gulp-concat"); // Two or more files push on a single file and give them new name
const postcss = require("gulp-postcss"); // Give editing eligibily to css change while render such as adding autoprefixer
const replace = require("gulp-replace"); // For rmoving cash files
const sass = require("gulp-sass")(require("sass")); // Wrap the scss and convert it to the style.css
const sourcemaps = require("gulp-sourcemaps"); // It shows where is the scss written
const uglify = require("gulp-uglify"); // Make js code minify
const babel = require("gulp-babel");
const terser = require("gulp-terser"); // Make js code minify
const useref = require("gulp-useref"); // Multiple css & js file combine and make new file
const imagemin = require("gulp-imagemin"); // Optimize image file size
const nunjucksRender = require("gulp-nunjucks-render"); // Nunjucks convert to html
const prettyHtml = require("gulp-pretty-html"); // Decorating Html
const gulpif = require("gulp-if"); // This gulp plugin is used when we want to run a task only if certain condition is met

// File path variables
const files = {
  htmlPath: "build/**/*.html",

  njkPath: "src/views/**/*.+(html|nunjucks|njk)",
  njkPages: "src/views/pages/**/*.+(html|nunjucks|njk)",

  scssPath: "src/assets/scss/**/*.scss",

  jsPath: "src/assets/js/**/*.js",
  fontPath: "src/assets/fonts/**/*.{eot,svg,ttf,woff,woff2}",

  imagePath: "src/assets/images/**/*",
  buildImagePath: "build/assets/images/**/*",

  vendorPath: "src/assets/vendor/**/*",
  vendorSass: "src/assets/vendor/**/*.scss",
};

// Html Task
function htmlTask() {
  const cbString = new Date().getTime();

  return src(files.njkPages)
    .pipe(
      nunjucksRender({
        path: ["src/views/"],
      })
    )
    .pipe(replace(/cb=\d+/g, "cb=" + cbString))
    .pipe(
      prettyHtml({
        indent_size: 4,
        indent_char: " ",
        unformatted: ["code", "pre", "em", "strong", "span", "i", "b", "br"],
        extra_liners: ["head", "body"],
        max_preserve_newlines: 1,
      })
    )
    .pipe(dest("build"));
=======
const gulp = require('gulp');
const { src, dest, watch, series, parallel } = require('gulp');

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
const babel = require('gulp-babel');
const terser = require('gulp-terser'); // Make js code minify
const useref = require('gulp-useref'); // Multiple css & js file combine and make new file
const imagemin = require('gulp-imagemin'); // Optimize image file size
const nunjucksRender = require('gulp-nunjucks-render'); // Nunjucks convert to html
const prettyHtml = require('gulp-pretty-html'); // Decorating Html
const gulpif = require('gulp-if'); // This gulp plugin is used when we want to run a task only if certain condition is met


// File path variables
const files = {
    htmlPath: 'build/**/*.html',

    njkPath: 'src/views/**/*.+(html|nunjucks|njk)',
    njkPages: 'src/views/pages/**/*.+(html|nunjucks|njk)',

    scssPath: 'src/assets/scss/**/*.scss',

    jsPath: 'src/assets/js/**/*.js',
    fontPath: 'src/assets/fonts/**/*.{eot,svg,ttf,woff,woff2}',

    imagePath: 'src/assets/images/**/*',
    buildImagePath: 'build/assets/images/**/*',

    vendorPath: 'src/assets/vendor/**/*',
    vendorSass: 'src/assets/vendor/**/*.scss',
}


// Html Task
function htmlTask() {
    const cbString = new Date().getTime();

    return src(files.njkPages)
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
        .pipe(dest('build'));
>>>>>>> cb9e183bd93bb5c1d519d22a5d2716a856ef06e9
}

// Scss Task
function scssTask() {
<<<<<<< HEAD
  const autoprefixBrowsers = [
    "> 1%",
    "last 50 versions",
    "firefox >= 4",
    "safari 7",
    "safari 8",
    "IE 8",
    "IE 9",
    "IE 10",
    "IE 11",
  ];
  const plugins = [
    autoprefixer({ overrideBrowserslist: autoprefixBrowsers }),
    cssnano(),
  ];
  return (
    src(files.scssPath, { sourcemaps: true })
      // .pipe(sourcemaps.init())
      .pipe(sass().on("error", sass.logError))
      .pipe(postcss(plugins))
      // .pipe(concat('custom-style-all.min.css'))
      // .pipe(sourcemaps.write('.'))
      .pipe(dest("build/assets/css", { sourcemaps: "." }))
  );
=======
    const autoprefixBrowsers = ['> 1%', 'last 50 versions', 'firefox >= 4', 'safari 7', 'safari 8', 'IE 8', 'IE 9', 'IE 10', 'IE 11'];
    const plugins = [
        autoprefixer({ overrideBrowserslist: autoprefixBrowsers }),
        cssnano()
    ]
    return src(files.scssPath, { sourcemaps: true })
        // .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        // .pipe(concat('custom-style-all.min.css'))
        // .pipe(sourcemaps.write('.'))
        .pipe(dest('build/assets/css', { sourcemaps: '.' }));
>>>>>>> cb9e183bd93bb5c1d519d22a5d2716a856ef06e9
}

// Vendor Scss Task
function vendorScssTask() {
<<<<<<< HEAD
  const plugins = [
    autoprefixer({ overrideBrowserslist: ["last 20 version"] }),
    cssnano(),
  ];
  return (
    src(files.vendorSass, { sourcemaps: true })
      // .pipe(sourcemaps.init())
      .pipe(sass().on("error", sass.logError))
      .pipe(postcss(plugins))
      // .pipe(concat('vendor-style-all.css'))
      // .pipe(sourcemaps.write('.'))
      .pipe(dest("build/assets/css", { sourcemaps: "." }))
  );
=======
    const plugins = [
        autoprefixer({ overrideBrowserslist: ['last 20 version'] }),
        cssnano()
    ]
    return src(files.vendorSass, { sourcemaps: true })
        // .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        // .pipe(concat('vendor-style-all.css'))
        // .pipe(sourcemaps.write('.'))
        .pipe(dest('build/assets/css', { sourcemaps: '.' }));
>>>>>>> cb9e183bd93bb5c1d519d22a5d2716a856ef06e9
}

// Javascript Task
function jsTask() {
<<<<<<< HEAD
  return (
    src(files.jsPath, { sourcemaps: true })
      // .pipe(sourcemaps.init())
      .pipe(
        babel({
          presets: ["@babel/env"],
        })
      )
      // .pipe(concat('custom-script-all.min.js'))
      .pipe(terser())
      // .pipe(sourcemaps.write('.'))
      .pipe(dest("build/assets/js", { sourcemaps: "." }))
  );
=======
    return src(files.jsPath, { sourcemaps: true })
        // .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        // .pipe(concat('custom-script-all.min.js'))
        .pipe(terser())
        // .pipe(sourcemaps.write('.'))
        .pipe(dest('build/assets/js', { sourcemaps: '.' }))
>>>>>>> cb9e183bd93bb5c1d519d22a5d2716a856ef06e9
}

// Move Vendor Files to build For Client
function vendorMove() {
<<<<<<< HEAD
  return src(files.vendorPath).pipe(dest("build/assets/vendor"));
=======
    return src(files.vendorPath)
        .pipe(dest('build/assets/vendor'))
>>>>>>> cb9e183bd93bb5c1d519d22a5d2716a856ef06e9
}

// Move scss Files to build for Client
function scssMove() {
<<<<<<< HEAD
  return src(files.scssPath).pipe(dest("build/assets/scss"));
=======
    return src(files.scssPath)
        .pipe(dest('build/assets/scss'))
>>>>>>> cb9e183bd93bb5c1d519d22a5d2716a856ef06e9
}

// Image Move Task
function imageTask() {
<<<<<<< HEAD
  return src(files.imagePath).pipe(dest("build/assets/images/"));
=======
    return src(files.imagePath)
        .pipe(dest('build/assets/images/'))
>>>>>>> cb9e183bd93bb5c1d519d22a5d2716a856ef06e9
}

// Fonts Move Task
function fontsTask() {
<<<<<<< HEAD
  return src(files.fontPath).pipe(dest("build/assets/fonts/"));
=======
    return src(files.fontPath)
        .pipe(dest('build/assets/fonts/'))
>>>>>>> cb9e183bd93bb5c1d519d22a5d2716a856ef06e9
}

// BroweserSync Task : Initialize a server
function browserSyncServer(done) {
<<<<<<< HEAD
  browserSync.init({
    port: "3001",
    server: {
      baseDir: "./build",
    },
  });

  done();
=======
    browserSync.init({
        port: '3001',
        server: {
            baseDir: './build'
        }
    })

    done();
>>>>>>> cb9e183bd93bb5c1d519d22a5d2716a856ef06e9
}

// BroweserSync Task : Reload the server automatically
function browserSyncReload(done) {
<<<<<<< HEAD
  browserSync.reload();
  done();
=======
    browserSync.reload()
    done();
>>>>>>> cb9e183bd93bb5c1d519d22a5d2716a856ef06e9
}

// Combine Task
function combineTask() {
<<<<<<< HEAD
  return src(files.htmlPath)
    .pipe(useref({ searchPath: "./build" }))
    .pipe(dest("./build"));
=======
    return src(files.htmlPath)
        .pipe(useref({ searchPath: './build' }))
        .pipe(dest('./build'))
>>>>>>> cb9e183bd93bb5c1d519d22a5d2716a856ef06e9
}

// Watch Task
function watchTask() {
<<<<<<< HEAD
  watch(
    [
      files.scssPath,
      files.jsPath,
      files.imagePath,
      files.njkPath,
      files.vendorPath,
    ],
    parallel(
      scssTask,
      jsTask,
      imageTask,
      htmlTask,
      vendorMove,
      browserSyncReload
    )
  );
}

=======
    watch([files.scssPath, files.jsPath, files.imagePath, files.njkPath, files.vendorPath],
        parallel(scssTask, jsTask, imageTask, htmlTask, vendorMove, browserSyncReload)
    );
}



>>>>>>> cb9e183bd93bb5c1d519d22a5d2716a856ef06e9
// #########################################################
// Default Tasks =======================================
// #########################################################
exports.default = series(
<<<<<<< HEAD
  vendorScssTask,
  parallel(scssTask, jsTask, htmlTask, fontsTask),
  scssMove,
  vendorMove,
  imageTask,
  combineTask,
  browserSyncReload,
  browserSyncServer,
  watchTask
);
=======
    vendorScssTask,
    parallel(scssTask, jsTask, htmlTask, fontsTask),
    scssMove,
    vendorMove,
    imageTask,
    combineTask,
    browserSyncReload,
    browserSyncServer,
    watchTask
)

>>>>>>> cb9e183bd93bb5c1d519d22a5d2716a856ef06e9

// #########################################################
// Non Default Tasks =======================================
// #########################################################

//Image Minify Task
function imageMinify() {
<<<<<<< HEAD
  return src(files.imagePath)
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest("build/assets/images/"));
=======
    return src(files.imagePath)
        .pipe(imagemin(
            [
                imagemin.gifsicle({ interlaced: true }),
                imagemin.mozjpeg({ quality: 75, progressive: true }),
                imagemin.optipng({ optimizationLevel: 5 }),
                imagemin.svgo({
                    plugins: [
                        { removeViewBox: true },
                        { cleanupIDs: false }
                    ]
                })
            ]
        ))
        .pipe(dest('build/assets/images/'))
>>>>>>> cb9e183bd93bb5c1d519d22a5d2716a856ef06e9
}

exports.imageMinify = imageMinify;

<<<<<<< HEAD
// Clean build Folder Task
function cleanBuild() {
  return src("build", { read: false }).pipe(clean());
=======

// Clean build Folder Task
function cleanBuild() {
    return src('build', { read: false })
        .pipe(clean())
>>>>>>> cb9e183bd93bb5c1d519d22a5d2716a856ef06e9
}

exports.cleanBuild = cleanBuild;

<<<<<<< HEAD
// Clean Images Task
function imageClean() {
  return src("build/assets/images/", { read: false, allowEmpty: true }).pipe(
    clean({ force: true })
  );
}

exports.imageClean = imageClean;
=======

// Clean Images Task
function imageClean() {
    return src('build/assets/images/', { read: false, allowEmpty: true })
        .pipe(clean({ force: true }))
}

exports.imageClean = imageClean;
>>>>>>> cb9e183bd93bb5c1d519d22a5d2716a856ef06e9
