import { shallow } from 'enzyme';
import Bio from '@pages/user/[username]/components/bio';

describe('Testing Bio Component', () => {
  it('should render component with company, blog, location and bio', () => {
    const wrapper = shallow(
      <Bio
        company="mock"
        blog="mock"
        location="mock"
        bio="mock"
        followers={1}
        following={1}
      />
    );
    expect(wrapper.isEmptyRender()).toBeFalsy();
  });

  it('should render component without company, blog and location', () => {
    const wrapper = shallow(<Bio followers={1} following={1} />);
    expect(wrapper.isEmptyRender()).toBeFalsy();
  });
});
