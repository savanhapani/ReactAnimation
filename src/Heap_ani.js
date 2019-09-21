import React,{Component} from 'react';
import { TimelineLite } from 'gsap';
import img1 from '../src/left-line.png'
import img2 from '../src/right-line.png'
 
class Animation extends Component {
  animate = () => {
    var animation = new TimelineLite()
    let r=0
    animation
    .to(this.box11, 0.7, {scale:1.2})
    .to(this.box11,0.7, {scale:1.0})
    .to(this.box11,0.7, {x:610,y:17})
    

    .to(this.box30,0.7, {x:-100,y:0})
    .to(this.box57,0.7, {x:-100,y:0})
    .to(this.box73,0.7, {x:-100,y:0})
    .to(this.box98,0.7, {x:-100,y:0})
    .to(this.box63,0.7, {x:-100,y:0})


    .to(this.box30,0.7, {scale:1.2})
    .to(this.box30,0.7, {scale:1.0})
    .to(this.box30,0.7, {x:390,y:140})

    .to(this.box57,0.7, {x:-200,y:0})
    .to(this.box73,0.7, {x:-200,y:0})
    .to(this.box98,0.7, {x:-200,y:0})
    .to(this.box63,0.7, {x:-200,y:0})

    .to(this.heap_line1,0.7, {x:1310,y:70})
    

     for(let p=0;p<20;p++)
    {
      animation.to(this.box30, 0.01, {x:390-p , y:140})
      .to(this.box11, 0.01, {x:610+p , y:17})
    }
    
   
    for(let p=0;p<120;p++)
    {
      animation.to(this.box30, 0.01, {x:370 , y:140-p})
      .to(this.box11, 0.01, {x:630 , y:20+p})
    }

    for(let p=0;p<155;p++)
    {
      animation.to(this.box30, 0.01, {x:375+p, y:20})
      .to(this.box11, 0.01, {x:630-p , y:140})
    } 
    animation.to(this.heap_line4, 0.7, {x:1245,y:70})
    animation.to(this.box57, 0.7, {x:585 , y:140})
  
    .to(this.box73,0.7, {x:-300,y:0})
    .to(this.box98,0.7, {x:-300,y:0})
    .to(this.box63,0.7, {x:-300,y:0})


    for(let p=0;p<145;p++)
    {
      animation.to(this.box30, 0.01, {x:530+p , y:20})
      .to(this.box57, 0.01, {x:585-p , y:140})
    }
 
    for(let p=0;p<120;p++)
    {
      animation.to(this.box30, 0.01, {x:675 , y:20+p})
      .to(this.box57, 0.01, {x:440 , y:140-p})
    }
  
    animation.to(this.heap_line2, 0.7, {x:1120,y:193})
    animation.to(this.box73, 0.7, {x:140, y:268})
  
    
    .to(this.box98,0.7, {x:-400,y:0})
    .to(this.box63,0.7, {x:-400,y:0})

 

    for(let p=0;p<20;p++)
    {
      animation.to(this.box73, 0.01, {x:140-p , y:268})
      .to(this.box11, 0.01, {x:475+p , y:140})
    }
    
    
    for(let p=0;p<125;p++)
    {
      animation.to(this.box73, 0.01, {x:120 , y:268-p})
      .to(this.box11, 0.01, {x:495 , y:140+p})
    }

    for(let p=0;p<105;p++)
    {
      animation.to(this.box73, 0.01, {x:115+p , y:143})
      .to(this.box11, 0.01, {x:495-p , y:265})
    }

 

    for(let p=0;p<125;p++)
    {
      animation.to(this.box73, 0.01, {x:220 , y:143-p})
      .to(this.box57, 0.01, {x:440 , y:20+p})
    }

    for(let p=0;p<132;p++)
    {
      animation.to(this.box73, 0.01, {x:220+p , y:18})
      .to(this.box57, 0.01, {x:440-p , y:145})
    }
 



    animation.to(this.heap_line5, 0.7, {x:1005,y:194})
    animation.to(this.box98, 0.7, {x:208,y:265})
    
  
     
    for(let p=0;p<120;p++)
    {
      animation.to(this.box98, 0.01, {x:228 , y:265-p})
      .to(this.box57, 0.01, {x:300 , y:145+p})
    }

    for(let p=0;p<100;p++)
    {
      animation.to(this.box98, 0.01, {x:228-p , y:145})
      .to(this.box57, 0.01, {x:300+p , y:265})
    }
  




    for(let p=0;p<123;p++)
    {
      animation.to(this.box98, 0.01, {x:128 , y:145-p})
      .to(this.box73, 0.01, {x:352 , y:18+p})
    }

    for(let p=0;p<135;p++)
    {
      animation.to(this.box98, 0.01, {x:128+p , y:22})
      .to(this.box73, 0.01, {x:352-p , y:143})
    }


    animation.to(this.heap_line3, 0.7, {x:1355,y:191})
    animation.to(this.box63, 0.7, {x:250, y:268})
  
    for(let p=0;p<40;p++)
    {
      animation.to(this.box63, 0.01, {x:250-p , y:268})
      .to(this.box30, 0.01, {x:675+p , y:140})
    }

    for(let p=0;p<130;p++)
    {
      animation.to(this.box63, 0.01, {x:210 , y:268-p})
      .to(this.box30, 0.01, {x:715 , y:140+p})
    }

     for(let p=0;p<110;p++)
    {
      animation.to(this.box63, 0.01, {x:210+p , y:138})
      .to(this.box30, 0.01, {x:715-p , y:270})
    } 

    

  }
 
