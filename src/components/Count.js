import React from 'react'

let Count= (props)=>{
    function adddata(){
        props.set(props.number+1)
    }
    return(
        <div id='incr-cnt'>
            <div className='cont'>
             <h1>My Todos</h1>   
            <div id='calc'>Count : {props.number}</div>
            <button onClick={adddata} id='incr-cnt'>+</button>
            </div>
        </div>
    )
}
export default Count