import React,{Component} from "react";

class Experience extends Component{

    nextStep = e=>{
        e.preventDefault();
        this.props.nextStep();
        this.props.visited();
    }

    prevStep = e => {
        e.preventDefault();
        this.props.prevStep()
    }


}

export default Experience;