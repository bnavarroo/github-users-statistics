import { mount } from 'enzyme';
import BasicTemplate from '@shared/templates/basic';
import ThemeProvider from '@mocks/theme';

describe('Testing Basic Template', () => {
  const DummyComponent = () => <></>;

  it('should render template', () => {
    const wrapper = mount(
      <ThemeProvider>
        <BasicTemplate>
          <DummyComponent />
        </BasicTemplate>
      </ThemeProvider>
    );
    expect(wrapper.isEmptyRender()).toBeFalsy();
  });
});
