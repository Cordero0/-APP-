<template>
	<view class="news">
		<!-- 顶部选择器 -->
		<u-navbar
			:is-back='false'>
			<view class="top-bar">
				<!-- 地区选择 -->
				<view class="nar-location-select" @click="locationSelect">
					<text>{{city}}</text><u-icon name="arrow-down"></u-icon>
				</view>
				<u-line color="#D9D9D9" direction="col" margin="0 0 0 15rpx"/>
				<!-- 新闻类型选择 -->
				<view class="tabs-swiper">
					<u-tabs-swiper ref="uTabs" :list="list" :current="current" 
						@change="tabsChange"  swiperWidth="750" height='94' 
						font-size='26' active-color='#fe7f00' :bold='false'>
					</u-tabs-swiper>
				</view>	
				<!-- 显示全部按钮 -->
				<view class="show-all">
					<u-icon name="arrow-down" @click="openAll"></u-icon>
				</view>
			</view>
		</u-navbar>	
		<!-- 显示全部下拉菜单 -->
		<view class="show-all-detail" v-show="openAllFlag">
			<view class="type-more">
				<view class="title">全部分组</view>
				<view class="flags">
					<view class="flag" :class="{selected:item.id==selectFlag}" v-for="item in list" :key='item.id' @click="newsType(item)">
						{{item.name}}
					</view>
				</view>
				<view class="title">我的</view>
				<view class="flags">
					<view class="flag" :class="{selected:item.id==selectFlag}" v-for="item in myNews" :key='item.id' @click="myCollect">
						{{item.name}}
					</view>
				</view>
			</view>
		</view>
		<!-- 选择到的页面 -->
		<swiper class="tabs-swiper-content" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item class="swiper-item" v-for="item in tabs" :key="item.id">
				<scroll-view class="news-list-wrapper" scroll-y style="width: 100%;height: 1450rpx;" @scrolltolower="onreachBottom">
					<!-- 新闻列表 -->
					<view class="news-list">
						<view v-for="item in newsList" :key="item.id" class="news-item" @click="goDetail(item)">
							<view class="news-content">
								<view class="news-title">
									{{item.title}}
								</view>
								<view class="footer">
									<view>{{item.type}}</view>
									<view :class="{popular:item.popular}"><image v-if="item.popular" src="../../../static/fire.png"></image>{{item.num | readNum}}阅读</view>
									<view :class="{popular:item.popular}">{{item.share}}分享</view>
								</view>
							</view>
							<u-image width="217" height="154" class="news-img" src="../../../static/news-1.jpg"></u-image>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
export default {
	created() {
		// 请求新闻列表数据
		// this.getNewsList()
		this.popularHandle()
	},
	onPullDownRefresh() {
		// getNewsList()
		setTimeout(function () {
			uni.stopPullDownRefresh()
		}, 1000);
	},
  data(){
    return{
			city:'绵阳市',
			selectFlag:0,
			openAllFlag:false,
			// 类型标题
      list: [{
				  id:1,
					name: '最新'
				}, {
					id:2,
					name: '影音'
				}, {
					id:3,
					name: '房叔学堂'
				}, {
					id:4,
					name: '政策解读'
				}, {
					id:5,
					name: '最新市场'
				}, {
					id:6,
					name: '地产学堂'
				}, {
					id:7,
					name:'及时新闻'
				}, {
					id:8,
					name:'开箱文'
				}, {
					id:9,
					name:'专题文'
				}],
			myNews:[
				{
					id:10,
					name:'我的收藏'
				}
			],
			tabs:[
				{
					id:1
				},{
					id:2
				},{
					id:3
				},{
					id:4
				},{
					id:5
				},{
					id:6
			  },{
					id:7
			  },{
					id:8
			  },{
					id:9
			  }],	
			newsList:[
				{
					id:1,
					title: '祖宅包租代管第3期启动 祭三大优惠',
					type: '即时新闻',
					num: '452',
					share:'14',
					url:'../../static/news-1.jpg'
				},{
					id:2,
					title: '想不到！5月六都转移量竟创8年新高',
					type: '即时新闻',
					num: '12000',
					share:'305',
					url:'../../static/news-2.jpg'
				},{
					id:3,
					title: '疫情让房市降温？央行：刚性自主需求误延',
					type: '即时新闻',
					num: '945',
					share:'20',
					url:'../../static/news-3.jpg'
				},{
					id:4,
					title: '杨梅透天688万 推案集中都针外',
					type: '最近市况',
					num: '305',
					share:'9',
					url:'../../static/news-4.jpg'
				},{
					id:5,
					title: '疫情滞留海外被除籍 小心丧失土增税优惠',
					type: '最近市况',
					num: '452',
					share:'14',
					url:'../../static/news-5.jpg'
				},{
					id:6,
					title: '疫情滞留海外被除籍 小心丧失土增税优惠',
					type: '最近市况',
					num: '452',
					share:'14',
					url:'../../static/news-2.jpg'
				},{
					id:7,
					title: '疫情滞留海外被除籍 小心丧失土增税优惠',
					type: '最近市况',
					num: '452',
					share:'14',
					url:'../../static/news-1.jpg'
				}
			],
			current: 0, 
			swiperCurrent: 0,
    }
  },
	filters:{
		// 处理阅读量数字显示
		readNum(x){
			x = +x
			if(x>10000){
				let y = x/10000
				return y.toFixed(1)+'万'
			}
			return x
		}
	},
	methods:{
		// 请求新闻列表数据
		 //  getNewsList(){
			// 	this.$myRequest({
			// 		url:''+this.swiperCurrent
			// 	}).then(res=>{
			// 		this.newsList = res.data
			// 	})
			// },
		// 新闻的地区选择
		locationSelect(){
			// 获取位置信息
			uni.$on('selectCity',(info)=>{
				this.city=info.address
			})
			uni.navigateTo({
				url:'/pages/location-select/location-select?id=2'
			})
		},
		goDetail(item){
			let data = item
			// 向详情页传递新闻信息
			uni.setStorage({
				key:'newsDetail',
				data:data
			})
			uni.navigateTo({
				url: '/pages/news-detail/news-detail?id='+item.id,
			});
		},
		// “显示全部类型”操作
		openAll(){
			this.openAllFlag = !this.openAllFlag
			this.selectFlag = 0
		},
		newsType(item){
			this.selectFlag = item.id
			this.swiperCurrent = item.id-1
			this.openAllFlag = false
		},
		myCollect(){
			this.openAllFlag = false
		},
		// 对阅读量高的做特殊处理
		popularHandle(){
			let i
			let x
			for(i of this.newsList){
				x=+i.num
				if(x>10000){
					i.popular = true
				}else{
					i.popular = false
				}
			}
		},
		// tabs通知swiper切换
		tabsChange(index) {
			this.swiperCurrent = index
		},
		// swiper-item左右移动，通知tabs的滑块跟随移动
		transition(e) {
			let dx = e.detail.dx
			this.$refs.uTabs.setDx(dx)
		},
		// swiper滑动结束，分别设置tabs和swiper的状态
		animationfinish(e) {
			let current = e.detail.current
			this.$refs.uTabs.setFinishCurrent(current)
			this.swiperCurrent = current
			this.current = current
		},
		// scroll-view到底部加载更多
		onreachBottom() {
			
		}
	}
}
</script>

