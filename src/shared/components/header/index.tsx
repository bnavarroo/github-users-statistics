import Switch from 'react-switch';
import { themes } from '@config/theme/index';
import IThemeProps from '@core/interfaces/theme';
import Search from '@shared/components/search';
import Logo from './components/logo';
import {
  switchOffColor,
  switchBoxShadow,
  switchActiveBoxShadow,
  HeaderContainer,
  HeaderWrapper,
  SearchColumn,
  LogoColumn,
  ThemeSwitchColumn,
  ThemeSwitchLabel,
} from './styles';

const Header: React.FC<IThemeProps> = ({ theme, toggleTheme }) => {
  const { name: themeName, colors: themeColors } = theme;
  const themeLabel =
    themeName === themes.default.name ? 'Ativado' : 'Desativado';
  const themeText = themes.default.textName;

  return (
    <HeaderContainer as="header">
      <HeaderWrapper>
        <SearchColumn>
          <Search />
        </SearchColumn>
        <LogoColumn>
          <Logo />
        </LogoColumn>
        <ThemeSwitchColumn>
          <Switch
            onChange={toggleTheme}
            checked={themeName === themes.default.name}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offColor={switchOffColor}
            onColor={themeColors.tertiary}
            boxShadow={switchBoxShadow}
            activeBoxShadow={switchActiveBoxShadow}
          />
          <ThemeSwitchLabel>
            Modo {themeText} <b>{themeLabel}</b>
          </ThemeSwitchLabel>
        </ThemeSwitchColumn>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
