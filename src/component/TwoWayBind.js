import React, {useState} from 'react';

function TwoWayBind(props) {
    const[data, setData] = useState('');
    
    const handleChange = (e) => {
        setData(e.target.value);

    }
    return (
        <div>
            <input onChange={handleChange} value = {data}/>
            <h2>{data}</h2>
        </div>
    );
}

export default TwoWayBind;