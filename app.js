var express=require("express")
var app=express();
var router=require("./router/router.js")
app.set("view engine","ejs")
app.get("/",router.showIndex);//显示首页(列出所有图书信息,并可执行操作)
app.get("/add",router.showadd) //显示添加页面
app.get("/addbook",router.doadd) //添加成功页面
app.get("/edit",router.edit);//修改页面
app.get("/doedit",router.editbook) //执行修改
app.get("/remove",router.remove);//删除图像页面
app.get("/dorm",router.dorm);//执行删除
app.listen(3000)