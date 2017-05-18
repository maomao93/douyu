<template>
	<div>
		<v-header></v-header> 
		<div class="layout-banner">
			<swiper :options="swiperOption" ref="mySwiper">
				    <swiper-slide><a href=""><img src="https://staticlive.douyucdn.cn/upload/signs/201705121529575675.jpg" alt=""></a></swiper-slide>
				    <swiper-slide><a href=""><img src="https://staticlive.douyucdn.cn/upload/signs/201705161426379397.jpg" alt=""></a></swiper-slide>
				    <swiper-slide><a href=""><img src="https://staticlive.douyucdn.cn/upload/signs/201705021508577109.jpg" alt=""></a></swiper-slide>
				    <swiper-slide><a href=""><img src="https://staticlive.douyucdn.cn/upload/signs/201705091639371336.png" alt=""></a></swiper-slide>
				    <div class="swiper-pagination swiper-bottom"  slot="pagination"></div>
			  </swiper>
		</div>
		<list></list>
	</div>
</template>

<script>
import Vheader from "@/components/header/header.vue"
import list from '@/components/index_list/index_list'
import {swiperSlide } from 'vue-awesome-swiper'
export default {
	data () {
		return {
			items:[],
			swiperOption: {
				// notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
				notNextTick: true,
				// swiper configs 所有的配置同swiper官方api配置
				autoplay: 2000,
				direction : 'horizontal',//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
				grabCursor : true,
				setWrapperSize :true,
				//autoHeight: true,
				pagination : '.swiper-pagination',
				paginationClickable :true,
				loop : true,//环路
				//prevButton:'.swiper-button-prev',
				//nextButton:'.swiper-button-next',
				//scrollbar:'.swiper-scrollbar',
				mousewheelControl : true,
				observeParents:false,
				// if you need use plugins in the swiper, you can config in here like this
				// 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
				debugger: true,
	        }
		}
	},
 	components: {
 		list,
   	 	swiperSlide,
    	'v-header':Vheader
 	},
}
</script>

<style scoped>
	.swiper-wrapper{
	    position: relative;
	    width: 100%;
	    height: 100%;
	    z-index: 1;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-transition-property: -webkit-transform;
	    transition-property: -webkit-transform;
	    transition-property: transform;
	    transition-property: transform,-webkit-transform;
	    box-sizing: content-box;
	}
	.layout-banner{  
	  	width: 100%;
    	height: 1.23rem;
	}
	.layout-banner .swiper-container{
		height: 100%;    
		margin-left: auto;
		margin-right: auto;
    	position: relative;
    	overflow: hidden;
    	z-index: 1;
    }
    .swiper-pagination.swiper-bottom{
    	    height: .2rem;
		    line-height: .2rem;
		    bottom: 0.33rem;
		    background-color: transparent;
    }
    .layout-banner .swiper-container a{    
    	display: block;
	    overflow: hidden;
	    height: 100%;
	    font-size: 0;
	}
	.layout-banner .swiper-container a img{
		display: block;
    	width: 100%;
    	height: 100%;
    }
    .swiper-pagination-bullet .swiper-pagination-bullet-active{background-color: #fa7122;}
</style>
