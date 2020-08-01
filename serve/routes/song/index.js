var express = require('express');
var router = express.Router();
var SongDB=require('../../db/song')


//获取歌曲
router.post('/',(req,res)=>{
    let {path}=req.body
    SongDB.findOne({title:path})
    .then(data=>{
        res.send({
            code:0,
            msg:"歌曲请求成功",
            data
        })
    })
    .catch(()=>{
        res.send({
            code:4,
            msg:"歌曲请求失败",
            data:[]
        })
    })
})  

// 切换歌曲
router.post('/get',(req,res)=>{
    let {sort}=req.body;
    SongDB.findOne({sort:sort})
    .then(data=>{
        if(data){
            res.send({
                code:0,
                msg:"请求成功",
                data
            })
        }else{
            res.send({
                code:2,
                msg:'已经是最后一首了',
                data:[]
            })
        }
    })
    .catch(()=>{
        res.send({
            code:4,
            msg:"服务器错误",
            data:[]
        })
    })
})


module.exports=router


