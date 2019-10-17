//用于将其他的store进行统一的管理
// import Cinemas from '../Cinemas'
import {observable,action} from "mobx"
// import axios from 'axios'
import { getcinemasList,getcinemasdetail } from '../cinemasApi'

class Store1{
@observable cinemas=[]
@observable cinemasDate=[]
@action getCinemasList(){  
    getcinemasList()
    .then(res=>{
            this.cinemas=res.data.cinemas
        })
    } 
    @action getCinemasDetail(){
    getcinemasdetail()
    .then(res=>{
        console.log(res)
    })
    }
    } 



export default new Store1()