const mongoose = require('mongoose')
// const UUID = require('uuid');
// var ID = UUID.v1();
const heroSchema = mongoose.Schema({
  uuid:String,
  name :String,
  age : Number,
  sex : String,
  // address : String,
  // dowhat : String,
  // imgArr:[],
  // favourite:String,
  // explain:String
}, { collection: 'myhero'})
//这里mongoose.Schema要写上第二个参数，明确指定到数据库中的哪个表取数据


const Hero = module.exports = mongoose.model('hero',heroSchema);
