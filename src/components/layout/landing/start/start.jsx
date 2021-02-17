import React, { Component } from 'react'

export default class Start extends Component {



    state={
        heading:"",
    }


    componentDidMount=()=>{
this.repeat();

    }

    repeat =()=>{
        setTimeout(()=>{this.setState((prevState)=>{return{heading:'LIFE'}});
        setTimeout(()=>{this.setState((prevState)=>{return{heading:'RELIGION'}});
        setTimeout(()=>{this.setState((prevState)=>{return{heading:'PURE'}});
        setTimeout(()=>{this.setState((prevState)=>{return{heading:'TRUTH'}});
        setTimeout(()=>{this.setState((prevState)=>{return{heading:'माँ'}});
        setTimeout(()=>{this.setState((prevState)=>{return{heading:'THOUNSAND YEARS OLD'}});
        setTimeout(()=>{this.repeat();
},1000);
},1000);
},1000);
},1000);
},1000);
},1000);
},1000);
}

    render() {
        return (
            <div>
                 <h1 id="0" className="page__head">Ganga is {this.state.heading}</h1>
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
  