import React,{Component} from 'react';
import Remove_if from './Remove_if'
import Header from './Header'
import Footer from './footer'
import Steps from './Steps/RemoveIfSteps'
import CodeSteps from '../src/code/Code_Remov_if'
export default class Contact extends Component{
  constructor()
{
  super()
  this.state=
  {
    disp:false,
    disp2:false
  }

}

operation()
{
  this.setState({
    disp:!this.state.disp,
  })
}

operation2()
{
  this.setState({
    disp2:!this.state.disp2
  })
} 

render() {  
  return (
    <div>
    <Header/>
   <div class="content">
    
       {this.state.disp?<Steps/>:null
       } 
      
            <Remove_if />
        
          </div>

    <div className="toggle_button">
           <button onClick={()=>this.operation()} className="steps" className="but1">Toggle Steps</button> 
    
    <button onClick={()=>this.operation2()} className="but1">Toggle Code</button>
    {this.state.disp2?<CodeSteps />:null
       } 
    </div>
    <Footer/>
    </div>
  );
  }
}

