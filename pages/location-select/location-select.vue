<template>
  <view class="location-select">
		<u-navbar 
		  class="top-bar" 
		  :background='background' 
			back-icon-color='white' 
			title-color='white' 
			title='城市选择'>
		</u-navbar>
		<!-- 当前定位城市 -->
		<view class="now-location">
			<view class="title">当前定位城市</view>
			<view class="city" @click="citySelected('')">
				{{nowLocation}}
			</view>
		</view>
		<!-- 城市列表 -->
		<u-index-list :scrollTop="scrollTop" :index-list="indexList">
				<view v-for="(item, index) in list" :key="index">
					<u-index-anchor :index="item.letter"/>
					<view @click="citySelected(item1.name)" class="list-cell u-border-bottom" v-for="(item1, index) in item.data" :key="index">
						{{item1.name}}
					</view>
				</view>
			</u-index-list>
	</view>
</template>

<script>
import indexList from "@/pages/location-select/list.js";
const letterArr = indexList.list.map(val => {
	return val.letter;
})
	
export default {
	onLoad(options){
		this.navigateToFlag = options.id
		this.getNowLocation()
	},
  data(){
    return{
			navigateToFlag:1,
      background:{
				backgroundColor:"#fe7f00"
			},
			scrollTop: 0,
			indexList: letterArr,
			list: indexList.list,
			nowLocation:'绵阳市'
    }
  },
	methods:{
		backGo(){
			uni.switchTab({
			    url: '/pages/tabBar/home/home'
			})
		},
		// 获取当前位置
		getNowLocation(){
			uni.getLocation({
				type: 'wgs84',
				// geocode: true,
				success: function(res){
					this.nowLocation = res.address.city || '绵阳市'
					console.log(this.nowLocation)
				},
				fail:function(err){
					uni.showToast({
					    title: '获取当前位置失败',
							icon: none,
					    duration: 1500
					}); 
				}
			})
		},
		// 选择城市后的处理
		citySelected(name){
			let url = ''
			if(name == ''){
				name = this.nowLocation
			}
			this.nowLocation = name
			// 向首页传递位置信息
			uni.$emit('selectCity',{  
				address: this.nowLocation
			})
			if(this.navigateToFlag == 1){
				url = '/pages/tabBar/home/home'
			}else if(this.navigateToFlag == 2){
				url = '/pages/tabBar/news/news'
			}
			uni.switchTab({
			    url: url
			})
		}
	},
	onPageScroll(e) {
		this.scrollTop = e.scrollTop;
	},
}
</script>

<style lang="scss">
.location-select{
	width: 750rpx;
	.now-location{
		height: 190rpx;
		padding: 25rpx 28rpx 0 28rpx;
		.title{
			line-height: 50rpx;
			font-size: 30rpx;
			color: #919191;
			margin-bottom: 10rpx;
		}
		.city{
			font-size: 30rpx;
			text-align: center;
			height: 64rpx;
			line-height: 64rpx;
			width: 150rpx;
			background-color: #F6F6F6;
		}
	}
	.list-cell {
		display: flex;
		box-sizing: border-box;
		width: 100%;
		padding: 10px 24rpx;
		overflow: hidden;
		color: $u-content-color;
		font-size: 14px;
		line-height: 24px;
		background-color: #fff;
	}
}
</style>
