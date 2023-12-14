import React, { useEffect, useState } from 'react'
import './genpro.css'

const GenproUi = () => {
    const data = [
        {
          name: "Rebecca Fox",
          mail: "@rebecca",
          role: "CEO",
        },
        {
          name: "Marie Goodwin",
          mail: "@marie",
          role: "Accountant",
        },
        {
          name: "Benjamin Hunter",
          mail: "@benjamin",
          role: "Research Analyst",
        },
        { name: "Stanis Ryle", mail: "@stanis", role: "HR Manager" },
        { name: "Taylor Hardy", mail: "@taylor", role: "Marketing Manager" },
        { name: "Edward Crawford", mail: "@edward", role: "Business Consultant" },
      ];
    const [userData , setUserData] = useState(data)
    const [search , setSearch] = useState("")
    
    useEffect(() => {
        let timeOut
        if(timeOut){
            clearInterval(timeOut)
        }
        timeOut = setTimeout(() => {
            if(search.length > 0){
                const updateddata = data.filter(data => data.name.toLowerCase().includes(search.toLowerCase()))
                setUserData(updateddata)
            }
            else{
                setUserData(data)
            }
        } , 5000)
    } , [search])
  return (
    <div className='genpro'>
        <div className='header'>
            <h1>User management</h1>
            <input type="text" 
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
        <div className='users'>
            {
                userData.map((user , index) => (
                    <div className='card' key={index}>
                        <div className='img'></div>
                        <div className='info'>
                            <h4>{user.name}</h4>
                            <p>{user.mail}</p>
                            <h4>{user.role}</h4>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default GenproUi