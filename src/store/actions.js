//通过mutations间接更新state的多个方法对象
import {getFoodTypes,getLocation,getShops,getItems,getInfo,getComments} from "../api/index"
export default{
    getL({commit,state}){
        //发送请求，获取数据
        let geohash = state.latitude + "," + state.longitude
        getLocation(geohash).then(function(response){
            if(response.data.code===0){
                //提交一个mutation
                let address = response.data.data
                commit("address",{address}) 
            }
        })
    },
    getF({commit}){
        getFoodTypes().then(function(response){
            if(response.data.code===0){
                let foodTypes = response.data.data
                commit("foodTypes",{foodTypes}) 
            }
        })
    },
    getS({commit,state}){
        getShops(state.latitude,state.longitude).then(function(response){
            if(response.data.code===0){
                let shops = response.data.data
                commit("shops",{shops}) 
            }
        })
    },
    getItems({commit}){
        getItems().then(function(response){
            if(response.data.code===0){
                let items = response.data.data
                commit("items",{items}) 
            }
        })
    },
    getInfo({commit}){
        getInfo().then(function(response){
            if(response.data.code===0){
                let info = response.data.data
                commit("info",{info}) 
            }
        })
    },
    getComments({commit}){
        getComments().then(function(response){
            if(response.data.code===0){
                let comments = response.data.data
                commit("comments",{comments}) 
            }
        })
    },
}