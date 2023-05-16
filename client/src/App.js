import React,{Component} from "react";
import Resume from "./components/Resume"

class App extends Component{

  render() {
    return (
      <div>
        <div>
          <h1><b>Let's generate your Resume!</b></h1>
          <p>Please provide accurate and clear description wherever necessary.</p>
          <hr />
        </div>  
        <Resume/>
      </div>  
    );
  }


}

export default App;