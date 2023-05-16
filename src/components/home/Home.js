import React from 'react'
import PricingCard from './PricingCard'
import Subscription from './Subscription'

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
      <PricingCard />
      <div className='m-3'>
      <Subscription />
      </div>
    </div>
  )
}

export default Home