//封装Ajax请求函数

import axios from "axios"
export default function ajax(url, data = {}, type = 'GET') {
    var p
    if (type == 'GET') {
        var dataStr = ""
        for (let key in data) {
            dataStr = dataStr + key + "=" + data[key] + "&"
        }
        if (dataStr !== "") {
            url = url + "?" + dataStr.slice(0, -1)
        }
        p = axios.get(url) //axios.get/post()的返回值是一个Promise对象

    } else {
        p = axios.post(url, data)
    }
    return p

}