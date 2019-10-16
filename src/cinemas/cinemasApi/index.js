import axios from "axios"
export const getcinemasList = (params) => axios({
    url:"/maoyan/cinemaList",
    methods:"get",
    params
})


export const getcinemasdetail=(params)=>axios({
    url:"/maoyan/cinemasDetail",
    methods:"get",
    params
})