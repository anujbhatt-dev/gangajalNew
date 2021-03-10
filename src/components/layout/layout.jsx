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
import Benefits from "./landing/benefits/benefits"
import Whyus from "./landing/whyus/whyus"

class Layout extends Component{

  state={
    loaded:false,
    mobile:false,
    language:1  //1:english, -1:hindi
  }

//push push  push

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


  switchLanguage=()=>{

   this.setState((s)=>{return {language:-1*s.language}});

  }


  render(){
    return (
      // <Footer/>
        <div className="layout">
            <Loader loaded={this.state.loaded}/>

            <div id="logo" className="landing__s1_img"><img className="landing__s1_i" src={logo} alt=""/> <div className="landing__s1_1">Ayush Gangajal</div> <div className="landing__s1_2"></div> </div>
            <button onClick={this.switchLanguage} className="landing__s1_img">TOGGLER</button>
            {this.state.mobile?<NavMob/>:<Nav/>}
            
            <Switch>
            <Route exact path="/">
            
                   <Landing mobile={this.state.mobile} language={this.state.language}/>
                   
                   {!this.state.mobile?<Wave/>:null}
               </Route>
               <Route exact path="/reachus">
                   <Contact language={this.state.language}/>
               </Route>
               <Route exact path="/about">
                   <About language={this.state.language}/>
               </Route>
               <Route exact path="/benefits">
                   <Benefits language={this.state.language}/>
               </Route>
               <Route exact path="/whyus">
                   <Whyus language={this.state.language}/>
               </Route>


            </Switch>
            <GoToTop/>
            <Footer/>
        </div>
      )
    }
  }


 export default withRouter(Layout);
