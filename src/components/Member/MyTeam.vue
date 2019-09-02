<template>
	<div class="team" v-if="init">
		<div class="search-box">
			<search @on-submit="onSubmit" :auto-fixed="false" v-model="searchValue" @on-focus="onFocus" @on-cancel="onCancel"></search>
		</div>
		<!-- 	<div class="filter-box">
			<div class="team-num-filter">团队人数</div>
			<div class="team-num-filter">顾客人数</div>
			<div class="team-num-filter">销售额</div>
			<div class="team-num-filter">总利润</div>
		</div> -->
		<view-box class="team-list" v-if="list.length>0" v-infinite-scroll="loadMore" :infinite-scroll-disabled="loading"
		 infinite-scroll-distance="60">
			<group>
				<cell :link="{path:'/r/my-team-detail',query:{id:item.id}}" class="team-item" title="" align-items="flex-start"
				 v-for="(item,index) in list" :key="index">
					<img slot="icon" :src="item.img" />
					<div class="team-info">
						<div class="user-info">
							<div class="user-name">{{item.name}}</div>
							<div class="level-icon" :class="'level'+item.levelId"></div>
							<div class="user-level">{{item.nickName}}</div>
						</div>
						<div class="static-box">
							<div class="static-item">
								<p class="static-count">{{item.subAssNum}}</p>
								<p class="static-label">团队人数</p>
							</div>
							<div class="static-item">
								<p class="static-count">{{item.subCustNum}}</p>
								<p class="static-label">顾客人数</p>
							</div>
							<div class="static-item">
								<p class="static-count">￥{{item.totalAmount}}</p>
								<p class="static-label">总销售额</p>
							</div>
							<div class="static-item">
								<p class="static-count">￥{{item.totalProfit}}</p>
								<p class="static-label">总利润</p>
							</div>
						</div>
					</div>
				</cell>
			</group>
			<div class="load-more-view">
				<load-more :show-loading="loading" :tip="load_more_tip" @click.native="reLoad"></load-more>
			</div>
		</view-box>
	</div>
</template>
<script>
	import {
		ViewBox,
		Search,
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
			Search,
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
			this.$vux.loading.show()
			this.getData()
		},
		data() {
			return {
				init: false,
				loading: false,
				page: 0,
				no_more: false,
				load_err: false,
				load_more_tip: '别拉了，到底了',
				list: [],
				searchValue: ''
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
				this.$api.user.queryTeams({
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
			getResult(val) {
				this.results = val ? getResult(this.value) : []
			},
			onSubmit(val) {
				window.alert('on submit' + val)
			},
			onCancel() {
				console.log('on cancel')
			},
			onFocus() {
				console.log('on focus')
			}
		}
	}
</script>
<style lang="less">
	html,
	body {
		height: 100%;
		width: 100%;
		background: #ebf0ef;
		overflow-x: hidden;
	}

	.team {
		.search-box {
			background: #fff;
			position: fixed;
			top: 0;
			width: 100%;
			z-index: 500;
			height: 1.173333rem;

			.weui-search-bar {
				background: #fff;
				border-radius: 20px;
			}

			.weui-search-bar__label,
			.weui-search-bar__form,
			.weui-search-bar__box {
				background: #f5f5f5;
				border-radius: 20px;
			}

			.weui-search-bar__form:after {
				border: 0;
			}
		}

		.filter-box {
			position: fixed;
			top: 1.173333rem;
			z-index: 500;
			box-sizing: border-box;
			padding-left: 1.466666rem;
			background: #fff;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			width: 100%;
			height: 1.173333rem;
			line-height: 1.173333rem;
			font-size: 0.32rem;
			color: #999;

		}

		.team-list {
			background: #fff;
			margin-top: 1.173333rem;

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
</style>
