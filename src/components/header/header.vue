
<template>
	<div class="ovflows">
		<div class="header">
			<!-- <i class="iconfont icon-fanhui huitui"></i> -->
			<div class="header-r">
				<router-link to="/hotsearch">
					<span class="iconfont icon-fangdajing1 sousuo">
						搜索
					</span>
				</router-link>
				<span class="iconfont icon-fenlei fenlei" @click="greet(inActive)">分类</span>
			</div>
		</div>
		<div class="tablist" v-show="inActive">
			<ul class="landscape">
				<li class="tablistall" v-for= '(nav,index) in navs' :data-cateid="nav.cate1Id"
				:class="{ item_cur:nav.isActive}" @click="tablist(nav,nav.cate1Id)">
					{{nav.cate1Name}}
					<b></b>
				</li>
			</ul>
			<ul class="longitudinal">
				<li v-for='item in items1' :data-cateid="item.cate1Id">
					<div class="nav-item">
						<img :src="item.icon" v-lazy="item.icon" alt=""><br/>
						{{item.cate2Name}}
					</div>
				</li>
			</ul>
			<div class="layout-mask"></div>
		</div>		
	</div>
</template>

<script>
import  axios  from 'axios'
export default {
	data () {
		return {
			navs : '',
			items : '',//存放原始值
			items1:'',//存放变量值
			inActive:false,
		}
	},
	methods : {
		greet: function (event) {
		 	this.inActive=!this.inActive;
		 	axios.get('/static/classification.json').then(res=>{
		 		let all = [{
		 			"cate1Id": "0",
		 			"cate1Name":"全部",
		 			"shortName": "all"
		 		}];
		 		this.navs =all.concat(res.data.cate1Info);
		 		this.navs[0].isActive=true;
		 		for (let i=1;i< this.navs.length;i++){
		 			this.$set(this.navs[i],"isActive",false);
		 		}
		  		this.items = res.data.cate2Info;
		  		this.items1 = res.data.cate2Info;
	  		});
    	},
	 	tablist:function(event,mol){
	 		for (let i=0;i< this.navs.length;i++){
	 			this.$set(this.navs[i],"isActive",false);
	 		}
	 		event.isActive = true;
	 		let items = this.items;
	 		let items1 = [];
	 		if(mol==0){
	 			items1=items
	 		};
	 		for(let j=0;j<items.length;j++){
	 			if(items[j].cate1Id==mol){
	 				items1.push(items[j])
	 			}
	 			//console.log('*'+this.items[j].cate1Id)
	 		}
	 		this.items1 = items1
	 	}
	}
}
</script>

<style>
	a{text-decoration:none;color: #999; }
</style>
<style scoped>
	.header{
		font-size: 0.12rem;
		height: 0.4rem;
		background-color: #eee;
	}
	.huitui{
		display: flex;
		justify-content: center;
		align-items:center;
		float: left;
		width: 0.3rem;
		height: 0.4rem;
	}
	.header-r{
		display: flex;
		justify-content: center;
		align-items:center;
		float: right;
		width: 35%;
		height: 0.4rem;
		color: #999;
	}
	.sousuo{
		margin-right: 15px;
		font-size: 0.12rem;
	}
	.fenlei{
		font-size: 0.12rem;
	}
	.tablist{
		position: absolute;
		width: 100%;
	    z-index: 10;
	    background: #fff;
	}
	.landscape{
		font-size: 0.14rem;
	    max-width: 10rem;
	    overflow-y: hidden;
	    overflow-x: scroll;
	    white-space: nowrap;
	    display: flex; 
	}
	.landscape .tablistall{
		position: relative;
	    display: inline-block;
	    white-space: nowrap;
	    border-right: .12rem solid transparent;
	    border-left: .12rem solid transparent;
	    font-size: .12rem;
	    color: #676767;
	    line-height: 0.4rem;
	}
	.tablistall.item_cur{color: #fa7122;font-weight: 700;}
	.tablistall.item_cur b{
		position: absolute;
	    width: 100%;
	    display: block;
	    height: .05333332rem;
	    left: 0;
	    bottom: .05rem;
	    background-color: #fa7122;
	}
	.longitudinal{
		background-color: #f4f4f4;
	    height: 3.2rem;
	    overflow-y: auto;
	    -webkit-overflow-scrolling: touch;
	}
	.longitudinal li{font-size: 0.12rem;color: #000;}
	.nav-item{
		float: left;
	    width: 1.05594rem;
	    height: 1.05594rem;
	    border-right: 1px dashed #ddd;
	    border-bottom: 1px dashed #ddd;
	    overflow: hidden;
	    text-align: center;
	}
	.nav-item img{
	    margin-top: 0.21333rem;
	    margin-bottom: 0.04267rem;
	    width: 0.52047rem;
	    height: 0.52047rem;
	    border-radius: .271111111rem;
	}
	.layout-mask{
	    position: absolute;
	    width: 100%;
	    height: 100%;
	    background: rgba(0,0,0,.5);
	    z-index: 5;
	}
</style>
