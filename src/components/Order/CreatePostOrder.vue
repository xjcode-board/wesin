<template>
	<view-box class="detail">
		<div class="top-box">
			<div class="search-box">
				<x-input placeholder="请输入关键词">
					<img slot="label" style="padding-right:10px;display:block;vertical-align: middle;" src="../../assets/search-icon.png">
				</x-input>
			</div>
		</div>

		<div class="list">
			<ul class="list-ul">
				<li class="list-item vux-1x-b">
					<div class="pro-box">
						<img src="../../assets/default-pro.png" />
						<div class="pro-info">
							<div class="pro-name">打扫打扫打扫的阿大使大赛大大缩短大苏打</div>
							<div class="pro-price">
								<div class="cost-price"><span class="label">成本价：</span><span class="value">256.00</span></div>
								<group class="count-box" gutter="0">
									<x-number :min="1" fillable></x-number>
								</group>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>

		<div class="sum-order">
			<div class="order-info">
				<p class="sum-count">共5盒</p>
				<div class="sum-amount">
					<p>合计：560元</p>
					<p>成本：100元</p>
					<p>利润：460元</p>
				</div>
			</div>
			<div class="confirm-btn">确定</div>
		</div>
	</view-box>
</template>
<script>
	import {
		ViewBox,
		XInput,
		Group,
		XNumber
	} from 'vux'
	export default {
		components: {
			ViewBox,
			XInput,
			Group,
			XNumber
		},
		data() {
			return {
				init: false,
				c_order: [],
				v_order: [],
				index: 0
			}
		},
		mounted() {
			this.$vux.loading.show()
			this.$http.get('v1/member-order').then(
				res => {
					this.$vux.loading.hide()
					if (res.code === 200) {
						this.init = true
						this.c_order = res.data.c_order
						this.v_order = res.data.v_order
					}
				},
				fail => {
					this.$vux.loading.hide()
				}
			)
		},
		methods: {
			onItemClick(index) {
				this.index = index
			}
		}
	}
</script>
<style lang="less">
	.detail {

		// background: #fff;
		.top-box {
			// height: 3.546666rem;
			padding: 0.4rem 0.4rem 0 0.4rem;
			background: #fff;

			.search-box {
				background: #f0f0f0;
				height: 0.853333rem;
				// 				padding-top: 0.2rem;
				// 				padding-left: 0.2rem;
				box-sizing: border-box;
				border-radius: 0.133333rem;

				.weui-cell {
					border-radius: 0.133333rem;
					padding: 0.2rem;
				}

				.weui-search-bar {
					background: #f0f0f0;
					border-radius: 0.133333rem;
				}

				.weui-search-bar__label,
				.weui-search-bar__form,
				.weui-search-bar__box {
					background: #f5f5f5;
					border-radius: 0.133333rem;
				}

				.weui-search-bar__form:after {
					border: 0;
				}

				.weui-search-bar:after {
					border: 0;
				}

				img {
					width: 0.44rem;
					height: 0.453333rem;
				}
			}
		}

		.list {
			background: #fff;

			.list-item {
				padding: 0.2rem 0.4rem;

				.pro-box {
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;
					margin-bottom: 0.266666rem;

					img {
						width: 1.6rem;
						height: 1.6rem;
						border-radius: 0.133333rem;
					}

					.pro-info {
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						align-items: center;

						.pro-name {
							font-size: 0.373333rem;
							color: #666;
							margin-bottom: 0.266666rem;
						}

						.pro-price {
							display: flex;
							flex-direction: row;
							justify-content: space-between;
							align-items: center;
							width: 100%;

							.weui-cell {
								padding: 0.133333rem 0;

								a,
								input {
									padding: 0.133333rem 0.16666rem;
								}
							}

							.weui-cells::before {
								border: 0;
							}

							.weui-cells::after {
								border: 0;
							}

							.weui-cell::before {
								border: 0;
							}

							.weui-cell::after {
								border: 0;
							}

							.vux-number-selector-sub {
								border-top-left-radius: 50%;
								border-bottom-left-radius: 50%;
							}

							input {
								font-size: 0.426666rem;
							}

							.vux-number-selector-plus {
								border-top-right-radius: 50%;
								border-bottom-right-radius: 50%;
								margin-right: 0;
							}

							.cost-price {
								.label {
									font-size: 0.32rem;
									color: #666;
								}

								.value {
									font-size: 0.373333rem;
									color: #ff6d00;
								}
							}
						}
					}
				}
			}
		}

		.sum-order {
			width: 9.2rem;
			height: 1.746666rem;
			border-radius: 0.4rem;
			background: #fff;
			padding: 0.32rem;
			position: fixed;
			bottom: 2rem;
			left: 0;
			right: 0;
			margin: auto;
			box-shadow: 0px 0px 10px #e0e0e0;
			box-sizing: border-box;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			.sum-count {
				font-size: 0.373333rem;
				color: #333;
			}
			.sum-amount {
				display: flex;
				flex-direction: row;
				align-items: center;
				font-size: 0.32rem;
				color: #333;
				p {
					margin-right: 0.2rem;
				}
			}
			.confirm-btn {
				width: 2.266666rem;
				height:0.84rem;
				border-radius: 0.4rem;
				font-size: 0.426666rem;
				color: #fff;
				background: linear-gradient(to right, #ff570d, #fe973e);
				text-align: center;
				line-height: 0.84rem;
			}	
			
		}
	}
</style>
