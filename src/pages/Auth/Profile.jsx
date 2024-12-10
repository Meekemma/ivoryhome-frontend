import React from 'react'
import UserProfile from '../../components/UserProfile'
import Navbar from '../../components/general/Navbar'
import GeneralButton from '../../components/general/GeneralButton'
import HomeFooter from '../../components/general/HomeFooter'

const Profile = () => {
  return (
    <>
        <Navbar />
        <UserProfile/>
        <GeneralButton />
        <HomeFooter />


    </>
  )
}

export default Profile