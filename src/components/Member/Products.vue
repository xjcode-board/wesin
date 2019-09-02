<template>
	<view-box class="products" v-if="list.length>0" v-infinite-scroll="loadMore" :infinite-scroll-disabled="loading"
		 infinite-scroll-distance="60">
		<div class="header-container">
			<swiper v-if="swiper_list.length>0" :list="swiper_list" height="3.56rem" :auto="true" />
			<!-- jiugongge -->
			<div class="my-product">
				我的产品
			</div>
		</div>
		<div class="product-list">
			<div class="pro-container" v-for="(item,index) in list" :key="index" @click="toDetail(item.id)">
				<div class="pro-img">
					<img :src="item.img" />
				</div>
				<div class="pro-title">
					{{item.name}}
				</div>
				<div class="operate-box">
					<div class="price-count">
						<p class="price"><span>￥</span>{{item.price}}</p>
						<p class="count">剩余:{{item.quantity}}</p>
					</div>
					<div class="ingoods">进货</div>
				</div>
			</div>
			<div class="cart-box">
				<span class="count-dage" @click="toCart">12</span>
			</div>		
		</div>
		<div class="load-more-view">
			<load-more :show-loading="loading" :tip="load_more_tip" @click.native="reLoad"></load-more>
		</div>
	</view-box>
</template>
<script>
	import {
		ViewBox,
		XButton,
		Swiper,
		Grid,
		GridItem,
		Cell,
		Group,
		LoadMore,
		InlineLoading
	} from 'vux'
	import {
	  mapState,
	  mapActions
	} from 'vuex'
	export default {
		components: {
			ViewBox,
			XButton,
			Swiper,
			Grid,
			GridItem,
			Cell,
			Group,
			LoadMore,
			InlineLoading
		},
		computed: {
			...mapState({
				swiper_list: state => state.home.swiper_list
			})
		},
		mounted() {
			 
		},
		data() {
			return {
			 loading: false,
			 page: 0,
			 no_more: false,
			 load_err: false,
			 load_more_tip: '别拉了，到底了',
			 list: [],
			}
		},
		methods: {
			loadMore() {
				if (this.loading || this.no_more) {
					return
				}
				this.page = this.page + 1
				this.load_more_tip = '加载中'
				this.getData()
			},
			reLoad() {
				if (this.loading || this.no_more) {
					return
				}
				this.page = this.page
				this.load_more_tip = '加载中'
				this.getData()
			},
			getData() {
				this.loading = true
				this.load_more_tip = '加载中'
				this.$api.product.queryProlist({
					id: '',
					current: this.page,
					size: 10
				}).then(res => {
					if (!this.init) this.init = true
					this.$vux.loading.hide()
					this.loading = false
					this.list = res.data.data.records
					if (res.data.data.total / 10 <= 1) {
						this.no_more = true
						this.load_more_tip = '别拉了，到底了'
					}
				})
			},
			 toCart(){
				 
			 },
			 toDetail(id){
				this.$router.push({ path: '/r/product-detail', query: { id: id } })
			 }
		}
	}
</script>
<style lang="less">
	.products {
		box-sizing: border-box;
		width: 100%;
		background: @page-bg;

		.header-container {
			// background:#fff;
			width: 100%;
			// height:6rem;
			margin-bottom: 0.346666rem;

			.my-product {
				height: 1.546666rem;
				background: #fff;
				padding-left: 0.4rem;
				line-height: 1.546666rem;
				background: url(../../assets/arrow-right.png) #fff no-repeat;
				background-size: 0.2rem 0.36rem;
				background-position: 95% 50%;
				font-size: 0.426666rem;
			}
		}

		.product-list {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			padding: 0 0.266666rem;
			justify-content: space-between;

			.pro-container {
				background: #fff;
				border-radius: 6px;
				display: flex;
				flex-direction: column;
				width: 4.533333rem;
				margin-bottom: 0.266666rem;

				.pro-img {
					width: 4.533333rem;
					height: 4.533333rem;
					border-top-left-radius: 6px;
					border-top-right-radius: 6px;

					img {
						border-top-left-radius: 6px;
						border-top-right-radius: 6px;
						width: 4.533333rem;
						height: 4.533333rem;
					}
				}

				.pro-title {
					font-size: 0.373333rem;
					color: #333;
					padding: 0.266666rem;
				}

				.operate-box {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					padding: 0 0.266666rem 0.266666rem 0.266666rem;

					.price-count {
						display: flex;
						flex-direction: row;
						align-items: center;

						.price {
							font-size: 0.48rem;
							color: #ff6d00;
							margin-right: 0.133333rem;

							span {
								font-size: 0.32rem;
							}
						}

						.count {
							font-size: 0.266666rem;
							color: #999;
						}
					}

					.ingoods {
						width: 0.853333rem;
						height: 0.453333rem;
						padding: 0 0.066666rem;
						text-align: center;
						border-radius: 20px;
						border: 1px solid #4d4d4d;
						color: #4d4d4d;
					}
				}
			}
		}

		.cart-box {
			position: fixed;
			bottom: 5%;
			right: 5%;
			z-index: 111;
			width: 0.906666rem;
			height: 0.906666rem;
			background: url(../../assets/cart-icon.png) #fff no-repeat;
			background-size: 0.48rem 0.453333rem;
			background-position: 50% 50%;
			border-radius: 50%;

			span {
				display: block;
				width: 0.4rem;
				height: 0.4rem;
				border-radius: 50%;
				background: #ef5350;
				color: #fff;
				font-size: 0.186666rem;
				text-align: center;
				line-height: 0.4rem;
				position: absolute;
				top: 20%;
				right: 5%;
			}
		}
	}
</style>
