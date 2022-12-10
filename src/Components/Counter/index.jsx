import React, { useState } from 'react'
import { empData } from '../../data/empData';
import MyTable from '../MyTable';

function Counter() {
    console.log('Counter...');
    const [count, setCount] = useState(0);
    const [employeeData, setEmployeeData] = useState(empData);

    const incrementCounter = () => (setCount(prevCount => prevCount + 1));
    const decrementCounter = () => (setCount(prevCount => prevCount - 1));

    const sortData = param => (setEmployeeData([...employeeData.sort((a, b) => b[param] - a[param])]));

    return (
        <div>
            <p className="counter">{`Count: ${count}`}</p>
            <button className="add" onClick={incrementCounter}>Add</button>
            <button className="minus" onClick={decrementCounter}>Minus</button>

            <div className="mytable">
                <MyTable data={employeeData} onSort={sortData} />
            </div>
        </div>
    )
}

export default Counter