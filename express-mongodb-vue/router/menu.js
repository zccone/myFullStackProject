//引入工具类
const tool = require("./tool");
//引入express模块
const express = require("express");
//定义路由级中间件
const router = express.Router();
//引入数据模型模块
const SideMenu = require("../models/sideMenu");

// 查询所有英雄信息路由
router.get("/sideMenu", (req, res) => {
  SideMenu.find({})
    .sort({update_at: -1})
    .then(_data => {
      res.json(tool.returnInfo(_data));
    })
    .catch(err => {
      console.log(2);
      res.json(err);
    });
});
module.exports = router;




















