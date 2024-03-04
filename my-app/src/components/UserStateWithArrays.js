import React, { useState } from 'react'

function UserStateWithArrays() {
    const [nums, setNums] = useState([1, 2, 3]);
    const addNums = () => {
        setNums([...nums, nums.length + 1])
    }
    const removeLast = () => {
        setNums(nums.filter(num => num !== nums.length))
    }

    return (
        <div>
            <button onClick={addNums}>Add Number</button>
            <button onClick={removeLast}>Remove Last</button>
            <ul>
                {nums.map(num => (
                    <li key={num}>{num}</li>
                ))}
            </ul>
        </div>
    )
}

export default UserStateWithArrays
