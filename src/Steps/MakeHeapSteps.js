import React from "react"
import { exact } from "prop-types";

function Steps()
{
    return(

        <div>
        <div id="myDIV" class="column" className="textarea1">
            <span style={{marginLeft:"20px"}}>(1)  Here, Max Heap is implemented from a vector.</span><br /><br />
            <span style={{marginLeft:"20px"}}>(2)  Process the element of the vector and insert it in the Heap.</span><br /><br />
            <span style={{marginLeft:"20px"}}>(3)  If the element is less than the node, it will be inserted below the level of that node.</span><br /><br />
            <span style={{marginLeft:"20px"}}>(4)  At any given insertion, the structure will run heapify algorithm so that it is a heap.</span><br /><br />
            </div>
    </div>
    )
}

export default Steps