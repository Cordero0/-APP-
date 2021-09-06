<template>
  <view>
		{{id}}
	</view>
</template>

<script>
export default {
	onLoad(options) {
		this.id = options.id
		this.getNewsData()
	},
  data(){
    return{
      id:0,
			newsData:{}
    }
  },
	methods:{
		// 获取页面数据
		getNewsData(){
			uni.getStorage({
				key: 'newsDetail',
				success: (res) => {
					console.log(res.data)
					this.newsData = res.data
					// 销毁
					uni.removeStorage({
						key:'newsDetail'
					})
				},
			})
		}
	}
}
</script>

<style>

</style>
