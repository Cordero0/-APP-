<template>
  <view class="home">
		<!-- 顶部搜索栏 -->
		<view class="top-bar">
		  <image src="../../../static/app-plus/uni@2x.png"></image>
			<view class="input">
				<view class="location" @click="locationChange">
					{{city}}
					<u-icon name="arrow-down-fill" size="5" color="#333333"></u-icon>
				</view>
				<u-line color="#D9D9D9" margin="15rpx 0 0 0" direction='col' length='60%'/>
				<view class="input-search" @click="searchHandle">
					<u-icon name="search"></u-icon>
					社区/街道/商圈/编号
				</view>
			</view>
		</view>
		<!-- 首页banner -->
		<view class="top-img">
			<image src="@/static/pics-1.jpeg"></image>
		</view>
		<!-- 金刚区 -->
		<view class="recommend-function-wrapper">
			<scroll-view
			  scroll-x="true" 
			  class="main-content"
				:scroll-left='scrollLeft1'
				@scroll='scrollHandle'
				scroll-with-animation=true>
				<!-- 第一页金刚区 -->
				<view class="recommend-function">
					<view class="row-wrapper">
						<view class="row">
							<!-- 未考虑页面跳转问题，暂时用v-for -->
							<view v-for="item in recommendFunction1" :key="item.id" class="recommend-function-item">
								<image :src='item.url'></image>
								<view class="title">{{item.title}}</view>
							</view>
						</view>
						<view class="row">
							<view v-for="item in recommendFunction2" :key="item.id" class="recommend-function-item">
								<image :src='item.url'></image>
								<view class="title">{{item.title}}</view>
							</view>
						</view>
					</view>
				</view>
				<!-- 第二页金刚区 -->
				<view class="recommend-function">
					<view class="row-wrapper">
						<view class="row">
							<!-- 未考虑页面跳转问题，暂时用v-for -->
							<view v-for="item in recommendFunction1" :key="item.id" class="recommend-function-item">
								<image :src='item.url'></image>
								<view class="title">{{item.title}}</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
			<!-- 滚动条 -->
			<view class="slide-wrapper">
				<view class="slide">
					<view class="slide-item" :style="{left:slideLeft}"></view>
				</view>
			</view>
		</view>
		<!-- "新建案"推荐 -->
		<view class="new-recommend">
			<view class="title">
				<text>新建案</text>
				<view class="more">更多<u-icon name="arrow-right"></u-icon></view>
				<!-- <uni-icons type=""></uni-icons> -->
			</view>
			<view class="content">
				<view class="item-1">
					<view class="item-title">
						六月超人气建案
					</view>
					<view class="other">
						35626人都在看<u-icon name="arrow-right"></u-icon>
					</view>
				</view>
				<view class="item-1">
					<view class="item-title">
						台北市低总价建案
					</view>
					<view class="other">
						总价407万起<u-icon name="arrow-right"></u-icon>
					</view>
				</view>
				<view class="item-2">
					<view class="item-title">
						均价低于100.91万
					</view>
					<view class="other">
						优选好户型<u-icon name="arrow-right"></u-icon>
					</view>
				</view>
				<view class="item-3">
					<view class="item-3-1">
						<view class="item-title">特价三房</view>
					</view>
					<view class="item-3-1">
						<view class="item-title">出门就是商圈</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 影视专区 -->
		<view class="video">
			<view class="title">
				<text>影音专区</text>
				<view class="more">更多<u-icon name="arrow-right"></u-icon></view>
				<!-- <uni-icons type=""></uni-icons> -->
			</view>
			<scroll-view class="video-item-wrapper" scroll-x="true" @scroll='videoSlideHandle'>
				<view class="video-item" v-for="item in videoList" :key='item.id'>
					<image :src="item.img_url"></image>
					<view class="footer">
						<text>{{item.see_time+' '+'|'+' '}}</text> 
						<text>{{item.time_length}}</text>
					</view>
				</view>	
			</scroll-view>
			<view class="slide-wrapper">
				<view class="slide">
					<view class="slide-item" :style="{left:videoSlideLeft}"></view>
				</view>
			</view>
		</view>
		<!-- 中古屋 -->
		<view class="partition-recommend">
			<view class="title">
				<text>中古屋</text>
				<view class="more">更多<u-icon name="arrow-right"></u-icon></view>
				<!-- <uni-icons type=""></uni-icons> -->
			</view>
		  <view class="partition-content">
				<view class="partition-item">
					<view class="title">住宅</view>
				</view>	
				<view class="partition-item">
					<view class="title">套房</view>
				</view>
				<view class="partition-item">
					<view class="title">店面</view>
				</view>
		  </view>
		</view>
		<!-- 猜你喜欢 -->
		<recommend-like class="like"></recommend-like>
	</view>
