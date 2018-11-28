const mongoose = require('mongoose')

const sideMenuSchema = mongoose.Schema({
  name :String,
  icon:String,
  url:String,
  subset:[],
}, { collection: 'sideMenu'})
//这里mongoose.Schema要写上第二个参数，明确指定到数据库中的哪个表取数据
const SideMenu = module.exports = mongoose.model('menu',sideMenuSchema);
