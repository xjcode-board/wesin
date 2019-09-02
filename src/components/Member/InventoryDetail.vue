<template>
	<view-box class="detail">
		<div class="top-box vux-1px-b">
			<div class="static-box">
				<div class="static-item">
					<p class="value">6305</p>
					<p class="label">库存总数量（盒）</p>
				</div>
				<div class="line"></div>
				<div class="static-item">
					<p class="value">6305</p>
					<p class="label">库存总数量（盒）</p>
				</div>
			</div>
			<div class="search-box">
				<x-input placeholder="请输入关键词">
					<img slot="label" style="padding-right:10px;display:block;" src="../../assets/search-icon.png">
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
							<div class="store-box">
								<div class="cost-price">
									<span class="label">成本价：</span>
									<span class="price">256.00</span>
									<img src="../../assets/edit.png" class="edit-icon" />
								</div>
								<div class="store-info">
									<span class="label">库存：</span>
									<span class="price">12451</span>
									<img src="../../assets/edit.png" class="edit-icon" />
								</div>
							</div>
						</div>
					</div>
					<div class="sum-amount">
						<p class="label">共计金额：</p>
						<p class="money"><span class="unit">￥</span>256.00</p>
					</div>
				</li>
			</ul>
		</div>
	</view-box>
</template>
<script>
	import {
		ViewBox,
		Search,
		XInput,
		Tab,
		TabItem,
		FormPreview
	} from 'vux'
	export default {
		components: {
			ViewBox,
			Search,
			XInput,
			Tab,
			TabItem,
			FormPreview
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
			padding: 0.4rem;
			background: #fff;
			.static-box {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				margin-bottom: 0.466666rem;
				.static-item {
					.value {
						font-size: 0.48rem;
						color: #333;
						line-height:0.8rem;
					}

					.label {
						font-size: 0.32rem;
						color: #999;
					}
				}

				.line {
					width: 0.026666rem;
					height: 0.4rem;
					background: #ccc;
					margin:0 0.666666rem;
				}
			}

			.search-box {
				background: #f0f0f0;
				height: 0.853333rem;
// 				padding-top: 0.2rem;
// 				padding-left: 0.2rem;
				box-sizing: border-box;
				border-radius: 0.133333rem;
				.weui-cell{
					border-radius: 0.133333rem;
					padding:0.2rem; 	
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
				img{
					width: 0.44rem;
					height: 0.453333rem;
				}
			}
		}
		
		.list{
			background:#fff;	
			.list-item {
				padding:0.4rem;
				.pro-box{
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;
					margin-bottom:0.266666rem;
					img {
						width: 1.6rem;
						height: 1.6rem;
						border-radius: 0.133333rem;
					}
					.pro-info{
					    display: flex;
						flex-direction: column;
						justify-content: space-between;
						align-items: center;
						.pro-name {
							font-size: 0.373333rem;
							color: #666;
							margin-bottom: 0.266666rem;
						}
						.store-box {
							width: 100%;
							display: flex;
							flex-direction: row;
							align-items: center;
							justify-content: space-between;
							.cost-price,.store-info{
								display: flex;
								flex-direction: row;
								align-items: center;
							}
							.label{
								font-size: 0.32rem;
								color: #666;
							}
							.price{
								font-size:0.346666rem;
								color: #ff6d00;
							}
							img{
								margin-left:0.133333rem;
								width: 0.453333rem;
								height: 0.453333rem;
							}
						}
					}
				}
				.sum-amount{
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;
						
					.label{
						font-size: 0.373333rem;
						color: #666;
					}
					.money{
						.unit{
							font-size: 0.32rem;
						}
						font-size: 0.373333rem;
						color: #ff6d00;
					}
				}
			}
		}
	}
</style>
