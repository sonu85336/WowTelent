 import React, { useState } from 'react'
import Sidebar from './Component/Sidebar'
import Statecomponent from './Component/StateComponent'
import DataPage from './Component/DataPage'
 
  
 
 function App() {
  const [sendingdata, setSendingData]=useState([])
  const  statadata = (data)=>{
 
     
    setSendingData(data)
  }
   return (
     <div   >
       <Sidebar/>
       <Statecomponent sendingdata={sendingdata}/>
       <DataPage  statadata= {statadata}/>
     </div>
   )
 }
 
 export default App
 