import 'babel-polyfill'
import Enzyme, { shallow, render, mount } from 'enzyme'
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react';

Enzyme.configure({ adapter: new Adapter() })
global.window = window
global.document = document
global.shallow = shallow
global.render = render
global.mount = mount
global.sinon = sinon

global.userPermissions = []
global.Blob = function Blob (params) { return params }

if (process.env.NODE_ENV === 'test') {
    require('raf').polyfill(global) /* eslint global-require: 0 */
}
/* global jest */
window.matchMedia = jest.fn().mockImplementation(query => (
    {
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn()
    }
))

window.analytics = {
    identify: () => {},
    track: () => {}
}

export function mockUserPermissions (permissionsArr = []) {
    global.userPermissions = permissionsArr
}
global.mockUserPermissions = mockUserPermissions
