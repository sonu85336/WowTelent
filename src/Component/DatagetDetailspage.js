import axios from 'axios'
import React, { useEffect,useState } from 'react'

function DatagetDetailspage() {
const [data,setData] = useState([])
  
    useEffect( ()=>
    {
           axios.get('https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=2022-04-01&todate=2022-08-24&page=1&limit=10')
.then((res)=>{
    setData(res.data.data.data)
     console.log(res.data.data.data)
}
)
       
    },[])


  return (
  
    <div>
    HEllo 
    </div>
  )
}

export default DatagetDetailspage
