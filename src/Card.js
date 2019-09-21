import * as React from 'react';
import { CardBox, CardCont } from './CardStyle';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import About from './Contact1'



class Card extends React.Component{
    constructor(){
        super();
        this.state = {
            algo: ["QUERIES" , "PERUTATIONS" , "MODIFIERS" , "ALGOS ON SETS" , "MOVERS" , "RAW MEMORYS" , "VALUE MODIFIERS" , "STRUCTURE CHANGERS" ,"Union" , "STRUCTURE CHANGERS"],
            
            setpages:['/QUERIES','/contact','/Parse','/SETS','/Heap','/Psort','/Intersection','/Sem_diff','/Union','/Rev_parse'],
            cardDisplay:[{Name:"STL SIMPLE SORTING",link:'/QUERIES'} ,
             {Name:"STL REMOVE IF",link:'/contact'} , {Name:"STL PARTIAL SORT",link:'/Parse'}, {Name:"STL SET DIFFERENCE",link:'/SETS'}, {Name:"STL MAKE HEAP",link:'/Heap'}, {Name:"STL REVERSE",link:'/Psort'}, {Name:"STL SET INTERSECTION",link:'/Intersection'}, {Name:"STL SYMMETRIC DIFFERENCE",link:'/Sem_diff'},{Name:"STL SET UNION",link:'/Union'}, {Name:"STL REVERSE PARTIAL",link:'/Rev_parse'}]   
        }
    }
    render() {
         return(
             <div className="card-div">
                 {
            this.state.cardDisplay.map((data,key) =>{
            return(
              <CardBox key={key}>
                 <Link to={data.link}> <div className='front'>
                      {data.Name}
                  </div>
                  
                  <div className='back' style={{fontSize:"2.0rem",color:"rgb(73,43,31)",fontWeight:"900", fontFamily:"Comic Sans MS"}}>
                  Click here to start animation</div></Link>
              </CardBox>
            
              )
      
        })
    }
    </div>
         );
    }
}

export default Card;