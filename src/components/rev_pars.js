import React,{Component} from 'react';
import { TimelineLite } from 'gsap';
 
class Animation extends Component {
  animate = () => {
    var animation = new TimelineLite()
    let r=0
    let i=0

    for(let p=3.14;p<4.7;p=p+0.1)
    {
      r=80
      animation.to(this.box30, 0.1, {x:(Math.cos(p)*r)+r, y: Math.sin(p)*r, rotation: 360 })
    }
   
    for(let p=0;p<3.14;p=p+0.1)
    {
      r=60
      animation.to(this.box90, 0.1, {x:(Math.cos(p)*r)-r, y: Math.sin(p)*r, rotation: 360 })
    }

    for(let p=4.7;p<6.39;p=p+0.1)
    {
      r=80
      animation.to(this.box30, 0.1, {x:(Math.cos(p)*r)+r, y: Math.sin(p)*r, rotation: 360 })
    }
   
    for(let p=3.14;p<5.2;p=p+0.1)
    {
      r=60
      animation.to(this.box30, 0.1, {x:(Math.cos(p)*r)+r+160, y: Math.sin(p)*r, rotation: 360 })
    }

    for(let p=0;p<3.14;p=p+0.1)
    {
      r=60
      animation.to(this.box40, 0.1, {x:(Math.cos(p)*r)-r, y: Math.sin(p)*r, rotation: 360 })
    }

    for(let p=5.2;p<6.39;p=p+0.1)
    {
      r=60
      animation.to(this.box30, 0.1, {x:(Math.cos(p)*r)+r+160, y: Math.sin(p)*r, rotation: 360 })
    }


    for(let p=3.14;p<5.2;p=p+0.1)
    {
      r=60
      animation.to(this.box30, 0.1, {x:(Math.cos(p)*r)+r+280, y: Math.sin(p)*r, rotation: 360 })
    }

    for(let p=0;p<3.14;p=p+0.1)
    {
      r=60
      animation.to(this.box50, 0.1, {x:(Math.cos(p)*r)-r, y: Math.sin(p)*r, rotation: 360 })
    }

    for(let p=5.2;p<6.39;p=p+0.1)
    {
      r=60
      animation.to(this.box30, 0.1, {x:(Math.cos(p)*r)+r+280, y: Math.sin(p)*r, rotation: 360 })
    }

    for(let p=3.14;p<5.2;p=p+0.1)
    {
      r=60
      animation.to(this.box30, 0.1, {x:(Math.cos(p)*r)+r+400, y: Math.sin(p)*r, rotation: 360 })
    }

    for(let p=0;p<3.14;p=p+0.1)
    {
      r=60
      animation.to(this.box70, 0.1, {x:(Math.cos(p)*r)-r, y: Math.sin(p)*r, rotation: 360 })
    }

    for(let p=5.2;p<6.4;p=p+0.1)
    {
      r=60
      animation.to(this.box30, 0.1, {x:(Math.cos(p)*r)+r+400, y: Math.sin(p)*r, rotation: 360 })
    }

    for(let p=3.14;p<5.2;p=p+0.1)
    {
      r=60
      animation.to(this.box40, 0.1, {x:(Math.cos(p)*r)+r-120, y: Math.sin(p)*r, rotation: 360 })
    }

    for(let p=0;p<3.14;p=p+0.1)
    {
      r=60
      animation.to(this.box50, 0.1, {x:(Math.cos(p)*r)-r-120, y: Math.sin(p)*r, rotation: 360 })
    }

    for(let p=5.2;p<6.39;p=p+0.1)
    {
      r=60
      animation.to(this.box40, 0.1, {x:(Math.cos(p)*r)+r-120, y: Math.sin(p)*r, rotation: 360 })
    }
  
    for(let p=3.14;p<5.2;p=p+0.1)
    {
      r=70
      animation.to(this.box40, 0.1, {x:(Math.cos(p)*r)+r, y: Math.sin(p)*r, rotation: 360 })
    }

    for(let p=0;p<3.14;p=p+0.1)
    {
      r=60
      animation.to(this.box70, 0.1, {x:(Math.cos(p)*r)-r-120, y: Math.sin(p)*r, rotation: 360 })
    }

    for(let p=5.2;p<6.4;p=p+0.1)
    {
      r=70
      animation.to(this.box40, 0.1, {x:(Math.cos(p)*r)+r, y: Math.sin(p)*r, rotation: 360 })
    }
  
    for(let p=3.14;p<5.2;p=p+0.1)
    {
      r=70
      animation.to(this.box50, 0.1, {x:(Math.cos(p)*r)+r-240, y: Math.sin(p)*r, rotation: 360 })
    }

    for(let p=0;p<3.14;p=p+0.1)
    {
      r=60
      animation.to(this.box70, 0.1, {x:(Math.cos(p)*r)-r-240, y: Math.sin(p)*r, rotation: 360 })
    }

    for(let p=5.2;p<6.4;p=p+0.1)
    {
      r=70
      animation.to(this.box50, 0.1, {x:(Math.cos(p)*r)+r-240, y: Math.sin(p)*r, rotation: 360 })
    }
  
  }
 
  render() {
    return (
      <>

      <div style={styles.container}>
        
        <div className="con">
        <div style={styles.box10} ref={box => this.box10= box} className="box" >10</div>
        <div style={styles.box80} ref={box => this.box80= box} className="box" >80</div>
        <div style={styles.box30} ref={box => this.box30 = box} className="box" >30</div>
        <div style={styles.box90} ref={box => this.box90 = box} className="box" >90</div>
        <div style={styles.box40} ref={box => this.box40 = box} className="box" >40</div>
        <div style={styles.box50} ref={box => this.box50 = box} className="box" >50</div>
        <div style={styles.box70} ref={box => this.box70 = box} className="box" >70</div>
       
        </div>
        <div>
        <button style={styles.button}  onClick={this.animate} className="sort01">Sort</button>
        
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
  box10: {
    marginTop: 160,
    marginLeft:200,
    width: 60,
    height: 60,
    backgroundColor: '#948E5c',
    borderRadius: 50,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
    
  },
  box30: {
    marginTop: 153,
    marginLeft:40,
    width: 70,
    height: 70,
    backgroundColor: '#948E5c',
    borderRadius: 50,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
  },
  box40: {
    marginTop: 150,
    marginLeft:40,
    width: 80,
    height: 80,
    backgroundColor: '#948E5c',
    borderRadius: 50,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
  },
  box50: {
    marginTop: 145,
    marginLeft:40,
    width: 90,
    height: 90,
    backgroundColor: '#948E5c',
    borderRadius: 50,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
  },
  box70: {
    marginTop: 142,
    marginLeft:40,
    width: 100,
    height: 100,
    backgroundColor: '#948E5c',
    borderRadius: 50,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
  },
  box80: {
    marginTop: 135,
    marginLeft:40,
    width: 110,
    height: 110,
    backgroundColor: '#948E5c',
    borderRadius: 50,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
  },
  box90: {
    marginTop: 130,
    marginLeft:40,
    width: 120,
    height: 120,
    backgroundColor: '#948E5c',
    borderRadius: 50,
    boxShadow: '1px 1px 27px rgba(0, 0, 0, .3)'
  }
 
}


export default Animation;