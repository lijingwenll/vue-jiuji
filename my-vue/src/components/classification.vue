<template>
<div id="classif">
	<div id="nav">
		<ul>
			<li>
				<a href="">
					<i class="iconfont icon-houtui"></i>
				</a>
			</li>
			<li>
				<span class="nav-c">
					<i class="iconfont icon-sousuo"></i>
				</span>
			</li>
			<li>
				<a href="">
					<i class="iconfont icon-more"></i>
				</a>
			</li>		
		</ul>
	</div>
	<p class="ltop"></p>
		<div id="main">
			<div class="main-l">
				<a href="" v-for="item in classi">
					<span>{{item.title}}</span>
				</a>
				<a href="">
					<span></span>
				</a>
			</div>
			<div class="main-r">
				<a href="">
					<img src="https://img2.ch999img.com/pic/category/201801250920590.jpg.webp"/>
				</a>
				<p>热门品牌</p>
				<div class="main-r-t">
					
					<div class="remen">
						<a href="" v-for="item in picsmallt">
							<img :src="item.picture"/>
							<span>{{item.title}}</span>
						</a>
						
					</div>
				</div>
					<p>更多品牌</p>
					<div class="gengduo">
						<a href="" v-for="item in picsmallb">
							<img :src="item.picture"/>
							<span>{{item.title}}</span>
						</a>
				</div>
			</div>
		</div>
		<p class="lbom"></p>
	</div>
</template>
<script>
	import axios from 'axios'
	
	export default {
		  name: 'Classification',
		  data(){
		  	return{
		  		picbig:[],
		  		picsmallt:[],
		  		picsmallb:[],
		  		classi:[],
		  	}
		},
		mounted:function(){
			var that = this;
			axios.get("/web/api/products/category/v1")
			.then(function(res){
				console.log(res);
				that.picbig = res.data.data[0];
				that.picsmallt = res.data.data[0].children[0].children;
				that.picsmallb = res.data.data[0].children[1].children;
				that.classi = res.data.data;
				that.classif = res.data.data[0].children;
				
				console.log(that.classif)
			})
		}
	}
</script>
<style scoped>
@import '../assets/css/classification.css';
@import '../assets/css/reset.css';
</style>

