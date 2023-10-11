import React from 'react'
import './Analytics.css'
import dollar from '../../Assets/images/dollar.svg'
import wallet from '../../Assets/images/wallet-money.svg'
import defaultersIcon from '../../Assets/images/defaulters-icon.svg'
import arrowUp from '../../Assets/images/ArrowUp.svg'
import arrowDown from '../../Assets/images/arrowDown.svg'

const Analytics = ({formattedAmountTillDate,defaulters,students}) => {

  return (
    <div className='Analytics'>
     

     <div className='Analytics-item'>
        
        <div className='dollarIcon' id='greenIcon'>
<img src={dollar} alt="" />
        </div>


<div> 
    <p className='greyText'>Collection till date</p>
    <p className='blackText'>₹{formattedAmountTillDate}</p>

    <div className='flex jcc aic  mt-5'>
<img src={arrowUp} alt="" />
<span className='greenText'>10%</span>
<span className='small-blackText'>in last 30 days</span>
    </div>

</div>

     </div>

<div className='greyLine'></div>

     <div className='Analytics-item'>
        
        <div className='dollarIcon' id='blueIcon'>
<img src={wallet} alt="" />
        </div>


<div> 
    <p className='greyText'>Balance</p>
    <p className='blackText'>₹2.4L</p>

   

</div>

     </div>

     <div className='greyLine'></div>


     <div className='Analytics-item'>
        
        <div className='dollarIcon' id='redIcon'>
<img src={defaultersIcon} alt="" />
        </div>


<div > 
    <p className='greyText'>Defaulters</p>
    <span className='blackText'>{defaulters?.unpaidDues?.length}</span>
    <span>/{students.length} Students</span>

    <div className='flex mt-5'>
<img src={arrowDown} alt="" />
<span className='greenText'>11%</span>
<span className='small-blackText'>in last 30 days</span>
    </div>

</div>

     </div>





     <div>

     </div>

     <div>

     </div>
    </div>
  )
}

export default Analytics