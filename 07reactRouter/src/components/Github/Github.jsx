import React, { useEffect, useState } from 'react'

function Github() {
  const [data, setdata] = useState([])
useEffect(() =>{
  fetch(`https://api.github.com/users/Ahmadayub835`)
  .then((response) => response.json())
  .then((data) => setdata(data))
  console.log(data)
} ,
 [])
  return (
    <div className='bg-gray-500 text-white p-4 text-center'>Github Name: {data.name} & Location: {data.location}
    <img src= {data.avatar_url} alt="Github Image" width={300} />
    </div>
  )
};

export default Github