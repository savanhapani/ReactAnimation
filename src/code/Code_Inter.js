import React from "react"
import { exact } from "prop-types";

function CodeSteps()
{
       return(
<div>
            <div id="myDIV1" class="column textarea2">
        
              <p>
              <br/>void stl_set_intersection_example()&#123;
  <br/>vector&#60;int&#62; x = getRandoms(20);  
  <br/>vector&#60;int&#62; y = getRandoms(15); 
  <br />sort(x.begin(), x.end());
  <br />sort(y.begin(), y.end());
  <br/>cout &#60;&#60; "SET 1 \n";
  <br/>display(x.begin(),x.end());
  <br />cout &#60;&#60; "SET 2 \n";
  <br />display(y.begin(),y.end());
  <br />vector&#60;int&#62; I(100);
  <br />vector&#60;int&#62;::iterator ii =  set_intersection(x.begin(),x.end(),y.begin(),y.end(),I.begin());
  I.resize(ii-I.begin());
  <br />cout &#60;&#60; "SET Intersection  \n";
  <br />display(I.begin(),I.end());
&#125;

   
<br/>}
</p> 
{/* </code>
</pre> */}
</div>

</div>

)
}

export default CodeSteps