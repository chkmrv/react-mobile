import React from 'react'
import {shallow} from 'enzyme'
import Breadcrumb from './Breadcrumb'

describe('(components) Breadcrumb', () => {
  let _wrapper

  const render = () => {
    _wrapper = shallow(<Breadcrumb />)
  }

  beforeEach(() => {
    render()
  })

  describe('Tests breadcrumbs', () => {
    it('test for appear', () => {
      expect(_wrapper.find('.breadcrumbs').length).toEqual(1)
      expect(_wrapper.find('.arrow').length).toEqual(3)
    })
  })
})
