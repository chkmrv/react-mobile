import React from 'react'
import {FaAngleDoubleRight} from 'react-icons/fa'
import './Breadcrumb.scss'

const Breadcrumb = () => (
  <div className='row'>
    <div className='col-12'>
      <ol className='breadcrumbs'>
        <li><a className='link' title='Suchen' href='https://suchen.mobile.de/'>Suchen</a></li>
        <FaAngleDoubleRight className='arrow' />
        <li><a className='link' href='https://suchen.mobile.de/auto/ferrari.html'>Ferrari</a></li>
        <FaAngleDoubleRight className='arrow' />
        <li>
          <a className='link' href='https://suchen.mobile.de/auto/ferrari-enzo-ferrari.html'>
            Enzo Ferrari
          </a>
        </li>
        <FaAngleDoubleRight className='arrow' />
        <li>Detailansicht (237089773)</li>
      </ol>
    </div>
  </div>
)

export default Breadcrumb
