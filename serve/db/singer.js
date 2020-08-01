let mongoose=require('mongoose')
let Schema=mongoose.Schema

let singer=mongoose.model('singer',new Schema({
    name:{type:String,required:true},
    img:{type:String,required:true},
}))



module.exports=singer;