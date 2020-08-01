var express = require('express');
var router = express.Router();
var SongDB=require('../../db/song')

router.post('/',(req,res)=>{
    let {song}=req.body
    if(song==''){
        
    }else{
        let reg=new RegExp(song)
        SongDB.find({$or:[{author:reg},{title:reg}]},
            {_id:1,title:1},
    {sort:{pv:1}})
    .then(data=>{
        res.send({
            code:0,
            msg:"歌曲查找成功",
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
    }
})

module.exports=router