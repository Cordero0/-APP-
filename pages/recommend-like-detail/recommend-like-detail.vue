<template>
  <view>
		{{likeData.id}}
	</view>
</template>

<script>
export default {
  data(){
    return{
      likeData:{
				id:0
			}
    }
  },
	created() {
		this.getLikeData()
	},
	methods:{
		// 获取页面数据
		getLikeData(){
			uni.getStorage({
				key: 'likeDetail',
				success: (res) => {
					console.log(res.data)
					this.likeData = res.data
					// 销毁
					uni.removeStorage({
						key:'likeDetail'
					})
				},
			})
		}
	}
}
</script>

<style>

</style>
