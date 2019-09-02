import req from "@/libs/http"

const order = {
  // 物流信息
  queryLogistics(param) {
    return req.get("/order/express", param)
  },

  // 查询我的订单
  queryOrder(param) {
    return req.get("/order", param)
  },

  // 修改订单详情
  updateOrderDetail(param) {
    return req.get("/order/detail", param)
  },

  // 更新订单信息
  updateOrder(param) {
    return req.get("/order", param)
  },

  // 确认订单信息
  confirmOrder(param) {
    return req.get("/order/confirm", param)
  },

  // 订单发货
  sendOrder(param) {
    return req.get("/order/send", param)
  },

  // 确认收货
  recieveOrder(param) {
    return req.get("/order/recicve", param)
  },

  // 退货单
  returnOrder(param) {
    return req.post("/order/return", param)
  },

  // 同意退货
  confirmReturnOrder(param) {
    return req.post("/order/confirm/return", param)
  },

  // 取消订单
  deleteOrder(param) {
    return req.post("/order/close", param)
  },

  // 查询买家订单列表
  queryBuyerOrder(param) {
    return req.get("/order/buyer", param)
  },

  // 查询买家订单详情列表
  queryBuyerOrderDetail(param) {
    return req.get("/order/buyer/detail", param)
  },

  // 查询卖家订单列表
  querySellerOrder(param) {
    return req.get("/order/seller", param)
  },
  // 查询卖家订单详情列表
  querySellerOrderDetail(param) {
    return req.get("/order/seller/detail", param)
  },
  // 订单计算
  calcOrder(param) {
    return req.get("/order/calc", param)
  }

}

export default order
