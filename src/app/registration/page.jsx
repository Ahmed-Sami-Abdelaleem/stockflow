import React from 'react'
import LoginForm from './_components/RegistrationForm'

const page = () => {
  return (
   <div className="bg-gradient-to-br from-pink-600 to-orange-500 relative overflow-hidden">
      <LoginForm />
      <div className="absolute bottom-[-10rem] right-[-10rem] w-[40rem] h-[40rem] bg-gradient-radial from-yellow-500 via-transparent to-transparent opacity-50 rounded-full"></div>
    </div>
  )
}

export default page