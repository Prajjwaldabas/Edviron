import React from 'react'
import './PaymentCard.css'
import chart from '../../Assets/images/Chart.svg'

import purpleDot from '../../Assets/images/purpleDot.svg'
import blueDot from '../../Assets/images/blueDot.svg'
import greyDot from '../../Assets/images/greyDot.svg'





const PaymentCard = () => {
  return (
    <div  className='Payment-container'>
        
<p className='payment-heading'>Payment Mode</p>

<p className='greyText'> Split between Online, Cash <br />
and Cheque for collections till date</p> 

<div className='chart'>
    <img src={chart} alt="" />
</div>


<div className='chart-dots flex g-20 mt-5'>

<div>
    <img src={purpleDot} alt="" />
    <span className='ml-5 '>Online</span>
    <p className='ml-5 fwb'>63%</p>

</div>

<div>
    <img src={blueDot} alt="" />
    <span className='ml-5'>Cash</span>
    <p className='ml-5 fwb'>25%</p>

</div>

<div>
    <img src={greyDot} alt="" />
    <span className='ml-5'>Cheque</span>
    <p className='ml-5 fwb'>11%</p>

</div>

</div>
    </div>
  )
}

export default PaymentCard