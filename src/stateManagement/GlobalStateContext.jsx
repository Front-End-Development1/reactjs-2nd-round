import React, {useContext} from "react";
import {MyContext} from './Context';


const GlobalStateContext = () => {
    const { count, setCount } =useContext(MyContext);

    return (
        <div>
            <h3> Counter example using Context to manage Global state of program</h3>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default GlobalStateContext;
