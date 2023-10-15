import { useState, memo } from "react";

//  ===

function Content(){

    console.log('re-render');

    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}


export default memo(Content)