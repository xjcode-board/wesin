<template>
	<div class="purchase-page" v-if="init">
		<view-box ref="viewBox" v-infinite-scroll="loadMore" :infinite-scroll-disabled="loading" infinite-scroll-distance="60">
			<!-- 筛选 -->
			<div class="filter-box">
				<tab class="tab-container" :scroll-threshold="5" :line-width="2" custom-bar-width="40px" active-color="#18c4b7">
					<tab-item selected @on-item-click="onItemClick">全部</tab-item>
					<tab-item @on-item-click="onItemClick">待确认</tab-item>
					<tab-item @on-item-click="onItemClick">待发货</tab-item>
					<tab-item @on-item-click="onItemClick">已发货</tab-item>
					<tab-item @on-item-click="onItemClick">已完成</tab-item>
				</tab>
			</div>
			<!-- 列表 -->
			<div class="p-list" v-if="list.length>0">
				<div class="status-line vux-1px-b">
					<div class="user-info">
						<img src="../../assets/avatar.png" class="user-icon" />
						<span class="user-name">刘德华</span>
					</div>
					<div class="status-text">已发货</div>
				</div>
				<div class="pro-container vux-1px-b">
					<div class="pro-img">
						<img src="../../assets/avatar.png" />
					</div>
					<div class="pro-info">
						<div class="pro-name">这是一个测试产品</div>
						<div class="pro-spec">
							<div class="spec-info">
								<span class="pro-color">颜色：蓝色</span>
								<span class="pro-size">尺码：L</span>
							</div>
							<div class="pro-count">X2</div>
						</div>
					</div>
				</div>
				<div class="count-price">
					<div class="count">共2件商品</div>
					<div class="price">
						<span class="label">实收款：</span>
						<span class="amount">￥99.00</span>
					</div>
				</div>
				<div class="date-post">
					<div class="date">2018-09-10</div>
					<div class="post-action">确认</div>
				</div>
			</div>
		</view-box>
	</div>
</template>
<script>
	import {
		Swiper,
		ViewBox,
		Tab,
		TabItem
	} from 'vux'
	import {
		mapState,
		mapActions
	} from 'vuex'
	// import Item from './Item'
	import Vue from 'vue'
	import InfiniteScroll from '../../packages/infinite-scroll'
	Vue.use(InfiniteScroll)
	var lodash = require('lodash')
	export default {
		components: {
			ViewBox,
			Tab,
			TabItem
		},
		data() {
			return {
				init: true,
				list: [1],
				loading: true,
				swiper_list: [{
					url: 'javascript:',
					img: 'https://pic1.yeahka.com/img/fastApp/img/banner.png'
				}, {
					url: 'javascript:',
					img: 'https://pic1.yeahka.com/img/fastApp/img/banner.png'
				}, {
					url: 'javascript:',
					img: 'https://pic1.yeahka.com/img/fastApp/img/banner.png'
				}]
			}

		},
		computed: {
			//   	...mapState({
			//   		init: state => state.home.init,
			//   		swiper_list: state => state.home.swiper_list,
			//   		loading: state => state.home.loading,
			//   		no_more: state => state.home.no_more,
			//   		load_err: state => state.home.load_err,
			//   		load_more_tip: state => state.home.load_more_tip
			//   	})
		},
		mounted() {

			// 	  this.init = true
			//     this.$vux.loading.show()
			//     this.$http.get('v1/member-souse').then(
			//       res => {
			//         this.$vux.loading.hide()
			//         if (res.code === 200) {
			//           this.init = true
			//           this.list = res.data.list
			//         }
			//       },
			//       fail => {
			//         this.$vux.loading.hide()
			//       }
			//     )
		},
		methods: {
			loadMore() {
				// 	  	if (this.loading || this.no_more) return
				// 	  	this.setState({
				// 	  		loading: true,
				// 	  		page: this.page + 1,
				// 	  		load_more_tip: '加载中'
				// 	  	})
				// 	  	this.getData()
			},
			reLoad() {
				// 	  	if (this.loading || this.no_more) return
				// 	  	this.setState({
				// 	  		loading: true,
				// 	  		page: this.page,
				// 	  		load_more_tip: '加载中'
				// 	  	})
				// 	  	this.getData()
			},
			onItemClick() {

			}

		}
	}
</script>
<style lang="less">
	@ph: 100vh;

	.purchase-page {
		background: #ebf0ef;

		.filter-box {
			margin-bottom: 0.266666rem;
			width: 100%;

			.tab-container {
				width: 100%;
			}

		}

		.p-list {
			background: #fff;
			margin-bottom: 0.333333rem;

			.status-line {
				background: #f9f9f9;
				height: 1.253333rem;
				padding: 0 0.4rem;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;

				.user-info {
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
					font-size: 0.346666rem;
					color: #333;

					img {
						width: 0.853333rem;
						height: 0.853333rem;
						border-radius: 50%;
						margin-right: 0.266666rem;
					}
				}

				.status-text {
					font-size: 0.373333rem;
					color: #fd702b;
				}
			}

			.pro-container {
				padding: 0.4rem;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: flex-start;

				.pro-img {
					width: 1.546666rem;
					height: 1.546666rem;
					margin-right: 0.266666rem;

					img {
						width: 100%;
						height: 100%;
					}
				}

				.pro-info {
					box-sizing: border-box;
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					width: 100%;

					.pro-name {
						font-size: 0.373333rem;
						color: #999;
					}

					.pro-spec {
						font-size: 0.346666rem;
						color: #999;
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-content: space-between;
						margin-top: 0.133333rem;
					}

					.spec-info {
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-content: flex-start;

						.pro-color {
							margin-right: 0.2rem;
						}

					}
				}
			}

			.count-price {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				font-size: 0.32rem;
				padding: 0 0.4rem;
				height: 0.906666rem;
				line-height: 0.906666rem;

				.amount {
					color: #ff3d24;
				}
			}

			.date-post {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				font-size: 0.32rem;
				padding: 0 0.4rem;
				height: 1.066666rem;
				line-height: 1.066666rem;

				.date {
					color: #666;
				}

				.post-action {
					width: 1.853333rem;
					height: 0.746666rem;
					line-height: 0.746666rem;
					border-radius: 5px;
					text-align: center;
					background: #18c4b7;
					font-size: 0.373333rem;
					color: #fff;
				}
			}
		}
	}
</style>
