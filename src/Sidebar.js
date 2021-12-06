import React from 'react'
import { NavLink } from 'react-router-dom'
import './home.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span classBame="sidebarTitle">ABOUT ME</span>
                <img
                    className="sidebarImage"
                    src="my_photo_1.jpg"
                    alt=""
                />
                <p>
                   Welcome to My Blog.Please enjoy visiting my page     
                </p>
                <NavLink className="btn btn-light btn-outline-primary" to='/about'>
                    Details
                </NavLink>

                <span className="sidebarTitle_below">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListITem">
                        Life
                    </li>
                    <li className="sidebarListITem">
                        Music
                    </li>
                    <li className="sidebarListITem">
                        Sport
                    </li>
                    <li className="sidebarListITem">
                        Style
                    </li>
                    <li className="sidebarListITem">
                        Technical 
                    </li>
                    <li className="sidebarListITem">
                        Cinema
                    </li>
                </ul>

                <span className="sidebarTitle_below">FOLLOW ME</span>
                <a href="https://www.facebook.com/" alt="">
                    <i className="sidebarIcon fab fa-facebook-square">Facebook</i>
                </a>
                <a href="https://www.instagram.com/" alt="">
                    <i className="sidebarIcon fab fa-instagram-square">Instagram</i>
                </a>
                <a href="https://twitter.com/home" alt="">
                    <i className="sidebarIcon fab fa-twitter-square">Twitter</i>
                </a>
            </div>
        </div>
    )
}
