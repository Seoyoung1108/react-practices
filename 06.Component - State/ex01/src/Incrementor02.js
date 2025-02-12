import React,{useState} from 'react';

function Incrementor02() {
    const [val, setVal]= useState(0);
    
    return (
        <div>
            <button onClick={()=>setVal(val+1)}>{'+'}</button>
            {' '}
            { val }
            {' '}
            <button onClick={()=>setVal(val-1)}>{'-'}</button>
        </div>
    );
}

export default Incrementor02