import req from "@/libs/http"

const user = {
  // 用户注册 资料补全
  userRegist(param) {
    return req.post("/user/register", param)
  },
  // 用户登录
  userLogin(param) {
    return req.post("/user/login", param)
  },

  //发送验证码
  sendCode(param) {
    return req.get("/send/mobile/code", param)
  },

  // 修改用户资料
  userUpdate(param) {
    return req.post("/user", param)
  },
  // 代理升级
  levelUpdate(param) {
    return req.post("/user/up", param)
  },

  // 查询我的团队
  queryTeams(param) {
    return req.get("/user/team", param)
  },
  // 查询指定人员团队的所有顾客列表
  queryCustomer(param) {
    return req.get("/user/customer", param)
  },

  // 查询用户级别列表
  queryLevel(param) {
    return req.post("/level", param)
  }
}

export default user
