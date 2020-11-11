import React from 'react'
import PropTypes from 'prop-types'
import ImageGallery from 'react-image-gallery'
import './Gallery.scss'

class Gallery extends React.Component {
    static propTypes = {
      data: PropTypes.object
    }

    static defaultProps = {}

    constructor (props) {
      super(props)

      this.state = {
        mileage: null,
        firstRegistration: null
      }
    }

    componentDidMount () {
      this.getShortInfo()
    }

    getStaticImages () {
      const {images} = this.props.data

      const newImagesList = images?.map((item, index) => (
        {
          key: `index${index.toString()}`,
          fullscreen: `http://${item.uri}_57.jpg`,
          original: `http://${item.uri}_27.jpg`,
          thumbnail: `http://${item.uri}_2.jpg`
        }
      ))

      return newImagesList || []
    }

    getShortInfo () {
      const {attributes} = this.props.data
      let mileage = 0
      let firstRegistration = 0

      attributes.forEach((item) => {
        if (item.tag === 'mileage') mileage = item.value
        if (item.tag === 'firstRegistration') firstRegistration = item.value
      })

      this.setState({mileage, firstRegistration})
    }

    _onImageClick () {
      this._imageGallery.fullScreen()
    }

    render () {
      return (
        <div className='content-block gallery'>
          <div className='row title'>
            <div className='col-9'>
              <h1 className='h1'>{this.props.data.title}</h1>
            </div>
            <div className='col-3 text-left'>
              <span className='h3 prime-price'>{this.props.data.price?.gross}</span>
            </div>
            {this.state.mileage &&
              <div className='col-4 short-info'>
                Kilometerstand: {this.state.mileage}
              </div>
            }
            {this.state.firstRegistration &&
              <div className='col-4 short-info'>
                Erstzulassung:  {this.state.firstRegistration}
              </div>
            }
          </div>

          <ImageGallery
            ref={(i) => this._imageGallery = i}
            onClick={this._onImageClick.bind(this)}
            items={this.getStaticImages()}
            slideInterval={0}
            slideDuration={0}
            thumbnailPosition='right'
            additionalClass='app-image-gallery'
            lazyLoad
            infinite={false}
            showBullets={false}
            showPlayButton={false}
            slideOnThumbnailOver
          />
        </div>
      )
    }
}

export default Gallery
