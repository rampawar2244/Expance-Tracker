import React, { useContext } from 'react'
import { GlobelContext } from '../context/GlobleState'
import Transcation from './Transcation';
function TranscationList() {
    const { transcations } = useContext(GlobelContext)
  return (
    <div>
        <h3>History</h3>
        <ul id="list" className="list">
         {transcations.map(transcation =>( <Transcation key={transcation.id} transcation={transcation} /> ))}
        </ul>
    </div>
  )
}

export default TranscationList