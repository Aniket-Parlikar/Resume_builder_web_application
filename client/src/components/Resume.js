import React,{Component} from "react";
import {Button} from '@material-ui/core';
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills"

class Resume extends Component{

//   const [step, setStep] = useState(0);

//   const [data, setData] = useState({step:1,
//                               firstname:'',
//                               lastname:'',
//                               email:'',
//                               phone:'',
//                               university:'',
//                               degree:'',
//                               program:''});

  state={step:1,
        visited_page:1,
        firstname:'',
        lastname:'',
        email:'',
        phone:'',
        city:'',
        country:'',
        university:'',
        degree:'',
        program:'',
        job:'',
        employer:'',
        duties:''}


  render(){


    const {step}=this.state

    switch(step){
      case 1:
        return(
        <div className="personal_details">
            <Personal 
                values={this.state} 
                handleChange={this.handleChange}
                nextStep={this.nextStep}
                visited={this.visited}
            />
          </div>
        // <h1>This is the First Page!!.</h1>
        )
      case 2:
         return(
            <Education
            values={this.state} 
            handleChange={this.handleChange}
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            />
         )
      case 3:
        return(
            <Experience
            values={this.state} 
            handleChange={this.handleChange}
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            />
        )
      case 4:
        return(
          <Skills values={this.state}
          handleChange={this.handleChange}
          prevStep={this.prevStep}
          nextStep={this.nextStep}/>
        )
      // case 5:
      //   return(
      //     <Projects data={data}/>
      //   )
        default:
            return(

              <h1>This is a default page!!.</h1>
            )
        }
    }

    nextStep=()=>{
        const {step} = this.state
    
        this.setState({
          step:step+1
        })
    
       }
    
    prevStep=()=>{
        const {step} = this.state
    
        this.setState({
          step:step-1
        })
        
       }
    
    handleChange = ({target: {value, name}}) => {
        this.setState ({[name]: value});
    };

    visited=()=>{
        const {visited_page} = this.state

        this.setState({
            visited_page:visited_page+1
        })
    }


}

export default Resume;