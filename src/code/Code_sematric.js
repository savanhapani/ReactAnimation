import React from "react"
import { exact } from "prop-types";

function CodeSteps()
{
       return(
<div>
            <div id="myDIV1" class="column textarea2">
        
              <p>
     
   
             <br/> void stl_set_symmetric_difference_example()&#123;
             <br/>vector&#60;int&#62; x = getRandoms(20);  
             <br/>vector&#60;int&#62; y = getRandoms(15); 
             <br/>sort(x.begin(), x.end());
             <br/>sort(y.begin(), y.end());
             <br/> cout &#60;&#60; "SET 1 \n";
             <br/>display(x.begin(),x.end());
             <br/>  cout &#60;&#60; "SET 2 \n";
             <br/>display(y.begin(),y.end());
             <br/>vector&#60;int&#62; SD(100); 
             <br/>vector&#60;int&#62;::iterator isd = set_symmetric_difference(x.begin(),x.end(),y.begin(),y.end(),SD.begin());
             <br/>SD.resize(isd-SD.begin());
             <br/>cout &#60;&#60; "SET Symmetric difference  \n";
             <br/>display(SD.begin(),SD.end());
&#125;
	

</p> 
{/* </code>
</pre> */}
</div>

</div>

)
}

export default CodeSteps