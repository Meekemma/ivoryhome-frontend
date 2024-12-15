import React from 'react'
import OrderList from '../components/properties/OrderList'
import HomeFooter from '../components/general/HomeFooter'
import PropertyNavbar from '../components/properties/PropertyNavbar'
import { SearchProvider } from '../context/SearchContext'
const Order = () => {
  return (
    <>
      <SearchProvider>
        <PropertyNavbar />
        <OrderList />
        <HomeFooter />
      </SearchProvider>
    
    </>
  )
}

export default Order