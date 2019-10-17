import React from 'react';
import store from "../xiao/store"
// import { BrowserRouter as Router,Route} from 'react-router-dom';
import { getmovies } from "./api"
import {getPosterlist} from "../Moviedetial/detailsApi"
import Moviedetial from "../Moviedetial/moviedetial"
import { withRouter} from "react-router-dom"
@withRouter
class Nowmovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[],
      isLoaded:false
    }
  }
  
  componentDidMount() {
    
    getmovies()
    
      .then(res => {
   
        console.log(res.data.movieList)
        for(let i = 0;i<=res.data.movieList.length-1;i++)
        {
          // console.log(res.data.movieList[i].img)
          res.data.movieList[i].img = res.data.movieList[i].img.replace(/w.h/, "148.208")
        }
        this.setState({
          users:res.data.movieList,
          
          isLoaded:true
        });

      }
      
      )
      
      
  }
  
  handleclick(Id){
  
    
   
   store.id = Id
    localStorage.id = Id
    
    this.props.history.push("/moviedetial")
    
  }
  
  render() {
    // console.log(this.state.users);
    const arr1=this.state.users
    // console.log(arr1);
    
    return (
      // <Router>

      <div  >
          {arr1.map((item, index) => (<div key={index} className="M3-div1" >
          <img src={item.img} alt="" className="imgaa"/>
          <div  onClick={this.handleclick.bind(this,item.id)} className="M3-div2">
          {/* <Route path="/moviedetial" component={Moviedetial}/> */}
          <h3 className="M3-div2-h3">{item.nm}&nbsp;&nbsp;&nbsp;<span className="M3-div2-span" >{item.version}</span></h3>
          <p>&nbsp;&nbsp;&nbsp;观众评分：<span className="M3-div2-span2" >{item.sc}</span></p>
          <p>&nbsp;&nbsp;&nbsp;主演：{item.star}</p>
          <p>&nbsp;&nbsp;&nbsp;{item.showInfo}</p>
          
          </div>
          <button className="M3-btn">&nbsp;购 票&nbsp;</button>
          {/* <Route path="/moviedetial" component={Moviedetial} /> */}
          </div>))}
          
      </div>
      /* </Router> */

  )
    
  }
}
export default Nowmovies