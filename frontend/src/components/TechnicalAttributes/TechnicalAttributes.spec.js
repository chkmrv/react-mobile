import React from 'react'
import {shallow} from 'enzyme'
import mockContact from '../../../fixtures/car-page.json'
import TechnicalAttributes from './TechnicalAttributes'

describe('(components) TechnicalAttributes', () => {
  let _wrapper

  const render = () => {
    _wrapper = shallow(<TechnicalAttributes data={mockContact} />)
  }

  beforeEach(() => {
    render()
  })

  describe('Tests TechnicalAttributes', () => {
    it('test for appear component', () => {
      expect(_wrapper.find('.technical-attributes').length).toEqual(1)
      expect(_wrapper.find('h4').text()).toEqual('Technische Daten')
    })
  })
})
