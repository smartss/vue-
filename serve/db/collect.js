let mongoose=require('mongoose')
let Schema=mongoose.Schema

let collect=mongoose.model('collect',new Schema({
    title:{type:String,required:true},
    onOff:{type:Boolean,default:true},
    author:{type:String,required:true},
}))



module.exports=collect