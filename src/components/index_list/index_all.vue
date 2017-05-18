<template>
  	<div>
  		<v-header></v-header> 
  		<div class="hotroom">
  			<v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
  				<div class="names">全部</div>
	  			<ul class="roomlist">
		  			<li v-for="(item,index) in listdata">
		  				<router-link to="/index1">
			  				<span><img  v-lazy="item.room_src" :src="item.room_src" alt=""></span>
			  				<p>{{item.room_name}}</p>
		  				</router-link>
		  			</li>
		  			<li v-for="(item,index) in downdata">
		  				<router-link to="/index1">
			  				<span><img :src="item.room_src" v-lazy="item.room_src" alt=""></span>
			  				<p>{{item.room_name}}</p>
		  				</router-link>
		  			</li>
	  			</ul>
		 	</v-scroll>
  		</div>
  		
  	</div>
</template>

<script>
import Vheader from "@/components/header/header.vue"
import Scroll from '@/components/scllo/scroll.vue';
import  axios  from 'axios'
export default {
	data () {
		return {
			counter : 1, //默认已经显示出15条数据 count等于一是让从16条开始加载
	      	num : 10,  // 一次显示多少条
	      	pageStart : 0, // 开始页数
	      	pageEnd : 0, // 结束页数
	      	listdata: [], // 下拉更新数据存放数组
	      	downdata: []  // 上拉更多的数据存放数组
		}
	},
	mounted : function(){
     	this.getList();
  	},
	methods: {
	    getList(){
	      let vm = this;
	      axios.get('/static/all.json').then((response) => {
	      			//console.log(response)
	               vm.listdata = response.data.data.slice(0,10);
	             }, (response) => {
	                console.log('error');
	            });
	    },
	    onRefresh(done) {
	         this.getList();
	         done() // call done
	    },
	    onInfinite(done) {
	      	let vm = this;
	      	axios.get('/static/all.json').then((response) => {
				vm.counter++;
				vm.pageEnd = vm.num * vm.counter;
				vm.pageStart = vm.pageEnd - vm.num;
	          	let arr = response.data.data;
        	 	let i = vm.pageStart;
             	let end = vm.pageEnd;
             	for(; i<end; i++){
                    let obj ={};
                    obj = arr[i];
                    vm.downdata.push(obj);
                 	if((i + 1) >= arr.length){
                      	this.$el.querySelector('.load-more').style.display = 'none';
                      	return;
                    }
                }
              	done() // call done
      	 	}, (response) => {
                console.log('error');
            });
       	}
  	},
  	components : {
	    'v-scroll': Scroll,
	    'v-header':Vheader
  	}

}
</script>
	

<style scoped>
	.hotroom{width: 100%;margin:0.15rem 0;}
	.names{font-size: 0.12rem;display: flex;align-content: center;height: 0.24rem;padding-left: 0.15rem}
	.roomlist{width: 100%;overflow: auto;padding:0 0.05rem;box-sizing: border-box;}
	.roomlist li{width: 50%;float: left;padding:0 0 0.02rem 0.02rem;    display: inline-block;box-sizing: border-box;font-size: 0;}
	.roomlist li>a{text-decoration: none}
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