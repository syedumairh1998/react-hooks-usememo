import React, { useState, useMemo } from "react"

function Marks() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
   const multiply =  useMemo(()=> {
            for (let i = 0; i < 1000000000; i++) { }
            return count1 * 10
        
    }, [count1])

    return (
        <React.Fragment>
            <h1>Learning Memoized Callback</h1>
            <button onClick={() => setCount1(count1 + 1)}>Count1 </button> : {count1} : {multiply}
            <br />
            <button onClick={() => setCount2(count2 - 1)}>Count2 </button> : {count2}
        </React.Fragment>
    )

}



export default Marks
