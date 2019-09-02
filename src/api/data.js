import req from "@/libs/http"

const data = {
  // 订单各状态数量统计
  queryOrderByStatus(param) {
    return req.get("/data/order/num", param)
  },

  //单品榜单-销售额/利润 
  singleProdata(param) {
    return req.get("/data/item", param)
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

export default data
