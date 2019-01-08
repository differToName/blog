var gulp = require('gulp');  
var htmlmin = require('gulp-htmlmin');  
var uglify = require('gulp-uglify'); 
var imagemin = require('gulp-imagemin');  
  
//压缩html  
gulp.task('html', function () {  
    var options = {  
        removeComments: true,  //清除HTML注释  
        collapseWhitespace: true,  //压缩HTML  
        collapseBooleanAttributes: false,  //省略布尔属性的值 <input checked="true"/> ==> <input checked />  
        removeEmptyAttributes: false,  //删除所有空格作属性值 <input  /> ==> <input />  
        removeScriptTypeAttributes: true,  //删除<script>的type="text/javascript"  
        removeStyleLinkTypeAttributes: true,  //删除<style>和<link>的type="text/css"  
        minifyJS: true,  //压缩页面JS  
        minifyCSS: true  //压缩页面CSS  
    };  
    return gulp.src('public/*.html')  
    .pipe(htmlmin(options))  
    .pipe(gulp.dest('source/pages/'));  
});  

// 压缩js文件
gulp.task('minify-js', function() {
    return gulp.src('public/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('source/js'));
  });
  
gulp.task('image-min', function () {  
    return gulp.src('public/images/*.{png,jpg}')  
        .pipe(imagemin())  
        .pipe(gulp.dest('source/dist/images/'));  
});  
  
//监听两个文件的文件变化  
gulp.task('listenPages', function() {  
    gulp.watch('public/*.html',['html']);  
    gulp.watch('public/js/*.js',['jsmin']);  
});  
// 构建任务流  
// 执行 task build  
gulp.task('default', 
   gulp.series( 'html','minify-js','image-min',function(){
	return new Promise(function(resolve,reject){
        console.log("HTTP Server Started");
        resolve();
	});
}));
