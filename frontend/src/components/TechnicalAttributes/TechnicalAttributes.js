import React from 'react'
import PropTypes from 'prop-types'
import './TechnicalAttributes.scss'

const TechnicalAttributes = (props) => (
  <div className='content-block technical-attributes'>
    <h4 className='h4'>Technische Daten</h4>
    {props.data.attributes.map((item, index) => (
      <div className='row' key={`index${index.toString()}`}>
        <div className='col-6'>
          <strong>{item.label}</strong>
        </div>
        <div className='col-6'>
          <span>{item.value}</span>
        </div>
      </div>
    ))}
  </div>
)

TechnicalAttributes.propTypes = {
  data: PropTypes.object
}

export default TechnicalAttributes
