<template>
  <view class="home-search">
		<u-navbar class="top-bar" :background='background' back-icon-color='#ffffff'>
			<view class="top-search">
				<u-search 
					placeholder="请输入社区、街道、商圈、编号" 
					v-model="searchContent"
					bg-color='#de6f27'
					placeholder-color='#f1f1f1'
					color='#f1f1f1'
					:show-action='false'
					height='52'>
				</u-search>	
			</view>
			<view class="map">地图</view>
		</u-navbar>
		<!-- 下拉选择菜单 -->
		<view class="type-select">
			<u-dropdown active-color='#fe7f00' ref="uDropdown">
				<u-dropdown-item v-model="value1" title="排序" :options="options1"></u-dropdown-item>
				<u-dropdown-item v-model="value2" title="类型" :options="options2"></u-dropdown-item>
				<u-dropdown-item v-model="value3" title="租金" :options="options3"></u-dropdown-item>
				<u-dropdown-item v-model="value4" title="更多">
					<view class="slot-content type-more">
						<view class="title">格局</view>
						<view class="flags">
							<view class="flag" :class="{selected:item.id==moreData.selectFlag1}" v-for="item in flags1" :key='item.id' @click="layoutHandle(item)">
								{{item.title}}
							</view>
						</view>
						<view class="title">坪数</view>
						<view class="flags">
							<view class="flag" :class="{selected:item.id==moreData.selectFlag2}" v-for="item in flags2" :key='item.id' @click="pingNumHandle(item)">
								{{item.title}}
							</view>
						</view>
						<view class="button">
							<u-button class="botton-item" @click="reset">重置</u-button>
						  <u-button class="botton-item sure" @click="close">确定</u-button>
						</view>
					</view>
				</u-dropdown-item>
			</u-dropdown>
		</view>
		<!-- 商品列表 -->
		<view class="list">
			<search-list></search-list>
		</view>
	</view>
</template>

<script>
import searchList from '@/components/search-list/search-list.vue'
	
export default {
	components:{
		searchList
	},
  data(){
    return{
      searchContent:'',
			background:{
				backgroundColor:"#fe7f00"
			},
			value1: 1,
			value2: 1,
			value3: 1,
			value4: 1,
			options1: [{
					label: '默认排序',
					value: 1,
				},{
					label: '距离优先',
					value: 2,
				},{
					label: '价格优先',
					value: 3,
				}
			],
			options2: [{
					label: '不限',
					value: 1,
				},{
					label: '整层住家',
					value: 2,
				},{
					label: '独立套房',
					value: 3,
				},{
					label: '合租套房',
					value: 4,
				},{
					label: '雅房',
					value: 5,
				},{
					label: '店面',
					value: 6,
				},{
					label: '办公',
					value: 7,
				}
			],
			options3: [{
					label: '不限',
					value: 1,
				},{
					label: '5000元以下',
					value: 2,
				},{
					label: '5000-10000元',
					value: 3,
				},{
					label: '10000-15000元',
					value: 4,
				},{
					label: '15000-20000元',
					value: 5,
				},{
					label: '20000-40000元',
					value: 6,
				}
			],
			flags1:[
				{
					id:1,
					title:'一房'
				},{
					id:2,
					title:'二房'
				},{
					id:3,
					title:'三房'
				},{
					id:4,
					title:'四房'
				},{
					id:5,
					title:'五房及以上'
				},
			],
			flags2:[
				{
					id:1,
					title:'10坪以下'
				},{
					id:2,
					title:'10-20坪'
				},{
					id:3,
					title:'20-30坪'
				}
			],
			moreData:{
				layout:'一房',
        pingNum:'10坪以下',				
				selectFlag1:1,
				selectFlag2:1,
			}
    }
  },
	methods:{
		// 处理“更多”下拉菜单的“格局”选项
		layoutHandle(item){
			this.moreData.layout = item.title
			this.moreData.selectFlag1 = item.id
		},
		// 处理“更多”下拉菜单的“坪数”选项
		pingNumHandle(item){
			this.moreData.pingNum = item.title
			this.moreData.selectFlag2 = item.id
		},
		// 处理“更多”下拉菜单的重置
		reset(){
			this.moreData.layout='一房'
			this.moreData.pingNum='10坪以下'		
			this.moreData.selectFlag1=1
			this.moreData.selectFlag2=1
		},
		// 处理“更多”下拉菜单的确定
		close(){
			this.$refs.uDropdown.close()
		}
	}
}
</script>

<style lang="scss">
.home-search{
	width: 750rpx;
	height: 5000rpx;
	.top-bar{
		color: white;
		.top-search{
			margin-left: 20rpx;
			width: 543rpx;
			height: 50rpx;
		}
		.map{
			margin-left: 16rpx;
			margin-right: 28rpx;
		}
	}
	.type-select{
		border-bottom: 1px solid #eeeeee;
		.type-more{
			height: 616rpx;
			background-color: white;
			padding-left: 36rpx;
			padding-right: 36rpx;
			.title{
				font-size: 34rpx;
				color: #333333;
				font-weight: 600;
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
					background-color: #f3f3f3;
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
			.button{
				width: 100%;
				display: flex;
				justify-content: space-between;
				margin-top: 25rpx;
				.botton-item{
					width: 320rpx;
				}
				.sure{
					color: white;
					background-color: $theme-color;
				}
			}
		}
	}
}
</style>
