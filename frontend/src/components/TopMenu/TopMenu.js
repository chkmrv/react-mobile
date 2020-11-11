import React from 'react'
import './TopMenu.scss'

const TopMenu = () => (
  <main className='top-menu'>
    <div className='layout'>
      <ul className='top-navigation'>
        <li className='menu-item active'>
          <a href='#'>Ankündigung</a>
        </li>
        <li className='menu-item'>
          <a href='#'>Händler</a>
        </li>
        <li className='menu-item'>
          <a href='#'>Katalog</a>
        </li>
        <li className='menu-item'>
          <a href='#'>Bewertungen</a>
        </li>
        <li className='menu-item'>
          <a href='#'>Widerrufliche Kampagnen</a>
        </li>
      </ul>
    </div>
  </main>
)

export default TopMenu
