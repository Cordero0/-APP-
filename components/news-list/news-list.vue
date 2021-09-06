<template>
	<!-- 如果要把新闻列表抽离出来 -->
  <view class="news-list">
		<view v-for="(item,index) in newsList" :key="item.id" class="news-item" @click="goDetail(item.id)">
			<view class="news-content">
				<view class="news-title">
					{{item.title}}
				</view>
				<view class="footer">
					<text>{{item.type}}</text>
					<text :class="{popular:item.popular}"><image v-if="item.popular" src="../../static/fire.png"></image>{{item.num | readNum}}阅读</text>
					<text :class="{popular:item.popular}">{{item.share}}分享</text>
				</view>
			</view>
			<u-image width="217" height="154" class="news-img" src="../../static/news-1.jpg"></u-image>
		</view>
	</view>
</template>

<script>
export default {
	onShow() {
		// 因为利用了swiper显示不同页面，所以申请数据时会同时申请所有页面的数据
		// this.getNewsList()
		this.popularHandle()
	},
	props:['index'],
  data(){
    return{
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
    }
  },
	filters:{
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
  //   getNewsList(){
		// 	this.$myRequest({
		// 		url:''
		// 	}).then(res=>{
		// 		this.newsList = res.data
		// 	})
		// },
		goDetail(id){
			uni.navigateTo({
				url: '/pages/news-detail/news-detail?id='+id,
			});
		},
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
		}
	}
}
</script>

<style lang="scss">
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
				font-size: 24rpx;
				line-height: 24rpx;
				text{
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
</style>
