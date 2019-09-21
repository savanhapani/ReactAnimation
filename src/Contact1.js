import React,{Component} from 'react';
import Header from './Header'
import Footer from './footer'
import img1 from './components/people-office-group-team.jpg'
import img2 from './components/0989d1188df027870168df43fd6bb8e0.jpg'
export default class Home extends Component{
render() {
  return (
    <div>
    <Header />
    <div>
      <img src={img1} className="Contact_img"></img>
      <div className="Contact_Set">Contact Us</div>
    </div>
    <div className="Contact_det1">
      <div className="Contect_sub1">
        <h2>CONTACT US</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa repellendus adipisci laborum placeat delectus labore cupiditate deserunt minus numquam consequatur esse, hic at earum illo animi eaque et, dolorem quo qui eos? Quam rerum possimus maxime veniam aut ratione eveniet aliquid cumque aspernatur ipsum libero quaerat, nam. </p>
      </div>
      <div className="Contect_sub1">
        <h2>NEED HELP?</h2>
        <p>Don’t hestiate to ask us something. Email us directly hi@loremipsum.com or call us at 1-800-275-0002. Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Donec a scelerisque turpis. Eu pro expetenda contentiones. Dolor maiestatis mea ut, oportere corrumpit eu duo</p>
      </div>
    </div>
    <div className="Contact_det2">
      <img src={img2} className="Contact_img2"></img>
      <div>
      <div className="Contect_sub1">
        <h2>Our Team</h2>
        <p>Partim orba seductaque. Porrexerat mutatas ita campos caelum viseret locoque rudis. Homini tollere aer caeli acervo. Occiduo onus origo zonae iapeto inminet nulli elementaque. Deducite usu montibus igni tegit dixere campoque quem nulli.</p>
        </div>
        <div className="Contect_sub2">
        <h2>GIVE US A CALL</h2>
        <p>Sed at diam habeo vulputate, per persius sanctus an. An usu minim percipit pericula. Illud sonet iuvaret mea cu, minimum gloriatur vim cu. Mei ne probo rebum interpretaris, ea mel iriure fabulas comprehensam, debitis perfecto conceptam ut nec.</p>
        <h4 className="col2">AVAILABLE AT 9AM TO 6PM</h4>
        <h1 className="Col1">800-275-0002</h1>
        </div>
      </div>
      </div>
   <Footer />
   </div>
  );
}
}
