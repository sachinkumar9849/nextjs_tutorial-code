import { API_BASE_URL } from '@/config/constants'
import React from 'react'


const User = () => {
  console.log(process.env.SERVER_PASSWORD)
  return (
    <div>User <br /> {API_BASE_URL} </div>
  )
}

export default User