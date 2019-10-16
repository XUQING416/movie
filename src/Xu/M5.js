import React from 'react';
import { getmov2 } from "./api"
class Willmovies2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoaded: false
    }
  }
  componentDidMount() {
    getmov2()
      .then(res => {
        console.log(res);
        for(let i = 0;i<=res.data.coming.length-1;i++)
        {
          console.log(res.data.coming[i].img)
          res.data.coming[i].img = res.data.coming[i].img.replace(/w.h/, "148.208")
        }
        this.setState({
          users: res.data.coming,
          isLoaded: true
        });
      }
      )
  }
  render() {
    // console.log(this.state.users);
    const arr1 = this.state.users
    // console.log(arr1);
    return (
      <div style={{  backgroundColor: '#fff' }}>
        {arr1.map((item, index) => (<div key={index} className="M5-div1">
        
        <img src={item.img} alt="" className="imgaa"/>
          <div className="M5-div2">
            
            <h3 className="M3-div2-h3">{item.nm}&nbsp;&nbsp;&nbsp;<span className="M5-div2-span1">{item.version}</span></h3>
            <p>&nbsp;&nbsp;&nbsp;<span style={{ color: "red" }}>{item.wish}</span>人想看</p>
            <p>&nbsp;&nbsp;&nbsp;主演：{item.star}</p>
            <p>&nbsp;&nbsp;&nbsp;{item.showInfo}</p>
          </div>
          <button className="M5-btn">&nbsp;预售&nbsp;</button>
        </div>))}
      </div>
    )
  }
}
export default Willmovies2