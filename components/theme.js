const setColorsByTheme = () => {
    const colorModeKey = 'theme';
  
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersDarkFromMQ = mql.matches;
    const persistedPreference = localStorage.getItem(colorModeKey);
  
    let colorMode = '';

     const hasUsedToggle = typeof persistedPreference === 'string';
  
    if (hasUsedToggle) {
      colorMode = JSON.parse(persistedPreference);
    } else {
      // enabling christmas theme by default ;)
      colorMode = prefersDarkFromMQ ? 'theme-christmas' : 'theme-christmas';
      localStorage.setItem(colorModeKey, JSON.stringify(colorMode));
    }
    let root = document.body;
    root.classList.add(colorMode);
  };

  let calledFunction = `(${setColorsByTheme})()`;

  export default calledFunction;