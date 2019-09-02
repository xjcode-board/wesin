import req from "@/libs/http"

const address = {
  // 查询地址记录
  queryAddress(param) {
    return req.get("/user/address", param)
  },

  // 添加收货地址
  addAddress(param) {
    return req.get("/user/address", param)
  },

  // 修改收货地址
  editAddress(param) {
    return req.get("/user/address", param)
  },

  // 删除收货地址
  deleteAddress(param) {
    return req.get("/user/address", param)
  },

  // 查询收货地址详情
  queryAddressDetail(param) {
    return req.get("/user/address", param)
  },

  //单品榜单-销售额 
  singleProSaledata(param) {
    return req.get("/data/item/sales", param)
  },
  //单品榜单-利润
  singleProProfitdata(param) {
    return req.get("/data/item/profit", param)
  },

  // 销售/利润
  saleProfitData(param) {
    return req.get("/data/sp", param)
  },

  // 我的库存
  stockData(param) {
    return req.get("/data/stock", param)
  },

  // 账目信息
  billData(param) {
    return req.get("/data/balance", param)
  },

  // 修改流水
  editStatement(param) {
    return req.get("/statement", param)
  }
}

export default address
