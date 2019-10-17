import React from "react"
import { Tabs, Badge } from 'antd-mobile';
import Nowmovies from "./M3"
import Willmovies from "./M4"
import City from "./C2"
// import Willmovies3 from "./M6"
const tabs = [
    { title: <Badge >城市</Badge> },
    { title: <Badge >正在热映</Badge> },
    { title: <Badge >即将上映</Badge> },
];


class TabExample extends React.Component {
    constructor(props){
        super(props);
      }

    render() {
        return (
            <div>
                <Tabs tabs={tabs}
                    initialPage={1}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        <City />
      </div>
                    <div style={{ display: 'flex', alignItems: 'center',  justifyContent: 'center', backgroundColor: '#fff' }}>
                    
                    <Nowmovies />


                    </div>
                    <div style={{ display: 'flex', alignItems: 'center',  justifyContent: 'center', backgroundColor: '#f5f5f5' }}>
                    <Willmovies />
      </div>
                </Tabs>

            </div>
        )
    }
}



export default TabExample