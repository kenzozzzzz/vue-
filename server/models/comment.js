var mongoose = require('mongoose');
mongoose.set('useCreateIndex',true);

var CommentSchema = new mongoose.Schema({
	username:{type:String,require:true},
	text:{type:String,require:true},
	iszan:{type:Boolean,require:false},
	date:{type:Date,default:Date.now()}
})

var CommentModel = mongoose.model('comment',CommentSchema);
CommentModel.createIndexes();

var save = (data)=>{
	var comment = new CommentModel(data)
	return comment.save()
			.then(()=>{
				return true
			})
			.catch(()=>{
				return false
			});
};
var find = ()=>{
	return CommentModel.find();
}

module.exports={
	save,
	find
};