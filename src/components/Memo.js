import React,{useState} from 'react'

let Memo= (props)=>{
    let [string,Setstring]=useState('')
    function adddata(){
        console.log(string)
        if(string.length>5){
          props.set([...props.arr,string])
          Setstring('')  
        } 
    }
    return(
        <div>
            <div className='cont'>
            <h1>React.memo</h1>    
            <input type='text' onChange={(event)=>Setstring(event.target.value)} value={string}></input>
            <button onClick={adddata}>Add Skill</button>
            </div>
            <ul>
            {  props.arr.map(element=>{
                    return <li>{element}</li>
            })
            }
            </ul>
        </div>
    )
}
export default Memo