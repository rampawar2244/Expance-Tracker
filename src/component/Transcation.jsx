import React, { useContext } from 'react'
import { GlobelContext } from '../context/GlobleState'

function Transcation({transcation}) {
    const {deleteTranscation} = useContext(GlobelContext)
  return (
        <li className={transcation.amount < 0 ? 'minus' : 'plus'}>
        {transcation.text} <span>{transcation.amount}</span><button onClick={()=>deleteTranscation(transcation.id)} className="delete-btn">x</button>
        </li> 
  )
}

export default Transcation