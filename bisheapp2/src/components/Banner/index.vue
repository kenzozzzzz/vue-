<template lang="html">
	<div class="banner">
		<img v-for="(item,index) in imgArray"  :key="index"  :src="item" v-show="n==index"/>
		<div class="banner-circle">
			<!-- <ul>
				<li v-for="(item,index) in imgArray" :key="index" :class="index==n?'selected':''"
				 @click="clickImg(index)"></li>
			</ul> -->

		</div>
	</div>

</template>

<script>
export default {
	name:"banner",
	data(){
		return {
			n:0,//默认图片是第一张开始
			imgArray:[
				require('./images/timg5.jpg'),
				require('./images/timg6.jpg'),
				require('./images/timg7.jpg'),
			],//获取图片位置
		}
	},
	created(){
		this.play()
	},
	methods:{
		play(){
			this.timer = setInterval(this.autoPlay, 5000);//用定时器控制每张图的显示时间
		},
		autoPlay(){ 
			this.$data.n ++
			if(this.imgArray.length == this.n){
				this.n = 0 
			}
		},
		clickImg(index){
			this.n = index   //显示当前点击的图片

		}

	},
	beforeDestroy(){
		clearInterval(this.timer)   //清除定时器
	},


}
</script>

<style lang="css" scoped>
.banner{
	width: 100%;
}
img{
	width:40%;
	height: 50%;
}
.banner-circle{
	position: fixed;
	top: 20%;
	left:40%;
}
ul{
	display: flex;
}
li{
	height: 10px;
	width: 10px;
	margin-left: 10px;
	border-radius: 50%;
	background: red;
}
.selected{
	background: green;
}

</style>



