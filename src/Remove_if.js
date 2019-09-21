import React,{Component} from 'react';
import { TimelineLite } from 'gsap';

 
class Animation extends Component {
  animate = () => {
    var animation = new TimelineLite()
    let r=0
        animation
    .to(this.box11, 1, {scale:1.2})
    .to(this.box11, 1, {scale:1.0})
    .to(this.box30, 1, {scale:1.2})
    .to(this.box30, 1, {scale:1.0})
    .to(this.box30, 1, {y:-130})

    .to(this.box57, 1, {scale:1.2})
    .to(this.box57, 1, {scale:1.0})
    .to(this.box57, 1, {x:-145})
    .to(this.box73, 1, {scale:1.2})
    .to(this.box73, 1, {scale:1.0})
    .to(this.box73, 1, {x:-145})

    
    .to(this.box98, 1, {scale:1.2})
    .to(this.box98, 1, {scale:1.0})
    .to(this.box98, 1, {y:-130})

    .to(this.box63, 1, {scale:1.2})
    .to(this.box63, 1, {scale:1.0})
    .to(this.box63, 1, {x:-290})

    .to(this.box26, 1, {scale:1.2})
    .to(this.box26, 1, {scale:1.0})
    .to(this.box26,1, {y:-130})

    .to(this.box30, 1, {scale:1.2})
    .to(this.box30, 1, {scale:1.0})
    .to(this.box30, 1, {y:-130,x:335})
    .to(this.box98, 1, {scale:1.2})
    .to(this.box98, 1, {scale:1.0})
    .to(this.box98, 1, {y:-130,x:145})
    .to(this.box30, 1, {y:0,x:450})

    .to(this.box98, 1, {scale:1.2})
    .to(this.box98, 1, {scale:1.0})
    .to(this.box98, 1, {y:0,x:160})
    
    
    .to(this.box26, 1, {scale:1.2})
    .to(this.box26, 1, {scale:1.0})
    .to(this.box26, 1, {y:0,x:10})


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
        <div style={styles.box26} ref={box => this.box26 = box} className="box" >26</div>
       
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
    marginTop: 155,
    marginLeft:150,
    width: 108,
    height: 108,
    backgroundColor: '#948E5c',
    borderRadius: 50,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
    
  },
  box57: {
    marginTop: 155,
    marginLeft:40,
    width: 108,
    height: 108,
    backgroundColor: '#948E5c',
    borderRadius: 50,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
  },
  box98: {
    marginTop: 155,
    marginLeft:40,
    width: 108,
    height: 108,
    backgroundColor: '#945c67',
    borderRadius: 50,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
  },
  box63: {
    marginTop: 155,
    marginLeft:40,
    width: 108,
    height: 108,
    backgroundColor: '#948E5c',
    borderRadius: 50,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
  },
  box26: {
    marginTop: 155,
    marginLeft:40,
    width: 108,
    height: 108,
    backgroundColor: '#945c67',
    borderRadius: 50,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
  },
  box30: {
    marginTop: 155,
    marginLeft:40,
    width: 108,
    height: 108,
    backgroundColor: '#945c67',
    borderRadius: 50,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
  },
  box73: {
    marginTop: 155,
    marginLeft:40,
    width: 108,
    height: 108,
    backgroundColor: '#948E5c',
    borderRadius: 50,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
  }
 
}

export default Animation;