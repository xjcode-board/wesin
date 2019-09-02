import req from "@/libs/http"

const product = {
  // 获取产品列表
  queryProlist(param) {
    return req.get("/item", param)
  },
  // 获取产品详情
  queryProdetail(param) {
    return req.get("/item", param)
  },

  // 批量添加/修改产品库存
  addOrUpdateStock(param) {
    return req.get("/item/stock", param)
  },

  // 查询VIP充值产品列表
  queryEchargeList(param) {
    return req.post("/item/vip", param)
  },
  // vip充值接口
  vipEcharge(param) {
    return req.post("/item/vip/pay", param)
  }
}

export default product
