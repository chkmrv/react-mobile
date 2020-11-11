import React from 'react'
import PropTypes from 'prop-types'
import './Features.scss'

const Features = (props) => (
  <div className='content-block features'>
    <h4 className='h4'>Ausstattung</h4>
    <div className='row'>
      <div className='col-12'>
        {props.data.features.map((item, index) => (
          <div className='col-6' key={`index${index.toString()}`}>{item}</div>
        ))}
      </div>
    </div>
  </div>
)

Features.propTypes = {
  data: PropTypes.object
}

export default Features
