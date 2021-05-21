const gulp = require('gulp')
const babel = require('gulp-babel')
const browserify = require('gulp-browserify')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
//引入自动构建的包
const connect = require('gulp-connect')
const livereload = require('gulp-livereload')
const open = require('open')
gulp.task('babel', (cb) => {
  gulp.src('./src/*.js')//把所有的js文件存入gulp内存中
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./lib/js'))
    .pipe(livereload())
  cb()
})
gulp.task('browserify', async () => {
  return gulp.src('./lib/js/app.js')
    .pipe(browserify())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./lib/js'))
    .pipe(livereload())
})
gulp.task('uglify', async () => {
  return gulp.src('./lib/js/bundle.js')
    .pipe(uglify())
    .pipe(rename('bundle-min.js'))
    .pipe(gulp.dest('./lib/js'))
    .pipe(livereload())
})
//定义默认任务 先执行任务之后改动代码可以直接通过gulp命令来执行
gulp.task('default', gulp.series('babel', 'browserify', 'uglify'))

//开启自动任务
gulp.task('watch', () => {
  //配置watch任务
  livereload.listen()
  //通过自己的服务器打开项目,自动刷新
  connect.server({
    root: 'lib',//此刻lib文件夹就是个服务器
    port: 3000,
    livereload: true//自动刷新
  });
  // 必须修改index.html中引入样式和脚本的路径，gulp不会自动处理路径。
  open('http://127.0.0.1:3000/index.html');
  //监视指定文件,一旦有变化就执行后面的任务(第二个参数)
  gulp.watch('./src/*.js', gulp.series('babel', 'browserify', 'uglify'))

})