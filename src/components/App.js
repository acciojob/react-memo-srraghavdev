import React,{useState} from 'react'
import Todos from './Todos'
import Memo from './Memo'
import Count from './Count'
import { useEffect } from 'react'

let App = () =>{
    useEffect(()=>{

    },[count,memo,todos])
    let [todos,Settodos]=useState(['New Todo'])
    let [memo,Setmemo]=useState(['HTMLL',"CSSS3"])
    let [count,Setcount]=useState(0)
    return(
        <div>
        <h1>React.useMEMo</h1>
        <Todos set={Settodos} arr={todos} />
        <Count set={Setcount} number={count}/>
        <h1>Expensive Calculation</h1>
        <div>10000000000000</div>
        <Memo set={Setmemo} arr={memo} />
        </div>
    )
   
        
}

export default App