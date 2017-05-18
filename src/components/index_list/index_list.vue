<template>
  	<div>
  		<div class="hotroom">
  			<div class="names">
	  			<p class=" iconfont icon-shexiangsheying">热门</p>
	  			<router-link to="/indexall" class="all_name iconfont icon-jiantouyou">更多</router-link>
  			</div>
  			<ul class="roomlist">
	  			<li v-for='item in items'>
	  				<router-link to="/index1">
		  				<span><img v-lazy="item.room_src" :src="item.room_src" alt=""></span>
		  				<p>{{item.room_name}}</p>
	  				</router-link>
	  			</li>
  			</ul>
		</div>
  	</div>
</template>

<script>
import  axios  from 'axios'
export default {
	data () {
		return {
			items : '',
		}
	},
	mounted:function(){//capi.douyucdn.cn/api/v1/live
	  	axios.get('/static/all.json').then(res=>{
	  		this.items = res.data.data.slice(0,8)
	  	})
	}

}
</script>
	
<style scoped>
	a{text-decoration: none;color: #333;}
	.hotroom{width: 100%;border-top: 0.1rem solid #eee;}
	.names{font-size: 0.14rem;display: flex;align-content: center;justify-content: space-between;height: 0.34rem;line-height:0.34rem;padding:0 0.15rem;}
	.all_name{display: flex;align-content: center;}
	.roomlist{width: 100%;overflow: auto;padding:0 0.05rem;box-sizing: border-box;}
	.roomlist li{width: 50%;float: left;padding:0 0 0.02rem 0.02rem;    display: inline-block;box-sizing: border-box;font-size: 0;}
	.roomlist li>a>span{width: 100%;height:0.9rem;display: inline-flex;}
	.roomlist li>a>span>img{width: 100%;height: 100%;overflow: hidden;border-radius: 0.06rem}
	.roomlist li>a>p{
			font-size: 0.12rem;
			width: 1.53rem;
		    height: .2rem;
		    line-height: .2rem;
		    color: #333;
		    overflow: hidden;
		    word-break: break-all;
		    white-space: nowrap;
		    text-overflow: ellipsis;
		}
</style>
