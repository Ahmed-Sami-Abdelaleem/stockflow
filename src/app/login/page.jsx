import React from 'react'
import LoginForm from './_components/LoginForm'

const page = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-600 to-blue-500 relative overflow-hidden">
    <LoginForm />
    <div className="absolute top-[-10rem] left-[-10rem] w-[40rem] h-[40rem] bg-gradient-radial from-purple-500 via-transparent to-transparent opacity-50 rounded-full"></div>
  </div>
  )
}

export default page