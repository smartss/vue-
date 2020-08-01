let mongoose=require('mongoose')
let Schema=mongoose.Schema
let hot=mongoose.model("hot",new Schema({
    img:{type:String,required:true},
    title:{type:String,required:true},
    desc:{type:String,required:true}
}))




module.exports=hot;