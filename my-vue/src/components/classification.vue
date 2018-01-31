<template>
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
		<div id="main">
			<div class="main-l">
				<a href="">
					<span>
						手机通讯
					</span>
				</a>
				<a href="">
					<span>
						手机配件
					</span>
				</a>
				<a href="">
					<span>
						电脑办公
					</span>
				</a>
				<a href="">
					<span>
						智能穿戴
					</span>
				</a>
				<a href="">
					<span>
						数码影音
					</span>
				</a>
				<a href="">
					<span>
						智能家居
					</span>
				</a>
				<a href="">
					<span>
						智能出行
					</span>
				</a>
				<a href="">
					<span>
						娱乐竞技
					</span>
				</a>
				<a href="">
					<span>
						智能健康
					</span>
				</a>
			</div>
			<div class="main-r">
				<a href="">
					<img src="https://img2.ch999img.com/pic/category/201801250920590.jpg.webp"/>
				</a>
				<div class="main-r-t">
					<p>热门品牌</p>
					<div class="remen">
						<a href="">
							<img src="https://img2.ch999img.com/pic/category/201711130944150.jpg.webp"/>
							<span>苹果</span>
						</a>
						<a href="">
							<img src="https://img2.ch999img.com/pic/category/201711130644010.jpg.webp"/>
							<span>华为</span>
						</a>
						<a href="">
							<img src="https://img2.ch999img.com/pic/category/201711301041290.jpg.webp"/>
							<span>荣耀</span>
						</a>
						<a href="">
							<img src="https://img2.ch999img.com/pic/category/201709211121080.jpg.webp"/>
							<span>小米</span>
						</a>
						<a href="">
							<img src="https://img2.ch999img.com/pic/category/201709211121220.jpg.webp"/>
							<span>三星</span>
						</a>
						<a href="">
							<img src="https://img2.ch999img.com/pic/category/201711101234310.jpg.webp"/>
							<span>OPPO</span>
						</a>
						<a href="">
							<img src="https://img2.ch999img.com/pic/category/201709211121420.jpg.webp"/>
							<span>vivo</span>
						</a>
						<a href="">
							<img src="https://img2.ch999img.com/pic/category/201711291123480.jpg.webp"/>
							<span>美图</span>
						</a>
						<a href="">
							<img src="https://img2.ch999img.com/pic/category/201707270949270.jpg.webp"/>
							<span>魅族</span>
						</a>
						<a href="">
							<img src="https://img2.ch999img.com/pic/category/201711080949550.jpg.webp"/>
							<span>锤子手机</span>
						</a>
						<a href="">
							<img src="https://img2.ch999img.com/pic/category/201711291128460.jpg.webp"/>
							<span>一加</span>
						</a>
						<a href="">
							<img src="https://img2.ch999img.com/pic/category/201711291129010.jpg.webp"/>
							<span>金立</span>
						</a>
						<a href="">
							<img src="https://img2.ch999img.com/pic/category/201706210346470.jpg.webp"/>
							<span>努比亚</span>
						</a>
						<a href="">
							<img src="https://img2.ch999img.com/pic/category/201706210346470.jpg.webp"/>
							<span>360</span>
						</a>
						<a href="">
							<img src="https://img2.ch999img.com/pic/category/201707100214430.jpg.webp"/>
							<span>索尼</span>
						</a>
					</div>
				</div>
					<p>更多品牌</p>
					<div class="gengduo">
						
						<a href="">
							<img src="https://img2.ch999img.com/pic/category/201706270416470.jpg.webp"/>
							<span>摩托罗拉</span>
						</a>
						<a href="">
							<img src="https://img2.ch999img.com/pic/category/201708180444050.jpg.webp"/>
							<span>夏普</span>
						</a>
						<a href="">
							<img src="https://img2.ch999img.com/pic/category/201708180444320.jpg.webp"/>
							<span>黑莓</span>
						</a>
						<a href="">
							<img src="https://img2.ch999img.com/pic/category/201711140122260.jpg.webp"/>
							<span>诺基亚</span>
						</a>
						<a href="">
							<img src="https://img2.ch999img.com/pic/category/201706210351200.jpg.webp"/>
							<span>酷派</span>
						</a>
						<a href="">
							<img src="https://img2.ch999img.com/pic/category/201706210351080.jpg.webp"/>
							<span>中兴</span>
						</a>
						<a href="">
							<img src="https://img2.ch999img.com/pic/category/201707100211250.jpg.webp"/>
							<span>AGM旅行手机</span>
						</a>
						<a href="">
							<img src="https://img2.ch999img.com/pic/category/201611160252220.jpg.webp"/>
							<span>全部手机</span>
						</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	
	import axios from 'axios'
	
	export default {
		  name: 'Classification',
		  data: function(){
		  	return{
		  		
		  	}
		  },
		  methods:{
		  	gotoDetail(id){
		  		console.log(this);
		  		this.$router.history.push({name:'Detail',params:{fid:id}});
		  	}
		  },
		  mounted(){
		  	axios.get("https://m.9ji.com/event/1601.html?from=fllb")
		  	.then((res)=>{
		  		console.log(res);
		  	})
		  }
	    }
</script>


<style scoped>
@import '../assets/css/classification.css';
@import '../assets/css/reset.css';
</style>

