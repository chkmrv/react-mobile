import React from 'react'
import './Header.scss'
import classnames from 'classnames'

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      active: false
    }
  }

  toggleDropdown () {
    this.setState((prevState) => ({active: !prevState.active}))
  }

  render () {
    return (
      <div className='header sticky-top'>
        <div className='layout'>
          <header className='navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar'>
            <a className='navbar-brand mr-0 mr-md-2' href='/'>
              <span className='logo'>Mobile.de</span>
            </a>
            <div className='navbar-nav-scroll d-none d-md-flex'>
              <ul className='navbar-nav bd-navbar-nav flex-row'>
                <li className='nav-item'>
                  <a className='nav-link' href='/'>Suchen</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/'>Informieren</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/'>Denkst Du?</a>
                </li>
              </ul>
            </div>

            <ul className='navbar-nav flex-row ml-md-auto d-none d-md-flex'>
              <li className='nav-item dropdown' onClick={() => this.toggleDropdown()}>
                <span className='nav-link dropdown-toggle mr-md-2'>
                  Verkaufen
                </span>
                <div
                  className={classnames('dropdown-menu dropdown-menu-right', {show: this.state.active})}
                  aria-labelledby='bd-versions'
                >
                  <a className='dropdown-item' href='#'>Autos</a>
                  <a className='dropdown-item active' href='#'>Motorrader</a>
                  <div className='dropdown-divider' />
                  <a className='dropdown-item' href='#'>Wohnwagen & -mobile</a>
                  <a className='dropdown-item' href='#'>Lkw & Nutzfahrzeuge</a>
                  <a className='dropdown-item' href='#'>Autobewertung</a>
                </div>
              </li>
            </ul>

            <a className='btn register mb-3 mb-md-0 ml-md-3 d-none d-md-flex' href='#'>Anmeldung</a>
          </header>
        </div>
      </div>
    )
  }
}

export default Header
