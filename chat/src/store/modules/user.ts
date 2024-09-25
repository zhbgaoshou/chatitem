import { defineStore } from 'pinia'
import { ref } from 'vue'

import { RegisterApi,LoginApi } from '@/api/user'
import { getStorage, setStorage, removeStorage } from '@/utils/storage'

// 类型
import type { IUserFormData } from '@/types/user'

export const useUserStore = defineStore('user', () => {
    const userFormData = ref<IUserFormData>({
        username: '',
        password: '',
        email: ''
    })

    const token = ref(getStorage('token') || '')

    const resetFormData = () => {
        userFormData.value = {
            username: '',
            password: '',
            email: ''
        }
    }

    const register = async () => {
        try {
          return  await RegisterApi(userFormData.value)
        } catch (error: any) {
          return  Promise.reject(formatError(error.response.data))
        }
    }

    const login = async () => {
        try {
            const res = await LoginApi(userFormData.value)
            token.value = res.access
            setStorage('token', res.access)
            setStorage('refreshToken', res.refresh)
        } catch (error: any) {
            return Promise.reject('登录失败,请检查账号密码是否正确')
        }
    }

    const logout = () => {
        token.value = ''
        removeStorage('token')
        removeStorage('refreshToken')
    }

    return {
        userFormData,
        register,
        resetFormData,
        login,
        token,
        logout
    }
})

function formatError(error: any) {
    const errorArray = Object.entries(error)
    const errorText = errorArray[0][1] as string[]
    return errorText[0]
}