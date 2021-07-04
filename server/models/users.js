var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
var {Head} = require('../untils/config.js')
var url = require('url')

var UserSchema = new mongoose.Schema({
	username : {
				type : String ,  //类型
				required : true , //是否为空
				index : { unique : false } //
			},
	password : { 
				type : String,
				required:true
			},
	email : { 
				type : String , 
				required : true , 
				index : { unique : false  } 
			},
	date : { 
				type : Date, 
				default : Date.now() 
			},
	isAdmin : {
				type : Boolean , 
				default : false
			},
	isFreeze : { 
				type : Boolean , 
				default : false
			},
	userHead : {
				type : String,
				default : url.resolve(Head.baseUrl,'default.jpg')
			}
});

var UserModel = mongoose.model('user', UserSchema);
UserModel.createIndexes();

var save = (data)=>{
	var user = new UserModel(data);
	return user.save()
				.then(()=>{
					return true;
				})
				.catch(()=>{
					return false
				});

};
var findLogin = (data)=>{
	return UserModel.findOne(data);
}

var updatePassword = (email , password)=>{
	return UserModel.update({email},{ $set : { password } } ) //set修改
					.then(()=>{
						return true;
					})
					.catch(()=>{
						return false;
					});
}

var usersList = ()=>{
	return UserModel.find();
}

var updateFreeze = (email ,isFreeze)=>{
	return UserModel.update({email},{$set :{isFreeze}})
					.then(()=>{
						return true;
					})
					.catch(()=>{
						return false;
					});;
}

var deleteUser = (email)=>{
	return UserModel.remove({ email });
}

var updateUserHead = (username, userHead)=>{
	return UserModel.update({username},{$set :{userHead}})
					.then(()=>{
						return true;
					})
					.catch(()=>{
						return false;
					});;
}

module.exports ={
	save,
	findLogin,
	updatePassword,
	usersList,
	updateFreeze,
	deleteUser,
	updateUserHead
};