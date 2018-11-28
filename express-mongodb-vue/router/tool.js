 function  returnInfo(_data){
  if(_data){
    return {
      msg:"请求成功",
      code:'success',
      data:_data
    }
  }else {
    return {
      msg:"请求失败",
      code:'error',
      data:null
    }
  }
};
exports.returnInfo = returnInfo;
