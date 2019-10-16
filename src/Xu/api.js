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
export const getmov3 = (params) => axios({
    url: "/maoyan/cinemaDetail?cinemaId=24466",
    methods: "get",
    params
})