import React from 'react'
import {mount} from 'enzyme'
import {FaPhone, FaMailBulk} from 'react-icons/fa'
import mockContact from '../../../fixtures/car-page.json'
import DealerInfo from './DealerInfo'

describe('(components) DealerInfo', () => {
  let _wrapper

  const render = () => {
    _wrapper = mount(<DealerInfo data={mockContact} />)
  }

  beforeEach(() => {
    render()
  })

  describe('Tests DealerInfo', () => {
    it('components rendering informations', () => {
      expect(_wrapper.find('.dealer-info').length).toEqual(2)
      expect(_wrapper.find('.phone').length).toEqual(1)
      expect(_wrapper.find('.phone').text()).toEqual('Tel.: +4930123456789200')
      expect(_wrapper.contains(<FaPhone />)).toBe(true)
      expect(_wrapper.contains(<FaMailBulk />)).toBe(true)
    })
  })
})
