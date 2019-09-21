//sem_diff.js
import React, { Component } from "react";
import { TimelineLite } from "gsap";
import img1 from "../left-half.svg";
import img2 from "../Middle.svg";
import img3 from "../right-half.svg";
import { NONAME } from "dns";

class Animation extends Component {
  animate = () => {
    var animation = new TimelineLite();

    animation
      .to(this.box11, 1, { x: 430, y: 80 })
      .to(this.box23, 1, { scale: 1.5 })
      .to(this.box23_2, 1, { scale: 1.5 })
      .to(this.box23_2, 1, { scale: 1.0 })
      .to(this.box23, 1, { x: 515, y: 100, scale: 1.0 })
      .to(this.box23_2, 1, { x: -380, y: 100 })
      .to(this.box46, 1, { x: 330, y: 150 })
      .to(this.box65, 1, { x: 300, y: 220 })

      .to(this.box88, 1, { scale: 1.5 })
      .to(this.box88_2, 1, { scale: 1.5 })
      .to(this.box88_2, 1, { scale: 1.0 })
      .to(this.box88, 1, { x: 400, y: 200, scale: 1.0 })
      .to(this.box88_2, 1, { x: -457, y: 200 })
      .to(this.box93, 1, { x: 270, y: 270 })

      .to(this.box9, 1, { x: -200, y: 80 })
      .to(this.box17, 1, { x: -200, y: 150 })
      .to(this.box47, 1, { x: -300, y: 220 })

      .to(this.box_set, 0, { x: -2900 })
      .to(this.box_set1, 0, { x: -2900 })
      .to(this.box_set2, 0, { x: -5900 })
      .to(this.box_set3, 0, { x: -5900 });

    for (let p = 0; p < 20; p = p + 1) {
      animation.to(this.set_img1, 0.01, { x: -p, y: 0, scale: 1.04 });
      animation.to(this.set_img2, 0.01, { x: 0, y: 0, scale: 1.02 });
      animation.to(this.set_img3, 0.01, { x: p, y: 0, scale: 1.04 });

      animation.to(this.box11, 0.01, { x: 430 - p, y: 80 });
      animation.to(this.box46, 0.01, { x: 330 - p, y: 150 });
      animation.to(this.box65, 0.01, { x: 300 - p, y: 220 });
      animation
        .to(this.box93, 0.01, { x: 270 - p, y: 270 })

        .to(this.box9, 0.01, { x: -200 + p, y: 80 })
        .to(this.box17, 0.01, { x: -200 + p, y: 150 })
        .to(this.box47, 0.01, { x: -300 + p, y: 220 });
    }

    
    animation.to(this.set_img2,0, {x:0,y:-10000})
      .to(this.box23_2, 0, { x: -300, y: -10000 })
      .to(this.box88_2, 0, { x: -377, y: -100000 })
      .to(this.box23, 0, { x: -20, y: -10000 })
      .to(this.box88, 0, { x: -20, y: -100000 })

    for (let q = 0; q < 20; q = q + 1) {
      animation.to(this.set_img1, 0.01, { x: -20 + q, y: 0, scale: 1.0 });
      //animation.to(this.set_img2, 0.01, { x: 0, y: 0, scale: 1.0 });
      animation.to(this.set_img3, 0.01, { x: 20 - q, y: 0, scale: 1.0 });

      animation.to(this.box11, 0.01, { x: 430 + q, y: 80 });
      animation.to(this.box46, 0.01, { x: 330 + q, y: 150 });
      animation.to(this.box65, 0.01, { x: 300 + q, y: 220 });
      animation
        .to(this.box93, 0.01, { x: 270 + q, y: 270 })

        .to(this.box9, 0.01, { x: -200 - q, y: 80 })
        .to(this.box17, 0.01, { x: -200 - q, y: 150 })
        .to(this.box47, 0.01, { x: -300 - q, y: 220 });
    }

    /*animation.to(this.set_img2, 0, {x:80, y:0 })
    .to(this.set_img3, 0, {x:80, y:0})
    .to(this.box23, 0, {x: 595, y:0 })
    .to(this.box23_2, 0, { x: -300, y:0 })
    .to(this.box88, 0, {x: 480, y:0 })
    .to(this.box88_2, 0, {x: -377, y:0 })
    .to(this.box9, 0 , { x: -160, y:0})
    .to(this.box17, 0, { x: -160, y:0})
    .to(this.box47, 0, { x: -240, y:0})*/

      /*  */
      /* .to(this.box88_2, 0.1, { x: 400, y: 200}) */
      animation
      .to(this.box11, 1, { x: -20, y: 337 })
      .to(this.box46, 1, { x: -60, y: 337 })
      .to(this.box65, 1, { x: -60, y: 337 })
      .to(this.box93, 1, { x: -100, y: 337 })
      .to(this.box9, 1, { x: -745, y: 337 })
      .to(this.box17, 1, { x: -745, y: 337 })
      .to(this.box47, 1, { x: -785, y: 337 });
  };

