import React, {useState} from "react";

function FunctionalComponent() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h3>Counter example using Functional Components</h3>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
}

export default FunctionalComponent;