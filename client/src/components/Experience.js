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

    render(){

        const {values, handleChange} = this.props

        return(
            <>
        
        <span class="tab"><h1 class="bottom-top"> Enter your Work History</h1></span>
        <br></br>
        <br></br>

        
        <form id='experience'>
        
        <pre>
        <label>Employer Name</label>
        <input type="text" name="employer" onChange={handleChange} defaultValue={values.visited_page>3 ? values.employer : ""}>
        </input>
        </pre>

        <pre class>
        <label>Job title</label>
        <input type="text" name="jobname" onChange={handleChange} defaultValue={values.visited_page>3 ? values.job : ""}></input>
        </pre>

        <pre class></pre>
        <label>Duties</label>
        <input type="textarea" name="duties" id="duties" onChange={handleChange} defaultValue={values.visited_page>3 ? values.duties : ""}
        rows="20" cols="40"></input>
        {/* <textarea name="textarea" rows="5" cols="40">Write something here</textarea> */}

        <pre class="bottom-two">
                        <div>
                            <input type="button" value="Previous" onClick={this.prevStep} />
                            <span class="left-three"></span>
                            <input type="button" value="Next" onClick={this.nextStep} />
                        </div>
        </pre>
        </form>
        </>
        )
    }


}

export default Experience;