import React,{Component} from "react";


class Skills extends Component{
    nextStep = e=>{
        e.preventDefault();
        this.props.nextStep();
        this.props.visited();
    }

    prevStep = e => {
        e.preventDefault();
        this.props.prevStep()
    }

    render()
    {
        const {values, handleChange} = this.props

        return(
            <>
            <span class="tab"><h1 class="bottom-top"> Enter your Skills and Achievements</h1></span>
            <form id="skills">
            <pre>

                <label class="bottom-one">Skills</label>
                <input 
                type="text" name="Skills" onChange={handleChange} defaultValue={values.visited_page>4 ? values.skills : ""}>
                </input>
                
                <br></br>

                <label class="bottom-one">Achievements</label>
                <input 
                type="text" name="Skills" onChange={handleChange} defaultValue={values.visited_page>4 ? values.employer : ""}>
                </input>


            </pre>

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

export default Skills;