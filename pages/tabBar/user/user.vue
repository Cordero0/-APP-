<template>
  <view class="user">
		<!-- “设置”选项 -->
		<u-navbar
		  :background='background' 
			:is-back='false'>
			<view class="top-bar">
				<u-icon name="setting-fill" size='44' @click="settingGo"></u-icon>
			</view>
		</u-navbar>
		<!-- 登录/注册界面 -->
		<swiper :indicator-dots="true" class="swiper-wrapper" indicator-active-color='white' indicator-color='rgba(255,255,255,.3)'>
			<swiper-item>
        <view class="login">
        	<view class="account-input">
        		<view class="account input">
        			<text>账号:</text>
        			<u-input v-model="account" height="84" :custom-style='loginInput1' :placeholder-style='loginInput' placeholder='请输入手机号'/>	
        		</view>
        		<view class="password input">
        			<text>密码:</text>
        			<u-input v-model="password" :password-icon='false' type="password" height="84" :custom-style='loginInput1' :placeholder-style='loginInput' placeholder='请输入密码'/>	
        			<u-button class="passwprd-button">找回密码</u-button>
        		</view>
        	</view>
        	<view class="account-button">
        		<u-button class="login-button">登录</u-button>
        		<u-button class="register-button">注册</u-button>
        	</view>
        </view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item"></view>
			</swiper-item>
		</swiper>
		<!-- 浏览数 -->
		<view class="glance-num">
			<view class="glance-item">
				<view class="num">{{glanceNum.collect}}</view>
				<view class="title">我的收藏</view>
			</view>
			<view class="glance-item">
				<view class="num">{{glanceNum.glance}}</view>
				<view class="title">我的收藏</view>
			</view>
			<view class="glance-item">
				<view class="num">{{glanceNum.community}}</view>
				<view class="title">我关注的社区</view>
			</view>
		</view>
		<!-- 管理工具区 -->
		<view class="tool-zone">
			<view class="zone-title">消息管理</view>
			<view class="tools">
				<view class="tool">
					<view class="tool-icon"><u-icon name="question-circle"></u-icon></view>
					<view class="tool-title">问答管理</view>
				</view>
				<view class="tool">
					<view class="tool-icon"><u-icon name="bell"></u-icon></view>
					<view class="tool-title">推送消息</view>
				</view>
				<view class="tool">
					<view class="tool-icon"><u-icon name="bookmark"></u-icon></view>
					<view class="tool-title">我的订阅</view>
				</view>
				<view class="tool">
					<view class="tool-icon"><u-icon name="setting"></u-icon></view>
					<view class="tool-title">推播设定</view>
				</view>
			</view>
			<view class="zone-title">物件管理</view>
			<view class="tools">
				<view class="tool">
					<view class="tool-icon"><u-icon name="lock-open"></u-icon></view>
					<view class="tool-title">开放中</view>
				</view>
				<view class="tool">
					<view class="tool-icon"><u-icon name="lock"></u-icon></view>
					<view class="tool-title">关闭中</view>
				</view>
				<view class="tool">
					<view class="tool-icon"><u-icon name="checkmark-circle"></u-icon></view>
					<view class="tool-title">已成交</view>
				</view>
				<view class="tool">
					<view class="tool-icon"><u-icon name="calendar"></u-icon></view>
					<view class="tool-title">刊登广告</view>
				</view>
			</view>
			<view class="zone-title">买房工具</view>
			<view class="tools">
				<view class="tool">
					<view class="tool-icon"><u-icon name="rmb"></u-icon></view>
					<view class="tool-title">查利率</view>
				</view>
				<view class="tool">
					<view class="tool-icon"><u-icon name="plus-circle"></u-icon></view>
					<view class="tool-title">买房试算</view>
				</view>
				<view class="tool">
					<view class="tool-icon"><u-icon name="eye"></u-icon></view>
					<view class="tool-title">实价查询</view>
				</view>
				<view class="tool">
					<view class="tool-icon"><u-icon name="file-text"></u-icon></view>
					<view class="tool-title">看房笔记</view>
				</view>
			</view>
		</view>
		<!-- 商品推荐 -->
		<recommen-like class="recommen-like"></recommen-like>
	</view>
</template>

<script>
import recommenLike from '@/components/recommen-like/recommend-like.vue' 
	
export default {
	components:{
		recommenLike
	},
  data(){
    return{
      background:{backgroundColor:"#fe7f00"},
			loginInput:"color:#FFBD65;fontSize:26rpx;paddingTop:8rpx",
			loginInput1:{color:'white',fontSize:'30rpx',backgroundColor:'#fe7f00'},
			account:'',
			password:'',
			// 收藏、浏览、关注社区数
			glanceNum:{collect:0,glance:0,community:0},
    }
  },
	methods:{
		settingGo(){
			uni.navigateTo({
				url:'/pages/setting/setting'
			})
		}
	}
}
</script>

<style lang="scss">
.user{
	width: 750rpx;
	// “设置”栏
	.top-bar{
		color: white;
    margin-left: 665rpx;
	}
	// 登录部分
	.swiper-wrapper{
		height: 340rpx;
		background-color: $theme-color;
		.login{
			padding-top: 30rpx;
			height: 292rpx;
			width: 100%;
			.account-input{
				.input{
					line-height: 84rpx;
					display: flex;
					color: white;
					font-size: 30rpx;
					border-bottom: 1rpx solid #FFBD65;
					text{
						margin-right: 20rpx;
					}
					.passwprd-button{
						background-color: $theme-color;
						width: 134rpx;
						height: 47rpx;
						margin-top: 20rpx;
						font-size: 26rpx;
						color: white;
					}
				}
				margin: 0 45rpx 29rpx 45rpx;
			}
			.account-button{
				display: flex;
				*{
					width: 280rpx;
					height: 60rpx;
				}
				.login-button{
					color: $theme-color;
				}
				.register-button{
					color: white;
					background-color: $theme-color;
				}
			}
		}
	}
	// 浏览数
	.glance-num{
		line-height: 129rpx;
		height: 129rpx;
		border-bottom: 1rpx solid #eeeeee;
		display: flex;
		.glance-item{
			margin-top: 28rpx;
			height: 70rpx;
			width: 250rpx;
			text-align: center;
			border-right: 1rpx solid #eeeeee;
			.num{
				font-size: 35rpx;
				line-height: 35rpx;
				font-weight: 600;
		    margin-bottom: 17rpx;
			}
			.title{
				color: #bbbbbb;
				font-size: 26rpx;
				line-height: 26rpx;
			}
		}
		.glance-item:nth-child(1){
			border: none;
		}
	}
	// 管理工具区
	.tool-zone{
		padding-left: 34rpx;
		padding-right: 34rpx;
		.zone-title{
			font-size: 35rpx;
			font-weight: 600;
			line-height: 110rpx;
			height: 110rpx;
			// border-bottom: 1px solid #eeeeee;
		}
		.tools{
			width: 100%;
			display: flex;
			justify-content: space-around;
			border-bottom: 1px solid #eeeeee;
			.tool{
				height: 143rpx;
				text-align: center;
				.tool-icon{
					font-size: 48rpx;
					padding-top: 15rpx;
					color: $theme-color;
				}
				.tool-title{
					font-size: 26rpx;
					color: #333333;
				}
			}
		}
	}
	// 商品推荐部分
	.recommen-like{
		margin-top: 15rpx;
	}
}
</style>
