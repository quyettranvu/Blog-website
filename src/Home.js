import React,{Component} from 'react';
import Footer from './Footer';
import './home.css'
import Posts from './Posts';
import Sidebar from './Sidebar';

export class HomePage extends Component {
    render(){
        const mystyle = {
            backgroundImage:`url("186f5d995fbbda00d88d5dcf0846c467.jpg")`
          };
        return(
            <div>
                <h3 style={mystyle}>Home Page</h3>
                {/* <img
                    className="HomeImg"
                    src="186f5d995fbbda00d88d5dcf0846c467.jpg"
                    alt=""
                /> */}
                <div  className="BgBehind">
                    <Posts/>
                    <Sidebar/>
                    <Footer/>
                </div>
            </div>
        )
    }
}