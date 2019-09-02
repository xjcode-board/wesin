<template>
	<view-box class="teamDetail">
		<div class="top">
			<div class="detail-top">
				<div class="detail-info">
					<div class="user-avatar"><img src="../../assets/avatar.png" /></div>
					<div class="user-info">
						<div class="l-d">
							<dd>{{user.name}}</dd>
							<i class="iconfont icon-VIP"  :class="'level'+user.levelId">{{user.nickName}}</i>
						</div>
						<div class="l-d">
							<div class="age">30岁</div>
							<div class="sex">{{user.sex}}</div>
						</div>
						<div class="l-d">
							<div class="wx">{{user.wxAcc}}</div>
							<div class="tel">{{user.tel}}</div>
						</div>
					</div>
				</div>
				<div class="upgrade">升级代理</div>
				<div class="grid-container">
					<div class="grid-item">
						<span class="grid-item-title">{{user.subAssNum}}</span>
						<span class="grid-item-tip">团队总数</span>
					</div>
					<div class="grid-item">
						<span class="grid-item-title">{{user.totalAmount}}</span>
						<span class="grid-item-tip">总销售额</span>
					</div>
					<div class="grid-item">
						<span class="grid-item-title">{{user.totalProfit}}</span>
						<span class="grid-item-tip">总利润</span>
					</div>
					<div class="grid-item">
						<span class="grid-item-title">{{user.subCustNum}}</span>
						<span class="grid-item-tip">总顾客</span>
					</div>
				</div>
			</div>
		</div>

		<div class="detail-content">
			<tab class="tab-container" :line-width=2 custom-bar-width="50px" active-color="#18c4b7">
				<tab-item selected @on-item-click="onItemClick">基本信息</tab-item>
				<tab-item @on-item-click="onItemClick">销售/利润</tab-item>
				<tab-item @on-item-click="onItemClick">库存信息</tab-item>
			</tab>
			<!-- 基本信息 -->
			<div class="tabs-body" v-show="tabIndex == 0">
				<group>
					<cell title="昵称" value="快乐的小花"></cell>
					<cell title="姓名" value="李静"></cell>
					<cell title="性别" value="女"></cell>
					<cell title="出生日期" value="1993-10-1"></cell>
					<cell title="初始体重" value="50kg"></cell>
					<cell title="身高" value="160cm"></cell>
					<cell title="微信号" value="weixin2441"></cell>
					<cell title="手机号码" value="13732258741"></cell>
				</group>
			</div>
			<!-- 销售/利润 -->
			<div class="tabs-body" v-show="tabIndex == 1">
				<div class="cell-title">
					<div class="sum1">
						<p class="sum-title">￥{{totalSaleAmount}}</p>
						<p class="sum-tip">总销售额</p>
					</div>
					<div class="sum2">
						<p class="sum-title">￥{{totalProfit}}</p>
						<p class="sum-tip">净利润</p>
					</div>
				</div>
				<div class="chart-container">
					<v-chart prevent-render @on-render="renderChart1" :width="charWidth">
						<v-scale x field="date" type="timeCat" mask="MM-DD" :tick-count="3" />
						<v-scale y :min="0" field="value" :tick-count="5" />
						<v-legend disabled />
						<v-line series-field="type" shape="smooth" adjust="stack" />
						<v-tooltip :show-item-marker="false" />
					</v-chart>
				</div>
			</div>
			<!-- 库存信息 -->
			<div class="tabs-body" v-show="tabIndex == 2">
				<div class="cell-title">
					<div class="sum1">
						<p class="sum-title">{{totalStock}}</p>
						<p class="sum-tip">总库存数量</p>
					</div>
					<div class="sum2">
						<p class="sum-title">￥{{totalCost}}</p>
						<p class="sum-tip">总成本金额</p>
					</div>
				</div>
				<div class="chart-container">
					<v-chart prevent-render @on-render="renderChart2" :width="charWidth">
						<v-scale x field="value" />
						<v-scale y field="type" />
						<v-bar colors='#69d2fd' />
						<v-tooltip :show-item-marker="false" />
					</v-chart>
				</div>
			</div>
		</div>
		<!-- part2 -->
		<div class="teams-container" v-show="tabIndex == 0">
			<div class="teams-title">Ta的经销商(3)</div>
			<div class="team-list">
				<group>
					<cell is-link class="team-item" title="" align-items="flex-start">
						<img slot="icon" src="../../assets/mytuandui.png" />
						<div class="team-info">
							<div class="user-info">
								<div class="user-name">李静</div>
								<div class="level-icon level1"></div>
								<div class="user-level">总经销商</div>
							</div>
							<div class="static-box">
								<div class="static-item">
									<p class="static-count">5</p>
									<p class="static-label">团队人数</p>
								</div>
								<div class="static-item">
									<p class="static-count">5</p>
									<p class="static-label">顾客人数</p>
								</div>
								<div class="static-item">
									<p class="static-count">￥552,455</p>
									<p class="static-label">总销售额</p>
								</div>
								<div class="static-item">
									<p class="static-count">￥124,10</p>
									<p class="static-label">总利润</p>
								</div>
							</div>
						</div>

					</cell>
				</group>
			</div>
		</div>
	</view-box>
