import { COLORS } from '../styles/colors';

const setColorsByTheme = () => {
    const colors = '🌈';
    const colorModeKey = 'theme';
    const colorModeCssProp = '--initial-color-mode';
  
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersDarkFromMQ = mql.matches;
    const persistedPreference = localStorage.getItem(colorModeKey);
  
    let colorMode = 'theme-midnightgreen';
  
    const hasUsedToggle = typeof persistedPreference === 'string';
  
    if (hasUsedToggle) {
      colorMode = JSON.parse(persistedPreference);
    } else {
      colorMode = prefersDarkFromMQ ? 'theme-twitter' : 'theme-midnightgreen';
    }
  
    let root = document.documentElement;
  
    root.style.setProperty(colorModeCssProp, colorMode);
  
    Object.entries(colors).forEach(([name, colorByTheme]) => {
      const cssVarName = `--color-${name}`;
  
      root.style.setProperty(cssVarName, colorByTheme[colorMode]);
    });
  };

  const boundFn = String(setColorsByTheme).replace("'🌈'", JSON.stringify(COLORS))

  let calledFunction = `(${boundFn})()`;

  export default calledFunction;