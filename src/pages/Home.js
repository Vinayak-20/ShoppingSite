import React from 'react'
import Navbar from '../features/navbar/Navbar'
import Productlist from '../features/product/components/Productlist'

function Home() {
  return (
    <div>
        <Navbar>
            <Productlist/>
        </Navbar>
    </div>
  )
}

export default Home