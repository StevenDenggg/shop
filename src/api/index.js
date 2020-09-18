//封装接口请求函数

import ajax from "./ajax"
//1.获取位置信息
export const getLocation = (geohash)=> ajax("/api/position/"+geohash) //参数类型为params

//2.获取食品分类列表
export const getFoodTypes = ()=>ajax("/api/index_category")

//3.根据经纬度获取商铺列表
export const getShops = (latitude,longitude)=>ajax("/api/shops",{latitude,longitude})  //参数类型为query

//...