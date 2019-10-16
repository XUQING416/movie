import React from 'react';
import { getmov3 } from "./api"
class Willmovies3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoaded: false
    }
  }
  componentDidMount() {
    getmov3()
      .then(res => {
        console.log(res);
        this.setState({
          users: res.dealList.dealList,
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
        {arr1.map((item, index) => (<div key={index}>
        <img src={item.redirectUrl} />
          <div >
            
            <h3>{item.title}&nbsp;&nbsp;&nbsp;</h3>
            <p>&nbsp;&nbsp;&nbsp;<span style={{ color: "red" }}>{item.price}</span></p>
            <p>&nbsp;&nbsp;&nbsp;{item.curNumberDesc}</p>
            
          </div>
          <button >&nbsp;预售&nbsp;</button>
        </div>))}
      </div>
    )
  }
}
export default Willmovies3