  render() {
    return (
      <>

      <div style={styles.container}>
        
        <div className="con2">
        <div style={styles.box11} ref={box => this.box11= box} className="box" >11</div>
        <div style={styles.box30} ref={box => this.box30= box} className="box" >30</div>
        <div style={styles.box57} ref={box => this.box57 = box} className="box" >57</div>
        <div style={styles.box73} ref={box => this.box73 = box} className="box" >73</div>
        <div style={styles.box98} ref={box => this.box98 = box} className="box" >98</div>
        <div style={styles.box63} ref={box => this.box63 = box} className="box" >63</div>
       
        <div>
        <img className="heap_line1" ref={box => this.heap_line1= box} src={img1}></img>
        <img className="heap_line2" ref={box => this.heap_line2= box} src={img1}></img>
        <img className="heap_line3" ref={box => this.heap_line3= box}src={img1}></img>
        <img className="heap_line4" ref={box => this.heap_line4= box} src={img2}></img>
        <img className="heap_line5" ref={box => this.heap_line5= box} src={img2}></img>
        <img className="heap_line6" ref={box => this.heap_line6= box} src={img2}></img>
        </div>
        </div>
        
        <div>
        <button style={styles.button}  onClick={this.animate} className="sortb1">Sort</button>
        </div> 
   </div>
   
   </>
    )
  }
}

const styles = {

  button: {
    width: 200,
    height: 45,
    border: 'none',
    outline: 'none',
    borderRadius: '40px'
  },
  container: {
  
    
  },
  box11: {
  
    width: 72,
    height: 72,
    backgroundColor: '#948E5c',
    borderRadius: 50,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
    
  },
  box57: {
    marginLeft:17,
    width: 72,
    height: 72,
    backgroundColor: '#948E5c',
    borderRadius: 50,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
  },
  box98: {
    marginLeft:17,
    width: 72,
    height: 72,
    backgroundColor: '#948E5c',
    borderRadius: 50,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
  },
  box63: {
    marginLeft:17,
    width: 72,
    height: 72,
    backgroundColor: '#948E5c',
    borderRadius: 50,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
  },
  box26: {
    marginLeft:17,
    width: 72,
    height: 72,
    backgroundColor: '#945c67',
    borderRadius: 50,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
  },
  box30: {
    marginLeft:17,
    width: 72,
    height: 72,
    backgroundColor: '#948E5c',
    borderRadius: 50,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
  },
  box73: {
    marginLeft:17,
    width: 72,
    height: 72,
    backgroundColor: '#948E5c',
    borderRadius: 50,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
  }
 
}

export default Animation;