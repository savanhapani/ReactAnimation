import React from "react"
import { exact } from "prop-types";

function CodeSteps()
{
       return(
<div>
            <div id="myDIV1" class="column textarea2">
        
              <p>
     
   
           <br/>   void stl_reverse_partial_sorting ()&#123;
  <br/>  // Getting 20 Random Numbers and storing it into array . 
    <br/>vector&#60;int&#62; intArray2 = getRandoms(20);
    <br/>cout &#60;&#60; "20 Random Numbers"&#60;&#60;endl; 
    <br/>vector&#60;int&#62;::iterator intArr2_begin = intArray2.begin(); 
    <br/>vector&#60;int&#62;::iterator intArr2_end = intArray2.end(); 
    <br/>display(intArr2_begin,intArr2_end);
    <br/>cout&#60;&#60;"Partial sorting first 4 elements"&#60;&#60;endl;
    <br/>partial_sort(intArr2_begin, intArr2_begin + 2, intArr2_end); 
    <br/>display(intArr2_begin,intArr2_end);
&#125;

</p> 
{/* </code>
</pre> */}
</div>

</div>

)
}

export default CodeSteps