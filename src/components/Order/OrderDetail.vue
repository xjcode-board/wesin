<template>
	<div class="order-detail-page" v-if="init">
		<view-box ref="viewBox" v-infinite-scroll="loadMore" :infinite-scroll-disabled="loading" infinite-scroll-distance="60">
			<!-- 筛选 -->
			<div class="addr-box vux-1px-b">
				<div class="addr">杭州市拱墅区万达广场5号</div>
				<div class="contact-box">
					<span class="applicant">团子</span>
					<span class="tel">15986620994</span>
				</div>
			</div>
			<!-- 列表 -->
			<div class="p-list" v-if="list.length>0">
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
						</div>
						<div class="count-price">
							<div class="price">
								<span class="amount">￥99.00</span>
							</div>
							<div class="pro-count">X2</div>
						</div>
					</div>
				</div>
			</div>
			<div class="remarks-box vux-1px-b">
				<group>
					<x-textarea title="备注" :max="200" placeholder="请输入备注" :show-counter="false" class="remarks"></x-textarea>
				</group>
			</div>

			<div class="sum-box">
				<div class="sum-item">
					<p class="sum-left">共计5盒</p>
					<p class="sum-right">￥500.00</p>
				</div>
				<div class="sum-item">
					<p class="sum-left">+运费</p>
					<p class="sum-right">￥10.00</p>
				</div>
			</div>

			<div class="operate-box vux-1px-t">
				<div class="view-post">查看物流</div>
				<div class="return-goods">发起退货</div>
			</div>
			<!-- <div class="empty-list" v-else>
			<i class="iconfont icon-1wodexuexizhongxin"></i>
			<div>
					<span>您还没购买课程噢，<span @click="$router.push({name: 'home'})">马上选课</span></span>
			</div>
		</div> -->
		</view-box>
	</div>
</template>
<script>
	import {
		Swiper,
		ViewBox,
		Tab,
		TabItem,
		XTextarea,
		Group
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
			TabItem,
			XTextarea,
			Group
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

	.order-detail-page {
		background: #ebf0ef;

		.addr-box {
			box-sizing: border-box;
			height: 1.946666rem;
			margin-bottom: 0.266666rem;
			background: #fff;
			padding: 0.4rem;

			.addr {
				font-size: 0.426666rem;
			}

			.contact-box {
				color: #999;

				.applicant {
					font-size: 0.373333rem;
				}

				.tel {
					font-size: 0.32rem;
				}
			}
		}

		.p-list {
			background: #fff;

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

					.count-price {
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						align-items: center;
						font-size: 0.32rem;
						height: 0.906666rem;
						line-height: 0.906666rem;

						.pro-count {
							font-size: 0.453333rem;
						}

						.amount {
							color: #ff3d24;
						}
					}
				}
			}
		}

		.remarks-box {
			height: 3.0rem;
			background: #fff;
			box-sizing: border-box;

			.remarks {
				textarea {
					box-sizing: border-box;
					padding: 0.2rem 0.333333rem;
					border: 1px solid #e6e6e6;
					border-radius: 4px;
					// font-size: 0.32rem;
				}
			}

			.weui-cells:after {
				border-bottom: 0;
			}
		}

		.sum-box {
			width: 100%;
			height: 1.946666rem;
			padding: 0.4rem 0.4rem 0.2rem 0.32rem;
			display: flex;
			flex-direction: column;
			align-items: stretch;
			background: #fff;
			box-sizing: border-box;

			.sum-item {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				font-size: 0.373333rem;

				.sum-left {
					color: #666;
				}

				.sum-right {
					color: #ff3d24;
				}

			}
		}

		.operate-box {
			box-sizing: border-box;
			width: 100%;
			height: 1.453333rem;
			background: #fff;
			position: fixed;
			bottom: 0;
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
			padding: 0 0.4rem;

			div {
				width: 2.266666rem;
				height: 0.84rem;
				line-height: 0.84rem;
				text-align: center;
				font-size: 0.426666rem;
				border-radius: 20px;
			}

			.view-post {
				border: 1px solid #e6e6e6;
				color: #b3b3b3;
			}

			.return-goods {
				margin-left: 0.4rem;
				color: #fff;
				background: linear-gradient(to right, #ff580e, #fe973d);
			}

		}
	}
</style>
