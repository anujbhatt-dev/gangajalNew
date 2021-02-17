import React, {Component} from "react"
import {Route,Switch,withRouter} from "react-router-dom"
import Landing from "./landing/landing"
import Footer from "./footer/footer"
import Contact from "./contact/contact"
import About from "./about/about"
import Loader from "./loader/loader"
import Wave from "./wave/wave"
import Social from "./fixed/social"
import Nav from "./fixed/navigation"
import NavMob from "./fixed/navigationMob"
import logo from "../../assets/images/logo.svg";
import $ from 'jquery'
import ripples from 'jquery.ripples';
import GoToTop from "./fixed/gototop"


class Layout extends Component{

  state={
    loaded:false,
    mobile:false
  }


  componentDidMount=()=>{
     setTimeout(()=>{
         this.setState({
           loaded:true
         })
     },4000)

     let width= Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
     if(width<=500){
       this.setState({
         mobile:true
       })
     }
  }


  render(){
    return (
      // <Footer/>
      // <Loader loaded={this.state.loaded}/>
        <div className="layout">
            <img id="logo" className="landing__s1_img" src={logo} alt="" />
            {this.state.mobile?<NavMob/>:<Nav/>}
            <Switch>
               <Route exact path="/">
                   <Landing mobile={this.state.mobile}/>
                   {!this.state.mobile?<Wave/>:null}
               </Route>
               <Route exact path="/contactUs">
                   <Contact/>
               </Route>
               <Route exact path="/about">
                   <About/>
               </Route>

            </Switch>
            <GoToTop/>
            <Footer/>
        </div>
      )
    }
  }


 export default withRouter(Layout);
