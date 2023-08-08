import "./Navbar.css"
import {FaSearch} from "react-icons/fa"
export default function Navbar(){
    return(
            <div className="navbar">
            <img className="logo" src="./images/logo.png"/>
            <h1 className="site-name">BOOK MY MOVIE</h1>
            <input className="search" type="search" placeholder="Search for movie"/>
            <FaSearch style={{margin:"15px"}}/>
            <button className="sign-in">Sign In</button>
            </div>
)

}