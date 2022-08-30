import React from "react";


const Counter = ({ state, setState}) => {



    return(
        <div>
        <button
          onClick={() => {
            setState(state + 1)
          }}
        >INCRIMENT</button>
        <button
          onClick={() => {
            setState(state - 1)
          }}
        >DECRIMENT</button>
      </div>
    )
}

export default Counter