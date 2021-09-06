<template>
  <view class="setting">
		<view class="feedback">
			<view class="feedback-item">
				<view class="title">给XXX评分</view><view><u-icon name="arrow-right"></u-icon></view>
			</view>
			<view class="feedback-item">
				<view class="title">意见反馈</view><view><u-icon name="arrow-right"></u-icon></view>
			</view>
		</view>
		<view class="theme">
			<view class="theme-item">
				<view class="title">深色模式</view>
				<view class="content">
					开启后，将跟随系统打开或关闭深色模式
				</view>
			</view>
			<view class="theme-item">
				<u-switch v-model="themeChange" active-color="#5BC761" size='60'></u-switch>
			</view>
		</view>
		<view class="feedback">
			<view class="feedback-item">
				<view class="title">关于我们</view><view><u-icon name="arrow-right"></u-icon></view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
  data(){
    return{
      themeChange:false,
    }
  }
}
</script>

<style lang="scss">
.setting{
	width: 750rpx;
	height: 1537rpx;
	padding-top: 26rpx;
	background-color: #f6f6f6;
	.feedback{
		background-color: white;
		margin-bottom: 42rpx;
		.feedback-item{
			padding-left: 18rpx;
			padding-right: 18rpx;
			line-height: 80rpx;
			border-top: 1px solid #eeeeee;
			display: flex;
			justify-content: space-between;
			color: #cccccc;
			.title{
				font-size: 28rpx;
				font-weight: 600;
				color: #333333;
			}
		}
		.feedback-item:nth-child(2){
			border-bottom: 1px solid #eeeeee;
		}
	}
	.theme{
		background-color: white;
		padding-left: 18rpx;
		padding-right: 18rpx;
		display: flex;
		justify-content: space-between;
		margin-bottom: 42rpx;
		.theme-item{
			line-height: 110rpx;
			border-top: 1rpx solid #eeeeee;
			border-bottom: 1rpx solid #eeeeee;
			.title{
				font-size: 28rpx;
				font-weight: 600;
				line-height: 30rpx;
				margin-top: 26rpx;
			}
			.content{
				margin-top: 10rpx;
				font-size: 24rpx;
				line-height: 24rpx;
				color: #bbbbbb;
			}
		}
		.theme-item:nth-child(2){
			margin-top: 23rpx;
			margin-bottom: -23rpx;
		}
	}
}
</style>
