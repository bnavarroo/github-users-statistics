import { shallow } from 'enzyme';
import UserErrorMessage from '@pages/user/[username]/components/error';

describe('Testing UserErrorMessage Component', () => {
  it('should render component', () => {
    const wrapper = shallow(
      <UserErrorMessage text="mock" description="mock" />
    );
    expect(wrapper.isEmptyRender()).toBeFalsy();
  });
});
