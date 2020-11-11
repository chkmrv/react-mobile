/* React Helmet is a simple component that makes it easy to manage and dynamically set what’s in the document’s head section.
This makes server-side rendering and React Helmet a dynamic duo for creating apps that are SEO and social media-friendly.
Open graph meta tags allow you to control what content shows up when a page is shared on Facebook or other social site. */

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'
import Header from 'components/Header'
import TopMenu from 'components/TopMenu'
import Breadcrumb from 'components/Breadcrumb'
import Gallery from 'components/Gallery'
import Description from 'components/Description'
import Features from 'components/Features'
import DealerInfo from 'components/DealerInfo'
import TechnicalAttributes from 'components/TechnicalAttributes'
import './App.scss'

class AppView extends Component {
    static propTypes = {
      data: PropTypes.object
    }

    constructor () {
      super()
      this.state = {
        loading: true
      }
    }

    componentDidMount () {
      this._ismounted = true
      this.props.fetchData().then(() => {
        this._ismounted && this.setState({
          loading: false
        })
      })
    }

    componentWillUnmount () {
      this._ismounted = false
    }

    render () {
      const {data} = this.props
      return (
        <div className='App'>
          <Helmet>
            <title>{data.title}</title>
            <meta name='description' content={data.htmlDescription} />
            <meta name='og:description' content={data.htmlDescription} />
            <meta name='og:title' content={data.title} />
            <meta name='og:site' content='https://www.mobile.de/' />
            <meta name='og:site_name' content='mobile.de' />
            <meta name='og:image:url' content='http://i.ebayimg.com/00/s/MTE5MlgxNjAw/z/1S8AAOSwUYNZ5j3W/$_59.jpg' />
            <meta name='twitter:site' content='@mobile_de' />
            <meta name='fb:app_id' content='1678121273232' />
            <meta name='robots' content='index, follow' />
          </Helmet>
          <Header />
          <TopMenu />
          <div className='viewport'>
            <div className='layout'>
              <Breadcrumb />
              {!this.state.loading &&
                <main>
                  <div className='row'>
                    <div className='col-12 col-md-8'>
                      <Gallery data={data} />
                    </div>
                    <div className='col-12 col-md-4'>
                      <DealerInfo data={data} />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12 col-md-8'>
                      <TechnicalAttributes data={data} />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12 col-md-8'>
                      <Features data={data} />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12 col-md-8'>
                      <Description data={data} />
                    </div>
                  </div>
                </main>
              }
            </div>
          </div>
        </div>
      )
    }
}

export default AppView
