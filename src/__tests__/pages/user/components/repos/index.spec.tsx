import { shallow } from 'enzyme';
import Repos from '@pages/user/[username]/components/repos';

describe('Testing Repos Component', () => {
  it('should render component with repos', () => {
    const reposMock = [{ name: 'mock', url: 'mock', html_url: 'mock' }];
    const wrapper = shallow(<Repos repos={reposMock} />);
    expect(wrapper.isEmptyRender()).toBeFalsy();
  });

  it('should render component without repos', () => {
    const wrapper = shallow(<Repos repos={[]} />);
    expect(wrapper.isEmptyRender()).toBeFalsy();
  });
});
