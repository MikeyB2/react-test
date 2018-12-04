import React from 'react';
import { shallow } from 'enzyme';

import Feedback from './feedback';


describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback />);
    });
});
it('Renders some feedback', () => {
    let TESTING_FEEDBACK = 'Is the feedback working?!';

    let wrapper = shallow(<Feedback feedback={TESTING_FEEDBACK} />);
    expect(wrapper.contains(TESTING_FEEDBACK)).toEqual(true);
});