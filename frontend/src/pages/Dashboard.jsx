import React, { useState } from 'react';
import SideNav from '../components/SideNav/SideNav';
import Analytics from '../components/Analytics/Analytics';

import CollectionDetails from '../components/collectionDetails/collectionDetails'; // Import the component
import OverviewCard from '../components/OverviewCard/OverviewCard';
import PaymentCard from '../components/Payment/PaymentCard';
import AdminCard from '../components/AdminCard/AdminCard';
import DisbursalsCard from '../components/disbursalsCard/disbursalsCard'; // Use an uppercase 'D'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatNumber } from '../data';
import Loader from '../components/Loader/Loader';

const Dashboard = () => {

  const [loading, setLoading]=useState(true)

  const [students, setStudents] = useState([]);
  const [fines, setFines] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [sections, setSections] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const[defaulters,setDefaulters]=useState([]);
  const[admins,setAdmins]=useState([]);

  const Base_URL = process.env.REACT_APP_API_BASE_URL;
 

  useEffect(() => {


    fetch(`${Base_URL}/api/defaulters`)
    .then((response) => response.json())
    .then((data) => {
      setDefaulters(data); 
      setLoading(false)
    
    
    })
    .catch((error) => console.error('Error fetching defaulters:', error));

    
    fetch(`${Base_URL}/api/transactions`)
    .then((response) => response.json())
    .then((data) => {
      setTransactions(data); 

    
    })
    .catch((error) => console.error('Error fetching transactions:', error));

    
    fetch(`${Base_URL}/api/students`)
    .then((response) => response.json())
    .then((data) => {
      setStudents(data); 
     
    
    })
    .catch((error) => console.error('Error fetching students:', error));


    fetch(`${Base_URL}/api/admins`)
    .then((response) => response.json())
    .then((data) => {
      setAdmins(data); 

      console.log(admins);
    
    })
    .catch((error) => console.error('Error fetching students:', error));
  

    fetch(`${Base_URL}/api/sections`)
    .then((response) => response.json())
    .then((data) => {
      setSections(data); 
      // console.log('Fetched sections:', data); 
    })
    .catch((error) => console.error('Error fetching sections:', error));

   
    fetch(`${Base_URL}/api/fines`)
    .then((response) => response.json())
    .then((data) => {
      setFines(data); 
      // console.log('Fetched fines:', data); 
    })
    .catch((error) => console.error('Error fetching fines:', error));

   



    fetch(`${Base_URL}/api/invoices`)
    .then((response) => response.json())
    .then((data) => {
      setInvoices(data); 
      // console.log('Fetched invoices:', data); 
    })
    .catch((error) => console.error('Error fetching invoices:', error));


    




  
  }, []); 


  const currentDate = new Date();
const currentMonth = 8 
const currentYear = currentDate.getFullYear();

// Filter transactions for the current month and year
const transactionsThisMonth = transactions.filter((transaction) => {
  const transactionDate = new Date(transaction.createdAt);
  const transactionMonth = transactionDate.getMonth() + 1; // Add 1 to match the current month.
  const transactionYear = transactionDate.getFullYear();
  return transactionMonth === currentMonth && transactionYear === currentYear;
});



// Calculate the total amount for the current month
const totalAmountThisMonth = transactionsThisMonth.reduce((total, transaction) => {
  const amount = parseFloat(transaction.amount); // Ensure it's a number
  return isNaN(amount) ? total : total + amount;
}, 0); // Initialize the total to 0

// Calculate the total amount for all transactions
const totalAmountTillDate = transactions.reduce((total, transaction) => {
  const amount = parseFloat(transaction.amount); // Ensure it's a number
  return isNaN(amount) ? total : total + amount;
}, 0);

const formattedAmountThisMonth = formatNumber(totalAmountThisMonth);
const formattedAmountTillDate = formatNumber(totalAmountTillDate);




  const navigate = useNavigate();

  const storedResponseData = localStorage.getItem('responseData');

  
  const responseData = storedResponseData ? JSON.parse(storedResponseData) : null;

 
  const user = responseData ? responseData.user : null;
 

  if (user) {



  
  

      return (
        <div>
          {loading ? (
            <Loader />
          ) : (
            <div className='flex'>
            <SideNav user={user}/> 
            <div className='Main'>
              <p className='schoolName'>
                DAV Public School, Bhilai
              </p>
    
    
              <Analytics formattedAmountTillDate={formattedAmountTillDate}  defaulters={defaulters} students={students}/>
    
    
              <div className='school-analytics'>
             
                  <CollectionDetails  students={students} sections={sections} fines ={fines} formattedAmountThisMonth={formattedAmountThisMonth} invoices={invoices}/> 
             
              </div>
      
      
      <div className='flex jcsb'>
      
      <OverviewCard/>
      
      <PaymentCard/>
      
      
      </div>
      
      
      <div className='flex mt-20 jcsb'>
          <AdminCard admins={admins}/>
         <DisbursalsCard transactionsThisMonth={transactionsThisMonth}/>
      </div>
      
      
            </div>
          </div>
          )}
        </div>
      );
      

    
  
  } else {
    
    navigate('/'); 
    return null;
  }
};





export default Dashboard;
