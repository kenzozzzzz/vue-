var CommentModel = require('../models/comment.js')

var docomment = async(req,res,next)=>{
	var {username , text,iszan} = req.body;
	var result = await CommentModel.save({
		username,
		text,
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
var getcomment = async(req,res,next)=>{
	var findresult = await CommentModel.find();
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
	// CommentModel.find({'username':'kenzo'},function(err,msg){
	// 	if(err){
	// 		console.log(err.message)
	// 	}else{
	// 		console.log(msg)
	// 	}
	// });
	// if(result){
	// 	res.send({
	// 		msg:'获取用户信息成功',
	// 		status:0,
	// 		data:{ //发送到前台
	// 			username:req.session.username,
	// 			text:req.session.text,
	// 			iszan:req.session.iszan
	// 		}
	// 	});
	// }else{
	// 	res.send({
	// 		msg:'获取失败',
	// 		status:-1
	// 	})
	// }
};

module.exports ={
	docomment,
	getcomment
}