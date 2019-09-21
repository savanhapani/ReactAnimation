import React,{Component} from 'react';
import Header from './Header'
import Footer from './footer'
import Center_part from '../src/components/slider'
import Card from './Card'
export default class Home extends Component{
render() {
  return (
    <div>
    <Header />
   <Center_part/>
   <Card />
   <Footer />
   </div>
  );
}
}

