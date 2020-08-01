let mongoose=require('mongoose')
let Schema=mongoose.Schema

let song=mongoose.model('song',new Schema({
    title:{type:String,required:true},
    author:{type:String,required:true},
    img:{type:String,required:true},
    url:{type:String,required:true},
}))

module.exports=song;