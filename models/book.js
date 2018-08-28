var mongoose=require("mongoose");
var db=require("./db.js");
// console.log(db)
//创建schema结构
var BookSchame=new mongoose.Schema({
    "name":{type:String},
    "price":{type:Number},
    "author":{type:String},
    "lang":{type:String}
})
//创建静态方法
BookSchame.statics.findBook=function(where,callback){
    this.model("book").find({},callback)
}
//通过id查找
BookSchame.statics.findBookByID=function(_id,callback){
    this.model("book").find({_id:_id},callback)
}
BookSchame.statics.updateBook=function(where,set,options,callback){
    this.model("book").update(where,set,options,callback)
}
//删除图书(通过ID)
BookSchame.statics.removeBookByID=function(_id,callback){
    this.model("book").remove(_id,callback)
}
var BookModel=db.model("book",BookSchame)

module.exports=BookModel