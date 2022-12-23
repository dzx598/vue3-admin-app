import { defineStore } from "pinia"
import { Login as loginApi } from "@/api/user"
import { setToken } from "@/utils/auth"
// login params
export interface IUserInfo {
  username: string
  password: string
}
export const useUserStore = defineStore("user", () => {
  // 状态
  const state = reactive({
    token: ""
  })
  const login = async (userInfo: IUserInfo) => {
    try {
      const { username, password } = userInfo
      const response = await loginApi({ username: username.trim(), password })
      const { data } = response
      state.token = data.token
      setToken(data.token)
    } catch (e) {
      return Promise.reject(e)
    }
  }
  return { state, login }
})
