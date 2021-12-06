import React,{Component} from 'react';
import './home.css'
import './post.css'
import {variables} from './Variables.js'
import { HashLink } from 'react-router-hash-link';

// import { tsConstructorType } from '@babel/types';

class Posts extends Component<{}, { [key: string]: any}>
{
     // Constructor 
     constructor(props) {
        super(props);
   
        this.state = {
            blogs: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        //Có thể đưa link dẫn trực tiếp hoặc gọi thông qua biến API_URL
        //fetch("http://127.0.0.1:8000/blog")
        fetch(variables.API_URL+'blog')
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    blogs: json,
                    DataisLoaded: true
                });
            })
    }

    
    render() {
        const { blogs } =this.state;
        
        return (
            <div>
                 {blogs.map(blog=> (
                    <div className="post">
                        <img
                        className="postImg"
                        src={blog.BlogPhoto}
                        alt=""
                        />
                        <div className="postInfo">
                            <div className="postCats">
                            {/*Ở đây sử dụng anonymous function và phải chú ý đặt dấu () ở cuối lệnh if-else*/}
                            {(() => {
                                //eslint-disable-next-line
                                     if (blog.BlogId=='1') {
                                     return (
                                        <span className="postCat">
                                            Music
                                        </span> 
                                    )
                                    } 
                                //eslint-disable-next-line
                                    else if (blog.BlogId=='2'){
                                        return(
                                        <span className="postCat">
                                            Sport
                                        </span>)
                                    }
                                //eslint-disable-next-line
                                    else if (blog.BlogId=='3'){
                                        return(
                                        <span className="postCat">
                                            Style
                                        </span>)
                                    }
                                //eslint-disable-next-line
                                    else if (blog.BlogId=='5'){
                                        return(
                                        <span className="postCat">
                                            Technical
                                        </span>)
                                    }
                                //eslint-disable-next-line
                                    else if (blog.BlogId=='6'){
                                        return(
                                        <span className="postCat">
                                            Cinema
                                        </span>)
                                    }
                                //eslint-disable-next-line
                                    else {
                                    return (
                                        <span className="postCat">
                                            Life
                                        </span> 
                                         )
                                    }
                                    })()}
                            </div>
                            
                            <span className="postTitle">
                            {(() => {
                                //eslint-disable-next-line
                                     if (blog.BlogId=='1') {
                                     return (
                                        <HashLink to="/blogs#Music" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>
                                            {blog.BlogName}
                                        </HashLink>
                                    )
                                    } 
                                //eslint-disable-next-line
                                    else if (blog.BlogId=='2'){
                                        return(
                                        <HashLink to="/blogs#Sport" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>
                                            {blog.BlogName}
                                        </HashLink>
                                    )
                                    }
                                //eslint-disable-next-line
                                    else if (blog.BlogId=='3'){
                                        return(
                                        <HashLink to="/blogs#Style" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>
                                            {blog.BlogName}
                                        </HashLink>
                                    )
                                    }
                                //eslint-disable-next-line
                                    else if (blog.BlogId=='5'){
                                        return(
                                        <HashLink to="/blogs#Technical" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>
                                            {blog.BlogName}
                                        </HashLink>
                                    )
                                    }
                                //eslint-disable-next-line
                                    else if (blog.BlogId=='6'){
                                        return(
                                        <HashLink to="/blogs#Cinema" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>
                                            {blog.BlogName}
                                        </HashLink>
                                    )
                                    }
                                //eslint-disable-next-line
                                    else {
                                    return (
                                        <HashLink to="/blogs#Life" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>
                                            {blog.BlogName}
                                        </HashLink>
                                    )
                                    }
                                    })()}
                            </span>
                            <hr />
                        </div>
                        <p className="postDesc">
                            {blog.BlogContent}
                        </p>
                    </div>
                        )
                    )}
            </div>
        )
    }
}

export default Posts;
