import { shallow } from 'enzyme';
import Home from '@pages/home';

describe('Testing Home Page', () => {
  it('should render page ', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.isEmptyRender()).toBeFalsy();
  });
});
