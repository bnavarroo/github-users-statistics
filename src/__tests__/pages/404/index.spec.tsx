import { shallow } from 'enzyme';
import Custom404 from '@pages/404';

describe('Testing 404 Page', () => {
  it('should render page ', () => {
    const wrapper = shallow(<Custom404 />);
    expect(wrapper.isEmptyRender()).toBeFalsy();
  });
});
