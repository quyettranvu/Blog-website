import React,{Component} from 'react';
import {variables} from'./Variables';
import './home.css'
import './blog.css'

//eslint-disable-next-line
import { useState } from 'react';

export class Blog extends Component {
       // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            blogs: [],
            DataisLoaded: false,

            BlogIdFilter:"",
            BlogNameFilter:"",
            blogsWithoutFilter:[]
        };
    }

    FilterFn(){
        var BlogIdFilter=this.state.BlogIdFilter;
        var BlogNameFilter=this.state.BlogNameFilter;

        var filteredData=this.state.blogsWithoutFilter.filter(
            function(el){
                return el.BlogId.toString().toLowerCase().includes(
                    BlogIdFilter.toString().trim().toLowerCase()
                )&&
                el.BlogName.toString().toLowerCase().includes(
                    BlogNameFilter.toString().trim().toLowerCase()
                )
            }
        );

        this.setState({blogs:filteredData});
    }

    changeBlogIdFilter=(e)=>{
        // eslint-disable-next-line
        this.state.BlogIdFilter=e.target.value;
        this.FilterFn();
    }

    changeBlogNameFilter=(e)=>{
        // eslint-disable-next-line
        this.state.BlogNameFilter=e.target.value;
        this.FilterFn();
    }

 
    componentDidMount() {
        //Có thể đưa link dẫn trực tiếp hoặc gọi thông qua biến API_URL
        //fetch("http://127.0.0.1:8000/aboutme")
        fetch(variables.API_URL+'blog')
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    blogs: json,
                    DataisLoaded: true,

                    blogsWithoutFilter:json
                });
            })
    }

    onchange=e=>{
        this.setState({search:e.target.value});
    }


    render(){
        const {
            blogs,
        }=this.state;

        const mystyle = {
            backgroundImage:`url("186f5d995fbbda00d88d5dcf0846c467.jpg")`
        };



        return(
            <div>
                <nav className="navbar navbar-expand-sm bg-light navbar-dark">
                    <div className="SearchBar">
                        <form className="d-flex">
                            <input 
                                className="form-control me-2" 
                                type="text" 
                                placeholder="Search by Name" 
                                aria-label="Search"
                                onChange={this.changeBlogNameFilter}
                            />
                             <input 
                                className="form-control me-2" 
                                type="text" 
                                placeholder="Search by Id" 
                                aria-label="Search"
                                onChange={this.changeBlogIdFilter}
                            />
                            <i className="fas fa-search searchIcon "></i>
                        </form>
                    </div>
                </nav>
                <h3 style={mystyle}>This is Blog Page</h3>
                <div className="BgBehind">
                    {blogs.map(blog=>(
                        <div>
                            <img
                                className="BlogImage"
                                src={blog.BlogPhoto}
                                alt=""
                            />
                            <div>
                            {(() => {
                                //eslint-disable-next-line
                                     if (blog.BlogId=='1') {
                                     return (
                                        <p id="Music" className="BlogContent">
                                           {blog.BlogContent}One of my fondest memories is that I had a crush on a girl back then and had a classmate who also liked her. Both he and I play the guitar playing sad songs, but she chose him over me, maybe music to me brings back sad memories of her...
                                        </p> 
                                    )
                                    } 
                                //eslint-disable-next-line
                                    else if (blog.BlogId=='2'){
                                        return(
                                        <p id="Sport" className="BlogContent">
                                            {blog.BlogContent}I have a special love for the sea and the gifts from the sea. I remember my father used to bring back souvenirs every time I went to the island, or snacks at the sea every time I finished studying, I would go to the bathroom with my friends to enjoy,... Everything seemed to blend into 1. the passionate, salty taste of Nha Trang.
                                        </p>)
                                    }
                                //eslint-disable-next-line
                                    else if (blog.BlogId=='3'){
                                        return(
                                        <p id="Style" className="BlogContent">
                                           {blog.BlogContent}Normally on weekends, my mother often buys me clothes that are not too luxurious, but they suit me very well (^^). Especially on traditional holidays, my mother often buys me beautiful clothes to go out. Looking back, I feel like my mom has a really endearing style!
                                        </p>)
                                    }
                                //eslint-disable-next-line
                                    else if (blog.BlogId=='5'){
                                        return(
                                        <p id="Technical" className="BlogContent">
                                            {blog.BlogContent}For me, learning about Information Technology and Computer has really made me understand a lot, I can immerse myself in hours of computer learning without getting bored. The computer is like a real friend to me, I feel appreciated and told myself to try harder in the learning process.
                                        </p>)
                                    }
                                //eslint-disable-next-line
                                    else if (blog.BlogId=='6'){
                                        return(
                                        <p id="Cinema" className="BlogContent">
                                            {blog.BlogContent}For me, going to the cinema to watch blockbuster movies doesn't excite me too much. But the reality TV shows that are funny make me really passionate. I also often spend hours watching such series and as a stress reliever after each tiring day of the day.
                                        </p>)
                                    }
                                //eslint-disable-next-line
                                    else {
                                    return (
                                        <p id="Life" className="BlogContent">
                                            {blog.BlogContent}Yes and yes I loved her for so long in the first wet rain. I met her standing alone on the porch and I gently gave her my umbrella, her smile probably makes my heart sob on rainy days... Time goes by, the rain still falls There's no more you beside me, I wonder who I'll give the umbrella to...
                                        </p> 
                                         )
                                    }
                                    })()}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            
        )
    }
}