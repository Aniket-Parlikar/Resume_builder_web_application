import React,{Component} from "react";

class Education extends Component{

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
        <span class="tab"><h1 class="bottom-top"> Enter your Education details</h1></span>
        <form id="Education_details">
            <span class="tab"></span>

            <label htmlFor="degree"> Enter your level of education </label>
            <select id="degree" name="degreelist" form="Education_details">
                <input type="select" name="degree" id="degree" onChange={handleChange} defaultValue={values.visited_page>2 ? "" : values.degree}></input>
                <option value="College Degree">College</option>
                <option value="Bachelor's">Bachelor's</option>
                <option value="Master's">Master's</option>
            </select>

            <pre id="program_select">
            <label htmlFor="program"> Enter your program of study </label>
            <select id="program" name="programlist" form="Education_details">
                <input type="select" name="program" id="program" onChange={handleChange} defaultValue={values.visited_page>2 ? "" : values.program}></input>
                <option value="Finance">Finance</option>
                <option value="Arts">Arts</option>
                <option value="Engineering">Engineering</option>
            </select>
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

export default Education;