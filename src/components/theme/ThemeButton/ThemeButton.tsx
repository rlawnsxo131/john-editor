import { useState } from 'react';

import darkModeIcon from '@/assets/dark_mode.svg';
import lightModeIcon from '@/assets/light_mode.svg';
import SVGIcon from '@/components/system/SVGIcon';
import type { Theme } from '@/domain';
import { THEME_VALUE } from '@/domain';
import { editorService, themeService } from '@/services';

import { button } from './ThemeButton.css';

export default function ThemeButton() {
  const [theme, setTheme] = useState<Theme>(themeService.get());

  const onToggleTheme = () => {
    setTheme((theme) => {
      const nextTheme = theme === 'dark' ? THEME_VALUE.light : THEME_VALUE.dark;
      themeService.set(nextTheme);
      if (editorService.isExistsEditor()) {
        editorService.setTheme(nextTheme);
      }
      return nextTheme;
    });
  };

  return (
    <button className={button} onClick={onToggleTheme}>
      <SVGIcon src={theme === 'dark' ? darkModeIcon : lightModeIcon} />
    </button>
  );
}
