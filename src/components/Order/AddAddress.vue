<template>
  <div class="address-page">
    <div class="form">
      <group label-width="4.5em" label-margin-right="2em" label-align="right">
        <x-address title="收货地址:" placeholder="点击选择" v-model="addressValue" raw-value :list="addressData" value-text-align="left">
          <img style="display:inline-block;vertical-align:middle;" src="../../assets/location.png" width="24" height="30">
				</x-address>
          <x-input title="门牌号:" placeholder="详细地址,例: 16号楼5层501室" v-model="formData.area
"></x-input>
          <x-input title="联系人:" placeholder="请填写收货人的姓名" v-model="formData.name"></x-input>
          <x-input title="手机号:" placeholder="请填写手机号码" v-model="formData.tel"></x-input>
          <cell title="标签:" class="tags-box" value-align="left">
            <div class="tag active">家</div>
            <div class="tag">公司</div>
            <div class="tag">学校</div>
          </cell>
      </group>
    </div>
    <x-button class="submit" @click="addSubmit">保存地址</x-button>
  </div>
</template>
<script>
import {
  Group,
  Cell,
  XInput,
  XAddress,
  XTextarea,
  XButton
} from 'vux'
const AddrData = require("../../datas/chinaAddress.json")
export default {
  components: {
    Group,
    Cell,
    XInput,
    XAddress,
    XTextarea,
    XButton
  },
  data() {
    return {
      addressData: AddrData,
      addressValue: [],
      formData: {
        address: '',
        area: '',
        name: '',
        tel: '',
        remark: ''
      },
      value1: '',
      value2: '',
      value3: ''
    }
  },
  mounted() {
    const id = this.$route.query.id
    id && this.getData(id)
  },
  methods: {
    getData(id) {
      this.$api.address.queryAddress({
        id: id,
        current: this.page,
        size: 10
      }).then(res => {
        this.formData = res.data.data.records[0]
        // this.addressValue.push()
      })
    },
    addSubmit() {
      if (this.addressValue.length === 0) {
        this.$vux.toast.text("请选择收货地址")
        return
      }
      this.formData.address = this.addressValue.join("")
      if (!this.formData.area) {
        this.$vux.toast.text("请输入门牌号")
        return
      }
      if (!this.formData.name) {
        this.$vux.toast.text("请输入联系人")
        return
      }
      if (!this.formData.tel) {
        this.$vux.toast.text("请输入手机号")
        return
      }
      this.$vux.loading.show()
      this.$api.address.addAddress(this.formData).then(res => {
        this.$vux.loading.hide()
        this.$vux.toast.text("添加成功")
      })
    }
  }
}

</script>
<style lang="less">
.address-page {
  background: #fff;

  .weui-cells {
    margin-top: 0;
  }

  .tags-box {

    .tag {
      width: 0.853333rem;
      height: 0.48rem;
      line-height: 0.48rem;
      border: 1px solid #eee;
      font-size: 0.32rem;
      color: #333;
      text-align: center;
      margin-right: 0.32rem;
    }

    .active {
      color: #fff;
      background: #18c4b7;
    }

    .weui-cell__ft {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
  }

  .submit {
    width: 9.2rem;
    height: 1.04rem;
    line-height: 1.04rem;
    text-align: center;
    font-size: 0.426666rem;
    color: #fff;
    border-radius: 0.533333rem;
    margin: 1.2rem auto 0;
    background: #18c4b7;
  }
}

</style>
