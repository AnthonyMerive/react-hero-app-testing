import React from 'react'
import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import { PrivateRoute } from '../../routers/PrivateRoute'


describe('Pruebas componente <PrivateRouter>', () => {
    test('should ', () => {

        const wrapper = mount(
            <PrivateRoute/>
        )
        console.log(wrapper.html())
    })
     
})