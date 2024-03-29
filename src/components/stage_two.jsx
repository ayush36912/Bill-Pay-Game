import { useContext } from "react";
import { MyContext } from "../context";
import React from "react";
const Stage2 = () => {
    const context = useContext(MyContext);


    return(
        <React.Fragment>
           <div className="result_wrapper">
                <h3>The looser is:</h3>
                {context.result}
           </div>
           <div
            className="action_button"
            onClick={()=> context.resetGame()}
           >
            START OVER
           </div>
           <div
            className="action_button btn_2"
            onClick={()=> context.getNewLooser()}
           >
            GET NEW LOOSER
           </div>
        </React.Fragment>
    )
        
}

export default Stage2;