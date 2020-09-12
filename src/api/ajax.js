//封装Ajax请求函数

import axios from axios
export default function ajax(url, data={}, type='GET') {
    return new Promise(function (resolve, reject) { //目的是让调用后返回的Promise对象的resolve为response.data
        var p
        if (type == 'GET') {
            var dataStr = ""
            for (key in data) {
                dataStr = dataStr + key + "=" + data[key] + "&"
            }
            if (dataStr !== "") {
                url = url + "?" + dataStr.slice(0, -1)
            }
            p = axios.get(url)

        } else {
            p = axios.post(url, data)
        }
        p.then(function(response){
            resolve(response.data)
        }).catch(function(error){
            reject(error)
        })
    })
}