import React from "react"
import { exact } from "prop-types";

function Steps()
{
    return(

        <div>
        <div id="myDIV" class="column" className="textarea1">
        <span style={{marginLeft:"20px"}}>The original vector will be reversed and will be placed in new vector</span><br /><br />
            <span style={{marginLeft:"20px"}}>(1)  Repeat steps 2 to 4 while Original vector is not null.</span><br /><br />
            <span style={{marginLeft:"20px"}}>(2)  Remove the last element from the original vector.</span><br /><br />
            <span style={{marginLeft:"20px"}}>(3)  Place it in the new vector.</span><br /><br />
            </div>
    </div>
    )
}

export default Steps