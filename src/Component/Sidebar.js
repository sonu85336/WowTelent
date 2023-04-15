import React from 'react'
import classes from '../Css/Sidebar.module.css'
import GridViewIcon from '@mui/icons-material/GridView';
 import logo from '../assets/logo.png'
 import PersonIcon from '@mui/icons-material/Person';
 import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
 import ReportProblemIcon from '@mui/icons-material/ReportProblem';

 import CategoryIcon from '@mui/icons-material/Category';
 import InfoIcon from '@mui/icons-material/Info';
 import FactCheckIcon from '@mui/icons-material/FactCheck';
 import NotificationsIcon from '@mui/icons-material/Notifications';
 import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
function Sidebar() {
  return (
    <div>
    <div className={classes.top}>
    <img src={logo} alt='logo'/>
    <p> <GridViewIcon/> Dashboard</p>
      <span> <PersonIcon/>Wow Users</span>
      <span> <VideocamRoundedIcon/>Video Clips</span>
      <span> <ReportProblemIcon/>Reported Content</span>
      <span><CategoryIcon/>Category</span>
      <span><InfoIcon/>Info Page</span>
      <span> <FactCheckIcon/>FAQ</span>
      <span><NotificationsIcon/>Push Notification</span>
      <span> <PersonAddAltRoundedIcon/>Internal User</span>
      <span><PersonAddAltRoundedIcon/>Explicit Content</span>
      <span><PersonAddAltRoundedIcon/>Feedback Messages</span>
      <span><PersonAddAltRoundedIcon/>KYC</span>
      <span><PersonAddAltRoundedIcon/>Coin Withdrawal Request</span>
      <span><PersonAddAltRoundedIcon/>Coin purchased</span>
      <span><PersonAddAltRoundedIcon/>Coin Transfer History</span>
      <span><PersonAddAltRoundedIcon/>Coin Earning History</span>
      <span><PersonAddAltRoundedIcon/>Free Coin Earning</span>
      <span><PersonAddAltRoundedIcon/>Users Deleted</span>
      <span><PersonAddAltRoundedIcon/>Users feedbacks</span>
 
      </div>
    </div>
  )
}

export default Sidebar
