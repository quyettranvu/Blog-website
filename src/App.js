//import logo from './logo.svg';
import './App.css';
import './navbar.css';

//Add các components vào component mẹ
import { HomePage } from './Home';
import { Blog } from './Blogs';
import { About } from './About';

//import { useState } from 'react';

//Add vào cả module mà cần cho việc routing giữa các components
import { BrowserRouter,Switch,Route,NavLink} from 'react-router-dom';




function App() {
  
  //const [searchTerm,setSearchTerm]=useState('')

  return (
    <BrowserRouter>
      <div className="App container">
        <h3 className="d-flex justify-content-center m-3">
          WELCOME TO MY BLOG WEBSITE
        </h3>

        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/blogs">
                Blog
              </NavLink>
            </li>
            <li className="nav-item m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/about">
                About
              </NavLink>
            </li>
          </ul>
         


          {/*Tại đây mình đặt hình đại diện vào*/}
          <div>
            <img
              className="topImg"
              src="1553835047_nha-trang-diem-den.jpg"
              alt=""
            />
          </div>
        </nav>

        <Switch>
            <Route path='/home' component={HomePage}/>
            <Route path='/blogs' component={Blog}/>
            <Route path='/about' component={About}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
