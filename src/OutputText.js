import React, { useState } from 'react';

const OutputText = () => {

    const [count, setCount] = useState(0);
    console.log(count);
        return (
            <div>
                <input onChange={count => setCount(count.target.value.length)}/>
                <p>Esse texto contém {count} caracteres</p>
            </div>
        );
}

export default OutputText;