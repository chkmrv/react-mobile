import React from 'react'
import PropTypes from 'prop-types'
import {FaPhone, FaMailBulk} from 'react-icons/fa'
import './DealerInfo.scss'

const DealerInfo = (props) => {
  const {contact} = props.data
  return (
    <>
      <div className='content-block dealer-info'>
        <div>
          <h4 className='h4'>{contact.name}</h4>
          <p className='address'>{contact.address1}<br />{contact.address2}</p>
          {contact?.phones.length > 0 &&
             contact?.phones.map((item, index) => (
               <p key={`index${index.toString()}`}>
                 <span className='phone'>Tel.: {item.number}</span>
               </p>
             ))
          }
        </div>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <span className='btn btn--orange'>
              <FaPhone />&#8194;Rückruf
            </span>
          </div>
          <div className='col-12 col-md-6'>
            <span className='btn btn--orange'>
              <FaMailBulk />&#8194;E-Mail
            </span>
          </div>
        </div>
      </div>
      <div className='content-block dealer-info'>
        <div className='ps-teaser-sidebar-box-fancy__bgimage'>
          <h4 className='h4'>Anzahlung für ein neues Auto?</h4>
          <p className='address'>
            Hol Dir ein unverbindliches Angebot an einer
            Ankaufstation in Deiner Nähe!
          </p>
          <img
            alt='img-ad'
            className='img-responsive'
            src='//static.classistatic.de/pubse/static/ratgeber.88ef46adb9c706c289099fa32e042d14.jpg'
          />
          <div className='row'>
            <div className='col-11 col-md-11'>
              <span className='btn btn--orange'>
                Jetzt kostenlos bewerten
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

DealerInfo.propTypes = {
  data: PropTypes.object
}

export default DealerInfo
