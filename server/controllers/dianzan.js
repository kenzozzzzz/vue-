var DianzanModel = require('../models/dianzan.js')

var dianzan = async(req,res,next)=>{
	var {iszan} = req.body;
	var result = await DianzanModel.save({
		iszan
	})
	if(result){
		res.send({
			msg : '评论成功',
			status:0
		})
	}else{
		res.send({
			msg:'评论失败',
			status:-1
		})
	}
};

var getdianzan = async(req,res,next)=>{
	var findresult = await DianzanModel.find();
	if(findresult){
		res.send({
			msg : '评论成功',
			status:0,
			findresult
		})
	}else{
		res.send({
			msg:'评论失败',
			status:-1
		})
	}
}
module.exports ={
	dianzan,
	getdianzan
}