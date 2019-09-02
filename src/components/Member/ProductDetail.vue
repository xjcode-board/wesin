<template>
	<view-box class="products-detail">
		<!-- banner -->
		<swiper v-if="swiper_list.length>0" :list="swiper_list" height="10rem" :auto="true" />
		<div class="pro-detail">
			<div class="pro-name-line">
				<div class="pro-name">{pro.name}</div>
				<div class="edit-btn"></div>
			</div>
			<div class="pro-desc">{{pro.descText}}</div>
			<div class="pro-price">
				<span class="unit">￥</span>
				<span class="price">{{pro.price}}</span>
				<span class="dot">.00</span>
			</div>
		</div>
		<div class="pro-poster">
			<divider class="poster-title">产品详情</divider>
			<div class="poster-contain">
				<img src="../../assets/pro-poster.png" />
			</div>
		</div>
		<div class="operate-box vux-1px-t">
			<div class="cart-box">
				<badge text="2"></badge>
			</div>
			<div class="add-cart">加入购物车</div>
		</div>
	</view-box>
</template>
<script>
	import {
		ViewBox,
		Swiper,
		Badge,
		Grid,
		GridItem,
		Cell,
		Group,
		Tab,
		TabItem,
		Divider
	} from 'vux'
	import {
		mapState
	} from 'vuex'
	export default {
		components: {
			ViewBox,
			Swiper,
			Grid,
			GridItem,
			Cell,
			Group,
			Badge,
			Tab,
			TabItem,
			Divider
		},
		computed: {
			...mapState({
				swiper_list: state => state.home.swiper_list
			})
		},
		mounted() {
			this.$vux.loading.show()
			const id = this.$route.query.id
			this.getData(id)
		},
		data() {
			return {
				pro:{}		
			}
		},
		methods: {
			getData(id) {
				this.$api.product.queryProlist({ id: id, current: 1, size: 10 }).then(res => {
					this.pro = res.data.data.records[0]
					this.$vux.loading.hide()
				})
			}
		}
	}
</script>
<style lang="less">
	.products-detail {
		box-sizing: border-box;
		width: 100%;
		background: @page-bg;

		.pro-detail {
			display: flex;
			flex-direction: column;
			// align-items: center;
			padding: 0.4rem;
			background: #fff;

			.pro-name-line {
				display: flex;
				flex-direction: row;
				justify-content: space-between;

				.pro-name {
					font-size: 0.48rem;
					line-height: 0.8rem;
				}

				.edit-btn {
					width: 0.506666rem;
					height: 0.506666rem;
					background: url(../../assets/edit.png) no-repeat;
					background-size: 0.453333rem 0.453333rem;
				}
			}

			.pro-desc {
				font-size: 0.266666rem;
				color: #999;
				line-height: 0.48rem;
			}

			.pro-price {
				color: #ff3d24;

				.unit {
					font-size: 0.373333rem;
				}

				.price {
					font-size: 0.56rem;
				}

				.dot {
					font-size: 0.4rem;
				}
			}
		}

		.pro-poster {
			background: #fff;
			margin-top: 0.266666rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			.poster-title {
				// height: 1.093333rem;
				line-height: 1.093333rem;
				width: 3.2rem;
			}

			.poster-contain {
				width: 100%;

				img {
					display: block;
					width: 100%;
					height: 100%;
				}
			}
		}

		.operate-box {
			box-sizing: border-box;
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 1.333333rem;
			line-height: 1.333333rem;
			background: #fff;
			padding-left: 0.8rem;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			.cart-box {
				width: 0.6rem;
				height: 0.6rem;
				background: url(../../assets/cart-icon.png) no-repeat;
				background-size: 0.48rem 0.453333rem;
				background-position: 50% 50%;
				position: relative;

				.vux-badge {
					position: absolute;
					top: -0.066666rem;
					right: -0.2rem;
				}
			}

			.add-cart {
				width: 3.466666rem;
				height: 1.333333rem;
				line-height: 1.333333rem;
				font-size: 0.426666rem;
				color: #fff;
				background: linear-gradient(to right, #ff5d07, #fe983e);
				text-align: center;
			}
		}
	}
</style>
