import React,{Component} from 'react';
import './about.css';
import { variables } from './Variables';

export class About extends Component {
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            aboutmes: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        //Có thể đưa link dẫn trực tiếp hoặc gọi thông qua biến API_URL
        //fetch("http://127.0.0.1:8000/aboutme")
        fetch(variables.API_URL+'aboutme')
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    aboutmes: json,
                    DataisLoaded: true
                });
            })
    }

    render(){
        const {aboutmes} =this.state;

        const mystyle = {
            backgroundImage:`url("186f5d995fbbda00d88d5dcf0846c467.jpg")`
        };
        return(
            <div>
                <h3 style={mystyle}>Some Informations About Me</h3>
                <div  className="BgAboutMe">
                   {aboutmes.map(aboutme=>(
                       <div>
                           <img
                           className="AboutMeImage"
                           src={aboutme.MyPhoto}
                           alt=""
                           />
                           <div className="InformationAboutMe">
                                <span className="MyNameAboutMe">
                                    My Name:
                                    {aboutme.MyName}
                                </span>
                                <span className="MyBirthdayAboutMe">
                                    My Birthday:
                                    {aboutme.MyBirthday}(y-m-d)
                                </span>
                                <p className="MyInformationAboutMe">
                                    My Handwriting:
                                    {aboutme.MyInformation}
                                </p>
                           </div>
                       </div>
                   )
                   )}
                </div>
            </div>
        )
    }
}