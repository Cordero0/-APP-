 <template>
  <view class="search">
		<!-- 顶部导航栏 -->
		<u-navbar
		  :background='background' 
			:is-back='false'>
			<view class="top-bar">
				<view class="no-use"></view>
				<view class="top-title" @click="showSelectList">{{tabNavName}}<u-icon name="arrow-down"></u-icon></view>
			  <!-- "确定"的作用什么？不确定，感觉可以省略 -->
				<view class="sure">确定</view>
			</view>
		</u-navbar>
		<!-- 选择类型的卡片 -->
		<view class="select-type-wrapper" v-if="selectListShow">
			<view class="select-type">
				<view :class="item.id==typeSelected?'type-item-active':'type-item'" v-for="item in typeList" :key='item.id' @click="typeSelect(item.id,item.name)">
					{{item.name}}
				</view>
			</view>
		</view>
		<!-- 选择器 -->
		<view class="top-tabs">
			<view class="title" :class="{tabsActive:activeFlag}" @click="tabsActiveHandle"><text>城市搜寻</text></view>
			<view class="title" :class="{tabsActive:!activeFlag}" @click="tabsActiveHandle"><text>交通搜寻</text></view>
		</view>
		<view class="tabs-main">
		<!-- “城市搜寻”页面 -->
			<view v-if="activeFlag">
				<city-search :type='typeSelected'></city-search>
			</view>
		<!-- “交通搜寻”页面 -->
			<view v-else>
				<!-- 因为“城市搜寻”与“交通搜寻”只有一个列表项的差别，所以暂时用同一组件，如后期需要可用“fast-search”组件 -->
				<fast-search :type='typeSelected'></fast-search>
			</view>
		</view>
	</view>
</template>

<script>
import citySearch from './components/city-search.vue'
import fastSearch from './components/fast-search.vue'
	
export default {
	components:{
		citySearch,fastSearch
	},
  data(){
    return{
			tabNavName:'租房',
      background:{
      	backgroundColor:"#fe7f00"
      },
			activeFlag:true,
			listName1:'地区',
			listName2:'交通',
			selectListShow:false,
			typeSelected:1,
			typeList:[
				{
					id:1,
					name:'租屋'
				},{
					id:2,
					name:'中古屋'
				},{
					id:3,
					name:'新建案'
				},{
					id:4,
					name:'商用地产'
				}
			]
    }
  },
	methods:{
		//选择器相关设置 
		tabsActiveHandle(){
			this.activeFlag = !this.activeFlag
		},
		showSelectList(){
			this.selectListShow = !this.selectListShow
		},
		typeSelect(id,name){
			this.typeSelected = id
			this.tabNavName = name
			this.selectListShow = false
		}
	}
}
</script>

<style lang="scss">
.search{
	width: 750rpx;
	position: relative;
	// 导航栏
	.top-bar{
		color: white;
		width: 100%;
		font-size: 35rpx;
		display: flex;
		justify-content: space-between;
		padding-left: 43rpx;
		padding-right: 43rpx;
		.no-use{
			width: 28rpx;
			height: 20rpx;
		}
		.sure{
			font-size: 28rpx;
		}
	}
	// 顶部搜索栏选项卡
	.select-type-wrapper{
		height: 1441rpx;
		width: 100%;
		position: absolute;
		z-index: 9999;
		background-color: rgba(0,0,0,0.07);
		display: flex;
		justify-content: center;
		.select-type{
			height: 290rpx;
			width: 200rpx;
			margin-top: 10rpx;
			background-color: rgba(0,0,0,0.6);
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			padding-bottom: 2rpx;
			border-radius: 8rpx;
			.type-item{
				text-align: center;
				line-height: 72rpx;
				color: white;
				font-size: 28rpx;
			}
			.type-item-active{
				text-align: center;
				line-height: 72rpx;
				color: $theme-color;
				font-size: 28rpx;
			}
		}
	}
	// 选择类型卡片样式
	.top-tabs{
		height: 72rpx;
		width: 100%;
		display: flex;
		border-bottom: 1px solid #eeeeee;
		.title{
			font-size: 28rpx;
			width: 50%;
			text-align: center;
			line-height: 72rpx;
			height: 72rpx;
		}
		.title:nth-child(1){
			text{
				padding-left: 130rpx;
				padding-right: 131rpx;
				border-right: 1px solid #eeeeee;
			}
		}
		.tabsActive{
			color: $theme-color;
			border-bottom: 5rpx solid $theme-color;
		}	
	}		
}


</style>
