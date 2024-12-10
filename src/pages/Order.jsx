import React from 'react'
import OrderList from '../components/properties/OrderList'
import HomeFooter from '../components/general/HomeFooter'
import PropertyNavbar from '../components/properties/PropertyNavbar'

const Order = () => {
  return (
    <>
        <PropertyNavbar />
        <OrderList />
        <HomeFooter />
    
    </>
  )
}

export default Order