</template>

<script>
import recommendLike from '@/components/recommen-like/recommend-like.vue'

export default {
	components:{
		recommendLike
	},
  data(){
    return{
			// 默认城市
			city:'绵阳市',
      searchContent:'',
			scrollLeft1:0,
			slideLeft:'0rpx',
			videoSlideLeft:'0rpx',
			// 金刚区1
			recommendFunction1:[
				{
					id:1,
					title:"租房",
					url:'../../../static/home/qianbao.png'
				},
				{
					id:2,
					title:"中古屋",
					url:'../../../static/home/zhuye.png'
				},
				{
					id:3,
					title:"新建案",
					url:'../../../static/home/tianjia.png'
				},
				{
					id:4,
					title:"商用地产",
					url:'../../../static/home/gouwudai.png'
				},
				{
					id:5,
					title:"房屋试算",
					url:'../../../static/home/jilu.png'
				}
			],
			// 金刚区2
			recommendFunction2:[ 
				{
					id:6,
					title:"查利率",
					url:'../../../static/home/shaixuan.png'
				},
				{
					id:7,
					title:"实价登录",
					url:'../../../static/home/shenfenzhengzhengmian.png'
				},
				{
					id:8,
					title:"室内设计 ",
					url:'../../../static/home/gengduo.png'
				},
				{
					id:9,
					title:"地图找房",
					url:'../../../static/home/dingwei.png'
				},
				{
					id:10,
					title:"我的最爱",
					url:'../../../static/home/xihuan.png'
				}
			],
			// 影视专区视频内容
			videoList:[
				{
					id:1,
					img_url:'../../../static/pics-2.jpeg',
					see_time:'63.2万',
					time_length:'08:53'
				},
				{
					id:2,
					img_url:'../../../static/pics-3.jpeg',
					see_time:'63.2万',
					time_length:'08:53'
				},
				{
					id:3,
					img_url:'../../../static/pics-2.jpeg',
					see_time:'63.2万',
					time_length:'08:53'
				},
				{
					id:4,
					img_url:'../../../static/pics-2.jpeg',
					see_time:'63.2万',
					time_length:'08:53'
				},
				{
					id:5,
					img_url:'../../../static/pics-2.jpeg',
					see_time:'63.2万',
					time_length:'08:53'
				}
			]
    }
  },
	created() {
		// this.videoGet()
	},
	methods:{
		locationChange(){
			// 获取位置信息
			uni.$on('selectCity',(info)=>{
				this.city=info.address
			})
			uni.navigateTo({
				url:'/pages/location-select/location-select?id=1'
			})
		},
		// 实现滑动的自然过渡
		scrollHandle(e){
			if(e.detail.deltaX < 0){
				if(e.detail.scrollLeft >= 200 && e.detail.scrollLeft <= 375){
					this.scrollLeft1 = 375
					this.slideLeft = '35rpx'
				}
			}else if(e.detail.deltaX > 0){
				if(e.detail.scrollLeft >= 0 && e.detail.scrollLeft <= 150){
					this.scrollLeft1 = 0
					this.slideLeft = '0rpx'
				}
			}else{
				this.scrollLeft1 = e.detail.scrollLeft
			}
		},
		videoSlideHandle(e){
			// console.log(e.detail.scrollLeft)
			this.videoSlideLeft = e.detail.scrollLeft/18+'rpx'
		},
		// 获取“影视专区”视频信息
		// videoGet(){
		// 	this.$myRequest({
		// 		url:'/video'
		// 	}).then(res=>{
		// 		this.videoList = res.data
		// 	})
		// },
		searchHandle(){
			uni.navigateTo({
				url:'/pages/home-search/home-search'
			})
		}
	}
}
</script>

