import React from 'react'
import './OverviewCard.css'

const OverviewCard = () => {
  return (
    <div className='overview-conatainer'>

<p className='overviewHeading'>Overview</p>
<p className='greyText'>
    Monthly Collection
</p>


<div className='graph-container '>

<div className='flex fd-col g-20 graph'>
<div className='graph-line'style={{height:"200px"}}> </div>

<p className='smallGreyText'>Jan</p>
</div>

<div className='flex fd-col g-20 graph'>
<div className='graph-line'style={{height:"200px"}}> </div>

<p className='smallGreyText'>feb</p>
</div>

<div className='flex fd-col g-20 graph'>
<div className='graph-line'style={{height:"200px"}}> </div>

<p className='smallGreyText'>Mar</p>
</div>


<div className='flex fd-col g-20 graph'>
<div className='graph-line'style={{height:"198px"}}> </div>

<p className='smallGreyText'>Apr</p>
</div>

<div className='flex fd-col g-20 graph'>
  
<div className='graph-line'style={{height:"168px"}}> </div>

<p className='smallGreyText'>May</p>
</div>

<div className='flex fd-col g-20 graph'>
<div className='graph-line'style={{height:"142px"}}> </div>

<p className='smallGreyText' >Jun</p>
</div>


<div className='flex fd-col g-20 graph'>
<div className='graph-line'style={{height:"118px"}}> </div>

<p className='smallGreyText'>July</p>
</div>


<div className='flex fd-col g-20 graph'>
<div className='graph-line'style={{height:"94px"}}> </div>

<p className='smallGreyText'>Aug</p>
</div>

<div className='flex fd-col g-20 graph'>
<div className='graph-line'style={{height:"58px"}}> </div>

<p className='smallGreyText'>Sept</p>
</div>

<div className='flex fd-col g-20 graph'>
<div className='graph-line'style={{height:"24px"}}> </div>

<p className='smallGreyText'>Oct</p>
</div>

<div className='flex fd-col g-20 graph'>
<div className='graph-line'style={{height:"11px"}}> </div>

<p className='smallGreyText'>Nov</p>
</div>

<div className='flex fd-col g-20 graph'>
<div className='graph-line'style={{height:"0px"}}> </div>

<p className='smallGreyText'>Dec</p>
</div>
  


</div> 
    </div>
  )
}

export default OverviewCard