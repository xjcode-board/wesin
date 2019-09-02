import req from "@/libs/http"

const report = {
  // 添加报称记录
  weightInsert(param) {
    return req.post("/user/weight", param)
  },
  // 修改报称记录
  weightUpdate(param) {
    return req.post("/user/weight", param)
  },

  //查询报称记录
  queryWeightRecord(param) {
    return req.get("/user/weight", param)
  },

  // 查询指定人员团队的报称记录
  queryTeamById(param) {
    return req.post("/user/weight", param)
  },

  // 查询异常报称记录
  queryWeightError(param) {
    return req.post("/user/weight/abnormal", param)
  }
}

export default report
