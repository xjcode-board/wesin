import req from "@/libs/http"

const wx = {
  // 获取微信code
  getWxCode(param) {
    return req.get("/wx/auth/url", param)
  }
}

export default wx
