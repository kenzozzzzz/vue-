var mongoose = require('mongoose');
mongoose.set('useCreateIndex',true);

var DianzanSchema = new mongoose.Schema({
	iszan:{type:Boolean,require:false},
})

var DianzanModel = mongoose.model('dianzan',DianzanSchema);
DianzanModel.createIndexes();

var save = (data)=>{
	var dianzan = new DianzanModel(data)
	return dianzan.save()
			.then(()=>{
				return true
			})
			.catch(()=>{
				return false
			});
};
var find = ()=>{
	return DianzanModel.find();
}

module.exports={
	save,
	find
};