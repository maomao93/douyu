
<template>
<div>
  	<div class="player">
  		<video src=""><p>您的浏览器不支持 video 标签</p></video>
  		<div class="poster">
	  		<img :src="information.room_src" id="video-poster">
	    	<div class="play-btn"></div>
		    <div class="room-info">
		        <span class="name">{{information.room_name}}</span>
		        <span class="class">{{information.tag_name}}</span>
		    </div>
		</div>
  	</div>
  	<div id="infoArea" class="info-area">
	    <div class="info-room">
	        <img class="dy-photo" :src="information.avatar" alt="">
	        <div class="dy-info">
	            <p class="dy-name-content">主播：<span id="nickname" class="dy-name">{{information.nickname}}</span></p>
	            <p class="online-content" id="online">共<span class="online">
	            {{(information.online/10000).toFixed(1)}}万</span>人正在观看
	            </p>
	        </div>
	    </div>
	    <div class="info-handle">
	        <div id="sendBar" class="hd-item hd-send">
	            <img class="icon" src="https://shark.douyucdn.cn/app/douyu-mobile/m-douyu/res/hd-send.png?v=2.2" alt="">发弹幕
	            <b class="split-line"></b>
	        </div>
	        <div id="focusRoom" class="hd-item hd-focus">
	            <img class="icon" src="https://shark.douyucdn.cn/app/douyu-mobile/m-douyu/res/hd-focus.png?v=2.2" alt="">关注
	            <b class="split-line"></b>
	        </div>
	        <div id="shareRoom" class="hd-item hd-share">
	            <img class="icon" src="https://shark.douyucdn.cn/app/douyu-mobile/m-douyu/res/hd-share.png?v=2.2" alt="">分享
	        </div>
	    </div>
	</div>
</div>
</template>

<script>
import axios from "axios"
export default {
	data () {
		return {
			information : ''
		}
	},
	mounted : function(){
		axios.get('/static/room_name.json').then(res=>{
	 		this.information = res.data.data;
	 		console.log(this.information)
  		})
	}
}
</script>

<style scoped>
	.player{
	    position: relative;
	    width: 100%;
	    height:1.81328rem;
	    overflow: hidden;
	}
	.player video{
	    width: 100%;
    	height: 100%;
	}
	.poster{
		position: absolute;
	    width: 100%;
	    height: 100%;
	    left: 0;
	    top: 0;
	    background-color: #000;
	}
	.poster img{
   	 	width: 100%;
    	pointer-events: none;
	}
	.player .poster .play-btn{
		display: none;
	    position: absolute;
	    left: 2.85867rem;
	    top: 1.53600rem;
	    width:0.68266rem;
	    height: 0.68266rem;
	    background-position: -2.13333333rem 0;
	}
	.room-info{
		position: absolute;
	    width: 100%;
	    height: 0.3rem;
	    line-height: 0.3rem;
	    left: 0;
	    bottom: 0;
	    font-size: .12rem;
	    background: linear-gradient(top,rgba(0,0,0,0) 0,rgba(0,0,0,.1) 30%,rgba(0,0,0,.8) 100%);
	    background: -webkit-linear-gradient(top,rgba(0,0,0,0) 0,rgba(0,0,0,.1) 30%,rgba(0,0,0,.8) 100%);
	}
	.name{
		display: block;
   	 	float: left;
	    margin-left: .13333334rem;
	    width: 2rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    overflow: hidden;
	    color: #fff;
	    height: 0.3rem;
	    line-height: 0.3rem
	}
	.class{
   		display: block;
	    float: right;
	    margin-right: .133333334rem;
	    width: 0.6rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    overflow: hidden;
	    color: #f70;
	    text-align: right;
	    height: 0.3rem;
	    line-height: 0.3rem
	}
	.info-area {
	    height: 0.981rem;
	    background-color: #fff;
	    padding: 0 .1024rem
	}
  	.info-area .info-room {
	    height: 0.502045rem;
	    font-size: 0;
	}
 	.info-area .info-room .dy-photo {
	    width: 0.34133rem;
	    height: 0.34133rem;
	    vertical-align: top;
	    margin-top: .1024rem;
	    border-radius: 100%
	}
 	.info-area .info-room .dy-info {
	    display: inline-block;
	    margin-top: .1024rem;
	    padding-left: .08533rem;
	    line-height: .16rem
	}
 	.info-area .info-room .dy-info .dy-name-content {
	    color: #333;
	    font-size: .12rem;
	    max-width: 1.1rem;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis
	}
 	.info-area .info-room .dy-info .online-content {
	    color: #666;
	    font-size: .12rem;
	    transform: scale(0.86);
    	margin-left: -0.075rem;
	}

 	.info-area .info-room .dy-info .online-content .online {
	    color: #fa7221
	}
	.info-area .info-handle {
	    height: 0.460315rem;
	    white-space: nowrap;
	    font-size: 0;
	}
	.info-area .info-handle .hd-item {
	    position: relative;
	    display: inline-block;
	    width: 33.3333%;
	    text-align: center;
	    line-height: 0.46rem;
	    color: #666;
	    font-size: .12rem
	}
 	.info-area .info-handle .hd-item .icon{
	    width: .2133rem;
	    height: .170625rem;
	    vertical-align: top;
	    margin-top: .145rem;
	    margin-right: .0768rem;
	    background: 0 0;
	}
 	.info-area .info-handle .hd-item .split-line{
	   	position: absolute;
	    top: .14rem;
	    right: 0;
	    display: inline-block;
	    height: .1875rem;
	    width: 1px;
	    background-color: #DDD;
	}
</style>