</template>
<script>
	import {
		ViewBox,
		XButton,
		Grid,
		GridItem,
		Cell,
		Group,
		Tab,
		TabItem,
		VChart,
		VLine,
		VPoint,
		VScale,
		VTooltip,
		VLegend,
		VBar
	} from 'vux'
	export default {
		components: {
			ViewBox,
			XButton,
			Grid,
			GridItem,
			Cell,
			Group,
			Tab,
			TabItem,
			VChart,
			VLine,
			VPoint,
			VScale,
			VTooltip,
			VLegend,
			VBar
		},
		computed: {

		},
		mounted() {
			this.$vux.loading.show()
			const id = this.$route.query.id
			this.getData(id)
		},
		data() {
			return {
				charWidth: (350 / 375) * window.screen.width,
				tabIndex: 0,
				init: true,
				barChart: null,
				user: {
					name: "自由行走的花",
					avatar: "../../assets/avatar.png",
					vip_info: {
						is_vip: true
					},
				},
				lineData: [{
						time: '2016-08-08 00:00:00',
						type: '销售',
						tem: 10
					},
					{
						time: '2016-08-08 00:10:00',
						type: '销售',
						tem: 22
					},
					{
						time: '2016-08-08 00:30:00',
						type: '销售',
						tem: 20
					},
					{
						time: '2016-08-09 00:35:00',
						type: '销售',
						tem: 26
					},
					{
						time: '2016-08-09 01:00:00',
						type: '销售',
						tem: 20
					},
					{
						time: '2016-08-09 01:20:00',
						type: '销售',
						tem: 26
					},
					{
						time: '2016-08-10 01:40:00',
						type: '销售',
						tem: 28
					},
					{
						time: '2016-08-10 02:00:00',
						type: '销售',
						tem: 20
					},
					{
						time: '2016-08-10 02:20:00',
						type: '销售',
						tem: 18
					},
					{
						time: '2016-08-08 00:00:00',
						type: '利润',
						tem: 45
					},
					{
						time: '2016-08-08 00:10:00',
						type: '利润',
						tem: 15
					},
					{
						time: '2016-08-08 00:30:00',
						type: '利润',
						tem: 18
					},
					{
						time: '2016-08-09 00:35:00',
						type: '利润',
						tem: 63
					},
					{
						time: '2016-08-09 01:00:00',
						type: '利润',
						tem: 20
					},
					{
						time: '2016-08-09 01:20:00',
						type: '利润',
						tem: 24
					},
					{
						time: '2016-08-10 01:40:00',
						type: '利润',
						tem: 78
					},
					{
						time: '2016-08-10 02:00:00',
						type: '利润',
						tem: 86
					},
					{
						time: '2016-08-10 02:20:00',
						type: '利润',
						tem: 25
					}
				]
			}
		},
		methods: {
			getData(id) {
				this.$api.user.queryTeams({ id: '', current: 1, size: 10 }).then(res => {
					this.user = res.data.data.records[0]
					this.$vux.loading.hide()
				})
			},
			async renderChart1({
				chart
			}) {
				const data = await this.$api.data.saleProfitData({ time: "day", current: 1, size: 10 })
				this.totalSaleAmount = util.fmoney(data.data.data.totalAmount)
				this.totalProfit = util.fmoney(data.data.data.totalProfit)
				chart.source(data.data.data.data);
				chart.legend(false);
				chart.line().position('time*value').color('type').shape('smooth');
				chart.point().position('time*value').color('type').size(4).shape('circle').style({
					stroke: '#fff',
					lineWidth: 1
				});
				chart.tooltip({
					showCrosshairs: true
				});
				chart.render()
				this.$vux.loading.hide()
			},
			async renderChart2({
				chart
			}) {
				const data = await this.$api.data.stockData({ time: "day", current: 1, size: 10 })
				this.totalStock = util.fmoney(data.data.data.totalStock)
				this.totalCost = util.fmoney(data.data.data.totalCost)
				chart.source(data.data.data.data)
				chart.coord({
					transposed: true
				});
				chart.interval().position('type*value');
				chart.render()
			},
			onItemClick(index) {
				this.tabIndex = index
				// 		if(index == 2){
				// 			this.barChart.repaint()
				// 		}
			},
			renderChart({
				chart
			}) {
				const data = [{
						products: '酵素果粉1',
						count: 38
					},
					{
						products: '酵素果粉2',
						count: 52
					},
					{
						products: '酵素果粉3',
						count: 61
					},
					{
						products: '酵素果粉4',
						count: 145
					},
					{
						products: '酵素果粉5',
						count: 48
					},
					{
						products: '酵素果粉6',
						count: 38
					},
					{
						products: '酵素果粉7',
						count: 38
					},
					{
						products: '酵素果粉8',
						count: 38
					}
				];
				// this.barChart = chart;
				chart.source(this.data, {
					y: {
						max: 100,
						min: 0
					}
				})
				chart.coord({
					transposed: true
				});
				chart.interval().position('products*count');
				chart.render()
			}
		}
	}
