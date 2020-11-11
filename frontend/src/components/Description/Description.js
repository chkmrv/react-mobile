import React from 'react'

import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
import './Description.scss'

const Description = (props) => {
  const {description} = props.data
  const source = description.split('\*')
  return (
    <div className='content-block description'>
      <h4 className='h4'>Fahrzeugbeschreibung</h4>
      <div className='row'>
        <div className='col-12'>
          {source && source.map((item) => ReactHtmlParser(item.replace('\\', '<br/>')))}
        </div>
      </div>
    </div>
  )
}

Description.propTypes = {
  data: PropTypes.object
}

export default Description
