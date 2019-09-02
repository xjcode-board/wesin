<template>
    <view-box class="member" v-if="init">
        <div class="top">
            <div class="member-top">
                <div class="member-info">
                    <div class="user-avatar"><img src="../../assets/avatar.png"/></div>
                    <div class="user-info">
											<div class="l-d">
													<dd>{{user.name}}</dd>
													<i class="iconfont icon-VIP" :class="user.vip_info.is_vip?'is_vip':''">皇冠代理</i>
											</div>
											<div class="l-d">
													<div class="age">30岁</div>
													<div class="sex">女</div>
											</div>
											<div class="l-d">
													<div class="wx">lingmu32</div>
													<div class="tel">15986620994</div>
											</div>
										</div>
                </div>
            </div>
						<div class="m-menu">
							  <div class="valid-container">
									<div class="valid-date">会员到期：2018/10/15</div>
									<div class="recharge" @click="$router.push({name:'Echarge'})">充值</div>
								</div>
								<div class="grid-container">
									  <div class="grid-item">
											 <span  class="grid-item-title">12</span>
											 <span  class="grid-item-tip">团队总数</span>
										</div>
										<div class="grid-item">
											<span class="grid-item-title">15,300</span>
											<span  class="grid-item-tip">总销售额</span>
										</div>
										<div class="grid-item">
										<span  class="grid-item-title">6585</span>
										<span  class="grid-item-tip">总利润</span>
										</div>
										<div class="grid-item">
											<span  class="grid-item-title">5625<span class="sub">/2</span></span>
											<span  class="grid-item-tip">总/直属顾客</span>
										</div>		 
								</div>
						</div>	 
        </div>  
				<div class="deliver-contain">
					<div class="deliver-item jinhuo">进货订单</div>
					<div class="deliver-item fahuo">发货订单</div>
				</div>		
				<div class="cell-container">
					<group >
							<cell title="我的团队" link="/r/my-team">
								<img slot="icon" width="26" style="display:block;margin-right:15px;" src="../../assets/mytuandui.png"/>
							</cell>
							<cell title="我的客户" link="/r/my-customer">
								<img slot="icon" width="22" style="display:block;margin-right:15px;" src="../../assets/mykehu.png"/>
							</cell>
							<cell title="我的地址" link="/r/recieve-addr">
								<img slot="icon" width="20" style="display:block;margin-right:15px;" src="../../assets/dizhi.png"/>
							</cell>
							<cell title="我的提成" is-link>
								<img slot="icon" width="28" style="display:block;margin-right:15px;" src="../../assets/ticheng.png"/>
							</cell>
							<cell title="我的积分" is-link>
								<img slot="icon" width="22" style="display:block;margin-right:15px;" src="../../assets/myjifen.png"/>
							</cell>
							<cell title="数据报表" link="/r/my-data">
								<img slot="icon" width="24" style="display:block;margin-right:15px;" src="../../assets/mybaobiao.png"/>
							</cell>
							<cell title="我的海报" link="/r/my-poster">
								<img slot="icon" width="24" style="display:block;margin-right:15px;" src="../../assets/myhaibao.png"/>
							</cell>
					</group>
				</div>
    </view-box>
</template>
<script>
import { ViewBox, XButton, Grid, GridItem , Cell, 
		Group } from 'vux'
