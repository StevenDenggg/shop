import data from "./data.json"
import Mock from "mockjs"

Mock.mock("/items",{code:0,data:data.items})
Mock.mock("/info",{code:0,data:data.info})
Mock.mock("/comments",{code:0,data:data.comments})