//封装接口请求函数

import ajax from "./ajax"
//1.获取位置信息
export const getLocation = (geohash)=> ajax("/api/position/"+geohash) //参数类型为params

//2.获取食品分类列表
export const getFoodTypes = ()=>ajax("/api/index_category")

//3.根据经纬度获取商铺列表
export const getShops = (latitude,longitude)=>ajax("/api/shops",{latitude,longitude})  //参数类型为query

//4.用户名密码登陆
export const pwdLogin = (name,pwd,captcha)=>ajax("/api/login_pwd",{name,pwd,captcha},"POST")

//5.发送短信验证码
export const sendCode = (phone)=>ajax("/api/sendcode",{phone})

//6.手机号验证码登陆
export const codeLogin = (phone,code)=>ajax("/api/login_sms",{phone,code},"POST")

//7.根据会话获取用户信息
export const getUserInfo = ()=>ajax("/api/userinfo")

//8.用户登出
export const logout = ()=>ajax("/api/logout")

//9.根据经纬度和关键字搜索商铺列表
export const searchShops = (geohash,keyword)=>ajax("/api/search_shops",{geohash,keyword})

export const getItems = ()=>ajax("/items")

export const getInfo = ()=>ajax("/info")

export const getComments = ()=>ajax("/comments")