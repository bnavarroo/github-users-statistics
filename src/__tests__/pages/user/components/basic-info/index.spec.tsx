import { shallow } from 'enzyme';
import BasicInfo from '@pages/user/[username]/components/basic-info';

describe('Testing BasicInfo Component', () => {
  it('should render component', () => {
    const wrapper = shallow(
      <BasicInfo name="mock" login="mock" imageSrc="mock" />
    );
    expect(wrapper.isEmptyRender()).toBeFalsy();
  });
});