  render() {
    return (
      <>
        <div style={styles.container}>
          <div className="con1">
            <div className="set_name">
              <div className="box_set" ref={box => (this.box_set = box)}>
                Set-A : &#123;{" "}
              </div>
              <div
                style={styles.box11}
                ref={box => (this.box11 = box)}
                className="box_set"
              >
                11
              </div>
              <div
                style={styles.box23}
                ref={box => (this.box23 = box)}
                className="box_set"
              >
                23
              </div>
              <div
                style={styles.box46}
                ref={box => (this.box46 = box)}
                className="box_set"
              >
                46
              </div>
              <div
                style={styles.box65}
                ref={box => (this.box65 = box)}
                className="box_set"
              >
                65
              </div>
              <div
                style={styles.box88}
                ref={box => (this.box88 = box)}
                className="box_set"
              >
                88
              </div>
              <div
                style={styles.box93}
                ref={box => (this.box93 = box)}
                className="box_set"
              >
                93
              </div>
              <div className="box_set1" ref={box => (this.box_set1 = box)}>
                }
              </div>
              <div className="box_set2" ref={box => (this.box_set2 = box)}>
                Set-B : &#123;{" "}
              </div>
              <div
                style={styles.box9}
                ref={box => (this.box9 = box)}
                className="box_set"
              >
                9
              </div>
              <div
                style={styles.box17}
                ref={box => (this.box17 = box)}
                className="box_set"
              >
                17
              </div>
              <div
                style={styles.box23_2}
                ref={box => (this.box23_2 = box)}
                className="box_set"
              >
                23
              </div>
              <div
                style={styles.box47}
                ref={box => (this.box47 = box)}
                className="box_set"
              >
                47
              </div>
              <div
                style={styles.box88_2}
                ref={box => (this.box88_2 = box)}
                className="box_set"
              >
                88
              </div>
              <div className="box_set3" ref={box => (this.box_set3 = box)}>
                }
              </div>
            </div>
            <div className="set_main">
              <img
                className="set_img1"
                ref={box => (this.set_img1 = box)}
                src={img1}
              />
              <img
                className="set_img2"
                ref={box => (this.set_img2 = box)}
                src={img2}
              />
              <img
                className="set_img3"
                ref={box => (this.set_img3 = box)}
                src={img3}
              />
            </div>
            <div className="main_set_re">
              <div className="box_set3">A &#x2206; B &#123;</div>
              <div className="last_brak1">}</div>
            </div>
            <div className="set_but">
              <button
                style={styles.button}
                onClick={this.animate}
                className="sortba"
              >
                SETS
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const styles = {
  button: {
    width: 200,
    height: 45,
    border: "none",
    outline: "none",
    borderRadius: "40px"
  },
  container: {},
  box11: {
    marginLeft: 10
  },
  box23: {
    marginLeft: 10
  },
  box46: {
    marginLeft: 10
  },
  box65: {
    marginLeft: 10
  },
  box88: {
    marginLeft: 10
  },
  box93: {
    marginLeft: 10
  },
  box9: {
    marginLeft: 10
  },
  box17: {
    marginLeft: 10
  },
  box23_2: {
    marginLeft: 10
  },
  box47: {
    marginLeft: 10
  },
  box88_2: {
    marginLeft: 10
  }
};

export default Animation;
