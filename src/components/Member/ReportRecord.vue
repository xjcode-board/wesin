<template>
	<view-box class="report-page" v-if="init">
		<div class="top">
			<div class="current-weight">当前体重：60kg</div>
			<div class="search-box">
				<div class="weight-filter">体重</div>
				<div class="date-search">
					<div class="date-input">
						<datetime class="date" v-model="value1" @on-change="change" clear-text="今天" @on-clear="setToday">
							<x-input placeholder="开始时间" class="input" v-model="value1"></x-input>
						</datetime>
						<span class="seprate-line">-</span>
						<datetime class="date" v-model="value2" @on-change="change" clear-text="今天" @on-clear="setToday">
							<x-input class="input" placeholder="结束时间" v-model="value2"></x-input>
						</datetime>
					</div>
					<x-button class="search">查询</x-button>
				</div>
			</div>
		</div>
		<div class="list">
			<div class="item">
				<div class="lastday-box">
					<div class="day-title">前一天食谱</div>
					<div class="weight-info-box">
						<div class="weight-time">
							<div class="weight">空腹体重：60kg</div>
							<div class="time">时间：6:30</div>
						</div>
						<div class="input-box">
							<x-input title="早餐" placeholder="请输入" v-model="value3"></x-input>
							<x-input title="水果" placeholder="请输入" v-model="value4"></x-input>
							<x-input title="午餐" placeholder="请输入" v-model="value5"></x-input>
							<x-input title="晚餐" placeholder="请输入" v-model="value6"></x-input>
							<x-textarea title="备注" placeholder="请输入" :show-counter="false" :rows="4"></x-textarea>
						</div>
					</div>
				</div>
				<div class="today-box">
					<div class="day-title">当天食谱</div>
					<div class="weight-info-box">
						<div class="weight-time">
							<div class="weight">睡前体重：60kg</div>
							<div class="time">时间：6:30</div>
						</div>
						<div class="input-box">
							<x-input title="早餐" placeholder="请输入" v-model="value3"></x-input>
							<x-input title="水果" placeholder="请输入" v-model="value4"></x-input>
							<x-input title="午餐" placeholder="请输入" v-model="value5"></x-input>
							<x-input title="晚餐" placeholder="请输入" v-model="value6"></x-input>
							<x-textarea title="备注" placeholder="请输入" :show-counter="false" :rows="4"></x-textarea>
						</div>
					</div>
				</div>
				<div class="operate-box">
					<div class="day-time">2018-12-12</div>
					<div class="confirm">确定修改</div>
				</div>
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
		Datetime,
		XInput,
		XTextarea
	} from 'vux'
	// import { mapState } from 'vuex'
	export default {
		components: {
			ViewBox,
			XButton,
			Grid,
			GridItem,
			Cell,
			Group,
			Datetime,
			XInput,
			XTextarea
		},
		computed: {

		},
		mounted() {
			//     if (!this.init) {
			//       this.$vux.loading.show()
			// 			this.$vux.loading.hide()
			// 			this.$store.dispatch('member/setState', {init: true, user: {name:"自由行走的花",avatar:"../../assets/avatar.png",vip_info:{is_vip:true}}})
			//       this.$http.get('v1/member-index').then(res => {
			//         this.$vux.loading.hide()
			//         if (res.code === 200) {
			//           this.$store.dispatch('member/setState', {init: true, user: res.data.user})
			//         }
			//       }, fail => {
			//         this.$vux.loading.hide()
			//       })
			// }
		},
		data() {
			return {
				tabIndex: 0,
				init: true,
				value1: '',
				value2: '',
				value3: '',
				value4: '',
				value5: '',
				value6: '',
			}
		},
		methods: {
			onItemClick(index) {
				this.tabIndex = index
				// 		if(index == 2){
				// 			this.barChart.repaint()
				// 		}
			},
			change(value) {
				console.log('change', value)
			},

			setToday(value) {
				let now = new Date()
				let cmonth = now.getMonth() + 1
				let day = now.getDate()
				if (cmonth < 10) cmonth = '0' + cmonth
				if (day < 10) day = '0' + day
				this.value1 = now.getFullYear() + '-' + cmonth + '-' + day
				console.log('set today ok')
			}
		}
	}
</script>
<style lang="less">
	.report-page {
		.top {
			background: #fff;

			.current-weight {
				width: 100%;
				height: 1.173333rem;
				line-height: 1.173333rem;
				color: #18C4B7;
				font-size: 0.373333rem;
				text-align: center;
			}

			.search-box {
				width: 100%;
				height: 1.173333rem;
				box-sizing: border-box;
				padding: 0 0.4rem;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;

				.weight-filter {
					font-size: 0.32rem;
					color: #999;
				}

				.date-search {
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					font-size: 0.266666rem;

					.date-input {
						display: flex;
						flex-direction: row;

						.weui-cell::before {
							border: 0;
						}

						.weui-cell::after {
							border: 0;
						}

						.weui-cell {
							padding: 0;
						}

						.weui-cell_access .weui-cell__ft::after {
							content: none;
						}

						.seprate-line {
							color: #ccc;
							margin: 0 0.133333rem;
						}

						.input {
							display: block;
							width: 1.973333rem;
							height: 0.533333rem;
							line-height: 0.533333rem;
							text-align: center;
							border: 1px solid #e6e6e6;
							border-radius: 3px;
							// padding: 0 0.133333rem;
						}

					}

					.search {
						width: 1.173333rem;
						height: 0.533333rem;
						line-height: 0.533333rem;
						text-align: center;
						color: #fff;
						font-size: 0.266666rem;
						background: #fb902a;
						padding: 0 0.133333rem;
						border-radius: 3px;
						margin-left: 0.4rem;
					}
				}
			}
		}

		.item {
			background: #fff;
			width: 9.36rem;
			border-radius: 6px;
			margin: 0.266666rem auto;
			box-sizing: border-box;
			padding: 0 0.266666rem 0.266666rem;

			.day-title {
				height: 1.173333rem;
				line-height: 1.173333rem;
				color: #18C4B7;
				font-size: 0.373333rem;
				border-bottom: 1px dashed #e6e6e6;
			}

			.weight-time {
				line-height: 1.173333rem;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				color: #666;
				font-size: 0.32rem;
			}

			.input-box {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				justify-content: space-between;
				align-items: center;
				color: #666;
				font-size: 0.32rem;

				.weui-cell::before {
					border: 0;
				}

				.weui-cell::after {
					border: 0;
				}

				.weui-cell {
					padding: 0;
				}

				.vux-x-input {
					width: 46%;
					margin: 0.16rem 0.16rem 0.16rem 0;
				}

				.vux-x-textarea {
					width: 90%;
					margin: 0.16rem 0;

				}

				// 			 .weui-cell_access .weui-cell__ft::after{
				// 			 	content: none;
				// 			 }	
				// height: 1.6rem;
				input {
					display: block;
					height: 0.64rem;
					border: 1px solid #e6e6e6;
					border-radius: 3px;
					color: #333;
					font-size: 0.32rem;
				}

				textarea {
					border: 1px solid #e6e6e6;
				}
			}

			.operate-box {
				font-size: 0.32rem;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;

				.day-time {
					color: #999;
				}

				.confirm {
					width: 1.76rem;
					height: 0.64rem;
					line-height: 0.64rem;
					text-align: center;
					border-radius: 20px;
					color: #18c4b7;
					border: 1px solid #18c4b7;
				}
			}
		}
	}
</style>
