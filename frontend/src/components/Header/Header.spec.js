import React from 'react'
import {shallow} from 'enzyme'
import Header from './Header'

describe('(components) Header', () => {
  let _wrapper

  const render = () => {
    _wrapper = shallow(<Header />)
  }

  beforeEach(() => {
    render()
  })

  describe('Tests Header', () => {
    it('render header elements', () => {
      expect(_wrapper.find('.header').length).toEqual(1)
      expect(_wrapper.find('.nav-item').length).toEqual(4)
      expect(_wrapper.find('.register').length).toEqual(1)
    })

    it('sticky header', () => {
      expect(_wrapper.find('.header').hasClass('sticky-top')).toEqual(true)
    })
  })
})
