var express = require('express');
var router = express.Router();
var collectDB=require('../../db/collect')


router.post('/',(req,res)=>{
    let {title,author,onOff}=req.body
    if(onOff){
        collectDB.create({
            title,
            author,
        })
        .then(data=>{
            res.send({
                code:0,
                msg:"收藏成功",
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
    }else{
        collectDB.deleteOne({title})
        .then(data=>{
            res.send({
                code:2,
                msg:"删除成功"
            })
        })
        .catch(()=>{
            res.send({
                code:4,
                msg:"服务器错误"
            })
        })
    }
})

router.post('/ifCollect',(req,res)=>{
    let {title}=req.body
    collectDB.findOne({title})
    .then(data=>{
        if(data){
            res.send({
                code:0,
                msg:"已收藏",
                data
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

router.get('/getcollect',(req,res)=>{
    collectDB.find()
    .then(data=>{
        res.send({
            code:0,
            msg:"获取成功",
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

module.exports=router