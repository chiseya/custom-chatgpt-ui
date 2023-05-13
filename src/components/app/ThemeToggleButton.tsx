import { useLocalStorage } from 'usehooks-ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { ChangeEvent, useEffect } from 'react';
import { theme as themeDef } from '@/lib/daisyui';

export const ThemeToggleButton = () => {
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'dark');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    if (checked) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  //modify data-theme attribute on document.body when theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeDef[theme]);
  }, [theme]);

  return (
    <label className="swap swap-rotate opacity-80">
      <input
        type="checkbox"
        onChange={handleChange}
        defaultChecked={theme === 'light'}
      />
      <FontAwesomeIcon icon={faSun} className="swap-on fill-current w-4 h-4" />
      <FontAwesomeIcon
        icon={faMoon}
        className="swap-off fill-current w-4 h-4"
      />
    </label>
  );
};
