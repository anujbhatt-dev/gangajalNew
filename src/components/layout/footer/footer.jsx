import React, {Component} from "react"
import {NavLink} from "react-router-dom"
import logo from "../../../assets/images/logo.svg"

  class Footer extends Component{

    render(){

      return (
         <div className="footer">
             <div className="footer__name"><img className="footer__img" src={logo} alt=""/> <div>Ayush Gangajal</div></div>
             <div className="footer__social">
                 <a href="" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                 <a href="" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                 <a href="" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
             </div>
             <div className="footer__links">
                   <NavLink to="/about" exact >about</NavLink>
                   <span>.</span>
                   <NavLink to="/reachus" exact >reach</NavLink>
                   <span>.</span>
                   <NavLink to="/benefits" exact >benefits</NavLink>
                   <span>.</span>
                   <NavLink to="/whyus" exact >whyus</NavLink>
                   <span>.</span>
                   <NavLink to="/" exact >home</NavLink>
             </div>
             <div className="footer__copy"> &copy; 2021 Ayush Gangajal</div>
         </div>
      )
    }
  }


 export default Footer;
