//直接更新state的多个方法对象
export default{
    ["address"](state,{address}){
        state.address = address
    },
    ["foodTypes"](state,{foodTypes}){
        state.foodTypes = foodTypes
    },
    ["shops"](state,{shops}){
        state.shops = shops
    }
}