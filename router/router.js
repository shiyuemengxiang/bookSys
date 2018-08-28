var book=require("../models/book.js")
//首页
exports.showIndex=function(req,res){
    book.findBook({},function(error,result){
        res.render("index",{
            result:result
        })
        // console.log(result)
    })

}
//添加图书
exports.showadd=function(req,res){
    res.render("add")
}
exports.doadd=function(req,res){
 // console.log(req.query)
    book.create({"name":req.query.name,"price":req.query.price,"author":req.query.author,"lang":req.query.lang})
    res.send("添加成功! \n <a href='/'>返回首页</a>  <a href='/add'>继续添加</a>")
}

//修改图书
exports.edit=function(req,res){
    var _id=req.query._id;
    book.findBookByID(_id,function(error,result){
        res.render("edit",{
            result:result
        })
        console.log(result[0].name)
    })

}
exports.editbook=function(req,res){
    var _id=req.query._id
    var name=req.query.name;
    var author=req.query.author;
    var price=req.query.price;
    var lang=req.query.lang;

    book.updateBook({_id:_id},{$set:{name:name,author:author,price:price,lang:lang}},{},function(error,result){
        console.log(result);
        res.send("修改成功! \n <a href='/'>返回首页</a>  ")
    })
}
//删除图书
exports.remove=function(req,res){
    var _id=req.query._id;
    book.findBookByID(_id,function(error,result){
        res.render("remove",{
            result:result
        })
    })
}
//执行删除
exports.dorm=function(req,res){
    var _id=req.query._id;
    console.log(_id)
    book.removeBookByID({_id:_id},function(error,result){
        console.log(result);
        res.send("删除成功! \n <a href='/'>返回首页</a>  ")
    })
}