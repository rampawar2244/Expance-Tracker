import React, { useContext } from 'react'
import { GlobelContext } from '../context/GlobleState'

function Balance() {
  const { transcations } = useContext(GlobelContext)

  const amounts = transcations.map( transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
   
  const incomeValues = amounts.filter(amounts => amounts > 0)
  const income = incomeValues.reduce((acc, item) => (acc +=item),0).toFixed(2)

  const expanceValues = amounts.filter(amounts => amounts < 0)
  const expance = expanceValues.reduce((acc, item) => (acc+=item),0).toFixed(2)
  return (
    <div>
          <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>

      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-${expance}</p>
        </div>
       </div>
    </div>
  )
}

export default Balance