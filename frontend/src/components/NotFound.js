import React from 'react'
import Header from 'components/Header'

const NotFound = () => (
  <div className='App'>
    <Header />
    <div className='row'>
      <div className='col-12'>
        <p>Resource not found on the server</p>
        <h4><a href='/page/id=237089773'>check this amazing car better</a></h4>
      </div>
    </div>
  </div>
)

export default NotFound
