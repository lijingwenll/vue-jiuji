var express = require('express');
var router = express.Router();
var MyUserObj = require('../model/login');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.post('/api/login', function(req, res, next) {

  var username = req.body.username;
  var psw = req.body.psw;  

  // 标志变量
  var result = {
    code:1,
    message:"登录成功",
  }

  // 查询数据库中的数据
  MyUserObj.find({username:username, psw:psw}, function (err, docs) {

    if (docs.length == 0) {
      result.code = -111;
      result.message = "检查用户名和密码";
    }else{
      result.message = "登录成功";
    }
      res.json(result);
  })
});


//注册
router.post('/api/register', function(req, res, next) {

  var username = req.body.username;
  var psw = req.body.psw;
  var result={
    code:1,
    message:"注册成功"
  };

  // 查询表中的用户名是否被占用
  MyUserObj.find({username:username}, function(err, docs){
    if (docs.length > 0 ) {
      result.code = -111;
      result.message = "请重新注册";
      res.json(result);
      return
    }

    var muo = new MyUserObj();
    muo.username = username;
    muo.psw = psw;
    muo.save(function (err) {
      if(err){
        code = -111;
        result.message = "注册失败";
        res.send("注册失败")
      }
      res.json(result);
    })
  })

});

module.exports = router;
