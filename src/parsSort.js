import React,{Component} from 'react';
import { TimelineLite } from 'gsap';

 
class Animation extends Component {
  animate = () => {
    var animation = new TimelineLite()
        animation
    .to(this.box63, 1, {scale:1.2})
    .to(this.box63, 1, {scale:1.0})
    .to(this.box63, 1, {y:210})
    .to(this.box63, 1, {x:-740})

    .to(this.box98, 1, {scale:1.2})
    .to(this.box98, 1, {scale:1.0})
    .to(this.box98, 1, {y:210})
    .to(this.box98, 1, {x:-440})

    .to(this.box73, 1, {scale:1.2})
    .to(this.box73, 1, {scale:1.0})
    .to(this.box73, 1, {y:210})
    .to(this.box73, 1, {x:-140})

    
    .to(this.box57, 1, {scale:1.2})
    .to(this.box57, 1, {scale:1.0})
    .to(this.box57, 1, {x:160})
    .to(this.box57, 1, {y:210})

    
    .to(this.box30, 1, {scale:1.2})
    .to(this.box30, 1, {scale:1.0})
    .to(this.box30, 1, {x:460})
    .to(this.box30, 1, {y:210})

      
    .to(this.box11, 1, {scale:1.2})
    .to(this.box11, 1, {scale:1.0})
    .to(this.box11, 1, {x:760})
    .to(this.box11, 1, {y:210})
  }
 
  render() {
    return (
      <>

      <div style={styles.container}>
        
        <div className="con2">
        <div className="mar6" >Original Vector:</div>
        <div className="mar8" >New Vector:</div>
        <div style={styles.box11} ref={box => this.box11= box} className="box" >11</div>
        <div style={styles.box30} ref={box => this.box30= box} className="box" >30</div>
        <div style={styles.box57} ref={box => this.box57 = box} className="box" >57</div>
        <div style={styles.box73} ref={box => this.box73 = box} className="box" >73</div>
        <div style={styles.box98} ref={box => this.box98 = box} className="box" >98</div>
        <div style={styles.box63} ref={box => this.box63 = box} className="box" >63</div>
 
      
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

 
  box11: {
    marginLeft:50,
    width: 108,
    height: 108,
    backgroundColor: '#948E5c',
    borderRadius: 50,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
    
  },
  box57: {
    
    marginLeft:40,
    width: 108,
    height: 108,
    backgroundColor: '#948E5c',
    borderRadius: 50,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
  },
  box98: {

    marginLeft:40,
    width: 108,
    height: 108,
    backgroundColor: '#948E5c',
    borderRadius: 50,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
  },
  box63: {
    
    marginLeft:40,
    width: 108,
    height: 108,
    backgroundColor: '#948E5c',
    borderRadius: 50,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
  },
  box26: {
    
    marginLeft:40,
    width: 108,
    height: 108,
    backgroundColor: '#948E5c',
    borderRadius: 50,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
  },
  box30: {
    
    marginLeft:40,
    width: 108,
    height: 108,
    backgroundColor: '#948E5c',
    borderRadius: 50,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
  },
  box73: {
    
    marginLeft:40,
    width: 108,
    height: 108,
    backgroundColor: '#948E5c',
    borderRadius: 50,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
  }
 
}

export default Animation;