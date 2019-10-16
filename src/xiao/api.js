import Axios from "axios";

export const Login = (data)=>Axios({
    url: "http://106.12.79.128:1901/users/login",
    method: "post",
    data    
})

export const Register = (data)=>Axios({
    url: "http://106.12.79.128:1901/users/register",
    method: "post",
    data    
})

export const Verify = (params)=>Axios({
    url:"http://106.12.79.128:1901/verify",
    method:"",
    params
})
Axios.interceptors.response.use(function (config) {
    if (!config.data.state && config.data.msg == "校验失败") {
        //1.退到登入界面
        //2.清空localstorage
        localStorage.removeItem("token")
        localStorage.removeItem("uId")
        localStorage.removeItem("nickname")  
        window.location.href="/login"
        alert("用户信息过期请重新登入")

        return config
    } else {
        return config
    }

})


