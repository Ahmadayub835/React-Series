import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams() //The params is the hook which is used to get the id that we used in our url.
  return (
    <div className='bg-gray-500 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User