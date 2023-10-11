import React from 'react'
import './collectionDetails.css'
import { formatNumber } from '../../data'



const collectionDetails = ({students,sections,formattedAmountThisMonth,fines,invoices}) => {


  


 

// console.log(invoices)
const totalFineAmount = invoices.reduce((accumulator, invoice) => {
  return accumulator + (invoice.fine_amount ?? 0);
}, 0);

const TotolFine = formatNumber(totalFineAmount)



// console.log(formattedAmount);
  
//   console.log("totalAmountThisMonth",totalAmountThisMonth);
//   console.log('currentMonth:', currentMonth);
//   console.log('currentYear:', currentYear);
//   console.log('transactions:', transactions);
//   console.log(transactionsThisMonth)


  return (

  <>
      <div className='collectionDetails '>

<p className='greyText'>Students</p>
<p className='blackText'>{students.length}</p>

    </div>

      <div className='collectionDetails '>

<p className='greyText'>Sections</p>
<p className='blackText'>{sections.length}</p>

    </div>

      <div className='collectionDetails '>

<p className='greyText'>Collection sept month</p>
<p className='blackText'>₹{formattedAmountThisMonth}</p>

    </div>


      <div className='collectionDetails '>

<p className='greyText'>FIne Collected till date</p>
<p className='blackText'>₹{TotolFine}</p>

    </div>



  </>

  )
}

export default collectionDetails