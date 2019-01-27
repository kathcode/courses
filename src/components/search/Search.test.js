import React from 'react';
import { shallow } from 'enzyme';

import Search from './Search';

describe('SearchTest', () => {
  const setUp = ({ props, options } = { props: {}, options: {} }) => {
    const mergeProps = {
      options,
      props,
    }
    const wrapper = shallow(<Search {...mergeProps} />);

    return {
      wrapper,
      mergeProps,
    }
  }

  it('should render correctly', () => {
    const { wrapper } = setUp();

    expect(wrapper).toBeDefined()
  });

  it('should render one input', () => {
    const { wrapper } = setUp();

    expect(wrapper.find('input'))
  });
});

