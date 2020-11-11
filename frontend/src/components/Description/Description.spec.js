import React from 'react'
import {shallow} from 'enzyme'
import mockContact from '../../../fixtures/car-page.json'
import Description from './Description'

describe('(components) Description', () => {
  let _wrapper

  const render = () => {
    _wrapper = shallow(<Description data={mockContact} />)
  }

  beforeEach(() => {
    render()
  })

  describe('Tests description', () => {
    it('test for appear component', () => {
      expect(_wrapper.find('.description').length).toEqual(1)
      expect(_wrapper.find('h4').text()).toEqual('Fahrzeugbeschreibung')
    })
  })
})
