<template>
    <view-box class="poster" v-if="init">
		<div class="top"></div>
		<div class="pro-container">
			<img class="contact-user" src="../../assets/contact-user.png" />
			<div class="contact-box">
				<div class="qrcode-box">
					<qrcode size="70" value="https://vux.li?x-page=demo_qrcode" type="img"></qrcode>
				</div>
				<div class="contact-info">
					<p class="user-name">自由行走的花</p>
					<p class="wx-account">Sdsdfs499</p>
					<p class="tel-number">137898845412</p>
				</div>
			</div>
			<div class="list">
				<ul class="list-ul">
					<li class="list-item">
						<img class="poster-pro-img" src="../../assets/poster-pro.png" />
						<p class="pro-name">杨森大三大四</p>
						<p class="pro-info">
						阿大使大大缩短大撒旦撒打算的大三大四阿斯dad大三大四阿达 大大阿斯达岁的</p>
					</li>
					<li class="list-item">
						<img class="poster-pro-img" src="../../assets/poster-pro.png" />
						<p class="pro-name">杨森大三大四</p>
						<p class="pro-info">
						阿大使大大缩短大撒旦撒打算的大三大四阿斯dad大三大四阿达 大大阿斯达岁的</p>
					</li>
					<li class="list-item">
						<img class="poster-pro-img" src="../../assets/poster-pro.png" />
						<p class="pro-name">杨森大三大四</p>
						<p class="pro-info">
						阿大使大大缩短大撒旦撒打算的大三大四阿斯dad大三大四阿达 大大阿斯达岁的</p>
					</li>
					<li class="list-item">
						<img class="poster-pro-img" src="../../assets/poster-pro.png" />
						<p class="pro-name">杨森大三大四</p>
						<p class="pro-info">
						阿大使大大缩短大撒旦撒打算的大三大四阿斯dad大三大四阿达 大大阿斯达岁的</p>
					</li>
					<li class="list-item">
						<img class="poster-pro-img" src="../../assets/poster-pro.png" />
						<p class="pro-name">杨森大三大四</p>
						<p class="pro-info">
						阿大使大大缩短大撒旦撒打算的大三大四阿斯dad大三大四阿达 大大阿斯达岁的</p>
					</li>
					<li class="list-item">
						<img class="poster-pro-img" src="../../assets/poster-pro.png" />
						<p class="pro-name">杨森大三大四</p>
						<p class="pro-info">
						阿大使大大缩短大撒旦撒打阿达 大大阿斯达岁的</p>
					</li>
				</ul>
			</div>
		</div>
    </view-box>
</template>
<script>
import { ViewBox,  Qrcode} from 'vux'
export default {
  components: {
    ViewBox,
    Qrcode
  },
  computed: {

  },
  mounted () {
    
  },
  data () {
    return {
       init:true
    }
  },
  methods:{
	 
  }
}
</script>
<style lang="less">
.poster{
	.top{
		height: 5.2rem;
		background: url(../../assets/haibao-bg.png) no-repeat;
		background-size: 100% auto;
		
	}
	.pro-container{
		border-top-left-radius: 0.4rem;
		border-top-right-radius: 0.4rem;
		background:#27b46f;
		box-sizing: border-box;
		padding: 0.9rem 0.333333rem;
		position: relative;
		top:-0.533333rem;
		.contact-user{
			width: 1.4rem;
			height: 1.4rem;
			border-radius: 50%;
			position: absolute;
			top:-0.7rem;
			left: 0;
			right: 0;
			margin:auto;	
		}
		.contact-box{
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			margin-bottom: 0.4rem;	
			.qrcode-box{
// 				width: 1.813333rem;
// 				height: 1.813333rem;
				border-radius: 0.133333rem;
				background:#fff;
				padding: 0.16rem  0.16rem 0  0.16rem;
				margin-right: 0.4rem;
			}
			.contact-info{
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				color: #fff;
				line-height:0.8rem;
				.user-name{
					font-size: 0.48rem;
				}
				.wx-account{
					font-size: 0.32rem;
					padding-left:0.666666rem;
					background: url(../../assets/wx-wt-icon.png) no-repeat;
					background-size: 0.506666rem 0.36rem;
					background-position: left center;
				}
				.tel-number{
					font-size: 0.32rem;
					padding-left:0.666666rem;
					background: url(../../assets/phone-wt-icon.png) no-repeat;
					background-size: 0.386666rem 0.373333rem;
					background-position: left center;

				}
			}
		}
	}
	.list{
		ul{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			flex-wrap: wrap;
		}
		li{
			width: 3.013333rem;
			// height: 5.36rem;
			border-radius: 0.266666rem;	
			background: #fff;
			box-sizing: border-box;
			margin-bottom: 0.16rem;
		}
		.poster-pro-img{
			width: 3.013333rem;
			height: 3.013333rem;
			border-top-left-radius: 0.266666rem;
			border-top-right-radius: 0.266666rem;
		}
		.pro-name{
			font-size: 0.32rem;
			color: #333;
			margin-top:0.1rem;
			margin-bottom: 0.14rem;
			padding:0 0.253333rem;
		}
		.pro-info{
			padding:0 0.253333rem 0.253333rem;
			line-height: 0.4rem;
			font-size: 0.24rem;
			color: #999;
		}
	}
}
</style>
