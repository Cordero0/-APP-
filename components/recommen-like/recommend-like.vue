<template>
  <view class="recommend-like">
		<view class="title">
			<view class="declaration"></view>
			<text>猜你喜欢</text>
		</view>
		<view class="recommend-like-content">
			<view v-for="(item,index) in likeList" :key="item.id" class="content-item" @click="likeGo(item)">
				<image src="../../static/pics-5.jpg" class="item-image"></image>
				<view class="text">
					<view class="text-title">{{item.title}}</view>
					<view class="detail">{{item.detail}}</view>
					<view class="price">{{item.price}}元/月</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
  data(){
    return{
      likeList:[
				{
					id:1,
					title:'士林商圈，全新装潢，波西米亚风，近剑谭站',
					detail:'两房一厅 | 20坪 | 士林区-前港街',
					url:'',
					price:35000
				},
				{
					id:2,
					title:'士林商圈，全新装潢，波西米亚风，近剑谭站',
					detail:'两房一厅 | 20坪 | 士林区-前港街',
					url:'',
					price:35000
				},
				{
					id:3,
					title:'士林商圈，全新装潢，波西米亚风，近剑谭站',
					detail:'两房一厅 | 20坪 | 士林区-前港街',
					url:'',
					price:35000
				},
				{
					id:4,
					title:'士林商圈，全新装潢，波西米亚风，近剑谭站',
					detail:'两房一厅 | 20坪 | 士林区-前港街',
					price:35000
				},
				{
					id:5,
					title:'士林商圈，全新装潢，波西米亚风，近剑谭站',
					detail:'两房一厅 | 20坪 | 士林区-前港街',
					url:'',
					price:35000
				},
				{
					id:6,
					title:'士林商圈，全新装潢，波西米亚风，近剑谭站',
					detail:'两房一厅 | 20坪 | 士林区-前港街',
					url:'',
					price:35000
				},
			]
    }
  },
	onShow() {
		this.getLikeList()
	},
	methods:{
		// 请求“猜你喜欢”列表数据
		getLikeList(){
			this.$myRequest({
				url:'/'
			}).then(res=>{
				this.likeList = res.data
			})
		},
		// 跳转到“猜你喜欢”的详情页
		likeGo(item){
			let data = item
			// 向详情页传递商品信息
			uni.setStorage({
				key:'likeDetail',
				data:data
			})
			uni.navigateTo({
				url:'/pages/recommend-like-detail/recommend-like-detail?id='+item.id
			})
		}
	}
}
</script>

<style lang="scss">
.recommend-like{
	width: 750rpx;
	.title{
		height: 100rpx;
		width: 100%;
		padding-left: 28rpx;
	  padding-right: 28rpx;
		display: flex;
		.declaration{
			display: inline;
			height: 28rpx;
			width: 10rpx;
			margin-top: 36rpx;
			margin-right: 13rpx;
			background-color: $theme-color;
		}
		text{
			line-height: 100rpx;
			font-size: 35rpx;
			font-weight: 600;
			color: black;
		}
	}
	.recommend-like-content{
		padding-left: 18rpx;
		padding-right: 18rpx;
		width: 714rpx;
		.content-item{
			padding-top: 27rpx;
			padding-bottom: 27rpx;
			border-bottom: 1px solid #eeeeee;
			height: 204rpx;
			width: 714rpx;
			display: flex;
			.item-image{
				width: 207rpx;
				height: 155rpx;
				margin-right: 20rpx;
			}
			.text{
				width: 487rpx;
				.text-title{
					font-size: 28rpx;
					line-height: 36rpx;
					color: black;
				}
				.detail{
					line-height: 50rpx;
					font-size: 24rpx;
					color: #333333;
				}
				.price{
					color: $theme-color;
					font-size: 27rpx;
				}
			}
		}
	}
}
  
</style>
