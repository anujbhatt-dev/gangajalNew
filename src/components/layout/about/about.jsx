import React, {Component} from "react"
import shiva from "../../../assets/images/shiva.jpg"

  class About extends Component{

    componentDidMount=()=>{
      window.scrollTo({
        top:0,
        behavior:"auto"
      })

      // $(window).scrollTop();
    }

    render(){

      return (
            <div className="about">
            <div className="about__heading">About Us</div>
               <div className="about__row">
                    <div className="about__row_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores hic, repudiandae ullam omnis aperiam, ipsum accusantium eaque iusto, ipsam voluptatum officiis laborum commodi perspiciatis provident est nulla, voluptates. Voluptate, atque, aut! Voluptatum illum id, ipsum officia, tempora eum saepe incidunt reprehenderit consequuntur distinctio odio fugit deleniti recusandae optio quaerat eius accusamus, tenetur iure placeat. Repellendus facere numquam illum quia quasi praesentium eum adipisci dolor saepe itaque aut quis laboriosam repudiandae blanditiis corporis quo nostrum maiores earum, animi dolorum vel, soluta quisquam, explicabo unde! Omnis accusantium ut numquam! Odio minus iste quis saepe non error tempore molestiae eos officiis? Distinctio, id.</div>
                    <div className="about__3">

                          <div className="about__3_head">Created and Maintained by</div>



                          <div className="about__3_row">
                          <div className="about__3_row-box">
                             <h2 className="about__3_row-box--head"><a style={{textDecoration:"none"}} href="https://www.linkedin.com/in/anuj-bhatt-4271051a1/" target="_blank">Anuj Bhatt</a></h2>
                          </div>


                          <div className="about__3_row-box">
                             <h2 className="about__3_row-box--head"><a style={{textDecoration:"none"}} href="https://www.linkedin.com/in/sagar-panwar-20a59914b/" target="_blank">Sagar Panwar</a></h2>
                          </div>


                       </div>


                   </div>
               </div>



            </div>
      )
    }
  }


 export default About;
