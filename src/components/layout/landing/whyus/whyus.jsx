import React, { Component } from "react"
import water from "../../../../assets/images/water.svg"
import certified from "../../../../assets/images/certified.svg"
import nature from "../../../../assets/images/nature.svg"
import guarantee from "../../../../assets/images/guarantee.svg"
import first from "../../../../assets/images/first.svg"

class Whyus extends Component {

  state = {
    cos: [
      {
        id: 0,
        title: "Proud To Be First",
        content: "We are first and only cretified company to trade gangajal. We are first certified company in gangaotri valley to consume gangajal."
      }, {
        id: 1,
        title: "Trust Is Important",
        content:`We are certified company from all the big and important names.
        FSSAI, ISO, BIS and Uttarakhand Goverment have approved our work and product.`,
      }, {
        id: 2,
        title: "Genuine and Pure",
        content: `We are authorized to consume Gangajal directly from the Ganga river.
        Our factory posses capabilities of providing untouched and pure Gangajal.`,
      }, {
        id: 3,
        title: "Fit For Driking",
        content: `FSSAI have confirmed our Gangajal to be fit for drinking.
        We use UV lazers to kill harmfull bacterias and viruses without adding or removing any content from or to Gangajal.`,
      },
      {
        id: 4,
        title: "Staright From Himalayas",
        content:`We are closest Certified comapny from gangotri which is authorized to produce gangajal as drinking water.
        Our Machines are eshtablished in himalyas far from any mass gathering regions.`,
      }],
    selectedId: 1,
    // cosContent:"Being an exim manager one manages export/import process, foreseeing movement of goods and being in touch with freight forwarder, logistics, retailers and manufaturer. Exim manager also handles documents, primary responsibilities and many more."
  }


  timeInterval = null;


  componentDidMount = () => {
    this.autoChange();
  }


  coureseToSuccess = (id) => {


    clearInterval(this.timeInterval);

    this.setState({
      selectedId: id
    })


  }

  autoChange = () => {

    this.timeInterval = setInterval(() => {
      this.setState(s => {
        if (s.selectedId === 4)
          return { selectedId: 0 };
       else
        return { selectedId: s.selectedId + 1 };

      })

    }, 2000);



  }

  render() {

    return (
      <>
        <h1 className="heading-primary landing__3_heading">Why us</h1>
        <div className="landing__8">
          <div className="landing__8_bar">
            <div onClick={() => this.coureseToSuccess(0)} className={(this.state.selectedId === 0) ? "selectedIcon landing__8_bar-box" : "landing__8_bar-box"}>
              <img src={first} alt="" />
              <div>Exim<br />management</div>
            </div>
            <div onClick={() => this.coureseToSuccess(1)} className={(this.state.selectedId === 1) ? "selectedIcon landing__8_bar-box" : "landing__8_bar-box"}>
              <img src={certified} alt="" />
              <div>Freight Forwarder</div>
            </div>
            <div onClick={() => this.coureseToSuccess(2)} className={(this.state.selectedId === 2) ? "selectedIcon landing__8_bar-box" : "landing__8_bar-box"}>
              <img src={guarantee} alt="" />
              <div>Merchant<br />export/importer</div>
            </div>
            <div onClick={() => this.coureseToSuccess(3)} className={(this.state.selectedId === 3) ? "selectedIcon landing__8_bar-box" : "landing__8_bar-box"}>
              <img src={water} alt="" />
              <div>Logistic manager</div>
            </div>
            <div onClick={() => this.coureseToSuccess(4)} className={(this.state.selectedId === 4) ? "selectedIcon landing__8_bar-box" : "landing__8_bar-box"}>
              <img src={nature} alt="" />
              <div>in CHA</div>
            </div>
          </div>
          <div className="landing__8_box">
            <div className="landing__8_box-images">
              <img className="BUBBLE" src={this.state.selectedId === 0 ? first : this.state.selectedId === 1 ? certified : this.state.selectedId === 2 ? guarantee : this.state.selectedId === 3 ? water : nature} alt="" />
            </div>
            <div className={(this.state.selectedId===0)?"landing__8_box-text change1":(this.state.selectedId===1)?"landing__8_box-text change2":(this.state.selectedId===2)?"landing__8_box-text change3":(this.state.selectedId===3)?"landing__8_box-text change4":"landing__8_box-text change5"}>
              <div className="landing__8_box-text--big">{this.state.cos[this.state.selectedId].title}</div>
              <div className="landing__8_box-text--small">{this.state.cos[this.state.selectedId].content}</div>
            </div>
          </div>
        </div></>
    )
  }
}


export default Whyus;
