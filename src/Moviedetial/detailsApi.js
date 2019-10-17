import React from "react"
//根据id展示详情页
import axios from 'axios'





export const getmoviedetial=()=>axios({
  url:"/maoyan/movie?forceUpdate=1571040520397",
  method:'post',
  // 1571037940479
})

// export const  getPosterlist=(params)=>axios({
//   url:"/api/ajax/detailmovie?movieId=1230121",
//   method:'get'
// })

export function  getPosterlist(params) {
  // console.log(params)
   return axios({
    url:"/maoyan/detailmovie",
    method:'get',
    params
   })
 }
 export function getviewpep(params) {
  // console.log(params)
  return axios({
   url:"/apiasgard/asgardapi/review/realtime/data.json?movieId=",
   method:'get',
   params
  })
 }