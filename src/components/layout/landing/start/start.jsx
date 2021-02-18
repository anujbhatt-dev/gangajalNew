import React, { Component } from 'react'

export default class Start extends Component {



    state={
        heading:"...",
        change:"change1"
    }


    componentDidMount=()=>{
this.repeat();

    }

    repeat =()=>{
        setTimeout(()=>{this.setState((prevState)=>{return{heading:'LIFE',change:"change2"}});
        setTimeout(()=>{this.setState((prevState)=>{return{heading:'RELIGION',change:"change3"}});
        setTimeout(()=>{this.setState((prevState)=>{return{heading:'PURE',change:"change4"}});
        setTimeout(()=>{this.setState((prevState)=>{return{heading:'TRUTH',change:"change5"}});
        setTimeout(()=>{this.setState((prevState)=>{return{heading:'माँ',change:"change1"}});
        setTimeout(()=>{this.setState((prevState)=>{return{heading:'THOUNSAND YEARS OLD',change:"change6"}});
        setTimeout(()=>{this.repeat();
},1500);
},1500);
},1500);
},1500);
},1500);
},1500);
},1500);
}

    render() {
        return (
            <div>
                 <h1 id="0" className="page__head" ><div className="page__head_1">Ganga is</div><div style={{animationName:this.state.change}} className="page__head_2">{this.state.heading}</div></h1>
          <p className="page__text">
          Ganga have travled all the worlds.
We all recognize Ganga's importance for both religious and scientific reasons.
Ganaga have served this earth for thousands of years.
But it have become harder to obtain a genuine and pure gangajal.

Your wait is over.
Our Certified Company Garuntee Genuine and Pure Gangajal straight from himalayas.
Now You can obtain the purity and minerals of Gangajal no matter where you are.
   </p>


            </div>
        )
    }
}
