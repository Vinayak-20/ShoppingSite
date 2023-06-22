import React from 'react'
import Navbar from '../features/navbar/Navbar'
import Productdetails from '../features/product/components/Productdetails'

function Productdetailpage() {
  return (
    <div>
        <Navbar>
            <Productdetails></Productdetails>
        </Navbar>
    </div>
  )
}

export default Productdetailpage