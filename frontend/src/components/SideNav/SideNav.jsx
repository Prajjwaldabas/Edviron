import React from 'react'
import { useState } from 'react';
import "./SideNav.css";
import { navList } from '../../data';
import rightIcon from '../../Assets/images/right-icon.svg'
import downIcon from '../../Assets/images/down-icon.svg'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
const SideNav = ({user}) => {
    const [activeIndex, setActiveIndex] = useState(null)

    const handleClick= (index)=>{
        setActiveIndex(index);
    }
  return (
    <div className='sideNav-Container'>

<div className='logo '>
    <img src="./images/Logo.svg" alt="" />
    <p>Edviron</p>
    <span>v.01</span>
</div>


 <ul className='navList'>
      {navList.map((item, index) => (
        <li key={index} className={activeIndex === index ? 'active' : ''} onClick={() => handleClick(index)}>
          <img src={item.image} alt='' />
          <p>{item.title}</p>
          <img src={rightIcon} alt='' />
        </li>
      ))}
    </ul>


  
<div className='flex userInfo'>

  
    <div className='flex g-20 aic' >
        <div className='userIcon'>
        <AccountCircleRoundedIcon/>
        </div>
   
    <div>
    <p className='userName'>{user.name}</p>
        <p className='userRole'>{user.role}</p>
    </div>
        
    </div>
    <img src={downIcon} alt="" />
 
</div>




    </div>
  )
}

export default SideNav;