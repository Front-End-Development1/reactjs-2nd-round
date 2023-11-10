import React, { useRef } from 'react'

function RefHook(){
    const inputRef = useRef(null);

    const handleClear = () => {
        inputRef.current.value = '';
        inputRef.current.focus();
    };

    return (
        <div>
            <h3>Hooks: useRefference</h3>
            <input type='text' ref={inputRef} placeholder='Type something...' />
            <button onClick={handleClear}>Clear</button>
        </div>
    );
}

export default RefHook;

