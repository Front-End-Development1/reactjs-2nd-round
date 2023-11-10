import React, {useState, useEffect } from 'react';

function EffectHook() {
    const [data, setData ] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error=> console.error('Error fetching data: ', error));
    },[]);

return (
    <div>
        <h3>Hooks: useEffect:</h3>
        {data ? (
            <p>Title: {data.title}</p>
        ) : (
            <p>Loading...</p>
        )}
    </div>
);
}

export default EffectHook;