import React from "react"
import { exact } from "prop-types";

function Steps()
{
    return(

        <div>
        <div id="myDIV" class="column" className="textarea1">
        <span style={{marginLeft:"20px"}}>This function works on specified range of array. Here, it is 3 to 7.</span><br /><br />
            <span style={{marginLeft:"20px"}}>(1)  Find a “pivot” item in the array. This item is the basis for comparison for a single round.</span><br /><br />
            <span style={{marginLeft:"20px"}}>(2)  Start a pointer (the left pointer) at the first item in the array.</span><br /><br />
            <span style={{marginLeft:"20px"}}>(3)  Start a pointer (the right pointer) at the last item in the array.</span><br /><br />
            <span style={{marginLeft:"20px"}}>(4)  While the value at the left pointer in the array is greater than the pivot value, move the left pointer to the right (add 1). Continue until the value at the left pointer is less than or equal to the pivot value.</span><br /><br />
            <span style={{marginLeft:"20px"}}>(5)  While the value at the right pointer in the array is less than the pivot value, move the right pointer to the left (subtract 1). Continue until the value at the right pointer is greater than or equal to the pivot value.</span><br /><br />
         <span style={{marginLeft:"20px"}}>(6)  If the left pointer is greater than or equal to the right pointer, then swap the values at these locations in the array.</span><br /><br />
         <span style={{marginLeft:"20px"}}>(7)  Move the left pointer to the right by one and the right pointer to the left by one.</span><br /><br />
         <span style={{marginLeft:"20px"}}>(8)  If the left pointer and right pointer don’t meet, go to step 1.</span><br />
    </div>
    </div>
    )
}

export default Steps