import axios from 'axios';
export const getmovies = (params) => axios({
    url: "/maoyan/movieOnInfoList",
    methods: "get",
    params
})
export const getmov = (params) => axios({
    url: "/maoyan/mostExpected?ci=55&limit=10&offset=0&token=",
    methods: "get",
    params
})

export const getmov2 = (params) => axios({
    url: "/maoyan/comingList?ci=55&token=&limit=10",
    methods: "get",
    params
})

// export const getmov2 = (params) => axios({
//         url:"/movies/search?kw={...}&cityId=55&stype=-1",
//         methods:"get",
//         params
//     })
// export const getmov3 = (params) => axios({
//     url: "/maoyan/cinemaDetail?cinemaId=24466",
//     methods: "get",
//     params
// })http://m.maoyan.com/ajax/cinemaAjaxDetail?cinemaId=24466
export const getmov4 = (params) => axios({
    url: "/maoyan/cinemaAjaxDetail",
    methods: "get",
    params
})




export const sou = (params)=> axios({
    url: "/maoyan/search",
    methods: "get",
    params
})

export const citya =(params)=>axios({
    url:"http://zhouxunwang.cn/data/?id=104&key=BL6U+4liSdj+h5iO8I0wR2rBPQTgsJeZ/pxz7fk&ske=1",
    methods: "get",
    params
})