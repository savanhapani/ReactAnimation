import React from "react"
import { exact } from "prop-types";

function Steps()
{
    return(

        <div>
        <div id="myDIV" class="column" className="textarea1">
            <span style={{marginLeft:"20px"}}>(1)  Traverse all the elements of Vector</span><br /><br />
            <span style={{marginLeft:"20px"}}>(2)  If it satisfies the condition (here even number), then remove it from the current place and attach it at the end of the vector</span><br /><br />
            <span style={{marginLeft:"20px"}}>(3)  If it doesn't satisfies the condition, then move to the next element.</span><br /><br />
           </div>
    </div>
    )
}

export default Steps