import { mapState } from 'vuex'
export default {
  name: 'member',
  components: {
    ViewBox,
    XButton,
    Grid,
    GridItem,
		Cell, 
		Group
  },
  computed: {
    ...mapState({
      init: state => state.member.init,
      user: state => state.member.user
    })
  },
  mounted () {
    if (!this.init) {
      this.$vux.loading.show()
			this.$vux.loading.hide()
			this.$store.dispatch('member/setState', {init: true, user: {name:"自由行走的花",avatar:"../../assets/avatar.png",vip_info:{is_vip:true}}})
//       this.$http.get('v1/member-index').then(res => {
//         this.$vux.loading.hide()
//         if (res.code === 200) {
//           this.$store.dispatch('member/setState', {init: true, user: res.data.user})
//         }
//       }, fail => {
//         this.$vux.loading.hide()
//       })
    }
  },
  data () {
    return {
      is_vip: false,
      host: this.HOST,
      menus: [
        {
          name: '我的课程',
          icon: 'icon-1wodexuexizhongxin',
          color: '#f60',
          route_name: 'MyCourses'
        },
        {
          name: '我的订单',
          icon: 'icon-my-course',
          color: '#f60',
          route_name: 'MyOrder'
        },
        {
          name: '我的消息',
          icon: 'icon-xiaoxi',
          color: '#f60',
          route_name: 'MyMsg'
        }
      ]
    }
  }
}
</script>
<style lang="less">
.member {
  .top {
		box-sizing: border-box;
		width:100%;
		height:6.066666rem;
    background: url(../../assets/member.png) no-repeat;
		background-size:100% 100%;
		margin-bottom:0.266666rem;
    .member-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
			padding: 0.4rem 0.466666rem;
      .member-info {
        display: flex;
        align-items: center;
				flex-direction:row;
				justify-content: flex-start;
        img {
          width: 1.706666rem;
          height: 1.706666rem;
          border-radius: 50%;
        }
				.user-info{
					display: flex;
					// align-items: center;
					flex-direction:column;
					justify-content: flex-start;
				}
				.icon-VIP{
					display: flex;
					align-items: flex-end;
					color: #fff;
					font-size: 0.266666rem;
				}
				.age{
					line-height: 0.4rem;
					padding-right:0.266666rem;
					border-right: 1px solid #fff;
				}
				.sex{
					line-height: 0.4rem;
					padding-left:0.266666rem;
				}
				.age,.sex{
					font-size:0.373333rem;
					color:#fff;
					margin:0.133333rem 0;
				}
				.wx,.tel{
					font-size:0.266666rem;
					color:#fff;
				}
				.wx{
					line-height: 0.4rem;
					padding-right:0.266666rem;
				}
				.tel{
					line-height: 0.4rem;
					padding-left:0.266666rem;
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
						margin-right:0.16rem;
          }
        }
      }
    }
		.m-menu {
			width:100%;
			height:3.2rem;
			border-top-left-radius: 10px;
			border-top-right-radius: 10px;
			background: #ffffff;
			padding: 0 0.533333rem;
			box-sizing: border-box;
			.valid-container{
				height:1.146666rem;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: flex-start;
				border-bottom:1px solid #eee;
				.valid-date{
					font-size:0.32rem;
					color:#ffaa29;
				}
				.recharge{
					width:1.066666rem;
					height:0.48rem;
					line-height: 0.48rem;
					border-radius: 6px;
					border:1px solid #ffaa29;
					font-size:0.32rem;
					color:#ffaa29;
					text-align: center;
					margin-left:0.4rem;
				}
			}
			.grid-container{
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				padding:0.533333rem 0;
			}
			.grid-item{
				display: flex;
				flex-direction: column;
				align-items: center;
			}
			.grid-item-title{
				 font-size: 0.48rem;
				 color:#333;
				 line-height:0.6rem;
			 }
			 .grid-item-tip{
			 	 font-size: 0.32rem;
				 color:#999;
			 }
		}	
   }
	 .deliver-contain{
	 	height: 1.173333rem;
	 	background: #fff;
	 	display: flex;
	 	flex-direction: row;
	 	justify-content: space-around;
	 	align-items: center;
	 	.deliver-item{
	 		font-size:0.293333rem;
	 		color:#929292;
			padding-left:0.8rem;
	 	}
			
		.jinhuo{
			background:url(../../assets/jinhuo.png) no-repeat;
			background-size:0.506666rem 0.506666rem;
			background-position: 5% 50%;
		}
			
		.fahuo{
			background:url(../../assets/fahuo.png) no-repeat;
			background-size:0.52rem 0.48rem;
			background-position: 5% 50%;
		}
	 }
	 
	 .cell-container{
	 	// margin: 0.266666rem 0;
	 	font-size: 0.373333rem;
	 	color: #333;
	 	cell{
	 		height:1.306666rem;
	 		background: #fff;
				
			img:nth-of-type(1){
				width:0.506666rem;
			}
	 	}
		.weui-cells{
			margin-top:0.266666rem;
		}
	 }
}
</style>
