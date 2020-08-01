var express = require('express');
var router = express.Router();
var hotDB=require('../../db/hot')

router.get('/',(req,res)=>{
    hotDB.find()
    .then(data=>{
        res.send({
            msg:"查找成功",
            code:0,
            data
        })
    })
    .catch(()=>{
        res.send({
            msg:"查找失败",
            code:4,
            data:[]
        })
    })
})

module.exports=router
