var express = require('express');
var router = express.Router();
var SongDB=require('../../db/song')
var SingerDB=require('../../db/singer')

//获取歌手图片和名字
router.post('/',(req,res)=>{
    let {name}=req.body
    SingerDB.findOne({name})
    .then(data=>{
        res.send({
            code:0,
            msg:"请求成功",
            data
        })
    })
    .catch(()=>{
        res.send({
            code:4,
            msg:"服务器错误",
            data:[]
        })
    })
})

// 获取歌手的歌单
router.post('/getList',(req,res)=>{
    let {name}=req.body
    console.log(name)
    SongDB.find({author:name})
    .then(data=>{
        res.send({
            code:0,
            msg:"请求成功",
            data
        })
    })
    .catch(()=>{
        res.send({
            code:4,
            msg:'服务器错误',
            data:[]
        })
    })
})

module.exports=router