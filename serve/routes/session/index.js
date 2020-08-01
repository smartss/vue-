var session=require('express-session')
var connectMongo=require('connect-mongo')(session)

module.exports=session({
    secret:'afei',
    cookie:{maxAge:10*60*1000},
    rolling:true,
    resave:false,
    saveUninitialized:false,
    store:new connectMongo({
        url:'mongodb://127.0.0.1:27017/music'
    })
})
