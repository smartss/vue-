var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require('mongoose')
var session=require('express-session')
var connectMongo=require('connect-mongo')(session)

mongoose.connect("mongodb://127.0.0.1:27017/music",{useNewUrlParser: true,useUnifiedTopology: true})
        .then(()=>{
            console.log("数据库连接成功")
        })
        .catch(()=>{
            console.log("数据库连接失败")
        })
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next)=>{
    res.header({
        'Access-Control-Allow-Credentials':true,//允许携带cookie
        'Access-Control-Allow-Origin':req.headers.origin || "*",//允许源跨域
        'Access-Control-Allow-Headers':'Content-Type',//请求头信息
        'Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OFTIONS',//请求方法
        'Content-Type':'application/json; charset=utf-8'//内容格式
    })
    if(req.method==="OPTIONS"){
        res.sendStatus(200)

    }else{
        next();
    }
})

app.use(require('./routes/session/index'))

app.use('/',require('./routes/index'))


module.exports = app;