</script>
<style lang="less">
	.teamDetail {
		box-sizing: border-box;
		width: 100%;
		background: url(../../assets/member.png) #ebf0ef no-repeat;
		background-size: 100% auto;

		.top {
			box-sizing: border-box;
			width: 100%;

			// height:6.066666rem;
			.detail-top {
				//    display: flex;
				//    align-items: center;
				//    justify-content: space-between;
				padding: 0.4rem 0.466666rem;
				position: relative;

				.detail-info {
					display: flex;
					align-items: center;
					flex-direction: row;
					justify-content: flex-start;

					img {
						width: 1.706666rem;
						height: 1.706666rem;
						border-radius: 50%;
					}

					.user-info {
						display: flex;
						// align-items: center;
						flex-direction: column;
						justify-content: flex-start;
					}

					.icon-VIP {
						display: flex;
						align-items: flex-end;
						color: #fff;
						font-size: 0.266666rem;
					}

					.age {
						line-height: 0.4rem;
						padding-right: 0.266666rem;
						border-right: 1px solid #fff;
					}

					.sex {
						line-height: 0.4rem;
						padding-left: 0.266666rem;
					}

					.age,
					.sex {
						font-size: 0.373333rem;
						color: #fff;
						margin: 0.133333rem 0;
					}

					.wx,
					.tel {
						font-size: 0.266666rem;
						color: #fff;
					}

					.wx {
						line-height: 0.4rem;
						padding-right: 0.266666rem;
					}

					.tel {
						line-height: 0.4rem;
						padding-left: 0.266666rem;
					}

					//         .is_vip{
					//           color: #E6A23C;
					//         }
					.l-d {
						margin-left: 0.266667rem;
						color: @minor-text;
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-content: flex-start;

						dd {
							color: #fff;
							font-size: 0.64rem;
							margin-right: 0.16rem;
						}
					}
				}

				.upgrade {
					position: absolute;
					top: 44%;
					right: 0;
					width: 2.506666rem;
					height: 0.906666rem;
					line-height: 0.906666rem;
					font-size: 0.373333rem;
					color: #fff;
					text-align: center;
					background: linear-gradient(to right, #2decd9, #1cc3af);
					border-top-left-radius: 20px;
					border-bottom-left-radius: 20px;
				}

				.grid-container {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					padding: 0.533333rem 0 0;
					margin-top: 0.866666rem;
				}

				.grid-item {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.grid-item-title {
					font-size: 0.48rem;
					color: #fff;
					line-height: 0.6rem;
				}

				.grid-item-tip {
					font-size: 0.32rem;
					color: #fff;
				}
			}

		}

		.detail-content {
			box-sizing: border-box;
			padding: 0 0.266666rem;
			background: #fff;
			border-top-left-radius: 10px;
			border-top-right-radius: 10px;
			margin: auto;

			.vux-tab-wrap {
				padding-top: 0;
			}

			.weui-cells {
				margin-top: 0;
			}
		}

		.tab-container {
			height: 1.146666rem;
		}

		.tabs-body .vux-label {
			width: 2rem;
			/* text-align: justify; */
			text-align-last: justify;
		}

		.cell-title {
			height: 1.6rem;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			// 		background:url(../../assets/arrow-right.png) no-repeat;
			// 		background-size:0.2rem 0.36rem;
			// 		background-position: 95% 50%;
		}

		.sum1 {
			margin-left: 0.4rem;
			margin-right: 0.8rem;
			display: flex;
			flex-direction: column;
			align-content: center;

			.sum-title {
				color: #286fec;
				font-size: 0.64rem;
			}

			.sum-tip {
				color: #999;
				font-size: 0.266666rem;
			}
		}

		.sum2 {
			.sum-title {
				color: #fb902a;
				font-size: 0.64rem;
			}

			.sum-tip {
				color: #999;
				font-size: 0.266666rem;
			}
		}

		.chart-container {
			width: 9.36rem;
		}

		//
		.teams-container {
			background: #fff;
			margin: 0.32rem 0;

			.teams-title {
				height: 1.6rem;
				line-height: 1.6rem;
				padding: 0 0.4rem;
				font-size: 0.533333rem;
				color: #333;
			}

			.team-list {
				background: #fff;

				.weui-cells {
					margin-top: 0;
				}

				.team-item {
					display: flex;
					flex-direction: row;
					align-items: center;

					.weui-cell__ft {
						width: 100%
					}

					img {
						display: block;
						width: 1.333333rem;
						height: 1.333333rem;
						border-radius: 50%;
						margin-top: 0.2rem;
					}

					.team-info {
						box-sizing: border-box;
						display: flex;
						flex-direction: column;
						justify-content: flex-start;
						padding-left: 0.32rem;
						padding-right: 0.266666rem;

						// align-items: center;
						.user-info {
							display: flex;
							flex-direction: row;
							justify-content: flex-start;
							align-items: center;
							line-height: 0.666666rem;

							.user-name {
								font-size: 0.426666rem;
								color: #0f0f0f;
							}

							.level-icon {
								width: 0.426666rem;
								height: 0.426666rem;
								padding: 0 0.2rem;
								border-radius: 50%;
							}

							.level1 {
								background: url("../../assets/level_z.png") no-repeat;
								background-size: 0.426666rem 0.426666rem;
								background-position: center center;
							}

							.user-level {
								font-size: 0.32rem;
								color: #999;
							}
						}

						.static-box {
							display: flex;
							flex-direction: row;
							justify-content: space-between;
							text-align: center;
							margin-top: 0.2rem;

							.static-count {
								font-size: 0.32rem;
								color: #999;
							}

							.static-label {
								font-size: 0.266666rem;
								color: #999;
							}
						}
					}
				}
			}
		}

	}
</style>
