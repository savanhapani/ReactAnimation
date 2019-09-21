import React,{Component} from 'react';
import Header from '../Header'
import Footer from '../footer'
import Steps from '../Steps/MakeHeapSteps'
import CodeSteps from '../code/Code_heap'
import '../AboutStyle.css';
import Ani from '../Heap_ani';

export default class About extends Component{
  
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
      
            <Ani />
        
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
