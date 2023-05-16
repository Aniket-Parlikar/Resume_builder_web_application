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
                    <label> First Name </label>
                    <input type="text" name="firstname" onChange={handleChange}
                    defaultValue={values.visited_page>1 ? values.firstname : ""}>
                    </input>

                    <span class="tab"></span>
                    <label> Second Name </label>
                    <input type="text" name="lastname" onChange={handleChange}
                    defaultValue={values.visited_page>1 ? values.lastname : ""}></input>

                    {/* <pre>
                    <span class="bottom-three"></span>
                    <label htmlFor="address"> Address </label>
                    <input type="text" name="address" id="address" onChange={handleChange}></input>
                    </pre>

                    <span class="tab"></span>
                    <label htmlFor="City"> City </label>
                    <input type="text" name="City" id="City" onChange={handleChange}></input>

                    <pre class="bottom-one">
                        <span ></span>
                        <label htmlFor="State"> State </label>
                        <input type="text" name="State" id="State" onChange={handleChange}></input>

                        <span class="top-three"></span>
                        <label htmlFor="Country"> Country </label>
                        <input type="text" name="Country" id="Country" onChange={handleChange}></input>

                        <span class="top-three"></span>
                        <label htmlFor="email"> Email </label>
                        <input type="text" name="email" id="email" onChange={handleChange}></input>

                        <span class="top-three"></span>
                        <label htmlFor="phone"> Phone </label>
                        <input type="phone" name="phone" id="phone" onChange={handleChange}></input>

                    </pre> */}

                    <pre class="bottom-two">
                        <div>
                            {/* <input type="button" value="Previous" onClick={this.prevStep} />
                            <span class="left-three"></span> */}
                            <input type="button" value="Next" onClick={this.nextStep} />
                        </div>
                    </pre>
                    
                </form>
            </>
                )
            }
        }


export default Personal;