<style lang="scss">
.home{
	padding-top: 0rpx;
	font-family: '苹方-简';
	width: 750rpx;
	height: 5000rpx;
	// 顶部搜索栏
	.top-bar{
		width: 100%;
		height: 120rpx;
		background-color: white;
		opacity: 0.9;
		padding-top: 29rpx;
		display: flex;
		position: fixed;
		z-index: 999;
		top:0rpx;
		image{
			width: 80rpx;
			height: 62rpx;
			margin: 0 30rpx 0 28rpx;
		}
		.input{
			display: flex;
			color: #1f1f1f;
			line-height: 62rpx;
			font-size: 26rpx;
			padding-left: 16rpx;
			width: 589rpx;
			height: 62rpx;
			background-color: #EEEEEE;
      border-radius: 31rpx;
			.location{
				font-size: 27rpx;
				color: black;
				padding-right: 20rpx;
				// border-right: 1rpx solid #BBBBBB;
			}
			.input-search{
				padding-left: 20rpx;
				color: #888888;
			}
		}
	}
	// banner
	.top-img{
		margin-top: 126rpx;
		height: 294rpx;
		width: 694rpx;
		padding-left: 28rpx;
		image{
			width: 694rpx;
			height: 100%;
			border-radius: 20rpx;
		}
	}
	// 金刚区
	.recommend-function-wrapper{
		width: 100%;
		height: 324rpx;
		margin-left: 28rpx;
		margin-top: 15rpx;
		.main-content{
			white-space: nowrap;
			overflow: hidden;
			width: 100%;
			height: 250rpx;
			.recommend-function{
				display: inline-block;
				height: 100%;
				width: 750rpx;
				.row-wrapper{
					display: flex;
				  flex-direction: column;
					.row{
						width: 694rpx;
						height: 125rpx;
						display: flex;
						flex-wrap: wrap;
						justify-content: space-between;
						.recommend-function-item{
							padding-top: 15rpx;
							width: 128rpx;
							height: 132rpx;
							text-align: center;
							image{
								width: 70rpx;
								height: 70rpx;
								margin-bottom: -5rpx;
							}
							.title{
								font-size: 22rpx;
							}
						}	
					}
				}
			}
		}
		.slide-wrapper{
			height: 44rpx;
			.slide{
				width: 73rpx;
				height: 10rpx;
				background-color: #EEEEEE;
				margin-top: 18rpx;
				margin-left: 312rpx;
				border-radius: 5rpx;
				position: relative;
				.slide-item{
					position: absolute;
					height: 100%;
					width: 50%;
					border-radius: 5rpx;
					background-color: $theme-color;
				}
			}
		}
    
	}
	// “新建案”分区
	.new-recommend{
	  margin-top: 15rpx;
		width: 100%;
		padding-left: 28rpx;
		padding-right: 28rpx;
		.title{
			height: 60rpx;
			width: 694rpx;
			display: flex;
			margin-bottom: 15rpx;
		  justify-content: space-between;
			text{
        line-height: 60rpx;
				font-size: 35rpx;
				font-weight: 600;
				color: black;
			}
			.more{
				margin-top: 10rpx;
				font-size: 28rpx;
				color: #BBBBBB;
			}
		}
		.content{
			width: 694rpx;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			.item-title{
				margin-top: 18rpx;
				margin-left: 18rpx;
				margin-bottom: 5rpx;
				color: #343434;
				font-size: 28rpx;
				font-weight: 560;
			}
			.other{
				margin-left: 18rpx;
				color: #242424;
				font-size: 24rpx;
			}
			.item-1{
				width: 338rpx;
				height: 118rpx;
				background-color: #eff3fe;
				border-radius: 10rpx;
			}
			.item-2{
				padding-top: 20rpx;
				margin-top: 18rpx;
				width: 338rpx;
				height: 218rpx;
				border-radius: 10rpx;
				background-color: #eff3fe;
			}
			.item-3{
				width: 338rpx;
				height: 218rpx;
				.item-3-1{
					border-radius: 10rpx;
					height: 100rpx;
					background-color: #eff3fe;
					width: 100%;
					view{
						line-height: 100rpx;
					}
				}
			}
		}
	}
	// 影音专区
	.video{
		margin-top: 30rpx;
		width: 100%;
		padding-left: 28rpx;
		padding-right: 28rpx;
		.title{
			height: 60rpx;
			width: 694rpx;
			display: flex;
			margin-bottom: 15rpx;
		  justify-content: space-between;
			text{
		    line-height: 60rpx;
				font-size: 35rpx;
				font-weight: 600;
				color: black;
			}
			.more{
				margin-top: 10rpx;
				font-size: 28rpx;
				color: #BBBBBB;
			}
			margin-bottom: 22rpx;
		}
		.video-item-wrapper{
			white-space: nowrap;
			overflow: hidden;
			width: 100%;
			height: 220rpx;
			.video-item{
				display: inline-block;
				position: relative;
				margin-right: 20rpx;
				width: 397rpx;
				image{
					width: 397rpx;
          height: 220rpx;
				  border-radius: 10rpx;
				}
				.footer{
					width: 173rpx;
					height: 30rpx;
					line-height: 30rpx;
					position: absolute;
					border-radius: 5rpx;
					text-align: center;
					background-color: rgba(45, 45, 45, 0.8);
					bottom: 27rpx;
					right: 10rpx;
					color: white;
					text{
						color: white;
						font-size: 22rpx;
					}
				}
			}
		}
		.slide-wrapper{
			height: 44rpx;
			.slide{
				width: 80rpx;
				height: 10rpx;
				background-color: #EEEEEE;
				margin-top: 37rpx;
				margin-left: 310rpx;
				border-radius: 5rpx;
				position: relative;
				.slide-item{
					position: absolute;
					height: 100%;
					width: 50%;
					border-radius: 5rpx;
					background-color: $theme-color;
				}
			}
		}
	}
	// 中古屋
	.partition-recommend{
		margin-top: 10rpx;
		width: 100%;
		padding-left: 28rpx;
		padding-right: 28rpx;
		.title{
			height: 60rpx;
			width: 694rpx;
			display: flex;
			margin-bottom: 15rpx;
		  justify-content: space-between;
			text{
		    line-height: 60rpx;
				font-size: 35rpx;
				font-weight: 600;
				color: black;
			}
			.more{
				margin-top: 10rpx;
				font-size: 28rpx;
				color: #BBBBBB;
			}
		}
		.partition-content{
			height: 127rpx;
			width: 694rpx;
			display: flex;
			justify-content: space-between;
			.partition-item{
				height: 127rpx;
				width: 217rpx;
				background-image: url('../../../static/pics-4.jpg');
				background-repeat: round;
				border-radius: 8rpx;
				.title{
					padding-left: 72rpx;
					width: 217rpx;
					height: 127rpx;
					line-height: 127rpx;
					color: white;
					font-size: 38rpx;
					border-radius: 8rpx;
					background-color: rgba(0, 0, 0, 0.4);
				}
			}	
		}
	}
	// 猜你喜欢
	.like{
		margin-top: 40rpx;
	}
}
</style>
