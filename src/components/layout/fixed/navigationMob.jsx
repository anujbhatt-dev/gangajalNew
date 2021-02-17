import React, {Component} from "react"
import {NavLink} from "react-router-dom"


  class NavMob extends Component{

     state={
       open:false
     }

     toggleHandler=()=>{
       this.setState({
         open:!this.state.open
       })
     }

    render(){

      return (
          <div className="navMob">

                <div className="navMob__toggler">
                   {this.state.open?<i onClick={this.toggleHandler} class="fa fa-times" aria-hidden="true"></i>:<i onClick={this.toggleHandler} class="fa fa-bars" aria-hidden="true"></i>}
                </div>

                <div className={this.state.open?"openNav navMob__items ":"closeNav navMob__items "}>
                    <NavLink onClick={this.toggleHandler} exact activeStyle={{color:"#fff",background:"#333"}} to="/" id="home" className="nav__item nav__home">
                        Home
                     </NavLink>
                     <NavLink onClick={this.toggleHandler} exact activeStyle={{color:"#0e9bd7"}} to="/contactUs"  id="contact" className="nav__item">
                         Reach us
                      </NavLink>
                      <NavLink onClick={this.toggleHandler} exact activeStyle={{color:"#0e9bd7"}} to="/about"  id="about" className="nav__item ">
                          about
                       </NavLink>
                </div>
          </div>
      )
    }
  }


 export default NavMob;
