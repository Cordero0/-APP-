<template>
  <view class="fast-search">
		<view class="top-search">
			<u-search 
			  v-model="searchContent" 
			  placeholder="请输入社区、街道、商圈、编号" 
				shape='square' :show-action='false'>
			</u-search>
		</view>
		<view class="search-list">
			<view v-for="(item,index) in typeList" :key="item.id" class="list-item">
				<text>{{item.title}}</text>
				<view>不限<u-icon name="arrow-right"></u-icon></view>
			</view>
		</view>
		<!-- 收起、下拉菜单 -->
		<view :class="flag?'launch-1':'launch'">
			<view class="more-type" @click="loadingMore">
				{{flag?'收起':'更多'}}<u-icon :name="flag?'arrow-up-fill':'arrow-down-fill'"></u-icon>
			</view>
			<view class="launch-padding"></view>
		</view>
	</view>
</template>

<script>
export default {
	// 传入的类型值不同，申请的数据也不同
	props:[
		'type'
	],
  data(){
    return{
			typeNum:this.type,
      searchContent:'',
      flag:false,
      typeList:[
      	{
      		id:1,
      		title:'交通'
      	},{
      		id:2,
      		title:'类型'
      	},{
      		id:3,
      		title:'租金'
      	},{
      		id:4,
      		title:'格局'
      	},{
      		id:5,
      		title:'坪数'
      	},{
      		id:6,
      		title:'房型'
      	},{
      		id:7,
      		title:'来源'
      	},{
      		id:8,
      		title:'车位'
      	},{
      		id:9,
      		title:'阳台'
      	},{
      		id:10,
      		title:'养宠物'
      	},{
      		id:11,
      		title:'合租'
      	},
      ]
    }
  },
	methods:{
		loadingMore(){
			this.flag = !this.flag
		}
	}
}
</script>

<style lang="scss">
.fast-search{
	background-color: #f6f6f6;
	height: 1365rpx;
	position: relative;
	.top-search{
		background-color: white;
		padding: 10rpx;
		border-bottom: 1px solid #dddddd;
	}
	.search-list{
		background-color: white;
		.list-item{
			height: 79rpx;
			line-height: 79rpx;
			border-bottom: 1px solid #e2e2e2;
			padding-left: 18rpx;
			padding-right: 18rpx;
			font-size: 32rpx;
			color: #7d7d7d;
			display: flex;
			justify-content: space-between;
			text:nth-child(1){
				font-weight: 600;
				color: #474747;
			}
		}
	}
	// 列表“合上”的样式
	.launch{
		position: absolute;
		z-index: 999;
		top: 479rpx;
		width: 100%;
		.more-type{
			line-height: 79rpx;
			height: 80rpx;
			background-color: white;
			text-align: center;
			font-size: 32rpx;
			color: #7d7d7d;
		}
		.launch-padding{
			width: 100%;
			height: 500rpx;
			background-color: #f6f6f6;
			margin-top: -2rpx;
		}
	}
	// 列表“打开”的样式
	.launch-1{
		position: absolute;
		z-index: 999;
		top: 946rpx;
		width: 100%;
		.more-type{
			line-height: 79rpx;
			height: 80rpx;
			background-color: white;
			text-align: center;
			font-size: 32rpx;
			color: #7d7d7d;
		}
		.launch-padding{
			width: 100%;
			height: 100rpx;
			background-color: #f6f6f6;
			margin-top: -2rpx;
		}
	}
}
</style>
