import { mount } from 'enzyme';
import * as themesConfig from '@config/theme';
import HeaderTemplate from '@shared/templates/header';
import ThemeProvider from '@mocks/theme';

describe('Testing Header Template', () => {
  const DummyComponent = () => <></>;
  const toggleThemeMock = () => null;
  const getWrapperMounted = (theme) =>
    mount(
      <ThemeProvider theme={theme}>
        <HeaderTemplate
          title="mock"
          theme={theme}
          toggleTheme={toggleThemeMock}
        >
          <DummyComponent />
        </HeaderTemplate>
      </ThemeProvider>
    );

  it('should render template with dark theme', () => {
    const wrapper = getWrapperMounted(themesConfig.themes.dark);
    expect(wrapper.isEmptyRender()).toBeFalsy();
  });

  it('should render template with light theme', () => {
    const wrapper = getWrapperMounted(themesConfig.themes.light);
    expect(wrapper.isEmptyRender()).toBeFalsy();
  });
});
