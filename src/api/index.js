//封装接口请求函数

import ajax from "./ajax"
//1.获取位置信息
export const getLocation = (geohash)=> ajax("/position/${geohash}") //参数类型为params

//2.获取食品分类列表
export const getFoodTypes = ()=>ajax("/index_category")

//3.根据经纬度获取商铺列表
export const getShops = (longitude,latitude)=>ajax("/shops",{longitude,latitude})  //参数类型为query