<style lang="scss">
page{
	height:100%
}
.news{
	height: 100%;
	position: relative;
	.top-bar{
		height: 44rpx;
		display: flex;
		flex-wrap: nowrap;
		.nar-location-select{
			white-space: nowrap;
			line-height: 44rpx;
			margin-left: 16rpx;
			// padding-right: 10rpx;
			font-size: 24rpx;
			// border-right: 1px solid #D9D9D9;
			text{
				margin-right: 5rpx;
			}
		}
		.tabs-swiper{
			width: 600rpx;
			margin-top: -24rpx;
			padding-right: 60rpx;
		}
		.show-all{
			position: fixed;
			z-index: 999;
			right: 0rpx;
			padding-right: 28rpx;
			height: 44rpx;
			width: 100rpx;
			background: linear-gradient(to left,rgba(255,255,255,1),rgba(255,255,255,0.7));
			display: flex;
			flex-direction: row-reverse;
		}
		
	}
	.type-more{
		width: 750rpx;
		height: 650rpx;
		background-color: rgba(0,0,0,0.65);
		padding-left: 36rpx;
		padding-right: 36rpx;
		position: absolute;
		top: 90rpx;
		z-index: 999;
		.title{
			font-size: 34rpx;
			color: white;
			line-height: 106rpx;
		}
		.flags{
			display: flex;
			width: 716rpx;
			flex-wrap: wrap;
			.flag{
				margin-right: 38rpx;
				height: 62rpx;
				line-height: 62rpx;
				width: 200rpx;
				background-color: #e5e5e5;
				border-radius: 5rpx;
				margin-bottom: 26rpx;
				text-align: center;
				font-size: 26rpx;
				color: #232323;
			}
			.selected{
				background-color: $theme-color;
				color: white;
			}
		}
	}
	.tabs-swiper-content{
		height: 100%;
		.news-list{
			width: 750rpx;
			.news-item{
				height: 244rpx;
				width: auto;
				padding-top: 45rpx;
				margin: 0 27rpx 0 27rpx;
				display: flex;
				border-bottom: 1rpx solid #F2F2F2;
				.news-content{
					width: 433rpx;
					height: 158rpx;
					margin-right: 46rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.news-title{
						line-height: 40rpx;
						color: black;
						font-size: 33rpx;
						font-weight: 600;
					}
					.footer{
						display: flex;
						font-size: 24rpx;
						line-height: 24rpx;
						view{
							margin-right: 18rpx;
						}
						.popular{
							color: $theme-color;
						}
		        image{
							width: 26rpx;
							height: 26rpx;
							margin-bottom: -4rpx;
							margin-right: 5rpx;
						}
					}
				}
				.news-img{
					
				}
			}
		}
	}
}
</style>
