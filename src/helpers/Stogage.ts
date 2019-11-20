import AsyncStorage from "@react-native-community/async-storage"

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "./Constant"

class Storage {
  static async getAccessToken() {
    const token = await Storage.get(ACCESS_TOKEN_KEY)
    return token || ""
  }

  static async setAccessToken(token: string) {
    await Storage.set(ACCESS_TOKEN_KEY, token)
  }

  static async removeAccessToken() {
    await Storage.remove(ACCESS_TOKEN_KEY)
  }

  static async getRefreshToken() {
    return Storage.get(REFRESH_TOKEN_KEY)
  }

  static async setRefreshToken(token: string) {
    await Storage.set(REFRESH_TOKEN_KEY, token)
  }

  static async removeRefreshToken() {
    await Storage.remove(REFRESH_TOKEN_KEY)
  }

  static async get(key: string, defaultValue: string = "") {
    try {
      const value = await AsyncStorage.getItem(key)
      return value || defaultValue
    } catch (err) {
      return defaultValue
    }
  }

  static async set(key: string, value: string) {
    try {
      return await AsyncStorage.setItem(key, value)
    } catch (err) {
      throw err
    }
  }

  static async remove(key: string) {
    return AsyncStorage.removeItem(key)
  }

  static async clearAll() {
    return new Promise((resolve, reject) => {
      AsyncStorage.clear((err) => {
        if (err) {
          reject(err)
        } else {
          resolve(true)
        }
      })
    })
  }
}

export default Storage
