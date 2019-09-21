import React,{Component} from 'react';
import Contact1 from './Contact1'
import Contact from './Contact'
import Queries from './Page/QUERIES'
import Sets from './Page/SETS'
import Heap from './Page/MOVERS'
import Psort from './Page/RAW MEMORYS'
import Home from './Home'
import Sem_diff from './Page/STRUCTURE CHANGERS'
import Inter from './Page/VALUE MODIFIERS'
import Parse from './Page/MODIFIERS'
import Rev_parse from './Page/ALGOS ON SETS'
import Union from './Page/Union'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
class App extends Component{
render() {
  return (
    <Router>
      <div>
        
   <Route exact path="/" component={Home} />
   <Route path="/Contact1" component={Contact1} />
   <Route path="/contact" component={Contact} />
   <Route path="/QUERIES" component={Queries} />
   <Route path="/SETS" component={Sets} />
   <Route path="/Heap" component={Heap} />
   <Route path="/Psort" component={Psort} />
   <Route path="/Sem_diff" component={Sem_diff} />
   <Route path="/Intersection" component={Inter} />
   <Route path="/Parse" component={Parse} />
   <Route path="/Rev_parse" component={Rev_parse} />
   <Route path="/Union" component={Union} />
   </div>
    </Router>
  );
}
}
export default App;
