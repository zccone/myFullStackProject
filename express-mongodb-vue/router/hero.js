//引入工具类
const tool = require("./tool");
//引入express模块
const express = require("express");
//定义路由级中间件
const router = express.Router();
//引入数据模型模块
const Hero = require("../models/heroSchema");
// 查询所有英雄信息路由
// router.get("/hero", (req, res) => {
//   // Hero.find({})
//   //   .sort({ update_at: -1 }).limit(5).count(true)
//   Hero.aggregate([
//     {$match:{}},
//     {$sort:{update_at:-1}},
//     {$limit:5},
//     ])
//     .then(_data => {
//
//       res.json(tool.returnInfo(_data));
//     })
//     .catch(err => {
//       console.log(2);
//       res.json(err);
//     });
// });

router.post('/heroList',function(req,res){
  var count=0;
  var page=req.body.page;
  var rows=req.body.rows;
  var stuname=req.body.username;
  console.log(stuname);
  console.log("page:"+page+",rows:"+rows);
  var query=Hero.find({});
  query.skip((page-1)*rows);
  query.limit(rows);
  if(stuname){
    query.where('stuname',stuname);
  }
  //计算分页数据
  query.exec(function(err,rs){
    if(err){
      res.send(err);
    }else{
      //计算数据总数
      Hero.find(function(err,result){
        jsonArray={items:rs,totalCount:result.length};
        res.json(tool.returnInfo(jsonArray));
      });

    }
  });

});
router.post("/delete",function (req, res) {
  var data =req.body;
  console.log(req.body);
  data.forEach(function (i) {
    Hero.remove,(i, function (err, result) {
      res.send(result);
    });
  });
  //计算数据总数
  // Hero.find(function(err,result){
  //   res.json(tool.returnInfo(result));
  // });
  // Hero.remove(data[0], function (err, result) {
  //   res.send(result);
  // });
});
// 通过ObjectId查询单个英雄信息路由
router.get("/hero/:id", (req, res) => {
  Hero.findById(req.params.id)
    .then(_data => {
      res.json(_data);
    })
    .catch(err => {
      res.json(err);
    });
});

// 添加一个英雄信息路由
router.post("/hero", (req, res) => {
  //使用Hero model上的create方法储存数据
  Hero.create(req.body, (err, _data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(tool.returnInfo(_data));
    }
  });
});

//更新一条英雄信息数据路由
router.put("/hero/:id", (req, res) => {
  Hero.findOneAndUpdate(
    {_id: req.params.id},
    {
      $set: {
        name: req.body.name,
        age: req.body.age,
        sex: req.body.sex,
        address: req.body.address,
        dowhat: req.body.dowhat,
        favourite: req.body.favourite,
        explain: req.body.explain
      }
    },
    {
      new: true
    }
  )
    .then(_data => res.json(tool.returnInfo(_data)))
    .catch(err => res.json(err));
});

// 添加图片路由
router.put("/addpic/:id", (req, res) => {
  Hero.findOneAndUpdate(
    {_id: req.params.id},
    {
      $push: {
        imgArr: req.body.url
      }
    },
    {
      new: true
    }
  )
    .then(_data => res.json(_data))
    .catch(err => res.json(err));
});

//删除一条英雄信息路由
router.delete("/hero/:id", (req, res) => {
  Hero.findOneAndRemove({
    _id: req.params.id
  })
  //  res.send(`${hero.title}删除成功`))
  // res.json(tool.returnInfo(_data)))
    .then(_data => res.json(tool.returnInfo(_data)))
    .catch(err => res.json(err));
});


module.exports = router;




















