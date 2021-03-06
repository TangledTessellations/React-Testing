import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import calculate from '../logic/calculate.js'

import App from '../App';

jest.mock('../logic/calculate.js')

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  let wrapper;
  let instance;
  
  beforeEach(() => {
    wrapper = shallow(<App />)
    instance = wrapper.instance()
  })

  it('Renders in the app without crashing', () => {
    wrapper 
  })

  describe('<Display />', () => {

    it('Includes 1 Display component', () => {
      expect(wrapper.find('Display').length).toEqual(1)
    })
    it('should start at initial state 0', () => {
      expect(instance.state.total).toEqual('0')
    })
    it('should pass a value in to Display props', () => {
      const display = wrapper.find('Display')
      expect(display.props().value).toBeTruthy()
    })
  })

  describe('<Panel />', () => {

    it('Includes 1 panel component', () => {
      expect(wrapper.find('Panel').length).toEqual(1)
    })
  })



  describe('handleclick()', () => {
    it('should call "calculate" exactly one time', () => {
        const root = shallow(<App />)
        const instance = root.instance()
        const buttonName = 'logan'

        instance.handleClick(buttonName)

        expect(calculate).toHaveBeenCalledTimes(1)
    })

    it('should call "calculate" passing the state and buttonName', () => {
      const root = shallow(<App />)
      const instance = root.instance()
      const buttonName = 'logan'
      const stateObject = {total:'3', next: null, operation: null}

      root.setState(stateObject)
      instance.handleClick(buttonName)

      expect(calculate).toHaveBeenCalledWith(stateObject, buttonName)
    })
  })

});




{/*

// it('renders without crashing', () => {
//   shallow(<App/>);
// })

// it('should display "Welcome to React" if no title is provided', () => {
//   const app = shallow((<App />))

//   const paragraph = app.find('.App-intro')
  
//   expect(paragraph.text()).toEqual('Welcome to React')
// })

// it('Should display a title if passed as props', () => {
//   const app = shallow(<App title="a title" />)
  
//   const paragraph = app.find('.App-intro')

//   expect(paragraph.text()).toEqual('a title')
// })

// it('should be off by default', () => {
//   const app = shallow(<App />)
//   const instance = app.instance()
  
//   expect(instance.state.isOn).toEqual(false)
// })

// it('should have a button to toggle the on/off switch', () => {
//   const app = shallow(<App />)
//   const instance = app.instance()
  
//   // grab reference to button
//   const button = app.find('.toggle-btn')
//   // it's off
//   expect(instance.state.isOn).toEqual(false)
//   // we toggle it by clicking the button
//   button.simulate('click')
//   // it's on
//   expect(instance.state.isOn).toEqual(true)
//   // toggle one more time
//   button.simulate('click')
//   // it's off
//   expect(instance.state.isOn).toEqual(false)
// })

// it('should display the state of the switch', () => {
//   const app = shallow(<App />)
//   const instance = app.instance()
  
//   const button = app.find('.toggle-btn')
//   // const display = app.find('.display')

//   button.simulate('click')
//   expect(instance.state.isOn).toEqual(true)
//   expect(app.find('.display').render().text()).toEqual('on')

// })   */}