import React, { Component } from 'react';
import {Link} from 'react-router-dom'
export default class Center_part extends Component {
    render(){
        return (
        <section className="main-div-center">
             <h2 className="title_mar">The C++ Standard Template Library (STL)</h2>
      <section>
      <p>The Standard Template Library (STL) is a set of C++ template classes to provide common programming data structures and functions such as lists, stacks, arrays, etc.</p>
      <div>It is a library of container classes, algorithms, and iterators. It is a generalized library and so, its components are parameterized.</div> 
      <div>A working knowledge of template classes is a prerequisite for working with STL.</div>

      <ul><h3>STL has four components</h3>
        <li>Algorithms</li>
        <li>Containers</li>
        <li>Functions</li>
        <li>Iterators</li>
         </ul>
        
      </section>
        </section>
        )
    }
}