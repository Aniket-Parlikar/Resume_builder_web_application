import { Button } from "@material-ui/core";
import React,{Component} from "react";

class Personal extends Component{

    nextStep = e=>{
        e.preventDefault();
        this.props.nextStep();
        this.props.visited();
    }

    

    render(){

        const {values, handleChange} = this.props

        return(
            <>
            <span class="tab"><h1 class="bottom-top"> Fill in your personal details</h1></span>
            {/* <br></br> */}
                <form id="Personal_details">
                    <span class="tab"></span>

                    <div class="input-wrapper">
                    <label> First Name </label>

                    <input type="text" name="firstname" onChange={handleChange}
                    defaultValue={values.visited_page>1 ? values.firstname : ""}>
                    </input>

                    <span class="tab"></span>
                    <label> Second Name </label>
                    <input type="text" name="lastname" onChange={handleChange}
                    defaultValue={values.visited_page>1 ? values.lastname : ""}></input>

                    <span class="tab"></span>
                    <label htmlFor="city"> City </label>
                    <input type="text" name="city" id="city" onChange={handleChange} 
                    defaultValue={values.visited_page>1 ? values.city : ""}>

                    </input>
                    </div>
                    {/* <pre>
                    <span class="bottom-three"></span>
                    <label htmlFor="address"> Address </label>
                    <input type="text" name="address" id="address" onChange={handleChange}></input>
                    </pre> */}

                    {/* <pre class="bottom-one">
                        <span ></span>
                        <label htmlFor="state1"> State </label>
                        <input type="text" name="state1" id="state1" onChange={handleChange}
                        defaultValue={values.visited_page>1 ? values.state1 : ""}></input>

                        <span class="top-three"></span>
                        <label htmlFor="country"> Country </label>
                        <input type="text" name="country" id="country" onChange={handleChange}
                        defaultValue={values.visited_page>1 ? values.country : ""}></input>

                        <span class="top-three"></span>
                        <label htmlFor="email"> Email </label>
                        <input type="text" name="email" id="email" onChange={handleChange}
                        defaultValue={values.visited_page>1 ? values.email : ""}></input>

                        <span class="top-three"></span>
                        <label htmlFor="phone"> Phone </label>
                        <input type="phone" name="phone" id="phone" onChange={handleChange}
                        defaultValue={values.visited_page>1 ? values.phone : ""}></input>

                    </pre> */}

                    <pre class="bottom-two">
                        <div>
                            {/* <input type="button" value="Next" onClick={this.nextStep} /> */}
                            <Button variant="contained" onClick={this.nextStep}>Next</Button>
                        </div>
                    </pre>
                    
                </form>
            </>
                )
            }
        }


export default Personal;