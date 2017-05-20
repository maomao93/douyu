<template>
	<div>
		<div class="layout-header">
			<input type="text" name="" id="" placeholder="搜索房间/主播/分类">
			<button>搜索</button>
		</div>
		<div class="layout-content">
			<h3 class="hot-title">最近热搜</h3>
			<div class="hot-content">
				<div class="left-block">
					<span v-for="(sort,index) in sort1">
						<strong class="sotindex">{{index+1}}</strong>
						{{sort}}
					</span>
				</div>
				<div class="right-block">
					<span v-for="(sort,index) in sort2">
						<strong class="sotindex">{{index+5}}</strong>
						{{sort}}
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import  axios  from 'axios'
export default {
	data () {
		return {
			sort1 : '',
			sort2 : ""	
		}
	},
	mounted : function(){
		axios.get('/static/sort.json').then(res=>{
		  		this.sort1 = res.data.slice(0,4)
		  		this.sort2 = res.data.slice(4,8)
	  		})
	}
}
</script>

<style scoped>
	.layout-header{
	    width: 100%;
	    height: 0.37531rem;
	    background-color: #fff;
	    border-bottom: 1px solid #eee;
	    vertical-align: middle;
	}
	.layout-header input{
		float: left;
	    width: 80%;
	    height: 0.23594rem;
	    outline: none;
	    border: none;
	    background-color: #f8f8f8;
	    padding-left: 0.08533rem;
	    margin: 0.05973rem 0 0 .08533rem;
	    font-size: 0.12rem;
	    box-sizing: border-box;
	}
	.layout-header button{
		word-spacing:normal;
		letter-spacing: normal;
		float: left;
	    width: 17%;
	    line-height: .25rem;
	    padding: 0;
	    border: none;
	    margin-top: 0.05973rem;
	    text-align: center;
	    outline: none;
	    font-size: 0.14rem;
	    color: #333;
	    background-color: transparent;
	}
	.layout-content{
		background-color: #fff;
	}
	.hot-title{
	    padding-left: 0.08533rem;
	    line-height: 0.46rem;
	    font-size: 0.1rem;
	    color: #333;
	    border-bottom: 1px solid #eee;
	    font-weight: 600;
	}
	.hot-content .left-block{
		font-size: 0.12rem;
	    width: 50%;
	    float: left;
	    overflow: hidden;
	    word-break: break-all;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.hot-content .right-block{
		font-size: 0.12rem;
	    width: 50%;
	    float: left;
	    overflow: hidden;
	    word-break: break-all;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.hot-content .left-block span{
	    display: block;
	    height:0.37531rem;
	    line-height: 0.37531rem;
	    padding-left: 0.08533rem;
	    overflow: hidden;
	    word-break: break-all;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.hot-content .right-block span{
	    display: block;
	    height: 0.37531rem;
	    line-height: 0.37531rem;
	    padding-left: 0.08533rem;
	    overflow: hidden;
	    word-break: break-all;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.sotindex{font-weight: bold;color: red;width: 0.2rem;height:0.37531rem ;line-height:0.37531rem;display: inline-block;padding-left: 0.1rem }
</style>
