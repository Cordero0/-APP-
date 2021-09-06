<template>
  <view class="search-list">
		<scroll-view scroll-y="true" >
			<view v-for="item in listData" :key='item.id' class="list-item">
				<view class="image"><image src="../../static/pics-5.jpg" class="item-image"></image></view>
				<view class="text-content">
					<view class="title">{{item.title}}</view>
					<view class="address">{{item.address}}</view>
					<view class="footer">
						<view class="detail">{{item.detail}}</view>
						<view class="price">{{item.price}}元/月</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {
  data(){
    return{
      listData:[
      	{
      		id:1,
      		title:'士林商圈，全新装潢，波西米亚风，近剑谭站',
					address:'士林区-前港街',
      		detail:'两房一厅 20坪',
      		url:'',
      		price:35000
      	},{
      		id:2,
      		title:'士林商圈，全新装潢，波西米亚风，近剑谭站',
					address:'士林区-前港街',
      		detail:'两房一厅 20坪',
      		url:'',
      		price:35000
      	},{
      		id:3,
      		title:'士林商圈，全新装潢，波西米亚风，近剑谭站',
					address:'士林区-前港街',
      		detail:'两房一厅 20坪',
      		url:'',
      		price:35000
      	},{
      		id:4,
      		title:'士林商圈，全新装潢，波西米亚风，近剑谭站',
					address:'士林区-前港街',
      		detail:'两房一厅 20坪',
      		url:'',
      		price:35000
      	},{
      		id:5,
      		title:'士林商圈，全新装潢，波西米亚风，近剑谭站',
					address:'士林区-前港街',
      		detail:'两房一厅 20坪',
      		url:'',
      		price:35000
      	},{
      		id:6,
      		title:'士林商圈，全新装潢，波西米亚风，近剑谭站',
					address:'士林区-前港街',
      		detail:'两房一厅 20坪',
      		url:'',
      		price:35000
      	},{
      		id:7,
      		title:'士林商圈，全新装潢，波西米亚风，近剑谭站',
					address:'士林区-前港街',
      		detail:'两房一厅 20坪',
      		url:'',
      		price:35000
      	},{
      		id:8,
      		title:'士林商圈，全新装潢，波西米亚风，近剑谭站',
					address:'士林区-前港街',
      		detail:'两房一厅 20坪',
      		url:'',
      		price:35000
      	},
      ]
    }
  },
	onShow() {
		// this.getListData()
	},
	methods:{
		// 申请商品信息列表
		// getListData(){
		// 	this.$myRequest({
		// 		url:'/'
		// 	}).then(res=>{
		// 		this.listData = res.data
		// 	})
		// }
	}
}
</script>

<style lang="scss">
.search-list{
	padding: 0 18rpx 0 18rpx;
	width: 100%;
	.list-item{
		height: 208rpx;
		display: flex;
		padding-top: 25rpx;
		padding-bottom: 25rpx;
		border-bottom: 1rpx solid #eeeeee;
		.image{
			margin-right: 16rpx;
			.item-image{
				height: 156rpx;
			  width: 207rpx;
			}
		}
		.text-content{
			height: 156rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.title{
				font-size: 30rpx;
				// font-weight: 600;
				color: #151515;
				line-height: 38rpx;
			}
			.address{
				font-size: 26rpx;
				color: #999999;
				padding-top: 15rpx;
			}
			.footer{
				font-size: 26rpx;
				color: #999999;
				display: flex;
				width: 100%;
				justify-content: space-between;
				line-height: 30rpx;
				.price{
					font-size: 28rpx;
					font-weight: 600;
					color: $theme-color;
				}
			}
		}
	}
}
</style>
