import React from 'react'
import {shallow} from 'enzyme'
import mockContact from '../../../fixtures/car-page.json'
import Features from './Features'

describe('(components) Features', () => {
  let _wrapper

  const render = () => {
    _wrapper = shallow(<Features data={mockContact} />)
  }

  beforeEach(() => {
    render()
  })

  describe('Tests Features', () => {
    it('test for appear component', () => {
      expect(_wrapper.find('.features').length).toEqual(1)
      expect(_wrapper.find('h4').text()).toEqual('Ausstattung')
    })
  })
})
