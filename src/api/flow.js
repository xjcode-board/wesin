import req from "@/libs/http"

const flow = {
  // 流水记录
  queryStatement(param) {
    return req.get("/statement", param)
  },

  // 添加流水
  addStatement(param) {
    return req.get("/statement", param)
  },

  // 修改流水
  editStatement(param) {
    return req.get("/statement", param)
  },

  // 删除流水
  deleteStatement(param) {
    return req.get("/statement", param)
  }
}

export default flow
