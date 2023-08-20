import React from 'react'

let Todos= (props)=>{
    function adddata(){
        props.set([...props.arr,'New Todo'])
    }
    return(
        <div>
            <div className='cont'>
             <h1>My Todos</h1>   
            {
                props.arr.map((element)=>{
                    return(
                        <div>{element}</div>
                    )
                })
            }
            </div>
            <button onClick={adddata}>Add Todo</button>
        </div>
    )
}
export default Todos