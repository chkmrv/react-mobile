import React from 'react'
import {shallow} from 'enzyme'
import ImageGallery from 'react-image-gallery'
import mockContact from '../../../fixtures/car-page.json'
import Gallery from './Gallery'

describe('(Component) Gallery', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Gallery data={mockContact} />)
  })

  describe('Tests Gallery ', () => {
    it('components rendering', () => {
      expect(_wrapper.find('.gallery').length).toEqual(1)
    })

    it('check for title', () => {
      expect(_wrapper.find('h1').length).toEqual(1)
      expect(_wrapper.find('h1').text()).toEqual('Ferrari 246 dino GT 1973')
    })

    it('check for proper price', () => {
      expect(_wrapper.find('.prime-price').length).toEqual(1)
      expect(_wrapper.find('.prime-price').text()).toEqual('566 €')
    })

    it('if gallery is rendered', () => {
      expect(_wrapper.find(ImageGallery).length).toEqual(1)
    })
  })
})
