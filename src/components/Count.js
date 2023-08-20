import React from 'react'

let Count= (props)=>{
    function adddata(){
        props.set(props.number+1)
    }
    return(
        <div>
            <div className='cont'>
             <h1>My Todos</h1>   
            <div>Count : {props.number}</div>
            <button onClick={adddata}>+</button>
            </div>
        </div>
    )
}
export default Count