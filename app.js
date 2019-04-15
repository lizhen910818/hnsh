//1:加载模块 express pool.js
const express = require("express");
const pool = require("./pool");
//2:创建服务器端对象
var app = express();
//3:监听 3000
app.listen(3000);
//4:指定静态目录  public 
app.use(express.static("public"));
//5:加载跨域访问模块
const cors = require("cors");
//6:配置跨域访问模块 那个域名跨域访问允许
//  脚手架8080允许
//origin      允许跨域访问域名列表
//credentials 跨域访问保存session id
app.use(cors({
  origin:["http://127.0.0.1:8080",
  "http://localhost:8080"],
  credentials:true
}));
// 功能：获取客户评论表(get)
// app.get("/connectUs",(req,res)=>{
//     // 获取id
//     var id=req.query.id;
// //创建sql语句
//     var sql = " SELECT id,uname,email,phone,title,content FROM hnsh_contact_news where id=?"
// // 发送sql 语句
//    pool.query(sql,[id],(err,result)=>{
//        if(err) throw err;
//        // 输出查询结果 输出{code:1}
//   res.send({code:1,data:result})
//    })
//     })
// 功能：获取客户评论表(post)
app.post("/connectUs",function(req,res){
  // 接收post请求数据
  var obj=req.body;
  var $uname=obj.uname;
  var $email=obj.email;
  var $phone=obj.phone;
  var $title=obj.title;
  var $content=obj.content;
  // 判断用户名是否为空
  if(!$uname){
    res.send({code:1,msg:"uname required"});
    return ;//阻止程序继续进行
  }
 // 判断用户邮箱是否为空
 if(!$email){
  res.send({code:2,msg:"email required"});
  return ;//阻止程序继续进行
}
// 判断用户电话是否为空
if(!$phone){
  res.send({code:3,msg:"phone required"});
  return ;//阻止程序继续进行
}
// 判断标题是否为空
if(!$title){
  res.send({code:4,msg:"title required"});
  return ;//阻止程序继续进行
}
// 判断评论内容是否为空
if(!$content){
  res.send({code:5,msg:"content required"});
  return ;//阻止程序继续进行
}
console.log(req.body);
// 把用户信息插入到数据库
pool.query("INSERT INTO hnsh_contact_news VALUES(NULL,?,?,?,?,?)",[$uname,$email,$phone,$title,$content],function(err,result){
  if(err) throw err;
  //判断affectedRows是否>0
  if(result.affectedRows>0){
    res.send({code:200,msg:'reg success'});
  }
});
res.send("发表成功");
})
 

